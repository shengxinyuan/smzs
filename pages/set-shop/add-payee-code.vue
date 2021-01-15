<template>
	<view>
		<view class="add-payee-code-image">
			<image src="../../static/set-shop/add_code.png" mode="widthFix"></image>
		</view>
		<view class="bottom-box">
			<view class="notice">
				{{noticeText}}
			</view>
			<view class="bottom-btn">
				<button class="btn">上传二维码</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticeText:'*请上传您真是有效的支付宝收款二维码图片，一遍客户购买您的商品能立即向您付款'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.add-payee-code-image{
		width: 100%;
		display: flex;
		image{
			width: 100%;
		}
	}
	.bottom-box{
		position: fixed;
		bottom: 0;
		left: 0;
		.notice{
			padding: 16upx 30upx;
			background-color: #fde7e7;
			font-size: 22upx;
			color: #f9817d;
		}
		.bottom-btn{
			padding: 20upx 30upx;
			.btn{
				font-size: 30upx;
				color: #2b3f7d;
				border: solid 2upx #2b3f7d;
				border-radius: 40upx;
			}
		}
	}
</style>
