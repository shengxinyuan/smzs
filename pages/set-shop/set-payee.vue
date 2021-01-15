<template>
	<view class="zl-page zl-box">
		<view class="weixin-payee-box">
			<view class="left">
				<view class="weixin-logo">
					<image src="../../static/set-shop/weixin.png" mode="widthFix"></image>
				</view>
				<view class="weixin-title">微信收款码</view>
			</view>
			<view class="right">
				<view class="right-title">预览</view>
				<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="weixin-payee-box">
			<view class="left">
				<view class="weixin-logo">
					<image src="../../static/set-shop/zhifubao.png" mode="widthFix"></image>
				</view>
				<view class="weixin-title">支付宝收款码</view>
			</view>
			<view class="right">
				<view class="add-title">去添加</view>
				<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.zl-box {
		padding: 30upx;
	}

	.weixin-payee-box {
		width: 100%;
		height: 120upx;
		padding-left: 30upx;
		padding-right: 20upx;
		margin-bottom: 30upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.left {
			width: 50%;
			display: flex;
			align-items: center;

			.weixin-logo {
				width: 13%;
				display: flex;

				image {
					width: 100%;
				}
			}

			.weixin-title {
				font-size: 28upx;
				padding-left: 16upx;
			}
		}

		.right {
			display: flex;
			align-items: center;

			.right-title {
				font-size: 26upx;
				color: #2b3f7d;
			}

			.icon {
				font-size: 34upx;
				color: #cccccc;
				padding-left: 10upx;
			}
			.add-title{
				font-size: 26upx;
				color: #cccccc;
			}
		}
	}
</style>
