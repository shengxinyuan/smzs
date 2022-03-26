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
					<image src="https://zuanshi.semoh.cn/applet_static/userimg.png" mode="widthFix" v-if="lv == 1" class="city_b"></image>
					<image src="https://zuanshi.semoh.cn/applet_static/my/chengshi.png" mode="widthFix" v-if="lv == 3" class="city_b"></image>
					<image src="https://zuanshi.semoh.cn/applet_static/my/quyu.png" mode="widthFix" v-if="lv == 2" class="city_b"></image>
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
				<!-- #ifdef MP-WEIXIN -->
				<view class="wx_right"></view>
				<!-- #endif -->
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
					<image v-if="shop_det.video && index == 0" class="bofang" src="https://zuanshi.semoh.cn/applet_static/bofang.png" mode="">
					</image>
				</swiper-item>
			</swiper> -->

			<swiper class="swiper" @change="swiperChange" :autoplay="!videoShow" :circular="true" :interval="4000"
				:duration="500">
				<swiper-item class="swiper-item" v-for="(it,ind) in index_data.flash" :key="ind"
					@click="bann_nav(it,ind)">
					<image :src="it.image" mode="aspectFill"></image>
					<image v-if="it.video" class="bofang" src="https://zuanshi.semoh.cn/applet_static/bofang.png" mode="">
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
					<image src="https://zuanshi.semoh.cn/applet_static/index/logo11.png" mode="widthFix"></image>
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
						<!-- <view>品种</view>
						<view>销售</view>
						<view>回购</view>
						<view>最高</view>
						<view>最低</view> -->
						<view class="" v-for="(item,s) in gold_sort" :key="s">
							<text>{{item.name}}</text>
						</view>
					</view>
					<view class="swipers_d">
						<view :class="ind % 2 != 0 ? 'tabs_tr' :'tabs_td'" v-for="(it,ind) in gold_price.data"
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
				<view class="nine_g_child" v-for="(it,ind) in index_data.label" :key="ind" v-if="ind <= 7"
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
							<image class="s-img" src="https://zuanshi.semoh.cn/applet_static/xians_seckill.png" mode="widthFix"></image>
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
							<image class="s-img" src="https://zuanshi.semoh.cn/applet_static/roll.png" mode="widthFix"></image>
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
					<view class="choiceness_item" v-for="(it,ind) in index_data.zhuanti" :key="ind"
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
			<scroll-view class="scroll-view_H" scroll-x="true" id="scrollView"
				:class="isTop == 1 ? 'postionTop' : ''">
				<!-- :style="isTop == 1 ? 'position:fixed;background:#ffffff;top:100rpx;z-index:50;left:0;' : ''"> -->
				<view id="demo1" class="nav_swiper" :class="{active: it.id == nav_ind }" @click="nac_cla(it.id)"
					v-for="(it,ind) in index_data.cates" :key="ind">
					{{it.title}}
				</view>
			</scroll-view>
			<!-- 商品列表 -->
			<!-- <zs-shopping-list></zs-shopping-list> -->
		</view>
		<view class="classify">
			<zs-shoplist-type :shop_list="shop_list1" :lists="list" :cate_fist_id="nav_ind" :shop_subject_id="''"
				@shop_confim="shop_confim" :lv="huiy_show" :screen_label_list="label_list" :tops="tops" :isTop="isTop"></zs-shoplist-type>
			<view class="" style="height: 100rpx;display: flex;align-items: center;justify-content: center;"
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
				<video id="myVideo" :src="video_url" :autoplay="true" loop show-play-btn controls objectFit="fill"
					@pause="zanting1" @ended="zanting1" :show-fullscreen-btn="false"></video>
			</view>
		</view>
	</view>
</template>

