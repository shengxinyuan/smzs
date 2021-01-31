<template>
 	<view class="content">
 		<view class="head">
 			<scroll-view scroll-x="true" class="swiper-box">
 				<view v-for="(item,index) in tabs" :key="index" class="swiper_it" :class="{title:current==item.id}" @click="tabClick(item.id,index)">
 					{{item.name}}
 					<view :class="{line:current==item.id}"></view>
 				</view>
 			</scroll-view>
 		</view>
 		<view class="box" v-if="page_show">
			 <swiper class="swiper" :current="current_ind" @change="page_swiper">
			 	<swiper-item v-for="(item,index) in tabs" :key="index">
			 		<scroll-view scroll-y :show-scrollbar="false" style="height: 100%;" @scrolltolower="swiper_but">
			 		    <view v-if="list.length != 0">
							<zs-order-list :list="list" @order_detail="order_detail" v-if="current_ind != 1"></zs-order-list>
							<zs-order-df :list="list" @order_detail="order_detail" v-else></zs-order-df>
						</view> 
						<view v-else style="padding-top: 25%;"><u-empty text="暂无该类订单" mode="order"></u-empty> </view> 
			 		</scroll-view>
			 	</swiper-item>
			 </swiper>
 		</view>
 		<view v-else style="width: 100%;height: 100vh;padding: 28% 46%;"> 
 			<u-loading mode="flower" size="60"></u-loading>
 		</view>
 	</view>
 </template>
  
 <script>
 	export default { 	
 		data() {
 			return {
 				tabs: [{name:'全部',id:0}, {name:'待付款',id:10}, {name:'待发货',id:20}, {name:'待收货',id:30},
				{name:'待评价',id:40},{name:'已完成',id:50},{name:'退款',id:60}],
 				list:[],
 				current: 0,
				current_ind:0,
 				isShow: true,
				page:1,
				page_show:false
 			}
 		},
 		onLoad(op) {
			console.log(op)
			this.current = op.state
			this.current_ind = op.index
 		},
		onShow() {
			this.page = 1
			this.list = []
			this.page_cont(this.page)
		},
 		methods: {
			//上拉加载
			swiper_but(e){
				this.page++
				this.page_cont(this.page)
			},
			
			page_cont(e){
				this.$api.get('orders',{page:e,status:this.current}).then(res=>{
					// console.log(res.data.data)
					if(res.status == 1){
						this.list = this.list.concat(res.data.data)
						this.page_show = true
					}
					if(e != 1){
						if(res.data.data && res.data.data.length < 10 && e !=1){
							this.com.msg("到底了~")
						}else{
							this.com.msg("加载中~")
						}
					}
					//时间
					if(this.current_ind == 1 && res.data.data){
						var date = new Date()
						var nowTime = date.getTime(); // 当前时间的时间戳
						res.data.data.forEach(i=>{
							// console.log(i)
							i.data[0].forEach(j=>{
								let arr = j.end_time*1000
								if(nowTime >= arr){
									this.$api.put('orders',{id:i.id,status:10,type:2}).then(res=>{
										console.log(res)
										if(res.status == 1){
											this.com.redto('./order?state='+ 20 +'&index='+ 2)
										}else{
											this.com.msg(res.message)
										}
									})
								}
							})
						})
					}
				})
			},
			//订单详情
			order_detail(e,status){
				this.com.navto('./orderDetails?page_type='+e+'&status='+status)
			},
			//页面滑动
			page_swiper(e){
				// console.log(e)
				this.page_show = false
				this.page = 1
				this.list = []
				this.current_ind = e.detail.current
				this.current = this.current_ind *10
				this.page_cont(this.page)
			},
			// 点击上方状态按钮
 			tabClick(id,index) {
				// console.log(index)
				this.page_show = false
				this.page = 1
				this.list = []
 				this.current = id
				this.current_ind = index
				this.page_cont(this.page)
 			},
 			
 		}
 	}
 </script>
 
 
 <style>
	page{
		background-color: #f6f6f6;
	}
 </style>
 <style lang="scss" scoped>
 	.content{
		background-color: #f6f6f6;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-wrap: wrap;
		padding-bottom: 30rpx;padding-top: 70rpx;
 		.head {
 			width: 100%;
 			display: flex;
 			justify-content: space-between;
 			height: 80rpx;
 			line-height: 80rpx;
 			padding:0 2%;
 			background-color: #fff;color: #999999;
 			text-align: center;
			// position: fixed;left: 0;top: 0;z-index: 20;
			.swiper-box{
				display: flex;white-space: nowrap;
				.swiper_it{
					display: inline-block;
					width: 18%;
				}
			}
 			.title {
 				font-size: 30rpx;color: #000000;
 				font-weight: bold;
 			}
 			.line {
 				width: 70rpx;
 				border-bottom: 8rpx solid #ff5810;
 				margin: 0 auto;
 				margin-top: -14rpx;
 				border-radius: 28rpx;
 			}
 		}
 		.box{
			width: 100%;
			height: 100vh;
 			padding: 20rpx;
			.swiper{
				width: 100%;
				height: 100vh;padding-bottom: 30rpx;
			}
 		}
 		.goods{
 			width: 100%;
 				
 		}
 	}
 	
 </style>
 