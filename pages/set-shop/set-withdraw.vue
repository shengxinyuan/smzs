<template>
	<view class="zl-page zl-box">
		<view class="add-box">
			<view class="add-min-box">
				<view class="add-btn one">
					<u-icon class="icon jiahao" name="plus"></u-icon>
				</view>
				<view class="add-title zhifubao">添加支付宝</view>
			</view>
		</view>
		<view class="add-box">
			<view class="add-min-box two">
				<view class="add-btn two">
					<u-icon class="icon jiahao" name="plus"></u-icon>
				</view>
				<view class="add-title yinhangka">添加银行卡</view>
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
	.zl-box{
		padding: 20upx 30upx;
	}
	
	.add-box{
		width: 100%;
		height: 200upx;
		background-color: #FFFFFF;
		border-radius: 10upx;
		margin-bottom: 20upx;
		display: flex;
		justify-content: center;
		align-items: center;
		.add-min-box{
			display: flex;
			align-items: center;
			.add-btn{
				width: 40upx;
				height: 40upx;
				border-radius: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				.icon{
					font-size: 28upx;
					color: #FFFFFF;
				}
			}
			.add-title{
				height: 40upx;
				line-height: 40upx;
				font-size: 32upx;
				padding-left: 20upx;
			}
			.one{
				background-color: #02a9f1;
			}
			.zhifubao{
				color: #02a9f1;
			}
			.two{
				background-color: #2b3f7d;
			}
			.yinhangka{
				color: #2b3f7d;
			}
		}
	}
</style>
