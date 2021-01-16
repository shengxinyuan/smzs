<template>
	<!-- 店铺二维码 -->
	<view>
		<view class="tabs-box">
			<u-tabs 
			:list="tabsList" 
			:is-scroll="false" 
			:current="current" 
			:height="height" 
			:font-size="30"
			:bar-width="50" 
			:bar-height="6" 
			:active-color="activeColor"
			@change="changeTabs"></u-tabs>
		</view>
		
		<!-- 图文二维码 -->
		<view class="tabs-first" v-if="isShow01">
			<u-swiper 
			height="890"
			:effect3d="true" 
			:list="swiperList" 
			:mode="mode" 
			:autoplay="false" 
			:bg-color="bgColor" 
			:effect3d-previous-margin="effect3dPreviousMargin"></u-swiper>
			<view class="share-text">
				<text>{{shareText}}</text>
			</view>
			<view class="bottom-btn">
				<button class="btn" @click="openPopup">分享</button>
			</view>
		</view>
		
		<!-- 极简二维码 -->
		<view class="tabs-second" v-if="isShow02">
			<view class="code-box">
				<view class="code-logo">
					<image src="../../static/community/erweima.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="bottom-btn">
				<button class="btn" @click="openPopup">分享</button>
			</view>
		</view>
		
		<!-- 分享 弹出层 -->
		<view>
			<u-popup v-model="popupShow" mode="bottom" border-radius="20" :closeable="false">
				<view class="share-popup">
					<view class="divider-box">
						<u-divider half-width="60" fontSize="24">分享至</u-divider>
					</view>
					<view class="share-logo-box">
						<view class="left">
							<view class="share-logo">
								<image src="../../static/community/haoyou.png" mode="widthFix"></image>
								<view class="share-title">微信好友</view>
							</view>
						</view>
						<view class="right">
							<view class="share-logo">
								<image src="../../static/community/pyq.png" mode="widthFix"></image>
								<view class="share-title">朋友圈</view>
							</view>
						</view>
					</view>
					<view class="popup-btn">
						<button class="btn" @click="closePopup">取消</button>
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabsList: [{
						name: '图文二维码'
					}, {
						name: '极简二维码'
					}],
				current: 0,
				height: 80,
				activeColor: '#2b3f7d',
				isShow01: true,
				isShow02: false,
				popupShow: false,
				swiperList:[
					{
						image: '../../static/community/haibao.png',
					},
					{
						image: '../../static/community/haibao.png',
					},
					{
						image: '../../static/community/haibao.png',
					},
					{
						image: '../../static/community/haibao.png',
					},
					{
						image: '../../static/community/haibao.png',
					}
				],
				mode:'none',
				bgColor:"#ffffff",
				effect3dPreviousMargin: 120,
				shareText:'发送二维码给好友，吸引更多客流'
			}
		},
		methods: {
			changeTabs(index) {
				this.current = index
				if (index !== 0) {
					this.isShow01 = false
				} else {
					this.isShow01 = true
				};
				if (index !== 1) {
					this.isShow02 = false
				} else {
					this.isShow02 = true
				}
			},
			openPopup(){
				this.popupShow = true
			},
			closePopup(){
				this.popupShow = false
			}
		}
	}
</script>

<style lang="scss">
	.tabs-box{
		border-bottom: solid 2upx #eeeeee;
	}
	.tabs-first{
		padding: 30upx 0;
	}
	.share-text{
		margin: 20upx 0;
		text-align: center;
		font-size: 24upx;
		color: #999999;
	}
	.bottom-btn {
		width: 100%;
		padding: 20upx 30upx;
		position: fixed;
		bottom: 0;
		left: 0;
	
		.btn {
			font-size: 30upx;
			color: #FFFFFF;
			background-image: linear-gradient(90deg,
				#2b3f7d 0%,
				#1b2c60 100%);
			border-radius: 40upx;
		}
	}
	.tabs-second{
		.code-box{
			margin-top: 60upx;
			display: flex;
			justify-content: center;
			.code-logo{
				width: 490upx;
				height: 490upx;
				display: flex;
				image{
					width: 100%;
				}
			}
		}
	}
	.share-popup{
		padding-top: 40upx;
		.divider-box{
			
		}
		.share-logo-box{
			margin-top: 70upx;
			margin-bottom: 50upx;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			.left,.right{
				width: 30%;
				display: flex;
				justify-content: center;
				.share-logo{
					width: 100upx;
					text-align: center;
					image{
						width: 100%;
					}
					.share-title{
						font-size: 22upx;
						color: #666666;
						margin-top: 20upx;
					}
				}
			}
		}
		.popup-btn{
			
			.btn{
				padding: 12upx 0;
				font-size: 30upx;
				background-color: #FFFFFF;
			}
		}
	}
</style>
