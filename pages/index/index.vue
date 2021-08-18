<template>
	<view class="content">
		<!-- 自定义头部 -->
		<view style="position: fixed;top: 0;left: 0;z-index: 999;"
			:style="{ 'background-color': backgroundColor,'width':screenWidth + 'px'}">
			<view :style="{ height: statusBarHeight + 'px'}" />
			<!-- <view :style="{ height: height + 'px'}" /> -->
			<view class="header" :style="{'height':height + 'px' }">
				<view class="city" @click="page_my">
					<image :src="avatar || dft_photo" mode="aspectFill" class="city_a"></image>
					<image src="../../static/userimg.png" mode="widthFix" v-if="lv == 1" class="city_b"></image>
					<image src="../../static/my/chengshi.png" mode="widthFix" v-if="lv == 3" class="city_b"></image>
					<image src="../../static/my/quyu.png" mode="widthFix" v-if="lv == 2" class="city_b"></image>
					<view class="notlogin" v-show="!isLogin">未登录</view>
				</view>
				<view class="input-view" :style="{'backgroundColor' : indexbackcolor}">
					<view class="" @click="saoma">
						<uni-icons class="input-uni-icon" type="scan" size="20" color="#999999" /><text
							style="color: #999999;margin-left: 20rpx;"> ▏</text>
					</view>
					<input confirm-type="search" class="nav-bar-input" type="text" :disabled="true"
						:placeholder="search_old" @click="search(search_old)">
					<u-icon name="camera" size="40" color="#999999" @click="camear"></u-icon>
				</view>
				<view class="rig" :style="{'color': headcolor}" @click="go_pages('../information/information')">
					<u-icon name="chat" size="38" class="chat-icon"></u-icon>
					<text>消息</text>
				</view>
			</view>
		</view>
		<!-- banner部分 -->
		<view class="page_cont">
			<!-- <swiper :hidden="autoplay" :circular="true" :autoplay="true" :duration="400" :interval="3000"
				@change="swiperChange">
				<swiper-item class="swiper-item" v-for="(item,index) in shop_det.album" :key="index"
					@click="banner_cli(index)">
					<view class="image-wrapper">
						<image :src="item.img0" class="loaded" mode="aspectFill"></image>
					</view>
					<image v-if="shop_det.video && index == 0" class="bofang" src="../../static/bofang.png" mode="">
					</image>
				</swiper-item>
			</swiper> -->

			<swiper class="swiper" @change="swiperChange" 
			:autoplay="true" :circular="true" :interval="4000"
				:duration="500">
				<swiper-item class="swiper-item" v-for="(it,ind) in index_data.flash" :key="ind"
					@click="bann_nav(it,ind)">
					<image :src="it.image" mode="aspectFill"></image>
					<image v-if="it.video" class="bofang" src="../../static/bofang.png" mode="">
					</image>
				</swiper-item>
			</swiper>
			<view class="swiper-dotss">
				<text class="num">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num" v-if="index_data.flash">{{index_data.flash.length}}</text>
			</view>
			<!-- <view class="swiper-dots">
				<view :class="swiperCurrent == ind ? 'bann_h_act' : 'bann_h'" v-for="(its,ind) in index_data.flash" :key="ind"></view>
			</view> -->
		</view>
		<!-- <view class="trumpet">
			<view class="trumpettt">
				<view class="logo-box">
					<image src="../../static/index/logo11.png" mode="widthFix"></image>
					<view class="txt">
						<text>{{index_data.title}}</text>
					</view>
				</view>
				<view class="more" @click="skipAboutus">
					<text>了解更多</text>
					<u-icon name="arrow-right" size="24"></u-icon>
				</view>
			</view>
		</view> -->
		<!-- <view class="trumpet">
			<view class="trumpett">
				<u-icon name="shopping-cart-fill" color="#666" size="36"></u-icon>
				<swiper class="swiper_three" :autoplay="true" :circular="true" :interval="3000" :duration="100"
					disable-touch="true">
					<swiper-item v-for="(it,ind) in index_data.order" :key="ind">
						{{it.member}}：{{it.title}}
					</swiper-item>
				</swiper>
			</view>
		</view> -->
		<!-- 内容部分 -->
		<view class="inp_con">
			<!-- 实时金价 -->
			<view class="king_pic">
				<view class="king_pic_a">
					<zs-title :titleRed="'实时'" :title="'金价'" :page_show="true"></zs-title>
					<view class="times">
						<u-icon name="clock-fill" size="24" color="#3b4e85"
							style="margin-right: 10rpx;margin-top: 16rpx;"></u-icon>
						{{gold_price.time}}
					</view>
				</view>
				<!-- 表格 -->
				<view class="tabs">
					<view class="tabs_tr">
						<view>品种</view>
						<view>销售</view>
						<view>回购</view>
						<view>最高</view>
						<view>最低</view>
					</view>
					<view class="swipers_d">
						<view :class="ind % 2 != 0 ? 'tabs_tr' :'tabs_td'" 
						v-for="(it,ind) in gold_price.data"
							:key="ind">
							<view>{{it.title}}</view>
							<view>{{it.new_price}}</view>
							<view>{{it.buy_price}}</view>
							<view style="color: #f5553f;">{{it.max_price}}</view>
							<view style="color: #5cb671;">{{it.min_price}}</view>
						</view>
					</view>
				</view>
			</view>
			<!-- 九宫格 -->
			<view class="nine_g">
				<view class="nine_g_child" 
				v-for="(it,ind) in index_data.label" 
				:key="ind" v-if="ind <= 7"
					@click="go_textrue(it.id)">
					<view class="nine_g_child_tit">
						{{it.title}}
					</view>
					<view class="nine_g_child_cla">
						{{it.remark}}
					</view>
					<image :src="it.image" mode="aspectFill"></image>
				</view>
			</view>
			<!-- 活动专区 -->
			<view class="seckill-section" :page_show="index_data.type_seconds_kill == 0 || index_data.type_group == 0">
				<zs-title :title="'活动专区'"></zs-title>
				<view v-if="index_data.type_seconds_kill ==1">
					<view class="s-header" @click="go_pages('./seckill')">
						<view class="s-header_a">
							<image class="s-img" src="/static/xians_seckill.png" mode="widthFix"></image>
							<view class="s-header_child">
								<text class="hour timer">{{end_seckill}}</text>
							</view>
						</view>
						<view style="color: #999999;font-size: 22rpx;">
							更多好货 <u-icon name="arrow-right"></u-icon>
						</view>
					</view>
					<scroll-view class="floor-list" scroll-x>
						<view class="scoll-wrapper">
							<view v-for="(item, index) in index_data.kill.data" :key="index" class="floor-item"
								@click="go_shopdetail(item.id)">
								<image :src="item.image" mode=""></image>
								<view class="title">￥{{item.price}}</view>
								<!-- <view class="price">￥{{ item.price_make }}</view> -->
							</view>
						</view>
					</scroll-view>
				</view>
				<!-- 团购 -->
				<view v-if="index_data.type_group ==1">
					<view class="s-header" @click="go_pages('./group_book')">
						<view class="s-header_a">
							<image class="s-img" src="/static/roll.png" mode="widthFix"></image>
							<view class="s-header_child">
								<text class="hour timer">物有所值</text>
							</view>
						</view>
						<view style="color: #a6a6a6;font-size: 24rpx;">
							更多好货 <u-icon name="arrow-right"></u-icon>
						</view>
					</view>
					<scroll-view class="floor-list" scroll-x>
						<view class="scoll-wrapper">
							<view v-for="(item, index) in index_data.group" :key="index" class="floor-item"
								@click="go_teamshop(item.id)">
								<image :src="item.image" mode="aspectFill"></image>
								<view class="title">￥{{item.price}}</view>
								<!-- <view class="price">￥{{ item.price_make }}</view> -->
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
			<!-- 拼团 -->

			<!-- 每周上新 -->
			<view class="seckill-section_mz">
				<zs-title :title="'每周上新'" :page_show="true"></zs-title>
				<swiper class="swiper_two" @change="swiperChange_b" :autoplay="true" :circular="true" :interval="4000"
					:duration="500">
					<swiper-item v-for="(it,ind) in index_data.news" :key="ind" style="height: 540rpx;"
						@click="news_shop(it.shop_goods_id)">
						<image :src="it.image" mode="aspectFill"></image>
						<view class="swiper_item_tit">
							{{it.title}}
						</view>
						<view class="swiper_item_cont">
							<u-parse :html="it.content"></u-parse>
						</view>
					</swiper-item>
				</swiper>
				<view class="swiper-dots">
					<view :class="swiperCurrent_b == ind ? 'bann_h_act' : 'bann_h'" v-for="(its,ind) in index_data.news"
						:key="ind"></view>
				</view>
			</view>
			<!-- 精选专题 -->
			<view class="choiceness">
				<view class="choiceness_child">
					<view class="choiceness_item" 
					v-for="(it,ind) in index_data.zhuanti" 
					:key="ind"
						@click="special_cli(it.id,it.title)" v-if="ind <= 4">
						<image :src="it.image" mode="aspectFill"></image>
						<view class="item_tit">
							{{it.title}}
						</view>
						<view class="item_cla">
							{{it.remark}}
						</view>
					</view>
				</view>
			</view>
			<!-- 筛选 -->
			<scroll-view class="scroll-view_H" scroll-x="true">
				<view id="demo1" class="nav_swiper" :class="{active: it.id == nav_ind }" 
				@click="nac_cla(it.id)"
					v-for="(it,ind) in index_data.cates" :key="ind">
					{{it.title}}
				</view>
			</scroll-view>
			<!-- 商品列表 -->
			<!-- <zs-shopping-list></zs-shopping-list> -->
		</view>
		<view class="classify">
			<zs-shoplist-type :shop_list="shop_list1" :lists="list" :cate_fist_id="nav_ind" :shop_subject_id="''"
				@shop_confim="shop_confim" :lv="lv"></zs-shoplist-type>
				<view class=""
				style="height: 100rpx;display: flex;align-items: center;justify-content: center;" 
				v-if="shop_list1.length > 0">
					{{ loadingText }}
				</view>

		</view>
		<drag-button :isDock="true" :existTabBar="true" @btnClick="go_pages('../service/service')" />
		<!-- tabbar -->
		<zs-tabbar :tab_ind="1"></zs-tabbar>
		<!-- <zs-tabbar-all></zs-tabbar-all> -->
		<!-- tabbar -->
		<!-- /普通优惠券 -->
		<zs-coupon-put v-if="ptcoupon" :list="coupon_data" @nopop="nopop"></zs-coupon-put>
		<!-- //新人优惠券 -->
		<zs-coupon-xr v-if="xrcoupon" :list="coupon_data" @nopop="nopop"></zs-coupon-xr>
		<!-- 视频播放弹窗 -->
		<view class="video-popup" v-if="videoShow" @click="zanting" @touchmove.prevent>
			<view class="video">
				<video id="myVideo" :src="video_url" :autoplay="true" loop show-play-btn controls
					objectFit="cover" @pause="zanting1" @ended="zanting1"></video>
			</view>
		</view>
	</view>
