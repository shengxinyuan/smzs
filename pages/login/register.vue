<template>
	<view class="register">
		<view style="width: 100%;">
			<view class="title">注册</view>
			<view class="write">
				<input type="text" value="" placeholder="输入手机号" maxlength="11"/>
			</view>
			<view class="write">
				<input type="text" value="" placeholder="输入验证码"/>
				<text class="give">获取验证码</text>
			</view>
			<view class="write">
				<input type="text" value="" placeholder="输入密码"/>
			</view>
			<view class="write">
				<input type="text" value="" placeholder="输入邀请码"/>
			</view>
			<view class="write">
				所在地区 <view class="choose" @click="show = true">{{regions}}<u-icon name="arrow-right" color="#999" size="38"></u-icon></view>
			</view>
			<u-picker v-model="show" mode="region" :params="params" @confirm="yes_addres" cancel-text="所在地区"></u-picker>
			<view class="login_s">登录</view>
			<view class="agreement">
				<u-checkbox-group class="radio">
					<u-checkbox size="45" shape="circle" v-model="checked"  active-color="#1E3066"></u-checkbox>
					阅读并同意<text>《平台服务政策》</text>及<text>《隐私政策》</text>
				</u-checkbox-group>
			</view>
			<view class="three_s">
				<view class="titles">—————— 其他方式登录 ——————</view>
				<view class="weixin">
					<view>
						<u-icon name="weixin-circle-fill" color="#08BA06" size="90"></u-icon>
					    <text>微信</text>
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
				show:false,
				regions:'请选择:',
				params: {
					province: true,
					city: true,
					area: true
				},
				province:'',//省
				city:'',//市
				area:'',//区
				checked:false,
			}
		},
		onLoad() {
		},
		methods:{
			//选择所在地区地区
			yes_addres(e){
				this.province = e.province.label
				this.city = e.city.label
				this.area = e.area.label
				this.regions = this.province+'-'+this.city+'-'+this.area
			},
		}
	}
</script>

<style lang="scss" scoped>
	.register{
		background-color: #f6f6f6;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		padding: 35rpx 35rpx;
		.title{
			width: 100%;
			font-size: 38rpx;
			font-weight: bolder;
			margin:50rpx 0 80rpx 0;
		}
		.write{
			width: 100%;
			display: flex;
			justify-content: space-between;
			height: 100rpx;
			align-items: center;
			border-bottom: 1rpx solid #dedede;
			margin-top: 20rpx;
			.give{
				padding:10rpx 20rpx;
				border: 1rpx solid #1E3066;
				color: #1E3066;
				border-radius: 35rpx;
				font-size: 28rpx;
			}
			.choose{
				height: 100rpx;
				display: flex;
				align-items: center;
				color: #999;
				.u-icon{
					margin-left: 20rpx;
				}
			}
		}
		.login_s{
			width: 100%;
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			border-radius: 50rpx;
			background-color: #1E3066;
			color: #fff;
			margin-top: 80rpx;
		}
		.agreement{
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			font-size: 26rpx;
			color: #999;
			text-align: center;
			text{
				color: #1E3066;
			}
		}
		.three_s{
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin-top: 100rpx;
			.titles{
				color: #b3b3b3;
				margin: 0 auto;
			}
			.weixin{
				width: 100%;
				margin-top: 50rpx;
				view{
					width: 90rpx;
					display: flex;
					flex-wrap: wrap;
					margin: 0 auto;
					text{
						width: 100%;
						text-align: center;
						margin-top: 10rpx;
						color: #aaaaaa;
					}
				}
			}
		}
	}
</style>
