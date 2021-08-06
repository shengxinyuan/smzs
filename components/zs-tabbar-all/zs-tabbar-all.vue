<template>
	<view class="uni-tabbar">
		<view class="uni-tabbar__item" v-for="(item,index) in tabbar" :key="index" @tap="changeTab(item,index)">
			<!-- <view class="icon" :class="[item.fontIcon , item.pagePath == pagePath?'uni-active':'']"></view> -->
			<!-- 上面使用的是字体图标，解决切换页面的时候图标会闪的效果，毕竟每切换一个页面都会闪一下不太好看，可以切换使用下面的图片方式 -->
			<view class="uni-tabbar__bd">
				<view class="uni-tabbar__icon">
					<image class="" mode="aspectFit" :src="item.selectedIconPath"></image>
					<image class="" mode="aspectFit" :src="item.iconPath"></image>
				</view>
			</view>
			<view class="uni-tabbar__label" :class="{'active': item.pagePath == pagePath}">
				{{item.text}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			pagePath: null
		},
		data() {
			return {
				page: 'contact',
				showPage: false,
				containerHeight: 400,
				tabbar: [{
						"pagePath": "/pages/index/index",
						"iconPath": "/static/tabbar/index.png",
						"selectedIconPath": "/static/tabbar/index-fill.png",
						"text": "首页",
					},
					{
						"pagePath": "/pages/classify/classify",
						"iconPath": "/static/tabbar/class.png",
						"selectedIconPath": "/static/tabbar/calss-fill.png",
						"text": "产品分类",
					},
					{
						"pagePath": "/pages/cart/cart",
						"iconPath": "/static/tabbar/cart.png",
						"selectedIconPath": "/static/tabbar/cart-fill.png",
						"text": "购物车",
					},
					{
						"pagePath": "/pages/my/my",
						"iconPath": "/static/tabbar/my.png",
						"selectedIconPath": "/static/tabbar/my-fill.png",
						"text": "我的",
						// "fontIcon": "icon-wode"
					}
				]
			};
		},
		mounted() {
			// true为判断条件，根据实际的需求替换即可
			// if (true) {
			// 	this.tabbar.splice(2, 0, {
			// 		"pagePath": "/pages/cart/cart",
			// 		"iconPath": "/static/tabbar/cart.png",
			// 		"selectedIconPath": "/static/tabbar/cart-fill.png",
			// 		"text": "购物车",
			// 		"fontIcon": "icon-guanli"
			// 	})
			// }
		},
		methods: {
			changeTab(item,index) {
				this.page = item.pagePath;
				// 这里使用reLaunch关闭所有的页面，打开新的栏目页面
				uni.reLaunch({
					url: this.page
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	// [nvue] uni-scroll-view,
	// [nvue] uni-swiper-item,
	// [nvue] uni-view {
	// 	flex-direction: unset;
	// }

	// [nvue-dir-column] uni-swiper-item,
	// [nvue-dir-column] uni-view {
	// 	flex-direction: unset;
	// }

	.uni-tabbar {
		position: fixed;
		bottom: 0;
		z-index: 999;
		width: 100%;
		display: flex;
		justify-content: space-around;
		height: 100upx;
		padding: 16upx 0;
		box-sizing: border-box;
		// border-top: solid 1upx #ccc;
		background: url(../../static/tabbar/backimg.png);
		background-size: 100% 100%;
		// box-shadow: 0px 0px 17upx 1upx rgba(206, 206, 206, 0.32);

		.uni-tabbar__item {
			display: block;
			line-height: 24upx;
			font-size: 20upx;
			text-align: center;
		}

		.uni-tabbar__icon {
			height: 42upx;
			line-height: 42upx;
			text-align: center;

			image {
				width: 42upx;
				height: 42upx;
			}
		}

		.icon {
			display: inline-block;
		}

		.uni-tabbar__label {
			line-height: 24upx;
			font-size: 24upx;
			color: #999;

			&.active {
				color: #1ca6ec;
			}
		}
	}
</style>
