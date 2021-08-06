<template>
	<view>
		<view class="header" :style="{ height: height + 'px'}">
			<view class="zl_sty">
				<zl-tab :modelData="modelData" :initIndex="initIndex" @change="tabsChange" />
			</view>
		</view>
		<view class="yltk-details-list" v-if="page_show">
			<view v-if="detailsList != ''">
				<block v-for="(detailsItem,detailsIndex) in detailsList" :key="detailsIndex">
					<view class="yltk-details-box" @click="go_detail(detailsItem.id)">
						<view class="details-box-left">
							<view class="details-text">
								<text class="u-line-2">{{detailsItem.title}}</text>
							</view>
							<view class="bottom-show">
								<view>
									<text>{{detailsItem.update_time}}</text>
								</view>
							</view>
						</view>
						<view class="details-box-right">
							<image :src="detailsItem.image" mode="aspectFill"></image>
						</view>
					</view>
				</block>
			</view>
			<view v-else style="padding-top: 240rpx;">
				<u-empty text="暂无内容" mode="news"></u-empty>
			</view>
		</view>
		<view v-else>
			<zs-login></zs-login>
		</view>
	</view>
</template>

<script>
	import zlTab from "@/components/stzhang-tab/zl-tab.vue"
	export default {
		components: {
			zlTab
		},
		data() {
			return {
				height: '45',
				modelData: [{
						label: '行业新闻'
					},
					{
						label: '功能更新'
					}
				],
				initIndex: 0,
				isShow01: true,
				isShow02: false,
				detailsList: [],
				page_show: false,
				type: 0
			}
		},
		onLoad() {
			this.tabsChange(0)
		},
		methods: {
			tabsChange(index) {
				this.page_show = false
				console.log(index)
				this.type = index
				this.$api.get("news", {
					label: index
				}).then(res => {
					console.log(res)
					if (res.status == 1) {
						this.page_show = true
						this.detailsList = res.data.news
					}
				})
			},
			//详情
			go_detail(e) {
				this.com.navto('../my/talk_detail?id=' + e + '&type=' + this.navbarind)
			},
		}
	}
</script>

<style>
	page {
		background-color: #f6f6f6;
	}
</style>
<style lang="scss">
	.header{
		display: flex;align-items: center;justify-content: center;
	}
	
	.zl_sty {
		width: 60%;
	}

	.yltk-details-list {
		padding: 0upx 30upx;

		.yltk-details-box {
			background-color: #FFFFFF;
			border-radius: 10upx;
			display: flex;
			padding: 20rpx;
			margin-bottom: 20upx;

			.details-box-left {
				width: 74%;
				padding-right: 20upx;

				.details-text {
					font-size: 26upx;
				}

				.bottom-show {
					display: flex;
					align-items: flex-end;
					font-size: 24upx;
					color: #999999;
					margin-top: 80upx;
				}
			}

			.details-box-right {
				width: 26%;
				display: flex;

				image {
					width: 100%;
					height: 180rpx;
					border-radius: 6upx;
				}
			}
		}
	}
</style>
