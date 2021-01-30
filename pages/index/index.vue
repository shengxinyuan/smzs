<template>
	<view class="content">
		<!-- 自定义头部 -->
		<view class="header" :style="{ 'background-color': backgroundColor }">
			<view class="city" @click="page_my">
				<image src="../../static/logo.png" mode="aspectFill" class="city_a"></image>
				<image src="../../static/userimg.png" mode="widthFix" class="city_b"></image>
			</view>
			<view class="input-view" :style="{'backgroundColor' : indexbackcolor}">
				<view class=""  @click="saoma">
					<uni-icons class="input-uni-icon" type="scan" size="22" color="#666666" /><text style="color: #999;margin-left: 16rpx;"> ▏</text>
				</view>
				<input confirm-type="search" class="nav-bar-input" type="text" :disabled="true" placeholder="输入搜索关键词" @click="search">
				<view style="margin-top: 10rpx;" @click="camear">
					<u-icon name="camera" size="44" color="#666666"></u-icon>
				</view>
			</view>
			<view class="rig" :style="{'color': headcolor}"  @click="go_pages('../information/information')">
				 <u-icon name="chat" size="50"></u-icon>消息
			</view>
		</view>
		<!-- banner部分 -->
		<view class="page_cont">
			 <swiper class="swiper" @change="swiperChange" :autoplay="true" :circular="true" :interval="4000" :duration="500">
				<swiper-item v-for="(it,ind) in index_data.flash" :key="ind">
					<image :src="it.image" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			<view class="swiper-dots">
				<view :class="swiperCurrent == ind ? 'bann_h_act' : 'bann_h'" v-for="(its,ind) in index_data.flash" :key="ind"></view>
			</view>
			<view class="trumpet">
				<u-icon name="shopping-cart-fill" color="white" size="36"></u-icon>
				<swiper class="swiper_three"  :autoplay="true" :circular="true" :interval="3000" :duration="100" disable-touch="true"><!-- 5000 4800 -->
					
					<swiper-item v-for="(it,ind) in index_data.order" :key="ind">
						{{it.member}}：{{it.title}}
					</swiper-item>
				</swiper>
				
			</view>
		</view>
		<!-- 内容部分 -->
		<view class="inp_con">
			<!-- 实时金价 -->
			<view class="king_pic">
				<view class="king_pic_a">
					<zs-title :titleRed="'实时'" :title="'金价'" :page_show="true"></zs-title>
					<view class="times">
						<u-icon name="clock-fill" size="36" color="#3b4e85" style="margin-right: 10rpx;margin-top: 16rpx;"></u-icon>
						2020/10/14 13:52:32
					</view>
				</view>
				<!-- 表格 -->
				<view class="tabs">
					<view class="tabs_tr">
						<view>品种</view>
						<view>最新价</view>
						<view>买入价</view>
						<view>卖出价</view>
						<view>涨跌</view>
					</view>
					<view class="swipers_d">
						<view :class="ind % 2 != 0 ? 'tabs_tr' :'tabs_td'" v-for="(it,ind) in 15" :key="ind">
							<view>黄金99.95</view>
							<view>360.00</view>
							<view>357.01</view>
							<view>359.80</view>
							<view> <text v-if="ind %2 == 0" style="color: #5cb671;">↑ 2.23</text><text style="color: #f5553f;" v-else>↓ 2.23</text> </view>
						</view>
					</view>
				</view>
			</view>
			<!-- 九宫格 -->
			<view class="nine_g">
				<view class="nine_g_child" v-for="(it,ind) in index_data.label" :key="ind" @click="go_pages('./nine_nav')">
					<view class="nine_g_child_tit">
						{{it.title}}
					</view>
					<!-- <view class="nine_g_child_cla">
						高保值 更安全
					</view> -->
					<image src="../../static/nine.png" mode=""></image>
				</view>
			</view>
			<!-- 活动专区 -->
			<view class="seckill-section">
				<zs-title :title="'活动专区'" :page_show="true"></zs-title>
				<view v-if="index_data.type_seconds_kill ==1">
					<view class="s-header" @click="go_pages('./seckill')">
						<view class="s-header_a" > 
							<image class="s-img" src="/static/xians_seckill.png" mode="widthFix"></image>
							<view class="s-header_child">
								<text class="hour timer">{{end_seckill}}</text>
							</view>
						</view>
						<view style="color: #a6a6a6;">
							更多好货 <u-icon name="arrow-right-double"></u-icon>
						</view>
					</view>
					<scroll-view class="floor-list" scroll-x>
						<view class="scoll-wrapper">
							<view 
								v-for="(item, index) in index_data.kill.data" :key="index"
								class="floor-item"
								@click="go_shopdetail(item.id)"
							>
								<image src="../../static/community/list_03.png" mode=""></image>
								<view class="title">￥{{item.price}}</view>
								<view class="price">￥{{ item.price_make }}</view>
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
						<view style="color: #a6a6a6;">
							更多好货 <u-icon name="arrow-right-double"></u-icon>
						</view>
					</view>
					<scroll-view class="floor-list" scroll-x>
						<view class="scoll-wrapper">
							<view v-for="(item, index) in index_data.group" :key="index"
								class="floor-item"
								@click="go_teamshop(item.id)"
							>
								<image src="../../static/community/list_01.png" mode="aspectFill"></image>
								<view class="title">￥{{item.price}}</view>
								<view class="price">￥{{ item.price_make }}</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
			<!-- 拼团 -->
			
			<!-- 每周上新 -->
			<view class="seckill-section_mz">
				<zs-title :title="'每周上新'"></zs-title>
				<swiper class="swiper_two" @change="swiperChange" :autoplay="true" :circular="true" :interval="4000" :duration="500">
					<swiper-item v-for="(it,ind) in index_data.news" :key="ind">
						<image :src="it.image" mode="aspectFill"></image>
						<view class="swiper_item_tit">
							{{it.title}}
						</view>
						<view class="swiper_item_cont">
							<u-parse :html="it.content"></u-parse>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 精选专题 -->
			<view class="choiceness">
				<view class="choiceness_child">
					<view class="choiceness_item" v-for="(it,ind) in 4" :key="ind" @click="special_cli(ind)">
						<image src="../../static/index/banner1.png" mode="aspectFill"></image>
						<view class="item_tit">
							定制专区
						</view>
						<view class="item_cla">
							最适合的
						</view>
					</view>
				</view>
			</view>
			<!-- 筛选 -->
			 <scroll-view class="scroll-view_H" scroll-x="true" >
				<view id="demo1" class="nav_swiper" :class="{active: it.id == nav_ind }" @click="nac_cla(it.id)"
					v-for="(it,ind) in index_data.cates" :key="ind">
					{{it.title}}
				</view>
			</scroll-view>
			
			<!-- 商品列表 -->
			<!-- <zs-shopping-list></zs-shopping-list> -->
			
		</view>
		<view class="classify">
			<zs-shoplist-type :shop_list="shop_list" :lists="list" :cate_fist_id="nav_ind" @shop_confim="shop_confim"></zs-shoplist-type>
			
		</view>
		 <drag-button :isDock="true" :existTabBar="true" @btnClick="go_pages('../service/service')"/>
		<!-- tabbar -->
		<zs-tabbar :tab_ind="1"></zs-tabbar>
		<!-- tabbar -->
	</view>
