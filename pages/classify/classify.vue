<template>
	<view class="">
		<view style=""
			:style="{'width':screenWidth + 'px'}">
			<view :style="{ height: statusBarHeight + 'px'}"></view>
			<view class="header" :style="{ height: height + 'px'}">
				<view class="input-view" >
					<input confirm-type="search" class="nav-bar-input" type="text" :disabled="true" placeholder="输入搜索关键词" @click="search">
					<view style="margin-top: 10rpx;" @click="camear">
						<!-- <u-icon name="camera" size="44" color="#666666"></u-icon> -->
					</view>
				</view>
				<view class="rig" @click="go_pages('../information/information')">
					 <u-icon name="chat" size="38"></u-icon>
					 <text class="u-font-12 u-m-l-2">消息</text>
				</view>
				<!-- #ifdef MP-WEIXIN -->
				<view class="wx_right"></view>
				<!-- #endif -->
			</view>
		</view>
		<view class="content">
			<!-- 左侧 -->
			<scroll-view scroll-y class="left-aside">
				<view v-for="(item,ind) in flist" :key="ind" class="f-item b-b" :class="{active: currentId == item.id}" @click="tabtap(item.id,item.title)">
					{{item.title}}
				</view>
			</scroll-view>
			<!-- 右侧 -->
			<scroll-view scroll-with-animation scroll-y class="right-aside" :scroll-top="tabScrollTop">
				<!-- 轮播 -->
				<view class="" style="width: 98%;height: 230rpx;">
					<swiper class="swiper" :indicator-dots="true" :autoplay="true" :circular="true" :interval="4000" :duration="500">
						<swiper-item v-for="(it,ind) in banners" :key="ind" @click="bann_nav(it)">
							<image :src="it.image" mode="aspectFill"></image>
						</swiper-item>
					</swiper>
				</view>
				<view class="one_list_sty"  v-if="tlist != ''">
					{{one_listname}}
				</view>
				<view class="t-list" v-if="tlist != ''">
					<view @click="navToList(titem.id,titem)" class="t-item" v-for="titem in tlist" :key="titem.id">
						<image :src="titem.image"></image>
						<text>{{titem.title}}</text>
					</view>
				</view>
				<view v-else style="padding-top: 100rpx;">
					<u-empty text="暂无内容" mode="data"></u-empty>
				</view>
			</scroll-view>
		</view>
		<!-- tabbar -->
		<zs-tabbar :tab_ind="2"></zs-tabbar>
		<!-- <zs-tabbar-all></zs-tabbar-all> -->
		<!-- tabbar -->
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				height: '50',
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				flist: [],
				tlist: [],
				banners: [],
				one_listname:''
			}
		},
		onLoad(){
			this.loadData();
		},
		onReady() {
			uni.hideTabBar()
		},
		onPageScroll(e){
			console.log(e);
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
			// 搜索
			search(){
				this.com.navto('../index/search')
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
			//页面跳转
			go_pages(e){
				this.com.navto(e)
			},
			
			loadData(){
				uni.showLoading()
				this.$api.get('cate').then(res=>{
					this.flist = res.data.label
					this.tabtap(res.data.label[0].id,res.data.label[0].title)
					uni.hideLoading()
				})
				//轮播
				this.$api.get('banner',{type:2}).then(res=>{
					if(res.status == 1){
						this.banners = res.data
					}
				})
			},
			//一级分类点击
			tabtap(i,name){
				this.currentId = i
				this.one_listname = name
				uni.showLoading()
				
				this.$api.get('cate',{label:i}).then(res=>{
					this.tlist = res.data.cate
					uni.hideLoading()
				})
				
			},
			navToList(e,v){
				console.log(v)
				console.log(v.pid)
				this.com.navto('./class_detail?classify_id='+e+'&pid='+this.currentId)
			},
			//轮播跳转
			// #ifdef APP-PLUS
			bann_nav(e){
				console.log(e)
				plus.runtime.openURL(e.url);
			},
			// #endif
		}
	}
</script>

<style lang="scss">
	.header{
		width: 100%;
		padding: 0 30rpx;
		display: flex;justify-content: space-between;align-items: center;
		background-color: white;
		.input-view {
			/* #ifdef MP-WEIXIN */
			width: calc(84% - 90px);
			/* #endif */
			/* #ifdef APP */
			width: 84%;
			/* #endif */
			display: flex;
			align-items: center;
			// flex-direction: row;
			justify-content: space-between;
			// flex: 1;
			padding: 0 15px;
			background-color: #eee;
			border-radius: 40px;
			
			input{
				height: 60rpx;
				font-size: 28rpx;
			}
		}
		.rig{
			display: flex;align-items: center;
		}
	}
	.content {
		// height: 100%;
		background-color: #f8f8f8;display: flex;
		
	}
	.left-aside {
		flex-shrink: 0;
		width: 200upx;padding-bottom: 140rpx;
		background-color: #fff;
	}
	.f-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100upx;
		
		position: relative;
		&.active{
			font-weight: bold;
			background: #f8f8f8;
			color: #2d407a;
			&:before{
				content: '';
				position: absolute;
				left: 20rpx;
				top: 50%;
				transform: translateY(-50%);
				height: 30upx;
				width: 10upx;
				background-color: #2d407a;
				border-radius: 6rpx 0rpx 0rpx 6rpx;
				opacity: .8;
			}
		}
	}

	.right-aside{
		width: 520rpx;
		flex: 1;
		overflow: hidden;
		padding-left: 20upx;
		padding-bottom: 140rpx;
		.swiper{
			width: 100%;height: 100%;
			image{
				width: 100%;height: 100%;
			}
		}
	}
	.s-item{
		display: flex;
		align-items: center;
		height: 70upx;
		padding-top: 8upx;
		font-size: 28upx;
	}
	.one_list_sty{
		background-color: #fff;margin-top: 10rpx;
		padding-left: 20rpx;
	}
	.t-list{
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		background: #fff;
		
		padding-top: 20rpx;
		&:after{
			content: '';
			flex: 99;
			height: 0;
		}
	}
	.t-item{
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 32%;margin-right: 2%;
		font-size: 26upx;
		color: #666;
		padding-bottom: 20upx;
		
		image{
			width: 140upx;
			height: 140upx;
			background-color: #F1F1F1;
		}
	}
	.t-item:nth-child(3n+3){
		margin-right: 0;
	}
</style>
