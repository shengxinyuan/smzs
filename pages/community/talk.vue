<template>
	<view>
		<view class="swiper-box">
			<u-swiper :list="list" mode="rect" height="400" name="img" :title="true"></u-swiper>
		</view>
		<view class="yltk-bars-list">
			<block v-for="(barsItem,barsIndex) in barsList" :key="barsIndex">
				<view class="yltk-bars-box" :style="{'background-image':barsItem.backgroundImage}">
					<text>{{barsItem.title}}</text>
				</view>
			</block>
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
							<view>
								<text>{{detailsItem.number}}人看过</text>
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
	export default {
		data() {
			return {
				list: [{
						img: '../../static/community/shipin_01.png',
						title: '拓客文章标题拓客文章标题拓客文章标题'
					},
					{
						img: '../../static/community/shipin_02.png',
						title: '拓客文章标题拓客文章标题拓客文章标题'
					},
					{
						img: '../../static/community/shipin_01.png',
						title: '拓客文章标题拓客文章标题拓客文章标题'
					}
				],
				barsList:[
					{
						backgroundImage:'linear-gradient(90deg, #f8e1b5 0%, #ffffff 100%)',
						title:'热门'
					},
					{
						backgroundImage:'',
						title:'技巧'
					},
					{
						backgroundImage:'',
						title:'服务'
					},
					{
						backgroundImage:'',
						title:'话术'
					}
				],
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
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.swiper-box{
		padding: 20upx;
	}
	.yltk-bars-list{
		padding: 20upx;
		font-size: 28upx;
		display: flex;
		.yltk-bars-box{
			width: 25%;
			height: 50upx;
			line-height: 50upx;
			padding-left: 30upx;
		}
	}
	.yltk-details-list{
		padding: 20upx;
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
					justify-content: space-between;
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
