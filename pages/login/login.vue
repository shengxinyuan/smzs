<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<view class="register">
			<view style="width: 100%;">
				<view class="u-font-16 u-m-t-50" style="text-align: right;color: #293C79;" @click="go">逛一逛</view>
				<view class="head">
					<view :class="['title',Inv==0?'choose':'']" @click="qieh(0)">验证码登录</view>
					<view :class="['title',Inv==1?'choose':'']" @click="qieh(1)">账号密码登录</view>
				</view>
				<!-- 验证码登录 -->
				<view class="choose_ka" v-show="Inv == 0">
					<view class="write">
						<input type="text" v-model="phone" placeholder="请输入手机号" maxlength="11" style="width: 100%;" />
					</view>
					<view class="write">
						<input type="text" v-model="note" @confirm="app_login" placeholder="请输入验证码" maxlength="6" />
						<text class="give" v-if="code_show" @click="acquireCode">{{code_tit}}</text>
						<text style="margin-right: 20rpx;" v-else>{{ time }}s</text>
					</view>
					<view class="other">
						<text @click="go_register">注册</text>
					</view>
				</view>
				<!-- 账号密码登录 -->
				<view class="choose_ka" v-show="Inv == 1">
					<view class="write">
						<input type="text" v-model="phone" placeholder="请输入账号" maxlength="11" />
					</view>
					<view class="write">
						<input type="password" v-model="pass" @confirm="app_login" placeholder="请输入密码" />
					</view>
					<view class="other">
						<text @click="go_register">注册</text>
						<text @click="go_forget(1)">忘记密码？</text>
					</view>
				</view>
				<view class="login_s" @click="app_login">登录</view>

				<view class="three_s" v-show="type">
					<view class="titles">—————— 其他方式登录 ——————</view>
					<view class="weixin" @click="weixin">
						<view>
							<u-icon name="weixin-circle-fill" color="#08BA06" size="90"></u-icon>
							<text>微信</text>
						</view>
					</view>
				</view>
			</view>
			<zs-toast-hear v-if="page_show" @yesag="yesag" @agreement="agreement"></zs-toast-hear>
		</view>
		<!-- #endif -->

		<!-- #ifdef MP-WEIXIN -->
		<view class="pad_b">
			<view style="height: 110rpx;"></view>
			<view class="top_tip">欢迎加入奢美饰界</view>
			<view class="fcc" style="padding: 100rpx 0;">
				<image style="width: 300rpx;height: 300rpx;" mode="aspectFit" src="../../static/logos.jpg"></image>
			</view>
			<view style="height: 40rpx;"></view>
			<button class="wx_btn login_btn fcc" @click="getInfo">
				微信授权登录
			</button>
		</view>
		<!-- #endif -->
	</view>
	</view>
</template>

<style lang="scss">
	.top_tip {
		font-size: 40rpx;
		margin-top: 75rpx;
	}
	
	.login_btn {
		color: #fff;
		background-color: #293C79;
		font-size: 32rpx;
		width: 690rpx;
		height: 80rpx;
		border-radius: 40rpx;
		margin-top: 160rpx;
	}
	
	.wx_btn {
		width: 690rpx;
		height: 80rpx;
		padding: 0;
		margin: 0;
	}

	.wx_btn::after {
		border: none;
	}
</style>

