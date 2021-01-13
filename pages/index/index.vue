<template>
	<view class="content">
		<!-- 自定义头部 -->
		<view class="header" :style="{ 'background-color': backgroundColor }">
			<view class="city">
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
				<swiper-item v-for="(it,ind) in bann" :key="ind">
					<image :src="it.a" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			<view class="swiper-dots">
				<view :class="swiperCurrent == ind ? 'bann_h_act' : 'bann_h'" v-for="(its,ind) in bann" :key="ind"></view>
			</view>
			<view class="trumpet">
				<text><u-icon name="shopping-cart-fill" color="white" size="36"></u-icon></text>
				<swiper class="swiper_three"  :autoplay="true" :circular="true" :interval="3000" :duration="100" disable-touch="true"><!-- 5000 4800 -->
					
					<swiper-item v-for="(it,ind) in 3" :key="ind">
						
						是嘎达嘎：电话跨服哈哈收到回话规划{{ind}}
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
					<view :class="ind % 2 != 0 ? 'tabs_tr' :'tabs_td'" v-for="(it,ind) in 5" :key="ind">
						<view>黄金99.95</view>
						<view>360.00</view>
						<view>357.01</view>
						<view>359.80</view>
						<view> <text v-if="ind %2 == 0" style="color: #5cb671;">↑ 2.23</text><text style="color: #f5553f;" v-else>↓ 2.23</text> </view>
					</view>
				</view>
			</view>
			<!-- 九宫格 -->
			<view class="nine_g">
				<view class="nine_g_child" v-for="(it,ind) in 8">
					<view class="nine_g_child_tit">
						黄金
					</view>
					<view class="nine_g_child_cla">
						高保值 更安全
					</view>
					<image src="../../static/nine.png" mode=""></image>
				</view>
			</view>
			<!-- 活动专区 -->
			<view class="seckill-section">
				<zs-title :title="'活动专区'" :page_show="true"></zs-title>
				<view class="s-header">
					<view class="s-header_a">
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
							v-for="(item, index) in 10" :key="index"
							class="floor-item"
							@click="navToDetailPage(item)"
						>
							<image src="../../static/index/bann1.png" mode=""></image>
							<view class="title">￥99.99</view>
							<view class="price">￥{{ 99.8 }}</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 拼团 -->
			<view class="seckill-section">
				
				<view class="s-header">
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
						<view 
							v-for="(item, index) in 10" :key="index"
							class="floor-item"
							@click="navToDetailPage(item)"
						>
							<image src="../../static/index/bann1.png" mode=""></image>
							<view class="title">￥99.99</view>
							<view class="price">￥{{ 99.8 }}</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<!-- 每周上新 -->
			<view class="seckill-section_mz">
				<zs-title :title="'每周上新'"></zs-title>
				<swiper class="swiper_two" @change="swiperChange" :autoplay="true" :circular="true" :interval="4000" :duration="500">
					<swiper-item v-for="(it,ind) in bann" :key="ind">
						<image :src="it.a" mode="aspectFill"></image>
						<view class="swiper_item_tit">
							千足金 生肖手链转运牛年限定 牛转乾坤
						</view>
						<view class="swiper_item_cont">
							可爱卡通风格，元气满满 的话噶时光法定股本比较常见之间相互补充的话噶时光法定股本比较常见之间相互补充的话噶时光法定股本比较常见之间相互补充
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 精选专题 -->
			<view class="choiceness">
				<view class="choiceness_child">
					<view class="choiceness_item" v-for="it in 4">
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
				<view id="demo1" class="nav_swiper" :class="{active: ind == nav_ind }" @click="nac_cla(ind)" v-for="(it,ind) in 8" :key="ind">爆款</view>
			</scroll-view>
			<view class="classify">
				<view class="classify_l">
					综合排序
				</view>
				<view class="classify_c">
					全部分类
				</view>
				<view class="classify_r">
					<zs-classifytype></zs-classifytype>
				</view>
			</view>
			<!-- 商品列表 -->
			<zs-shopping-list></zs-shopping-list>
			
		</view>
		 <drag-button :isDock="true" :existTabBar="true" @btnClick="btnClick" />
		<!-- tabbar -->
		<zs-tabbar :tab_ind="1"></zs-tabbar>
		<!-- tabbar -->
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	import dragButton from "@/components/drag-button/drag-button.vue";
	export default {
		data() {
			return {
				bann: [
					{a:"../../static/index/bann1.png"},
					{a:"../../static/index/bann2.png"},
					{a:"../../static/index/banner1.png"},
				],
				swiperCurrent:0,
				backgroundColor:'',//标题栏背景色
				headcolor:'#fff',//消息颜色
				indexbackcolor:'rgba(255,2555,255,0.28)',//导航栏搜索框背景色
				end_time:'1610912417',//秒杀到期
				end_seckill:'00:00:00:00',//倒计时
				nav_ind:0,//导航
				show:true
			}
		},
		onPageScroll(e){
			// console.log(e)
			this.backgroundColor = 'rgba(255,255,255,'+e.scrollTop / 180 +')'
			this.headcolor = 'rgba(0,0,0,'+e.scrollTop / 180 +')'
			this.indexbackcolor = 'rgba(241,241,241,'+e.scrollTop / 180 +')'//导航栏搜索框背景色
			if(e.scrollTop <20){
				this.headcolor = '#fff'
				this.indexbackcolor ='rgba(255,2555,255,0.28)'//导航栏搜索框背景色
			}
			// else{
			// 	this.backgroundColor = ''
			// 	this.headcolor = '#fff'
			// 	this.indexbackcolor ='rgba(255,2555,255,0.28)'//导航栏搜索框背景色
			// }
		},
		components: {uniNavBar,dragButton},
		onLoad() {
			this.ent_time_s()
		},
		onShow() {
			
		},
		methods: {
			//页面跳转
			go_pages(e){
				this.com.navto(e)
			},
			//点击客服
			btnClick(){
				this.com.msg('客服')
			},
			// 搜索
			search(){
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
			//拍照
			camear(){
				 plus.camera.getCamera( index );
			},
			//轮播指示点
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
			},
			//导航栏点击
			nac_cla(e){
				this.nav_ind = e
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
		width: 100%;height: 90rpx;line-height: 90rpx;
		display: flex;justify-content: space-between;
	}
	@import './index.scss'
	
</style>