<script>
	// import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	// import dragButton from "@/components/drag-button/drag-button.vue";
	import workerjs from '../../worker.js';
	
	export default {
		data() {
			return {
				height: '50',
				puytcopup: 0, //普通优惠券
				tops: '190rpx',
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
				gold_sort:[
					{name:'品种'},
					{name:'销售'},
					{name:'回购'},
					{name:'最高'},
					{name:'最低'},
				],
				gold_price: [],
				coupon_data: '',
				ptcoupon: false, //普通优惠券状态
				xrcoupon: false, //新人优惠券状态
				second: '',
				dft_photo: 'https://zuanshi.semoh.cn/applet_static/tabbar/shopsale.png',
				isLogin: false,
				search_old: '商品搜索', //搜索历史
				videoShow: false,
				video_url: '',
				autoplay: false,
				filtrate: 0,
				params: [],
				current_page: 1,
				last_page: 1,
				loadingText: '上拉加载更多',
				label_list: {},

				backgroundColor1: '#FEFAFA',
				backgroundColor2: '#FEDBD8',
				bg_tr: '#FEDBD8',
				bg_td: '#FDEEEC',
				muban: 2,
				banben: '',
				isTop:0,
				myScroll:0.,
				worker:null
			}
		},
		mounted() {
			console.log('mounted 组件挂载完毕状态===============》');
			const query = uni.createSelectorQuery().in(this);
			query.select('#scrollView').boundingClientRect(data => {
			console.log("得到布局位置信息" + JSON.stringify(data));
			console.log("节点离页面顶部的距离为" + data.top);
			this.myScroll = data.top
			}).exec();
			
			// this.worker = this.$worker.run(n => n +10,[2]).then(res =>{
			// 	console.log(res);
			// }).catch(err =>{
			// 	console.log(err);
			// })
		},
		onPageScroll(e) {
			// 重点，用到滑动切换必须加上
			// this.$refs.hxnb.pageScroll(e);
			// console.log(e)
			if(e.scrollTop > this.myScroll){
				this.isTop = 1
			}else{
				this.isTop = 0
			}
			this.backgroundColor = 'rgba(255,255,255,' + e.scrollTop / 180 + ')'
			this.headcolor = 'rgba(0,0,0,' + e.scrollTop / 180 + ')'
			this.indexbackcolor = 'rgba(248,248,248,' + e.scrollTop / 180 + ')' //导航栏搜索框背景色
			if (e.scrollTop < 40) {
				this.headcolor = '#fff'
				this.indexbackcolor = 'rgba(255,2555,255,0.2)' //导航栏搜索框背景色
			}
		},
		onReachBottom() {
			if (this.current_page === this.last_page) {
				this.loadingText = '没有更多了'
				return
			}
			if (this.loadingText === '正在加载中...') {
				return
			}
			this.loadingText = '正在加载中...'
			this.current_page = this.current_page + 1
			this.params.page = this.current_page
			let params = {
				cate_fist_id: this.nav_ind,
				page: this.current_page
			}
			if (this.filtrate == 1) {
				this.get_data(this.params)
			} else {
				this.get_data(params)
			}
		},
		onUnload() {
			uni.setStorageSync('coupon', 0)
		},
		onLoad() {
			let date = new Date().getTime()
			this.ent_time_s() //倒计时
			let params = {
				cate_fist_id: this.nav_ind,
				page: this.current_page
			}
			this.get_label_list()
			this.page_render()
			
		},
		onShow() {
			let a = uni.getStorageSync("token")
			if (!a) {
				this.isLogin = false
			} else {
				this.isLogin = true
			}
			//获取会员状态
			let b = uni.getStorageSync('member_info')
			if (b) {
				this.avatar = b.avatar
				this.lv = b.lv
				// 更新会员金价
				this.updata_member_gold_price(b.id);
			}
			let vip = uni.getStorageSync('viptype')
			// 会员
			if (vip) {
				this.huiy_show = true
			} else {
				this.huiy_show = false
			}
			this.get_site()
			if (this.isLogin) {
				this.puytcopup = uni.getStorageSync('coupon')
				if (this.puytcopup == 0) {
					this.coupon(this.puytcopup)
				} else {
					this.coupon(this.puytcopup)
				}
			}
			if (uni.getStorageSync('neirong')) {
				let arr = uni.getStorageSync("neirong")
				this.search_old = JSON.parse(arr)[0]
			}
		},
		onPullDownRefresh() {
			this.get_member()
			this.page_render()
			setTimeout(function() {
				uni.stopPullDownRefresh()
			}, 1000);
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
			// 检查是否更新版本
			updateVersion(b) {
				let that = this;
			 // 热更新不会更新app的版本号
				// 这里用一个常量定义（每次修改版本号将设置里面的版本号手动更新）
				// let realVersion = '1012';
				//plus.runtime.getProperty(),获取本机安装的版本，具体使用请参照如下链接
				//https://www.html5plus.org/doc/zh_cn/runtime.html#plus.runtime.WidgetInfo

				//#ifdef APP-PLUS
				plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {
					console.log(widgetInfo);
					let newVersion = widgetInfo.version.split('.'); // 获取本机安装版本转化为数组

					let system = b;
					let currentVersion = b.split('.'); // 获取服务端版本转化为数组
					let is_update = false; // 是否更新
					console.log(is_update, '是否更新1', newVersion, currentVersion);

					// 服务端版本是否大于本地版本
					is_update = currentVersion.some((i, index) => {
						console.log(i, newVersion[index])
						return i > newVersion[index];

					})
					console.log(is_update, '是否更新2', newVersion, currentVersion);

					let downloadUrl = 'https://zuanshi.semoh.cn/download/__UNI__.wgt';
					if (is_update) {
						console.log('触发更新');
						uni.downloadFile({
							url: downloadUrl, // 下载资源的 url
							success: downloadResult => {
								console.log(downloadResult, '下载中。。。');
								if (downloadResult.statusCode === 200) {
									/* 安装应用, 要安装的文件路径(downloadResult.tempFilePath) 
									force 是否强制安装
									true表示强制安装，不进行版本号的校验；false则需要版本号校验，
									如果将要安装应用的版本号不高                
									于现有应用的版本号则终止安装，并返回安装失败。 仅安装wgt和wgtu时生效，默认值 false。
									*/
									plus.runtime.install(
										downloadResult.tempFilePath, {
											force: true
										},
										function() {
											// 应用热重启，重新启动进入首页。
											// uni.showModal({
											//   content: '部分资源已更新，重启后生效，是否立即重启？',
											//   cancelText: '稍后重启',
											//   confirmText: '立即重启',
											//   success(res) {
								 		//     console.log(res);
											//     if (res.confirm) {
								  	//       plus.runtime.restart();
											//     }
											//   }
											// });
											// uni.showModal({
								 		//   content: '部分资源已更新，重启后生效!',
											//   confirmText: '知道了',
									  //   success(res) {
											//     console.log(res);
											//   }
											// });
											is_update = false;
								 		console.log('安装成功', 'install success...');
										},
										function(e) {
											console.error('安装失败', 'install fail...');
										}
									);
								}
							}
						});
					}
				});
				// #endif
			},
			get_site() {
				this.$api.get('site').then(res => {
					if (res.status == 1) {
						this.banben = res.message.banben
						this.updateVersion(res.message.banben)
					}
				})
			},
			get_label_list() {
				this.$api.get('screen_label').then(res => {
					if (res.status == 1) {
						this.label_list = res.data
					}
				})
			},
			get_member() {
				if (this.isLogin) {
					this.$api.get('member').then(res => {
						if (res.status == 1) {
							this.lv = res.data.lv
							let date = new Date().getTime()
							let end = res.data.vip_time * 1000
							if (end <= date) {
								this.huiy_show = false
								uni.setStorageSync("viptype", false)
							} else {
								this.huiy_show = true
								uni.setStorageSync("viptype", true)
							}
							uni.setStorageSync("member_info", res.data)
							
						}
					})
				}
			},
			page_render() {
				this.$api.get('index').then(res => {
					this.nac_cla(res.data.cates[0].id)
					if (res.status == 1) {
						this.index_data = res.data
						this.end_time = res.data.kill.title_end
						this.nav_ind = res.data.cates[0].id
						uni.setStorageSync('jinx', this.index_data.zhuanti) //精选专题
						this.ent_time_s() //倒计时
					}
				})
				//实时金价
				this.$api.get('gold_price').then(res => {
					if (res.status == 1) {
						this.gold_price = res
					}
				})
			},
			updata_member_gold_price(id) {
				//实时金价
				this.$api.get('gold_price', {id});
			},
			//轮播 跳转
			bann_nav(e, i) {
				this.video_url = e.video
				if (!this.video_url) {
					if (e.is_true == 1) {
						this.com.navto('./activity_detail?id=' + e.id)
					}
					// if (e.url) {
					// 	plus.runtime.openURL(e.url);
					// }
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
				this.videoShow = false;
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
				this.current_page = 1
				this.shop_list1 = []
				this.filtrate = 1
				let obj = {}
				obj = e
				obj.page = this.current_page
				this.params = obj
				this.get_data(this.params)
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
							that.com.msg(res.message)
						})
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
				this.filtrate = 0
				this.shop_list1 = []
				// 商品
				let params = {
					cate_fist_id: e,
					page: this.current_page
				}
				this.get_data(params)
				//筛选条件
				this.$api.get('screen', {
					cate_id: this.nav_ind,
				}).then(res => {
					if (res.status == 1) {
						this.list = res.data
					}
				})
			},
			get_data(params) {
				uni.showLoading()
				this.$api.post('goods', params).then(res => {
					if (res.status == 1) {
						var a = res.data.current_page
						var b = res.data.last_page
						if (res.data.data) {
							this.last_page = res.data.last_page
							this.current_page = res.data.current_page
							this.shop_list1 = this.shop_list1.concat(res.data.data)
							console.log(this.shop_list1,'111111')
							// for(let i=0;i<this.shop_list1.length;i++){
							// 	for(let j=1;j<this.shop_list1.length;j++){
							// 		if(this.shop_list1[i].price * 1 < this.shop_list1[j].price * 1){
							// 			let max = this.shop_list1[j];
							// 			this.shop_list1[j] = this.shop_list1[i];
							// 			this.shop_list1[j+1] = max;
							// 		}
							// 	}
							// }
							// this.shop_list1.map(item =>{
							// 	item.price = item.price * 1
							// })
							// this.worker = this.$worker.run(this.bubbleSort(this.shop_list1),[...this.shop_list1]).then(res =>{
							// 	console.log(res);
							// }).catch(err =>{
							// 	console.log(err);
							// })
							// this.shop_list1.sort(this.compare('price'))
							// let worker = new Worker(workerjs);
							// worker.postMessage(this.shop_list1);
							// worker.onmessage=function(event){
							// 	console.log(event);
							//     var data=event.data;
							//     console.log(data)
							// };
							// worker.onerror=function(event){
							//     console.log(event.fileName,event.lineo,event.message);
							// };
							// console.log(this.shop_list1,'222222');
							if (a == b) {
								this.loadingText = '没有更多了'
							} else {
								this.loadingText = '上拉加载更多'
							}
						}
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
			skipAboutus() {
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
	.postionTop{
		position:fixed;
		background:#ffffff;
		top:calc(var(--status-bar-height) + 90rpx);
		z-index:50;
		left:0;
		// height: 112rpx;
	}
	.content {
		padding-bottom: 10upx;
	}

	.scroll-view_H {
		display: flex;
		white-space: nowrap;
		line-height: 90rpx;
		height: 100rpx;
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
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 700rpx;
		// background: rgba(0, 0, 0, .6);
		z-index: 999;

		.video {
			width: 100%;
			height: 700rpx;
			video {
				width: 100%;
				height: 700rpx;
			}
		}
	}

	@import './index.scss'
</style>