<script>
	var that;
	export default {
		data() {
			return {
				Inv: 0,
				page_show: false,
				phone: '',
				pass: '',
				note: '',
				code: "", //获取到的验证码
				code_tit: '获取验证码',
				time: 60,
				code_show: true, //提示语显示
				cli_type: true,
				type: false,
				cid: '',
				info:{
					nickName: '微信用户',
					avatarUrl: '/static/avatar.png',
				}
			}
		},
		onLoad() {
			that = this;
			let cid = uni.getStorageSync('clientid')
			if (cid) {
				this.cid = cid
				console.log(cid)
			}
			if (uni.getStorageSync("type")) {
				this.page_show = false
			} else {
				this.page_show = false
			}
			this.$api.get('ios').then(res => {
				if (res.data.type == 0) {
					this.type = true
				} else {
					this.type = false
				}
			})
		},
		methods: {
			getInfo(){
				uni.getUserProfile({
					desc: '用于完善用户信息',
					success: function(infoRes) {
						console.log(infoRes)
						var param = {
							rawData:infoRes.rawData,
							signature:infoRes.signature,
							encryptedData:infoRes.encryptedData,
							iv :infoRes.iv,
						}
						uni.login({
							provider: 'weixin',
							success: function(loginRes) {
								console.log(loginRes)
								param.code = loginRes.code;
								console.log(param)
								that.$api.post('applet',param).then(res => {
									console.log(res)
									that.cli_type = false //防抖
									if (res.status == 1) {
										let date = new Date().getTime()
										let end = res.data.member_info.vip_time * 1000
										if (end <= date) {
											uni.setStorageSync("viptype", false)
										} else {
											uni.setStorageSync("viptype", true)
										}
									
										uni.setStorageSync("token", res.data.token)
										uni.setStorageSync("member_info", res.data.member_info)
										uni.setStorageSync('member_info_img', res.data.member_info.avatar)
										uni.setStorageSync('coupon', 0)
										uni.showToast({
											title: '请稍后...',
											icon: 'loading',
											duration: 2000
										})
										let arr = 2
										let time = setInterval(() => {
											if (arr == 0) {
												clearInterval(time)
												that.com.rel('../index/index')
											} else {
												arr -= 1
											}
										}, 1000)
									} else {
										that.cli_type = true
										that.com.msg(res.message)
									}
								})
							}
						});
					},
					fail: err => {
						console.log(err);
					}
				});
			},
			go() {
				uni.redirectTo({
					url: '../index/index'
				})
			},
			qieh(e) {
				this.Inv = e
				if (e == 0) {
					this.pass = ''
				} else {
					this.note = ''
				}
			},
			//同意协议
			yesag() {
				uni.setStorageSync("type", 1)
				this.page_show = false
			},
			agreement(e) {
				if (e == 1) {
					this.com.navto("./fuwu")
				} else {
					this.com.navto("./yinsi")
				}
			},
			//获取验证码
			acquireCode() {
				if (this.phone == '' || !(/^1[3456789]\d{9}$/).test(this.phone)) {
					this.com.msg('请检查手机号')
				} else {
					this.time = 60
					this.code_show = false
					let setInt = setInterval(() => {
						if (this.time == 0) {
							this.code_tit = "再次获取"
							this.code_show = true
							clearInterval(setInt)
						} else {
							this.time -= 1
						}
					}, 1000)
					this.$api.get('messagecode', {
						mobile: this.phone
					}).then(res => {
						console.log(res)
					})
				}

			},
			//登录
			app_login() {
				if (this.cli_type) {
					this.login_function()
				}
			},
			//登录封装
			login_function() {
				this.cli_type = false //防抖
				this.$api.post('login', {
					mobile: this.phone,
					password: this.pass,
					note: this.note,
					cid: this.cid
				}).then(res => {
					console.log(res)
					this.cli_type = false //防抖
					if (res.status == 1) {
						let date = new Date().getTime()
						let end = res.data.member_info.vip_time * 1000
						if (end <= date) {
							uni.setStorageSync("viptype", false)
						} else {
							uni.setStorageSync("viptype", true)
						}

						uni.setStorageSync("token", res.data.token)
						uni.setStorageSync("member_info", res.data.member_info)
						uni.setStorageSync('member_info_img', res.data.member_info.avatar)
						uni.setStorageSync('coupon', 0)
						uni.showToast({
							title: '请稍后...',
							icon: 'loading',
							duration: 2000
						})
						let arr = 2
						let time = setInterval(() => {
							if (arr == 0) {
								clearInterval(time)
								this.com.rel('../index/index')
							} else {
								arr -= 1
							}
						}, 1000)
					} else {
						this.cli_type = true
						this.com.msg(res.message)
					}
				})
			},
			// 到注册页面
			go_register() {
				uni.navigateTo({
					url: './register'
				})
			},
			// 忘记密码
			go_forget(e) {
				uni.navigateTo({
					url: './forget?type=' + e
				})
			},
			// 微信登录
			weixin() {
				let that = this
				uni.login({
					provider: 'weixin',
					success: function(log) {
						// console.log(log.authResult);
						uni.setStorageSync("openid", log.authResult.openid)
						that.$api.post('getWxUserInfo', {
							access_token: log.authResult.access_token,
							openid: log.authResult.openid
						}).then(res => {
							console.log(res)
							if (res.status == 1) {
								if (res.data.login_type == 0) {
									that.com.navto("./bangding")
								} else {
									let date = new Date().getTime()
									let end = res.data.member_info.vip_time * 1000
									if (end <= date) {
										uni.setStorageSync("viptype", false)
									} else {
										uni.setStorageSync("viptype", true)
									}

									uni.setStorageSync("token", res.data.token)
									uni.setStorageSync("member_info", res.data.member_info)
									uni.setStorageSync('member_info_img', res.data.member_info.avatar)
									uni.setStorageSync('coupon', 0)
									uni.showToast({
										title: '请稍后...',
										icon: 'loading',
										duration: 2000
									})
									let arr = 2
									let time = setInterval(() => {
										if (arr == 0) {
											clearInterval(time)
											uni.reLaunch({
												url: '../index/index'
											})
										} else {
											arr -= 1
										}
									}, 1000)
								}
							}
						})
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.register {
		background-color: #f6f6f6;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		padding: 50rpx;

		.head {
			width: 70%;
			margin: 50rpx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.title {
				font-size: 34rpx;
				color: #333;
			}

			.choose {
				font-size: 36rpx;
				font-weight: bolder;
				color: #293C79;
			}
		}

		.write {
			width: 100%;
			display: flex;
			justify-content: space-between;
			height: 100rpx;
			align-items: center;
			border-bottom: 1rpx solid #dedede;
			margin-top: 20rpx;

			input {
				font-size: 28rpx;
			}

			.give {
				line-height: 50rpx;
				padding: 0rpx 20rpx;
				border: 2rpx solid #293C79;
				color: #293C79;
				border-radius: 35rpx;
				font-size: 24rpx;
			}
		}

		.other {
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			display: flex;
			justify-content: space-between;
			font-size: 26rpx;
			color: #293C79;
		}

		.login_s {
			width: 100%;
			height: 72rpx;
			text-align: center;
			line-height: 72rpx;
			border-radius: 50rpx;
			background-color: #1E3066;
			color: #fff;
			margin-top: 200rpx;
		}

		.agreement {
			width: 100%;
			height: 90rpx;
			line-height: 90rpx;
			font-size: 26rpx;
			color: #999;
			text-align: center;

			text {
				color: #1E3066;
			}
		}

		.three_s {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin-top: 100rpx;

			.titles {
				color: #b3b3b3;
				margin: 0 auto;
			}

			.weixin {
				width: 100%;
				margin-top: 50rpx;

				view {
					width: 90rpx;
					display: flex;
					flex-wrap: wrap;
					margin: 0 auto;

					text {
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
