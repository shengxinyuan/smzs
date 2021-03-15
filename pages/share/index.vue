<template>
	<view>
		<view class="bgimage">
			<image src="../../static/share/bg.png" mode="widthFix"></image>
		</view>
		<view class="zl-box">
			<view class="min-box">
				<input type="number" v-model="tel" placeholder="请输入手机号" maxlength="11" />
				<view class="two">
					<input class="code_input" type="number" v-model="code" placeholder="请输入验证码" maxlength="6" />
					<view class="right">{{codeText}}</view>
				</view>
			</view>
		</view>
		<view class="bottom-btn">
			<button class="btn">免费注册领取现金红包</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tel: '',
				code: '',
				codeText: '发送验证码'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.bgimage {
		image {
			width: 100%;
		}
	}
	.zl-box{
		width: 100%;
		padding: 0 30upx;
		position: absolute;
		top: 1024upx;
		.min-box {
			width: 100%;
			padding: 60upx 30upx;
			background-color: #ffffff;
			border-radius: 20upx;
		
			input {
				height: 100upx;
				padding: 0 30upx;
				font-size: 30upx;
				border: solid 2upx #cccccc;
				border-radius: 10upx;
			}
		
			.two {
				margin-top: 40upx;
				display: flex;align-items: center;justify-content: space-between;
		
				.code_input {
					width: 50%;
				}
		
				.right {
					width: 36%;
					height: 100upx;
					font-size: 30upx;
					color: #FFFFFF;
					line-height: 100upx;
					text-align: center;
					background-color: #f63f39;
					border-radius: 10upx;
				}
			}
		
			.down-box {
				width: 100%;
				height: 100upx;
				line-height: 100upx;
				text-align: center;
				font-size: 30upx;
				color: #FFFFFF;
				background-color: #f63f39;
				border-radius: 10upx;
			}
		}
	}
	.bottom-btn{
		width: 100%;
		height: 130upx;
		padding: 0 30upx;
		display: flex;align-items: center;
		background-color: #FFFFFF;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 998;
		.btn{
			width: 100%;
			font-size: 34upx;
			color: #fff;
			background-color: #f63f39;
			border-radius: 8upx;
		}
	}
</style>
