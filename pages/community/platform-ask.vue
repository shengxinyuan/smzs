<template>
	<view>
		<view class="tabs-box">
			<zl-tab :modelData="modelData" :initIndex="initIndex" @change="tabsChange" />
			<view class="icon-box">
				<u-icon class="icon xiangzuo" name="arrow-left" @click="skipBack"></u-icon>
			</view>
		</view>
		<view class="yltk-details-list">
			<block v-for="(detailsItem,detailsIndex) in detailsList" :key="detailsIndex">
				<view class="yltk-details-box">
					<view class="details-box-left">
						<view class="details-text">
							<text class="u-line-2">{{detailsItem.text}}</text>
						</view>
						<view class="bottom-show">
							<view>
								<text>{{detailsItem.time}}</text>
							</view>
						</view>
					</view>
					<view class="details-box-right">
						<image :src="detailsItem.url" mode="widthFix"></image>
					</view>
				</view>
			</block>
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
				detailsList:[
					{
						text:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
						time:'2020-9-28 13:28:23',
						number:'900',
						url:'../../static/community/list_01.png'
					},
					{
						text:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
						time:'2020-9-28 13:28:23',
						number:'900',
						url:'../../static/community/list_02.png'
					},
					{
						text:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
						time:'2020-9-28 13:28:23',
						number:'900',
						url:'../../static/community/list_03.png'
					},
					{
						text:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
						time:'2020-9-28 13:28:23',
						number:'900',
						url:'../../static/community/list_04.png'
					},
					{
						text:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
						time:'2020-9-28 13:28:23',
						number:'900',
						url:'../../static/community/list_04.png'
					},
					{
						text:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
						time:'2020-9-28 13:28:23',
						number:'900',
						url:'../../static/community/list_04.png'
					},
					{
						text:'文章标题文章标题文章标题文章标题文章标题文章标题文章标题文章标题',
						time:'2020-9-28 13:28:23',
						number:'900',
						url:'../../static/community/list_04.png'
					}
				]
			}
		},
		methods: {
			tabsChange(index) {
				if (index !== 0) {
					this.isShow01 = false
				} else {
					this.isShow01 = true
				};
				if (index !== 1) {
					this.isShow02 = false
				} else {
					this.isShow02 = true
				}
			},
			skipBack(){
				uni.navigateBack({
					
				})
			}
		}
	}
</script>

<style lang="scss">
	.tabs-box{
		width: 100%;
		height: 100upx;
		margin-top: 30upx;
		padding: 0 25%;
		display: flex;
		align-items: center;
		position: relative;
		border-bottom: solid 2upx #f2f2f2;
		.icon-box{
			height: 100upx;
			line-height: 100upx;
			display: flex;
			position: absolute;
			left: 20upx;
			top: 0;
			.icon{
				font-size: 40upx;
				color: #666666;
			}
		}
	}
	.yltk-details-list{
		padding: 30upx 20upx;
		.yltk-details-box{
			display: flex;
			margin-bottom: 50upx;
			.details-box-left{
				width: 74%;
				padding-right: 20upx;
				.details-text{
					font-size: 26upx;
				}
				.bottom-show{
					display: flex;
					align-items: flex-end;
					font-size: 24upx;
					color: #999999;
					margin-top: 80upx;
				}
			}
			.details-box-right{
				width: 26%;
				display: flex;
				image{
					width: 100%;
					border-radius: 6upx;
				}
			}
		}
	}
</style>
