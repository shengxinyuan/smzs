<template>
	<view>
		<!-- tabbar -->
		<zs-tabbar :tab_ind="5"></zs-tabbar>
		<!-- tabbar -->
		<!-- 头部 -->
		<view class="header" >
			<view class="header_va">
				
			</view>
			<view class="rig" >
				<view class="" 	style="margin-right: 40rpx;">
					<u-icon name="setting" size="36"></u-icon> 设置
				</view>
				<view class="">
					<u-icon name="chat" size="36"></u-icon> 消息
				</view>
			</view>
		</view>
		<!-- 内容 -->
		<view class="my_cont">
			<view class="userinfo">
				<view class="userinfo_img">
					<image src="../../static/index/bann1.png" class="user_imga" mode=""></image>
					<image src="../../static/userimg.png" class="user_imgb" mode=""></image>
				</view>
				<view class="userinfo_text">
					<view class="text_top">
						<view class="user_name">要有光</view>
						<view class="user_qda" v-if="false"><u-icon name="order"></u-icon>立即签到</view>
						<view class="user_qda" v-else><u-icon name="checkmark-circle"></u-icon> 今日已签到</view>
					</view>
					<view class="user_phone">
						手机号：15666666666
					</view>
					<view class="user_invite">
						<view>
							邀请码<u-icon name="arrow-right"></u-icon>
						</view>
						<view>
							复制邀请码<u-icon name="arrow-right"></u-icon>
						</view>
						<view @click="my_yaoq">
							我的邀请人
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 我的邀请人 -->
		<u-popup v-model="show" mode="center">
			<view class="my_yaoq">
				<view class="my_yaoq_name">
					邀请人: 今
				</view>
				<view class="my_yaoq_phone">
					联系电话: 15555555555
				</view>
				<view class="my_yaoq_typebut">
					<view @click="show = false">
						返回
					</view>
					<view @click="kao_yqr(1567484)">
						拨打电话
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
				show:false,//我的邀请人
			}
		},
		methods: {
			//我的邀请人
			my_yaoq(){
				this.show = true
			},
			// 联系邀请人
			kao_yqr(e){
				uni.makePhoneCall({
					phoneNumber:e
				})
			}
			
		}
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style lang="scss" scoped>
	//邀请人弹框
	.my_yaoq{
		width: 500rpx;text-align: center;
		padding: 40rpx;
		.my_yaoq_name{
			font-size: 34rpx;
		}
		.my_yaoq_phone{
			line-height: 66rpx;
		}
		.my_yaoq_typebut{
			display: flex;justify-content: space-around;
			view{
				width: 170rpx;line-height: 60rpx;border-radius: 50rpx;height: 60rpx;
				font-size: 32rpx;
			}
			view:nth-child(1){
				border: 1rpx solid #999;
			}
			view:nth-child(2){
				background-color: #1d2f64;color: #fff;
			}
		}
	}
	.my_cont{
		width: 100%;
		.userinfo{
			padding-top: 150rpx;width: 100%;height: 500rpx;
			background-image: url(../../static/my/backimg.png);
			background-size: 100% 100%;
			display: flex;
			position: relative;
			.userinfo_img{
				width: 24%;height: 160rpx;margin-left: 50rpx;
				.user_imga{
					width: 140rpx;height: 140rpx;border-radius: 50%;
				}
				.user_imgb{
					width: 200rpx;height: 200rpx;position: absolute;left: 10rpx;top: 100rpx;
				}
			}
			.userinfo_text{
				width: 76%;height: 160rpx;padding-right: 4%;
				.text_top{
					display: flex;justify-content: space-between;
					.user_name{
						font-size: 34rpx;font-weight: bold;
					}
					.user_qda{
						background-color: #1d2f65;color: #e1cea5;border-radius: 50rpx;line-height: 48rpx;padding: 0 10rpx;
					}
				}
				.user_phone{
					font-size: 26rpx;line-height: 44rpx;color: #5c5743;
				}
				.user_invite{
					font-size: 26rpx;
					display: flex;justify-content: space-around;
					view{
						// white-space: nowrap;
						background-color: #ffe379;border-radius: 20rpx;padding: 2rpx 12rpx;
					}
				}
			}
		}
	}
.header{
	position: fixed;left: 0;top: 0;
	height: 140rpx;width: 100%;
	padding: 50rpx 3% 0 3%;
	display: flex;justify-content: space-between;
	z-index: 999;
	.header_va{
		font-size: 40rpx;line-height: 90rpx;
	}
	.rig{
		line-height: 100rpx;
		font-size: 30rpx;
		display: flex;
	}
}
</style>
