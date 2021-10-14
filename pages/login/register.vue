<template>
	<view class="register">
		<view style="width: 100%;">
			<view class="title">注册</view>
			<view class="write">
				<input type="text" v-model="phone" placeholder="输入手机号" maxlength="11"/>
			</view>
			<view class="write">
				<input type="text" v-model="code" placeholder="输入验证码"/>
				<text class="give" v-if="code_show" @click="acquireCode">{{code_tit}}</text>
				<text style="margin-right: 20rpx;" v-else>{{ time }}s</text>
			</view>
			<view class="write">
				<input type="password" v-model="pass" placeholder="输入密码"/>
			</view>
			<view class="write">
				<input type="text" v-model="invcode" placeholder="输入邀请码"/>
			</view>
			<!-- <view class="write">
				所在地区 <view class="choose" @click="show = true">{{regions}}<u-icon name="arrow-right" color="#999" size="28"></u-icon></view>
			</view> -->
			<u-picker v-model="show" mode="region" :params="params" @confirm="yes_addres" cancel-text="所在地区"></u-picker>
			
			<view class="login_s" @click="app_register">注册</view>
			
			<view class="agreement">
				<u-checkbox-group class="radio">
					<u-checkbox size="36" shape="circle" v-model="checked"  active-color="#1E3066"></u-checkbox>
					阅读并同意<text @click="agreement(1)">《平台服务协议》</text>及<text @click="agreement(0)">《隐私政策》</text>
				</u-checkbox-group>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				regions:'请选择',
				params: {
					province: true,
					city: true,
					area: true
				},
				province:'',//省
				city:'',//市
				area:'',//区
				checked:false,
				phone:'',
				code:'',
				pass:'',//密码
				invcode:'',//邀请码
				code_tit:'获取验证码',
				time:60,
				code_show:true,//提示语显示
				time:'',
				log_show:true ,//防抖
				cid: '',
			}
		},
		onLoad() {
			let cid = uni.getStorageSync('clientid')
			if(cid){
				this.cid = cid
				console.log(cid)
			}
			let that = this
			uni.getLocation({
				geocode:true,
				type:'wgs84',
				success: (res) => {
					console.log(res) 
					// {
					// 	"type": "WGS84",
					// 	"altitude": 0,
					// 	"latitude": 31.373744,
					// 	"longitude": 120.635994,
					// 	"speed": 0,
					// 	"accuracy": 94,
					// 	"address": {
					// 		"country": "中国",
					// 		"province": "江苏省",
					// 		"city": "苏州市",
					// 		"district": "相城区",
					// 		"street": "华元路",
					// 		"streetNum": "1201号",
					// 		"poiName": "招商银行(苏州相城支行)",
					// 		"cityCode": "0512"
					// 	},
					// 	"errMsg": "getLocation:ok"
					// }
					that.province = res.address.province
					that.city = res.address.city
					that.area = res.address.district
					that.regions =  res.address.province+'-'+ res.address.city+'-'+ res.address.district
				},fail(e) {
					console.log(e)
				}
			})
		},
		methods:{
			//获取验证码
			acquireCode(){
				if(this.phone == '' || !(/^1[3456789]\d{9}$/).test(this.phone)){
					this.com.msg('请检查手机号')
				}else{
					this.time = 60
					this.code_show = false
					let setInt = setInterval(()=>{
						if(this.time ==0){
							this.code_tit = "再次获取"
							this.code_show = true
						}else{
							this.time -=1
						}
					},1000)
					this.$api.get('messagecode',{mobile:this.phone}).then(res=>{
						console.log(res)
					})
				}
				
			},
			app_register(){
				let data = {
					mobile:this.phone,
					password:this.pass,
					note:this.code,
					bn:this.invcode,
					province:this.province,
					city:this.city,
					area:this.area,
					cid: this.cid
				}
				if(this.checked == false){
					this.com.msg('请阅读并同意下方协议')
				}else{
					if(this.log_show){
						this.$api.post('register',data).then(res=>{
							this.com.msg(res.message) 
							if(res.status == 1){
								this.log_show = false //防抖
								let date = new Date().getTime()
								let end = res.data.member_info.vip_time * 1000
								if(end  <= date){
									uni.setStorageSync("viptype", false)
								}else{
									uni.setStorageSync("viptype", true)
								}
								
								uni.setStorageSync("token",res.data.token)
								uni.setStorageSync("member_info",res.data.member_info)
								uni.setStorageSync('member_info_img',res.data.member_info.avatar)
								uni.setStorageSync('coupon',1)
								// let arr = 2
								// this.time = setInterval(()=>{
								// 	if(arr == 0){
								// 		clearInterval(this.time)
										// this.com.rel('../index/index')
								// 	}else{
								// 		arr -= 1 
								// 	}
								// },1000)
							}else{
								this.com.msg(res.message) 
							}
						})
					}
					
				}
			},
			//协议
			agreement(e){
				if(e==1){
					this.com.navto("./fuwu")
				}else{
					this.com.navto("./yinsi")
				}
			},
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
		padding: 50rpx;
		.title{
			width: 100%;
			font-size: 36rpx;
			color: #293C79;
			font-weight: bolder;
			margin:50rpx 0;
		}
		.write{
			width: 100%;
			display: flex;align-items: center;
			justify-content: space-between;
			height: 100rpx;
			align-items: center;
			border-bottom: 1rpx solid #dedede;
			margin-top: 20rpx;
			input{
				font-size: 28rpx;
			}
			.give{
				line-height: 50rpx;
				padding:0rpx 20rpx;
				border: 2rpx solid #293C79;
				color: #293C79;
				border-radius: 35rpx;
				font-size: 24rpx;
			}
			.choose{
				height: 100rpx;
				display: flex;
				align-items: center;
				color: #999;
				.u-icon{
					margin-left: 10rpx;
				}
			}
		}
		.login_s{
			width: 100%;
			height: 72rpx;
			text-align: center;
			line-height: 72rpx;
			border-radius: 50rpx;
			background-color: #1E3066;
			color: #fff;
			margin-top: 100rpx;
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
