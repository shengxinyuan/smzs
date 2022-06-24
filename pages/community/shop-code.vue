<template>
	<!-- 店铺二维码 -->
	<view class="content">
		<view class="tip">
			分享微信小程序给好友，吸引更多客流
		</view>
		<view class="mini-card">
			<view class="title">
				{{ info.title }}
			</view>
			<image class="img" src="https://prod-front-end-oss-h5.oss-cn-shanghai.aliyuncs.com/images/1.png" mode="widthFix"></image>
		</view>
		
		<view class="bottom-btn">
			<button class="btn" @click="shareWxmini">分享</button>
		</view>

	</view>
</template>

<script>
	import { config } from '../../config.js'
	export default {
		data() {
			return {
				current: 0,
				height: 80,
				activeColor: '#2b3f7d',
				isShow01: true,
				isShow02: false,
				popupShow: false,
				swiperList:[],
				mode:'none',
				bgColor:"#ffffff",
				shareText:'发送二维码给好友，吸引更多客流',
				codeImg:'',
				qrcode_img:'',
				canvas_hb_show:false,
				navnum:1,
				info: {},
				member: {}
			}
		},
		onLoad() {
			this.getUserInfo()
		},
		methods: {
			getUserInfo() {
				this.member = uni.getStorageSync('member_info')
				this.$api.get('manage',{ member_id: this.member.id }).then(res=>{
					this.info = res.data
				})
			},
			shareWxmini() {
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 5,
					imageUrl: 'https://prod-front-end-oss-h5.oss-cn-shanghai.aliyuncs.com/banner.jpg',
					title: this.info.title,
					miniProgram: {
						id: 'gh_dd4c8bde95bf',
						path: `pages/index/index?shopkeeperId=${this.member.id}`,
						type: 0,
						webUrl: `${config.h5Url}smsj/index.html#/pages/index/index?data=` + JSON.stringify({name: this.member.id})
					},
					success: (res) => {
					},
					fail: (err) => {
					}
				});
			},
			//点击切换
			// it_cli(e){
			// 	this.navnum = e
			// 	if(e == 1){
			// 		this.isShow01 = true
			// 	}else{
			// 		this.isShow01 = false
			// 	}
			// },
			// changeimg(e){
			// 	this.canvas_hb_show = false
			// 	console.log(e)
			// 	if(this.swiperList){
			// 		console.log(this.swiperList)
			// 		this.codeImg = this.swiperList[e].image
			// 		this.qrcode_img =  this.swiperList[e].member_id
			// 	}
			// },
			// canvas(){
			// 	let that = this
			// 	var ctx = uni.createCanvasContext('my_codes',this)
			// 	ctx.fillStyle='#CE3C39';
			// 	ctx.fillRect(0,0,260,330);
			// 	ctx.drawImage(that.codeImg, 0, 0, 260, 490)
			// 	ctx.drawImage(that.qrcode_img, 95, 385, 70, 70)
			// 	ctx.draw(false,(res)=>{
			// 		// console.log(res)
			// 		that.canvas_hb_show = true
			// 		that.popupShow = true
			// 		// that.com.msg('已生成')
			// 	})
			// },
			// //
			// page_reader(){
			// 	this.$api.get('qrcode').then(res=>{
			// 		console.log(res)
			// 		if(res.status == 1){
			// 			//循环生成画布
			// 			// if(res.data[0].is_qrcode==0){
			// 			// 	uni.showModal({
			// 			// 		title:'提示',
			// 			// 		content:'您的二维码已失效,请重新生成',
			// 			// 		showCancel:false,
			// 			// 		success: function (res) {
			// 			// 		        if (res.confirm) {
			// 			// 		            console.log('用户点击确定');
			// 			// 		        } else if (res.cancel) {
			// 			// 		            console.log('用户点击取消');
			// 			// 		        }
			// 			// 		    }
			// 			// 	})
			// 			// }
			// 			this.swiperList = res.data
			// 			this.changeimg(0)
			// 		}
			// 	})
			// },
			// //分享
			// openPopup(){
			// 	// this.com.msg('正在生成')
			// 	this.canvas()
			// 	console.log(this.codeImg)
			// },
			// //取消
			// closePopup(){
			// 	this.popupShow = false
			// },
			// share(e){
			// 	this.canvas()
			// 	let that = this
			// 	if(this.navnum == 1 ){
			// 		if(e == 0){
			// 			uni.canvasToTempFilePath({
			// 				canvasId:'my_codes',
			// 				success(re) {
			// 					console.log(re)
			// 					// #ifdef MP-WEIXIN
			// 					this.wxShare();
			// 					// #endif
			// 					// #ifdef APP
			// 					uni.share({
			// 					    provider: "weixin",
			// 					    scene: "WXSceneSession",
			// 					    type: 2,
			// 					    imageUrl:re.tempFilePath,
			// 					    success: function (res) {
			// 					        console.log("success:" + JSON.stringify(res));
			// 					    },
			// 					    fail: function (err) {
			// 					        console.log("fail:" + JSON.stringify(err));
			// 					    }
			// 					});
			// 					// #endif
			// 				},fail(err){
			// 					console.log(err)
			// 				},complete(es){
			// 					console.log(es)
			// 				}
			// 			})
			// 		}else{
			// 			uni.canvasToTempFilePath({
			// 				canvasId:'my_codes',
			// 				success(re) {
			// 					console.log(re)
			// 					// #ifdef MP-WEIXIN
			// 					this.wxShare();
			// 					// #endif
			// 					// #ifdef APP
			// 					uni.share({
			// 					    provider: "weixin",
			// 					    scene: "WXSenceTimeline",
			// 					    type: 2,
			// 					    imageUrl: re.tempFilePath,
			// 					    success: function (res) {
			// 					        console.log("success:" + JSON.stringify(res));
			// 					    },
			// 					    fail: function (err) {
			// 					        console.log("fail:" + JSON.stringify(err));
			// 					    }
			// 					});
			// 					// #endif
			// 				},fail(err){
			// 					console.log(err)
			// 				},complete(es){
			// 					console.log(es)
			// 				}
			// 			})
			// 		}
			// 	}else{ // 简单二维码
			// 		if(e == 0){
			// 			// #ifdef MP-WEIXIN
			// 			this.wxShare();
			// 			// #endif
			// 			// #ifdef APP
			// 			uni.share({
			// 			    provider: "weixin",
			// 			    scene: "WXSceneSession",
			// 			    type: 2,
			// 			    imageUrl:that.swiperList[0].member_id,
			// 			    success: function (res) {
			// 			        console.log("success:" + JSON.stringify(res));
			// 			    },
			// 			    fail: function (err) {
			// 			        console.log("fail:" + JSON.stringify(err));
			// 			    }
			// 			});
			// 			// #endif
			// 		}else{
			// 			// #ifdef MP-WEIXIN
			// 			this.wxShare();
			// 			// #endif
			// 			// #ifdef APP
			// 			uni.share({
			// 			    provider: "weixin",
			// 			    scene: "WXSenceTimeline",
			// 			    type: 2,
			// 			    imageUrl: that.swiperList[0].member_id,
			// 			    success: function (res) {
			// 			        console.log("success:" + JSON.stringify(res));
			// 			    },
			// 			    fail: function (err) {
			// 			        console.log("fail:" + JSON.stringify(err));
			// 			    }
			// 			});
			// 			// #endif
			// 		}
			// 	}
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		background-color: #ededed;
		height: calc(100vh - 80rpx);
	}
	.nav_head{
		height: 90rpx;line-height: 86rpx;
		display: flex;text-align: center;
		color: #999;
		.nav_l{
			width: 50%;position: relative;
			&.act{
				color: #000000;
				&:before{
					content: '';
					position: absolute;
					left: 40%;
					bottom: 0;
					transform: translateY(-50%);
					height: 7rpx;
					width: 20%;
					background-color: #2d407a;
					border-radius: 0 4px 4px 0;
					opacity: .8;
				}
			}
		}
	}
	.canvas_a{
		position: fixed;;left: -550rpx;bottom: -1500rpx;
	}
	.tabs-box{
		border-bottom: solid 2upx #eeeeee;
	}
	.tabs-first{
		padding: 20upx 0 30upx 0;
	}
	.share-text{
		margin-top: 20upx;
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
	
	.tip {
		font-size: 32rpx;
		text-align: center;
		padding: 30rpx 0;
	}
	.mini-card {
		position: relative;
		.title {
			position: absolute;
			left: 46upx;
			top: 120upx;
			z-index: 100;
			font-size: 32rpx;
			color: #737373;
		}
		.img{
			width: 750upx;
		}
	}
</style>
