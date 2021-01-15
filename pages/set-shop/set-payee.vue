<template>
	<view class="zl-page zl-box">
		<view class="weixin-payee-box">
			<view class="left">
				<view class="weixin-logo">
					<image src="../../static/set-shop/weixin.png" mode="widthFix"></image>
				</view>
				<view class="weixin-title">微信收款码</view>
			</view>
			<view class="right" @click="openPopup">
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
			<view class="right" @click="skipAddPayeeCode">
				<view class="add-title">去添加</view>
				<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
			</view>
		</view>
		
		<!-- 预览 弹出层 -->
		<u-popup v-model="popupShow" mode="center" border-radius="10" :closeable="false" width="550" :zoom="false">
			<view class="popup-box">
				<view class="popup-up-box">
					<view class="title">微信收款码</view>
					<view class="right" @click="skipAddPayeeCode">
						<text class="change">修改</text>
						<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="popup-down-box">
					<view class="payee-code">
						<image src="../../static/set-shop/skma.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				popupShow: false
			}
		},
		methods: {
			openPopup(){
				this.popupShow = true
			},
			skipAddPayeeCode(){
				uni.navigateTo({
					url:'add-payee-code'
				})
			}
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
	.popup-box{
		
		.popup-up-box{
			height: 88upx;
			padding: 0 30upx;
			background-color: #F6F6F6;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.title{
				font-size: 30upx;
			}
			.right{
				.change{
					font-size: 30upx;
					color: #043843;
					margin-right: 10upx;
				}
				.icon{
					font-size: 30upx;
					color: #cccccc;
				}
			}
		}
		.popup-down-box{
			padding: 30upx;
			.payee-code{
				width: 100%;
				display: flex;
				image{
					width: 100%;
				}
			}
		}
	}
</style>
