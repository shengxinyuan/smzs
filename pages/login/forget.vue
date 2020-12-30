<template>
	<view class="forget">
		<view style="width: 100%;">
			<view class="phone">
				账号：156 4785 4568
			</view>
			<view class="write">
				<input type="text" value="" placeholder="输入手机号" maxlength="11"/>
			</view>
			<view class="write" style="border: none;">
				<input type="text" value="" placeholder="输入验证码"/>
				<text class="give">获取验证码</text>
			</view>
			<view class="login_s">确定</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.forget{
		background-color: #f6f6f6;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		.phone{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			padding: 0 30rpx;
		}
		.write{
			width: 100%;
			display: flex;
			justify-content: space-between;
			background-color: #fff;
			height: 120rpx;
			align-items: center;
			border-bottom: 1rpx solid #dedede;
			padding: 0 30rpx;
			.give{
				padding:10rpx 20rpx;
				border: 1rpx solid #1E3066;
				color: #1E3066;
				border-radius: 35rpx;
				font-size: 28rpx;
			}
		}
		.login_s{
			width: 94%;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			border-radius: 50rpx;
			background-color: #1E3066;
			color: #fff;
			margin: 200rpx auto;
		}
	}
</style>
