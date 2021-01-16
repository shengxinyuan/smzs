<template>
	<view class="zl-box">
		<view class="add-box">
			<view class="add-min-box">
				<view class="title">银行卡账号：</view>
				<input class="input" :value="valueId" type="text" :placeholder="placeholder01" />
			</view>
			<view class="add-min-box">
				<view class="title">银行卡姓名：</view>
				<input class="input" :value="valueName" type="text" :placeholder="placeholder02" />
			</view>
			<view class="add-min-box">
				<view class="title">绑定手机号码：</view>
				<input class="input" :value="valueTelephone" type="text" :placeholder="placeholder03" />
			</view>
			<view class="add-min-box">
				<view class="title">请输入验证码：</view>
				<input class="input" :value="valueCode" type="text" :placeholder="placeholder04" />
				<view class="get-code">获取验证码</view>
			</view>
		</view>
		<view class="bottom-btn">
			<button class="btn" @click="skipSetWithdraws">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				valueId:'',
				placeholder01:'请输入银行卡账号',
				valueName:'',
				placeholder02:'请输入账号真实姓名',
				valueTelephone:'',
				placeholder03:'请输入绑定手机号码',
				valueCode:'',
				placeholder04:'请输入验证码'
			}
		},
		methods: {
			skipSetWithdraws(){
				uni.navigateTo({
					url:'set-withdraws'
				})
			}
		}
	}
</script>

<style lang="scss">
	.zl-box{
		
		.add-box{
			margin-bottom: 40upx;
			.add-min-box{
				height: 110upx;
				display: flex;
				align-items: center;
				border-top: solid 2upx #eeeeee;
				position: relative;
				.title{
					width: 35%;
					font-size: 28upx;
					padding-left: 30upx;
				}
				.input{
					font-size: 26upx;
				}
				.get-code{
					width: 174upx;
					height: 52upx;
					border: solid 2upx #2b3f7d;
					font-size: 26upx;
					color: #2b3f7d;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 26upx;
					position: absolute;
					right: 30upx;
				}
			}
		}
		.bottom-btn {
			width: 100%;
			padding: 0 30upx;
			margin-top: 100upx;
		
			.btn {
				font-size: 30upx;
				color: #FFFFFF;
				background-image: linear-gradient(90deg,
					#2b3f7d 0%,
					#1b2c60 100%);
				border-radius: 40upx;
			}
		}
	}
</style>
