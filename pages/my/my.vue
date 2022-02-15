<template>
	<view>
		<!-- 头部 -->
		<view class="header" :style="{ 'background-color': backgroundColor }">
			<view class="rig" >
				<view class="rig-t" style="margin-right: 40rpx;" @click="go_pages('./setting')">
					<u-icon name="setting" size="40"></u-icon>
					<text>设置</text>
				</view>
				<view class="rig-t" @click="go_pages('../information/information')">
					<u-icon name="chat" size="40"></u-icon>
					<text>消息</text>
				</view>
			</view>
			<view class="header_va">
			</view>
		</view>
		<!-- 内容 -->
		<view class="my_cont">
			<!-- //个人 -->
			<view class="userinfo">
				<view class="userinfo_ch">
					<view class="userinfo_img" @click="go_pages('./user_text')">
						<!-- <image :src="menber.avatar" class="user_imga" mode=""></image> -->
						<image  :src="menber.avatar" class="user_imga" 
						mode="aspectFill"></image>
						<image src="https://zuanshi.semoh.cn/applet_static/userimg.png" class="user_imgb" 
						v-if="lv == 1" mode="widthFix"></image>
						<image src="https://zuanshi.semoh.cn/applet_static/my/chengshi.png" class="user_imgb" 
						v-if="lv == 3" mode="widthFix"></image>
						<image src="https://zuanshi.semoh.cn/applet_static/my/quyu.png" class="user_imgb" 
						v-if="lv == 2" mode="widthFix"></image>
					</view>
					<template v-if="islogin">
						<view class="userinfo_text">
							<view class="text_top">
								<view class="user_name"> {{name_mobile}} </view>
								<view class="user_qda" v-if="!menber.if_sign" @click="qiandao(1)"><u-icon name="order"></u-icon>立即签到</view>
								<view class="user_qda" v-else @click="qiandao(2)"><u-icon name="checkmark-circle"></u-icon> 今日已签到</view>
							</view>
							<view class="user_phone" >
								手机号：<text v-if="menber.mobile">{{test(menber.mobile)}}</text> 
									  <text v-else>————</text> 
							</view>
							<view class="user_invite">
								<view class="inviter" @click="qrcode_show = true">
									<text>邀请二维码</text>
									<u-icon name="arrow-right" color="#666"></u-icon>
								</view>
								<view class="inviter" @click="copy_yqm(menber.bn)">
									<text>复制邀请码</text>
									<u-icon name="arrow-right" color="#666"></u-icon>
								</view>
								<view class="inviter" @click="my_yaoq">
									<text>我的邀请人</text>
									<u-icon name="arrow-right" color="#666"></u-icon>
								</view>
							</view>
						</view>
					</template>
					<template v-else>
						<view class="notlogin" @click="skiplogin">
							<text>登录/注册</text>
						</view>
					</template>
				</view>
				<!-- 统计 -->
				<view class="statistics">
					<!-- <view class="statistics_it" @click="go_pages('./collect')">
						<view class="it_num">{{menber.collect}}</view>
						<view class="it_name u-font-13">我的收藏</view>
					</view>
					<view class="statistics_it" @click="go_pages('./my_footprint')">
						<view class="it_num">{{menber.history}}</view>
						<view class="it_name u-font-13">我的足迹</view>
					</view>
					<view class="statistics_it" @click="go_pages('./discontcoupon')">
						<view class="it_num">{{menber.coupon}}</view>
						<view class="it_name u-font-13">优惠券</view>
					</view>
					<view class="statistics_it" @click="go_pages('./gold')">
						<view class="it_num">{{menber.gold}}</view>
						<view class="it_name u-font-13">我的金币</view>
					</view> -->
					<view class="statistics_it" @click="go_pages(item.url)" v-for="(item,stat) in myInfoList" :key="stat">
						<view class="it_num" v-if="stat==0">{{menber.collect}}</view>
						<view class="it_num" v-if="stat==1">{{menber.history}}</view>
						<view class="it_num" v-if="stat==2">{{menber.coupon}}</view>
						<view class="it_num" v-if="stat==3">{{menber.gold}}</view>
						<view class="it_name u-font-13">{{item.name}}</view>
					</view>
				</view>
				<!-- 会员 -->
				<view class="posi_hy" v-if="huiy_show">
					<view class="posi_hy_it" @click="go_pages('./vip_member')">
						<view class="min-box">
							<image class="imageb" src="https://zuanshi.semoh.cn/applet_static/my/hiuy.png" mode="widthFix" ></image>
						</view>
						<view class="">
							<text class="u-m-r-6 u-font-13">我的会员</text>
							<u-icon name="arrow-right" color="#8a94b2" size="24"></u-icon>
						</view>
					</view>
					<view class="posi_hy_it">
						<view class="min-box" @click="skipSetShop">
							<image class="imagea" src="https://zuanshi.semoh.cn/applet_static/my/dianpu.png" mode="widthFix"></image>
							<text class="u-font-13 u-m-l-10">店铺管理</text>
						</view>
						<view class="" @click="skipShopGoldPrice">
							<text class="u-m-r-6 u-font-13">商城金价</text>
							<u-icon name="arrow-right" color="#8a94b2" size="24"></u-icon>
						</view>
					</view>
					<view class="posi_hy_it">
						<view class="min-box" @click="skipTalk">
							<image class="imagea" src="https://zuanshi.semoh.cn/applet_static/my/dianpu.png" mode="widthFix"></image>
							<text class="u-font-13 u-m-l-10">引流拓客</text>
						</view>
						<view class="" @click="skipCommunity">
							<text class="u-m-r-6 u-font-13">社区营销</text>
							<u-icon name="arrow-right" color="#8a94b2" size="24"></u-icon>
						</view>
					</view>
				</view>
				<!-- 非会员 -->
				<view class="posi_hy" v-if="!huiy_show">
					<view class="posi_hy_it" @click="go_pages('./vip_member')">
						<view class="min-box">
							<image class="imageb" src="https://zuanshi.semoh.cn/applet_static/my/kaitunhy.png" mode="widthFix" ></image>
						</view>
						<view class="">
							<text class="u-m-r-6 u-font-13">自购省分享赚</text>
							<u-icon name="arrow-right" color="#8a94b2" size="24"></u-icon>
						</view>
					</view>
					<view class="posi_hy_it">
						<view class="min-box">
							<image class="imagea" src="https://zuanshi.semoh.cn/applet_static/my/dianpu.png" mode="widthFix"></image>
							<text class="u-font-13 u-m-l-10">独立店铺</text>
						</view>
						<view class="">
							<text class="u-m-r-6 u-font-13">金价可控</text>
							<u-icon name="arrow-right" color="#8a94b2" size="24"></u-icon>
						</view>
					</view>
					<view class="posi_hy_it">
						<view class="min-box">
							<image class="imagea" src="https://zuanshi.semoh.cn/applet_static/my/dianpu.png" mode="widthFix"></image>
							<text class="u-font-13 u-m-l-10">订单回流</text>
						</view>
						<view class="">
							<text class="u-m-r-6 u-font-13">一件代发</text>
							<u-icon name="arrow-right" color="#8a94b2" size="24"></u-icon>
						</view>
					</view>
					
				</view>
			</view>
			<!-- //订单 -->
			<view class="padding_cont">
				<view class="orders">
					<view style="display: flex;justify-content: space-between;margin-bottom: 10rpx;"  @click="go_order(0,0)">
						<view style="font-weight: bold;">
							<text>我的订单</text>
						</view>
						<view style="color: #999;display: flex;align-items: center;">
							<text class="u-font-12 u-m-r-6">全部订单</text>
							<u-icon name="arrow-right" color="#999" size="24"></u-icon>
						</view>
					</view>
					<view style="display: flex;align-items: center;">
						<view class="orders_it" v-for="(it,ind) in order" :key="ind"  @click="go_order(it.type,it.ind)">
							<view class="images">
								<image :src="it.img" mode="widthFix"></image>
							</view>
							<view class="u-font-12" style="color: #666;">
								{{it.name}}
							</view>
						</view>
					</view>
				</view>
				<!-- //钱包 -->
				<view class="orders_b" @click="go_pages('./wallets')">
					<view style="display: flex;justify-content: space-between;margin-bottom: 20rpx;">
						<view style="display: flex;align-items: center;">
							<image src="https://zuanshi.semoh.cn/applet_static/my/wellet.png" mode="widthFix"></image>
							<text>我的钱包</text>
						</view>
						<view style="color: #999;display: flex;align-items: center;">
							<text class="u-font-12 u-m-r-6">查看收益</text>
							<u-icon name="arrow-right" color="#999" size="24"></u-icon>
						</view>
					</view>
					<view style="display: flex;align-items: center;">
						<view class="orders_it" v-for="(it,ind) in wallet" :key="ind">
							<view class="it_num">
								{{it.num}}
							</view>
							<view class="u-font-12" style="color: #666;">
								{{it.name}}
							</view>
						</view>
					</view>
				</view>
				<!-- //我的团队 -->
				<view class="orders_c">
					<view class="orders_c_child" @click="go_pages('./my_team')"> 
						<view style="display: flex;justify-content: space-between;margin-bottom: 20rpx;">
							<view style="display: flex;align-items: center;">
								<image src="https://zuanshi.semoh.cn/applet_static/my/tuandui.png" mode="widthFix"></image>
								<text>我的团队</text>
							</view>
						</view>
						<view style="display: flex;justify-content: space-around;">
							<view class="orders_it" style="border-right: 1rpx solid #f6dc9c;">
								<view class="it_num">
									{{menber.team || 0}}人
								</view>
								<view class="u-font-12 u-m-t-10" style="color: #666;">
									累计
								</view>
							</view>
							<view class="orders_it">
								<view class="it_num">
									{{menber.today_team || 0}}人
								</view>
								<view class="u-font-12 u-m-t-10" style="color: #666;">
									今日新增
								</view>
							</view>
						</view>
					</view>
					<!-- //城市 -->
					<view class="orders_c_child">
						<view style="display: flex;justify-content: space-between;margin-bottom: 20rpx;">
							<view style="display: flex;align-items: center;">
								<image src="https://zuanshi.semoh.cn/applet_static/my/city.png" mode="widthFix"></image>
								<text>城市合伙人中心</text>
							</view>
						</view>
						<view class="order_childs_a" v-if="partner" @click="go_pages('./city_partnerCenter')">
							<view class="orders_it" style="border-right: 1rpx solid #f6dc9c;">
								<view class="it_num">
									{{memberpar.partner_member || 0}}人
								</view>
								<view class="u-font-12 u-m-t-10" style="color: #666;">
									累计
								</view>
							</view>
							<view class="orders_it">
								<view class="it_num">
									{{memberpar.commission || 0}}
								</view>
								<view class="u-font-12 u-m-t-10" style="color: #666;">
									本月收益
								</view>
							</view>
						</view>
						<!-- 非 -->
						<view class="order_childs_a" v-if="!partner">
							<view class="orders_it" style="border-right: 1rpx solid #f6dc9c;">
								<view class="it_num">
									{{menber.city_count}}市
								</view>
								<view class="u-font-12 u-m-t-10" style="color: #666;">
									已申请
								</view>
							</view>
							<view class="orders_it" @click="go_pages_pros(menber.if_partner)">
								<view class="it_num_but">
									立即加入
								</view>
								<view class="u-font-12 u-m-t-10" style="color: #666;">
									诚邀加盟
								</view>
							</view>
						</view> 
					</view>
				</view>
				<!-- 店铺管理 -->
				<zs-store-admin :skip='huiy_show' :jinx="jinx" :islogin="islogin" :store_admin="store_admin"></zs-store-admin>
				<!-- 综合管理 -->
				<zs-synth-admin @zh_guan='zh_guan'></zs-synth-admin>
				
			</view>
			<!-- 为您推荐 -->
			<image class="tuij" src="https://zuanshi.semoh.cn/applet_static/my/tuijain_bgimg.png" mode=""></image>
			<!-- 商品列表 -->
			<view style="position: relative;padding: 0 2%;">
				<zs-shopping-list :shop_list="shop_tuij" :lv="lv"></zs-shopping-list>
			</view>
		</view>
		<!-- 签到 -->
		<zs-popup v-if="qd_show" :king="'金币'" :king_nam="'+'+ gold_nums" :bgimage="bgimage" @nopop="no_pop"></zs-popup>
		<!-- //二维码 -->
		<zs-popup v-if="qrcode_show" :bgimage="qrcode_image" @nopop="no_pop"></zs-popup>
		<!-- 我的邀请人 -->
		<u-popup v-model="show" mode="center">
			<view class="my_yaoq">
				<view class="my_yaoq_name">
					邀请人: {{menber.recommend_name}}
				</view>
				<view class="my_yaoq_phone">
					联系电话: {{menber.recommend_phone}}
				</view>
				<view class="my_yaoq_typebut">
					<view @click="show = false">	
						返回
					</view>
					<view @click="kao_yqr(menber.recommend_phone)">
						拨打电话
					</view>
				</view>
			</view>
		</u-popup>
		<!-- 邀请码 -->
		<u-popup v-model="invitCode" mode="center">
			<view class="invit_code">
				{{menber.bn}}
			</view>
		</u-popup>
		<!-- 分享 -->
		<!-- <zs-share ref="share" @shaer_app="shaer_app" :contentHeight="400" :hasTabbar="true"></zs-share> -->
		<!-- tabbar -->
		<zs-tabbar :tab_ind="5"></zs-tabbar>
		<!-- tabbar -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				partner:true,
				gold_nums:0,
				commercial_count:0,
				backgroundColor:"",//导航背景
				huiy_show:false,//会员状态
				invitCode:false, //邀请码
				show:false,//我的邀请人
				bgimage:'https://zuanshi.semoh.cn/applet_static/my/qiandao.png',
				qd_show:false,//popup组件显示
				qiandao_if:false,//签到按钮状态
				qrcode_show:false,//二维码显示
				qrcode_image:'',
				myInfoList:[
					{id:0,name:'我的收藏',url:'./collect'},
					{id:0,name:'我的足迹',url:'./my_footprint'},
					{id:0,name:'优惠券',url:'./discontcoupon'},
					{id:0,name:'我的金币',url:'./gold'},
				],
				order:[
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/daifu.png',
						name:'待付款',type:10,ind:1
					},
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/daifa.png',
						name:'待发货',type:20,ind:2
					},
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/daishou.png',
						name:'待收货',type:30,ind:3
					},
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/daipinj.png',
						name:'待评价',type:40,ind:4
					},
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/shouhou.png',
						name:'售后',type:60,ind:6
					},
				],
				wallet:[
					{
						num:0,
						name:"待返利(元)"
					},
					{
						num:0,
						name:"可提现(元)"
					},
					{
						num:0,
						name:"累计返现(元)"
					}
				],
				menber:'',//个人信息
				shop_tuij:'',
				jinx:'',
				memberpar:'',//业绩
				name_mobile:'',
				lv: 0,
				islogin: false,
				store_admin:[
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/my_store.png',
						name:"我的店铺",
						type: 1
					},
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/store_order.png',
						name:"店铺订单",
						type: 1
					},
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/store_shez.png',
						name:"店铺设置",
						type: 1
					},
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/pram_kingstore.png',
						name:"推广店铺",
						type: 1
					},
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/king_priceshare.png',
						name:"金价分享",
						type: 1
					},
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/tuoke.png',
						name:"引流拓客",
						type: 1
					},
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/shejiao.png',
						name:"社交营销",
						type: 1
					},
					{
						img:'https://zuanshi.semoh.cn/applet_static/my/zhuanti.png',
						name:"精选专题",
						type: 1
					}
				],
			}
		},
		//下拉刷新
		onPullDownRefresh(){
			this.page_info()
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 1000);
		},
		//页面滑动
		onPageScroll(e){
			this.backgroundColor = 'rgba(255,220,89, ' + e.scrollTop / 80 + ')'
		},
		onReady() {
			uni.hideTabBar()
		},
		onShow() {
			let a = uni.getStorageSync('token')
			if (a) {
				this.islogin = true
				this.page_info()
				this.jinx = uni.getStorageSync('jinx')
			}
		},
		methods: {
			// 跳转登录
			skiplogin(){
				this.com.navto('/pages/login/login')
			},
			//综合管理
			zh_guan(e){
				if (!this.islogin) {
					uni.showModal({
						content:'您还未登录，是否登录？',
						success(aq) {
							if(aq.confirm){
								uni.navigateTo({
									url:'/pages/login/login'
								})
							}
						}
					})
					return
				}
				if(e==0){
					// #ifdef MP-WEIXIN
					this.wxShare();
					// #endif
					// #ifdef APP
					uni.share({
					    provider: "weixin",
					    scene: "WXSceneSession",
					    type: 0,
					    href: 'https://zuanshi.semoh.cn/smsj/index.html#/pages/index/share?invcode=' + this.menber.bn,
					    title: '奢美饰界',
					    summary: "我在奢美饰界发现好物，快来看看！",
					    imageUrl: 'https://zuanshi.semoh.cn/applet_static/logos.jpg',
					    success: function (res) {
							console.log(res)
					    },fail: function (err) {
							console.log(err)
					    }
					}); 
					// #endif
				}else if(e==1){
					this.com.navto('../community/platform-ask')
				}else if(e==2){
					this.com.navto('../my/olie_course')
				}else if(e==3){
					this.com.navto('../my/fankui')
				}else if(e==4){
					this.com.navto('../my/aboutus')
				}else if(e==5){
					this.com.navto('../service/service')
				}else if(e==6){
					this.com.navto('../community/platform-gold-prices')
				}
			},
			//手机号
			test(a){
				a = "" + a
				let arr = a.split("")
				arr.splice(3,4,"****")
				return arr.join("")
			},
			page_info(){
				this.$api.get('member').then(res=>{
					console.log(res)
					// console.log(res.data.commercial_count)
					if(res.status == 1){
						if (res.data.commercial_count) {
							this.store_admin[1].type = 2
						}
						this.lv = res.data.lv
						let date = new Date().getTime()
						let end = res.data.vip_time * 1000
						if(end  <= date){
							this.huiy_show = false
							uni.setStorageSync("viptype", false)
						}else{
							this.huiy_show = true
							uni.setStorageSync("viptype", true)
						}
						uni.setStorageSync("member_info",res.data)
						uni.setStorageSync('menber_json',res.data)
						
						// 合伙人
						if(res.data.if_partner != 1){
							this.partner = false
						}else{
							this.partner = true
						}
						if(res.data.nickname == res.data.mobile){
							this.name_mobile = res.data.nickname.replace(/(\d{3})(\d{4})(\d{4})/,'$1****$3')
						}
						this.menber = res.data
						this.qrcode_image = res.data.qrcode
						this.wallet = [
							{
								num:res.data.rebate_money,
								name:"待返利(元)"
							},
							{
								num:res.data.money,
								name:"可提现(元)"
							},
							{
								num:res.data.total_money,
								name:"累计返现(元)"
							}
						]
						this.$api.get('memberpartner').then(res=>{
							console.log(res)
							if(res.status==1){
								this.memberpar = res.data
							}
						})
						//推荐商品
						this.$api.get('hotgoods').then(res=>{
							console.log(res)
							if(res.status == 1){
								this.shop_tuij = res.data
							}
						})
					}
				})
			},
			//订单详情
			go_order(e,ind){
				if (!this.islogin) {
					uni.showModal({
						content:'您还未登录，是否登录？',
						success(aq) {
							if(aq.confirm){
								uni.navigateTo({
									url:'/pages/login/login'
								})
							}
						}
					})
					return
				}
				this.com.navto('./order?state='+e+'&index='+ind)
			},
			//页面跳转
			go_pages(e){
				if (!this.islogin) {
					uni.showModal({
						content:'您还未登录，是否登录？',
						success(aq) {
							if(aq.confirm){
								uni.navigateTo({
									url:'/pages/login/login'
								})
							}
						}
					})
					return
				}
				this.com.navto(e)
			},
			go_pages_pros(e){
				console.log(e)
				if (!this.islogin) {
					uni.showModal({
						content:'您还未登录，是否登录？',
						success(aq) {
							if(aq.confirm){
								uni.navigateTo({
									url:'/pages/login/login'
								})
							}
						}
					})
					return
				}
				if(e == 2 || e == 3){
					this.com.navto('./goto_vip')
				}else if(e == 0){
					this.com.msg('正在审核中~')
				}
			},
			//我的邀请人
			my_yaoq(){
				this.show = true
			},
			// 联系邀请人
			kao_yqr(e){
				uni.makePhoneCall({
					phoneNumber:e
				})
			},
			//签到
			qiandao(e){
				if (!this.islogin) {
					uni.showModal({
						content:'您还未登录，是否登录？',
						success(aq) {
							if(aq.confirm){
								uni.navigateTo({
									url:'/pages/login/login'
								})
							}
						}
					})
					return
				}
				if(e==1){
					this.qd_show = true
					this.$api.put('gold').then(res=>{
						console.log(res)
						this.gold_nums = res.message
						this.page_info()
					})
				}else{
					this.com.msg('您已经签到过了')
				}
			},
			//关闭组件
			no_pop(){
				this.qd_show = false
				this.qrcode_show = false
			},
			copy_yqm(e){
				console.log(e)
				// this.qrcode_show = true
				this.invitCode = true
				uni.setClipboardData({
				    data: e,
				    success: function () {
				        console.log('success');
				    }
				});
			},
			skipSetShop(){
				if (!this.islogin) {
					uni.showModal({
						content:'您还未登录，是否登录？',
						success(aq) {
							if(aq.confirm){
								uni.navigateTo({
									url:'/pages/login/login'
								})
							}
						}
					})
					return
				}
				uni.navigateTo({
					url:'../set-shop/set-shop'
				})
			},
			skipShopGoldPrice(){
				if (!this.islogin) {
					uni.showModal({
						content:'您还未登录，是否登录？',
						success(aq) {
							if(aq.confirm){
								uni.navigateTo({
									url:'/pages/login/login'
								})
							}
						}
					})
					return
				}
				uni.navigateTo({
					url:'../set-shop/shop-gold-price'
				})
			},
			skipTalk(){
				if (!this.islogin) {
					uni.showModal({
						content:'您还未登录，是否登录？',
						success(aq) {
							if(aq.confirm){
								uni.navigateTo({
									url:'/pages/login/login'
								})
							}
						}
					})
					return
				}
				uni.navigateTo({
					url:'../community/talk'
				})
			},
			skipCommunity(){
				if (!this.islogin) {
					uni.showModal({
						content:'您还未登录，是否登录？',
						success(aq) {
							if(aq.confirm){
								uni.navigateTo({
									url:'/pages/login/login'
								})
							}
						}
					})
					return
				}
				uni.navigateTo({
					url:'../community/community'
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #f6f6f6;
	}
</style>
<style lang="scss" scoped>
	.invit_code{
		width: 300rpx;
		height: 300rpx;
		background-color: #FFFFFF;
		line-height: 300rpx;
		border-radius: 100rpx;
		text-align: center;
		font-size: 36rpx;
	}
	.tuij{
		margin-top: 16rpx;
		width: 100%;height: 80rpx;
	}
	.padding_cont{
		width: 100%;
		padding: 0 30rpx;
		
		.orders{
			padding: 20rpx;background-color: white;margin-top: 56rpx;border-radius: 20rpx;
			.orders_it{
				width: 20%;text-align: center;
				.images{
					height: 80rpx;
					display: flex;align-items: center;justify-content: center;
					image{
						width: 50rpx;
						height: auto;
					}
				}
				view{
					color: #666;
				}
				
			}
		}
		.orders_b{
			padding: 20rpx;background-color: white;margin-top: 16rpx;border-radius: 20rpx;
			image{
				width: 36rpx;
				height: auto;
				margin-right: 10rpx;
			}
			.orders_it{
				width: 33%;text-align: center;
				
				view{
					margin-top: 10rpx;
				}
				.it_num{
					font-size: 26rpx;color: #293d79;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-weight: bold;
				}
			}
		}
		.orders_c{
			width: 100%;margin-top: 16rpx;display: flex;justify-content: space-between;
			.orders_c_child{
				width: 49%;background-color: white;padding: 20rpx;border-radius: 20rpx;
				.order_childs_a{
					display: flex;align-items: center;
					.it_num_but{
						width: 80%;line-height: 38rpx;margin-left: 16rpx;
						font-size: 24rpx;
						background-color: #e45050;color: #fff;border-radius: 40rpx;
					}
				}
			}
			
			image{
				width: 36rpx;
				height: auto;
				margin-right: 10rpx;
			}
			.orders_it{
				width: 50%;text-align: center;
				.it_num{
					font-size: 26rpx;color: #293d79;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;font-weight: bold;
				}
			}
		}
		.orders_d{
			padding: 30rpx;background-color: white;margin-top: 26rpx;border-radius: 20rpx;
			background-image: url(https://zuanshi.semoh.cn/applet_static/my/dianbu_bgimage.png);
			background-size: 100% 100%;
			.orders_it{
				width: 20%;text-align: center;
				image{
					width: 70rpx;height: 60rpx; 
				}
				view{
					margin-top: 16rpx;
				}
				
			}
		}
	}
	
	//会员
	.posi_hy{
		background-color: #293d79;border-radius: 20rpx;
		display: flex;justify-content: space-around;padding-top: 6rpx;
		margin: 0 30rpx;align-items: center;padding-bottom: 6rpx;
		// position: relative;
		.imageb{
			width: 210rpx;margin-left: -60rpx;height: auto;
		}
		.posi_hy_it{
			width: 33%;text-align: center;
			.min-box{
				display: flex;align-items: center;justify-content: center;
			}
			.imagea{
				width: 30rpx;
				height: auto;
			}
			view:nth-child(1){
				color: #fff0a6;
				height: 50rpx;
				
			}
			view:nth-child(2){
				color: #8a94b2;
				height: 50rpx;
			}
		}
	}
	//数据统计
	.statistics{
		width: 100%;padding: 0 20rpx;
		margin-bottom: 20rpx;
		margin-top: 10rpx;display: flex;
		.statistics_it{
			width: 25%;text-align: center;
			.it_num{
				line-height: 50rpx;font-size: 26rpx;font-weight: bold;
			}
		}
	}
	//邀请人弹框
	.my_yaoq{
		width: 500rpx;text-align: center;
		padding: 40rpx;border-radius: 20rpx;
		.my_yaoq_name{
			font-size: 30rpx;
		}
		.my_yaoq_phone{
			line-height: 66rpx;
		}
		.my_yaoq_typebut{
			display: flex;justify-content: space-around;
			view{
				width: 170rpx;line-height: 50rpx;border-radius: 40rpx;height: 50rpx;
				font-size: 28rpx;
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
		width: 100%;padding-bottom: 136rpx;
		.userinfo{
			padding-top: 150rpx;width: 100%;height: 500rpx;
			background-image: url(https://zuanshi.semoh.cn/applet_static/my/backimg.png);
			background-size: 100% 100%;
			.userinfo_ch{
				display: flex;
			}
			.userinfo_img{
				width: 20%;height: 160rpx;margin-left: 50rpx;
				padding-top: 20rpx;
				position: relative;
				.user_imga{
					width: 120rpx;height: 120rpx;border-radius: 50%;
					background-color: #F1F1F1;
				}
				.user_imgb{
					width: 180rpx;height: auto;position: absolute;left: -44rpx;top: -36rpx;
				}
			}
			.userinfo_text{
				width: 76%;padding-right: 30rpx;margin-left: 10rpx;
				.text_top{
					height: 50rpx;
					display: flex;justify-content: space-between;align-items: center;
					.user_name{
						font-size: 28rpx;font-weight: bold;
					}
					.user_qda{
						font-size: 24rpx;
						background-color: #1d2f65;color: #e1cea5;border-radius: 40rpx;line-height: 50rpx;padding: 0 10rpx;
					}
				}
				.user_phone{
					font-size: 24rpx;line-height: 50rpx;color: #5c5743;
				}
				.user_invite{
					font-size: 24rpx;height: 50rpx;
					display: flex;align-items: center;
					.inviter{
						margin-right: 16rpx;
						// padding-left: 16rpx;
						padding: 10rpx 6rpx;
						box-sizing: border-box;
						// padding-right: 6rpx;
						line-height: 40rpx;
						background-color: #ffed9c;border-radius: 40rpx;
						text{
							// margin-right: 6rpx;
						}
					}
				}
			}
		}
	}
.header{
	position: fixed;left: 0;top: 0;
	height: 150rpx;width: 100%;
	padding: 50rpx 3% 0 3%;
	display: flex;justify-content: space-between;align-items: center;
	z-index: 999;
	.header_va{
		// font-size: 40rpx;
	}
	.rig{
		font-size: 26rpx;
		display: flex;align-items: center;
		.rig-t{
			display: flex;align-items: center;
			text{
				margin-left: 6upx;
			}
		}
	}
}
.notlogin{
	display: flex;
	align-items: center;
	font-size: 32rpx;
}
</style>