</template>

<script>
	// import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	// import dragButton from "@/components/drag-button/drag-button.vue";
	export default {
		data() {
			return {
				height: '50',
				puytcopup: 0, //普通优惠券
				tops: 0,
				swiperCurrent: 0,
				swiperCurrent_b: 0,
				backgroundColor: '', //标题栏背景色
				headcolor: '#fff', //消息颜色
				indexbackcolor: 'rgba(255,2555,255,0.2)', //导航栏搜索框背景色
				end_time: '', //秒杀到期
				end_seckill: '00:00:00:00', //倒计时
				nav_ind: 0, //导航
				show: true,
				value1: 1,
				index_data: '', //首页数据
				shop_list1: [],
				list: '',
				huiy_show: false, //会员状态
				lv: 0,
				member: '',
				avatar: '',
				gold_price: [],
				coupon_data: '',
				ptcoupon: false, //普通优惠券状态
				xrcoupon: false, //新人优惠券状态
				second: '',
				dft_photo: '../../static/tabbar/shopsale.png',
				isLogin: false,
				search_old: '商品搜索', //搜索历史
				videoShow: false,
				video_url: '',
				autoplay: false,
				current_page: 1,
				last_page: 1,
				loadingText: '上拉加载更多',
			}
		},
		onPageScroll(e) {
			// 重点，用到滑动切换必须加上
			// this.$refs.hxnb.pageScroll(e);
			// console.log(e)
			this.backgroundColor = 'rgba(255,255,255,' + e.scrollTop / 180 + ')'
			this.headcolor = 'rgba(0,0,0,' + e.scrollTop / 180 + ')'
			this.indexbackcolor = 'rgba(248,248,248,' + e.scrollTop / 180 + ')' //导航栏搜索框背景色
			if (e.scrollTop < 40) {
				this.headcolor = '#fff'
				this.indexbackcolor = 'rgba(255,2555,255,0.2)' //导航栏搜索框背景色
			}
		},
		onReachBottom() {
			if(this.current_page === this.last_page){
				this.loadingText = '没有更多了'
				return
			}
			if(this.loadingText === '正在加载中...'){
				return
			}
			this.loadingText = '正在加载中...'
			this.current_page = this.current_page + 1
			this.get_data(this.nav_ind)
		},
		// components: {uniNavBar},
		onUnload() {
			uni.setStorageSync('coupon', 0)
		},
		onReady() {
			// uni.hideTabBar()
		},
		onLoad() {
			let a = uni.getStorageSync("token")
			// console.log(a)
			if (!a) {
				this.isLogin = false
			} else {
				this.isLogin = true
			}
			//头像
			this.member = uni.getStorageSync('member_info_img')
			this.ent_time_s() //倒计时
			this.page_render()
		},
		onShow() {
			//获取会员状态
			let b = uni.getStorageSync('member_info')
			if (b) {
				this.avatar = b.avatar
				this.lv = b.lv
				console.log(this.lv)
				this.member = uni.getStorageSync('member_info_img')
				// console.log(this.member)
			}
			let vip = uni.getStorageSync('viptype')
			// 会员
			if (vip) {
				this.huiy_show = true
			} else {
				this.huiy_show = false
			}
			this.puytcopup = uni.getStorageSync('coupon')
			if (this.puytcopup == 0) {
				this.coupon(this.puytcopup)
			} else {
				this.coupon(this.puytcopup)
			}
			if (uni.getStorageSync('neirong')) {
				let arr = uni.getStorageSync("neirong")
				console.log(JSON.parse(arr))
				this.search_old = JSON.parse(arr)[0]
			}
		},
		onPullDownRefresh() {
			this.member = uni.getStorageSync('member_info_img')
			this.page_render()
		},
		computed: {
			//获取系统状态栏高度
			statusBarHeight() {
				var that = this;
				return uni.getSystemInfoSync().statusBarHeight
			},
			navbarHeight() {
				var that = this;
				return uni.getSystemInfoSync().statusBarHeight + that.height + 'px'
			},
			screenWidth() {
				return uni.getSystemInfoSync().screenWidth;
			}
		},
		methods: {
			// 顶部导航栏点击按钮
			onClickBtn(data) {
				//console.log(data);
				uni.showToast({
					title: `key为 ${data.key} 的按钮`,
					icon: 'none',
					duration: 1300
				});
			},
			// 当输入完点击完成时触发
			searchConfirm(data) {
				//console.log(data.value);
				uni.showToast({
					title: `输入了${data.value}`,
					icon: 'none',
					duration: 1300
				});
			},
			// 当点击了搜索框时触发
			searchClick(data) {
				uni.showToast({
					title: `点击了搜索框`,
					icon: 'none',
					duration: 1300
				});
			},
			page_render() {
				this.$api.get('index').then(res => {
					// console.log(res.data)
					this.nac_cla(res.data.cates[0].id)
					if (res.status == 1) {
						this.index_data = res.data
						this.end_time = res.data.kill.title_end
						this.nav_ind = res.data.cates[0].id
						uni.setStorageSync('jinx', this.index_data.zhuanti) //精选专题
						this.ent_time_s() //倒计时
						uni.stopPullDownRefresh()
					}
				})
				//实时金价
				this.$api.get('gold_price').then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.gold_price = res
					}
				})
			},
			//轮播 跳转
			bann_nav(e, i) {
				console.log(e)
				console.log(i)
				this.video_url = e.video
				if (!this.video_url) {
					if (e.url) {
						plus.runtime.openURL(e.url);
					}
				} else {
					this.videoShow = true
				}
			},
			// 关闭视频弹窗
			zanting() {
				this.videoShow = false
			},
			// 视频暂停
			zanting1() {
				this.autoplay = !this.autoplay
			},
			//弹框隐藏
			nopop() {
				this.ptcoupon = false //普通优惠券状态
				this.xrcoupon = false //新人优惠券状态
			},
			// 优惠券
			coupon(e) {
				this.$api.post('coupon', {
					type: e
				}).then(res => {
					console.log(res)
					if (res.status == 1) {
						this.coupon_data = res.data
						if (this.puytcopup == 0 && res.data.data != '') {
							this.ptcoupon = true
						}
						if (this.puytcopup == 1 && res.data.data != '') {
							this.xrcoupon = true
						}
					}
				})
			},
			//点击材质
			go_textrue(e) {
				this.com.navto('./nine_nav?id=' + e + '&data=' + JSON.stringify(this.index_data.label))
			},
			//秒杀进详情
			go_shopdetail(e) {
				if (!this.isLogin) {
					uni.showModal({
						content: '您还未登录,是否登录?',
						success: res => {
							if (res.confirm) {
								this.com.navto('/pages/login/login')
							}
						},
						fail: () => {},
						complete: () => {}
					});
					return
				}
				if (this.end_seckill == '秒杀已结束') {
					this.com.msg('本轮秒杀已经结束，请期待下一期')
				} else {
					this.com.navto('../../pages/index/Activityshop_detail?shop_id=' + e + '&type=' + 2 + '&second=' + this
						.second)
				}
			},
			//团购进详情
			go_teamshop(e) {
				if (!this.isLogin) {
					uni.showModal({
						content: '您还未登录,是否登录?',
						success: res => {
							if (res.confirm) {
								this.com.navto('/pages/login/login')
							}
						},
						fail: () => {},
						complete: () => {}
					});
					return
				}
				this.com.navto('../../pages/index/Activityshop_detail?shop_id=' + e + '&type=' + 1)
			},
			// 确定筛选
			shop_confim(e) {
				this.$api.post('goods', e).then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.shop_list1 = res.data.data
					}
				})
			},
			//个人中心
			page_my() {
				this.com.rel('../my/my')
			},
			//页面跳转
			go_pages(e) {
				if (!this.isLogin) {
					uni.showModal({
						content: '您还未登录,是否登录?',
						success: res => {
							if (res.confirm) {
								this.com.navto('/pages/login/login')
							}
						},
						fail: () => {},
						complete: () => {}
					});
					return
				}
				this.com.navto(e)
			},
			// 搜索
			search(e) {
				if (uni.getStorageSync('neirong')) {
					this.com.navto('./search?tit=' + e + '&type=1')
				} else {
					this.com.navto('./search')
				}
			},
			//拍照
			camear() {
				// uni.chooseImage({
				// 	count: 6, //默认9
				// 	sourceType: ['camera'], //从相册选择
				// 	success: function(res) {
				// 		// console.log(JSON.stringify(res.tempFilePaths));
				// 	}
				// });
				// this.com.msg('维护中~')
			},
			//扫码
			saoma() {
				let that = this
				uni.scanCode({
					success: function(res) {
						console.log(res.result)
						that.$api.post('listpage', {
							url: res.result
						}).then(res => {
							console.log(res)
							that.com.msg(res.message)
						})
						// console.log('条码类型：' + res.scanType);
						// console.log('条码内容：' + res.result);
					}
				});
			},
			//专题点击
			special_cli(id, type) {
				//定制
				if (type == '定制专区') {
					this.com.navto('./customization')
				} else {
					this.com.navto('./Selected_topics?id=' + id + '&type=' + JSON.stringify(this.index_data.zhuanti))
				}
			},
			//轮播指示点
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
			},
			//每周上新的指示点
			swiperChange_b(e) {
				const index = e.detail.current;
				this.swiperCurrent_b = index;
			},
			//每周上线进详情
			news_shop(e) {
				this.com.navto('./shop_detail?shop_id=' + e)
			},
			//导航栏点击
			nac_cla(e) {
				this.nav_ind = e
				this.current_page = 1
				this.shop_list1 = []
				//商品
				this.get_data(this.nav_ind)
				//筛选条件
				this.$api.get('screen', {
					cate_id: this.nav_ind,
				}).then(res => {
					// console.log(res)
					if (res.status == 1) {
						this.list = res.data
					}
				})
			},
			get_data(cid){
				uni.showLoading()
				this.$api.post('goods', {
					cate_fist_id: cid,
					page: this.current_page
				}).then(res => {
					// console.log(res)
					if (res.status == 1) {
						// this.shop_list1 = []
						var a = res.data.current_page
						var b = res.data.last_page
						if (res.data.data) {
							this.last_page = res.data.last_page
							this.current_page = res.data.current_page
							this.shop_list1 = this.shop_list1.concat(res.data.data) 
							console.log(this.shop_list1)
							if (a == b) {
								this.loadingText = '没有更多了'
							} else {
								this.loadingText = '上拉加载更多'
							}
						}
						uni.hideLoading()
					} else {
						uni.hideLoading()
					}
				})
			},
			//秒杀倒计时
			ent_time_s() {
				let data = new Date()
				let state = data.getTime()
				let reslut = this.end_time * 1000 - state

				let tim = setInterval(() => {
					if (reslut <= 0) {
						clearInterval(tim)
						this.end_seckill = "秒杀已结束"
					} else {
						reslut -= 1000
						this.end_seckill = this.ss(reslut)
					}
				}, 1000)
				this.second = Math.floor(reslut / 1000)
			},
			ss(e) {
				let [day, hh, ff, ss] = [0, 0, 0, 0]
				day = Math.floor(e / 1000 / 60 / 60 / 24);
				hh = Math.floor(e / 1000 / 60 / 60 % 24)
				ff = Math.floor(e / 1000 / 60 % 60)
				ss = Math.floor(e / 1000 % 60)
				let d = day > 9 ? day : '0' + day
				let h = hh > 9 ? hh : '0' + hh
				let m = ff > 9 ? ff : `0${ff}`;
				let s = ss > 9 ? ss : `0${ss}`;
				// console.log( d+"天"+h+":"+m+":"+s)
				return d + ':' + h + ":" + m + ":" + s
			},
			skipAboutus(){
				this.com.navto('../my/aboutus')
			}
		},
	}
</script>
<style>
	page {
		background-color: #F6F6F6;
	}
</style>

<style lang="scss" scoped>
	.content {
		padding-bottom: 10upx;
	}

	.scroll-view_H {
		display: flex;
		white-space: nowrap;
		line-height: 90rpx;
		height: 90rpx;
		border-bottom: 1rpx solid #eee;

		.nav_swiper {
			width: 20%;
			text-align: center;
			font-size: 30upx;
			display: inline-block;
			position: relative;
			margin-top: -20rpx;

			&.active {
				color: #2d407a;
				font-weight: bold;

				&:before {
					content: '';
					position: absolute;
					left: 35%;
					bottom: 10%;
					transform: translateY(-50%);
					height: 7rpx;
					width: 30%;
					background-color: #2d407a;
					border-radius: 0 4px 4px 0;
					opacity: .8;
				}
			}
		}
	}

	.classify {
		width: 100%;
		margin-bottom: 150rpx;
		background-color: #F6F6F6;
		font-size: 26upx;
	}

	.video-popup {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .6);
		z-index: 999;

		.video {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;

			video {
				width: 100%;
				height: 500rpx;
			}
		}
	}

	@import './index.scss'
</style>
