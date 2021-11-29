<template>
	<view>
		<view class="orders_d">
			<view style="display: flex;justify-content: space-between;margin-bottom: 20rpx;">
				<view style="font-weight: bold;">
					综合管理
				</view>
			</view>
			<view style="display: flex;flex-wrap: wrap;">
				<view class="orders_it" v-for="(it,ind) in store_admin" :key="ind" @click="go_page(ind)">
					<view class="images">
						<image :src="it.img" mode="heightFix"></image>
					</view>
					<view class="">
						{{it.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				store_admin: [{
						img: 'https://zuanshi.semoh.cn/applet_static/my/app_share.png',
						name: "app分享"
					},
					{
						img: 'https://zuanshi.semoh.cn/applet_static/my/Platform.png',
						name: "平台咨讯"
					},
					{
						img: 'https://zuanshi.semoh.cn/applet_static/my/xinshou.png',
						name: "新手教程"
					},
					{
						img: 'https://zuanshi.semoh.cn/applet_static/my/fankui.png',
						name: "意见反馈"
					},
					{
						img: 'https://zuanshi.semoh.cn/applet_static/my/guany_me.png',
						name: "关于我们"
					},
					{
						img: 'https://zuanshi.semoh.cn/applet_static/my/lianxi_kf.png',
						name: "联系客服"
					},
					{
						img: 'https://zuanshi.semoh.cn/applet_static/my/pint_kingpic.png',
						name: "平台金价"
					}
				]
			};
		},
		methods: {
			go_page(e) {
				this.$emit("zh_guan", e)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.orders_d {
		padding: 30rpx;
		background-color: white;
		margin-top: 16rpx;
		border-radius: 20rpx;

		.orders_it {
			width: 25%;
			text-align: center;
			font-size: 24rpx;
			color: #666;
			margin-bottom: 10rpx;

			.images {
				height: 70rpx;
				display: flex;
				align-items: center;
				justify-content: center;

				image {
					height: 48rpx;
				}
			}
		}
	}
</style>