</template>

<script>
	// import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import dragButton from "@/components/drag-button/drag-button.vue";
	export default {
		data() {
			return {
				tops:0,
				bann: [
					{a:"../../static/index/bann1.png"},
					{a:"../../static/index/bann2.png"},
					{a:"../../static/index/banner1.png"},
				],
				swiperCurrent:0,
				backgroundColor:'',//标题栏背景色
				headcolor:'#fff',//消息颜色
				indexbackcolor:'rgba(255,2555,255,0.28)',//导航栏搜索框背景色
				end_time:'',//秒杀到期
				end_seckill:'00天00:00:00',//倒计时
				nav_ind:0,//导航
				show:true,
				value1: 1,
				index_data:'',//首页数据
				shop_list:'',
				list:''
			}
		},
		// mounted() {
		// 	var query = uni.createSelectorQuery()
		// 	//获取对应模块到顶部的距离
		// 	//评论
		// 	query.select('.classify').boundingClientRect((res) => {
		// 		console.log(res)
		// 		this.pingl = Math.floor(res.top)
		// 		console.log(this.pingl)
		// 	}).exec()
		// },
		onPageScroll(e){
			// console.log(e)
			this.backgroundColor = 'rgba(255,255,255,'+e.scrollTop / 180 +')' 
			this.headcolor = 'rgba(0,0,0,'+e.scrollTop / 180 +')'
			this.indexbackcolor = 'rgba(241,241,241,'+e.scrollTop / 180 +')'//导航栏搜索框背景色	
			if(e.scrollTop < 40){
				this.headcolor = '#fff'
				this.indexbackcolor ='rgba(255,2555,255,0.28)'//导航栏搜索框背景色
			}
		},
		// components: {uniNavBar},
		onLoad() {
			this.ent_time_s()//倒计时
			this.page_render()
		},
		onShow() {
			
		},
		watch:{
			// shop_list(a,b){
			// 	console.log(a)
			// }
		},
		methods: {
			page_render(){
				this.$api.get('index').then(res=>{
					console.log(res.data)
					if(res.status == 1){
						this.index_data = res.data
						this.end_time = res.data.kill.title
						this.nav_ind = res.data.cates[0].id
						this.nac_cla(res.data.cates[0].id)
					}
				})
			},
			//秒杀进详情
			go_shopdetail(e){
				if(this.end_seckill == '秒杀已结束'){
					this.com.msg('本轮秒杀已经结束，请期待下一期')
				}else{
					this.com.navto('../../pages/index/Activityshop_detail?shop_id='+e+'&type='+2)
				}
			},
			//团购进详情
			go_teamshop(e){
				this.com.navto('../../pages/index/Activityshop_detail?shop_id='+e+'&type='+1)
			},
			// 确定筛选
			shop_confim(e){
				this.$api.post('goods',e).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_list = res.data.data
					}
				})
			},
			//个人中心
			page_my(){
				this.com.rel('../my/my')
			},
			//页面跳转
			go_pages(e){
				this.com.navto(e)
			},
			// 搜索
			search(){
				
			},
			//拍照
			camear(){
				uni.chooseImage({
				    count: 6, //默认9
				    sourceType: ['camera'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
				    }
				}); 
			},
			//扫码
			saoma(){
				uni.scanCode({
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			},
			//专题点击
			special_cli(e){
				console.log(e)
				//定制
				if(e == 0){
					this.com.navto('./customization')
				}else{
					this.com.navto('./Selected_topics')
				}
				
			},
			
			//轮播指示点
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
			},
			//导航栏点击
			nac_cla(e){
				this.nav_ind = e
				//商品
				this.$api.post('goods',{cate_fist_id:this.nav_ind}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_list = res.data.data
					}
				})
				//筛选条件
				this.$api.get('screen',{cate_id:this.nav_ind}).then(res=>{
					// console.log(res)
					if(res.status == 1){
						this.list = res.data
					}
				})
			},
			//秒杀倒计时
			ent_time_s(){
				let data = new Date()
				let state = data.getTime()
				let reslut = this.end_time *1000 - state
				let tim = setInterval(()=>{
					if(reslut <= 0){
						clearInterval(tim)
						this.end_seckill = "秒杀已结束"
					}else{
						reslut -=1000
						this.end_seckill = this.ss(reslut)
					}
					
				},1000)
				
			},
			ss(e){
				let [day,hh,ff,ss] = [0,0,0,0]
				day = Math.floor(e / 1000 / 60 / 60 / 24);
				hh = Math.floor(e /1000/60/60 % 24)
				ff = Math.floor(e /1000/60 % 60)
				ss = Math.floor(e /1000 %60)
				let d = day > 9 ? day : '0'+day
				let h = hh > 9 ? hh : '0'+hh
				let m = ff > 9 ? ff : `0${ff}`;
				let s = ss > 9 ? ss : `0${ss}`;
				// console.log( d+"天"+h+":"+m+":"+s)
				return d +'天'+h+":"+m+":"+s
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	
	
	.scroll-view_H{
		display: flex;white-space: nowrap;line-height: 90rpx;height: 90rpx;border-bottom: 1rpx solid #eee;
		.nav_swiper{
			width: 20%;text-align: center;
			display: inline-block;
			position: relative;
			&.active{
				color: #2d407a;
				&:before{
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
	.classify{
		width: 100%;
		margin-bottom: 150rpx;background-color: #F6F6F6;
	}
	@import './index.scss'
	
</style>
