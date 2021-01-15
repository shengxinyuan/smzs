<template>
	<view class="content">
		<view class="shop_list" v-for="it in page_cont.data">
			<image :src="it.shop_goods_image" mode=""></image>
			<view class="list_right">
				<view class="title"><text></text>{{it.shop_goods_title}}</view>
				<view class="Specifications">规格：{{it.sku_value}}<text class="num">*1</text></view>
				<view class="price">￥{{it.total}}<text>￥{{it.original}}</text></view>
			</view>
		</view>
		<view style="margin-bottom: 20rpx;font-weight: bold;">
			顺丰快递：{{mailNo.mailNo}}
		</view>
		<view class="p1">
			<u-steps :list="numList.routeResponseRouteList" :current="numList.routeResponseRouteList.length" direction="column"></u-steps>
		</view>
		<!-- <view class="box">
			<view class="p1 text">
				收货地址:<text class="address">{{ wl_cont.address_detail }}</text>
			</view>
			<view class="p2">
				<uni-steps :options="options" direction="column" ></uni-steps>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default{	
		data(){
			return {
				options:[],
				page_cont:'',
				wl_cont:'',
				numList: [],
				mailNo:''
			}
		},
		onLoad(op) {
			// console.log(JSON.parse(op.cont))
			this.page_cont = JSON.parse(op.cont)
			// this.page_type()
		},
		onShow() {
			// this.page_type()
		},
		methods:{
			page_type(){
				// this.page_cont.bn
				this.$api.post('logistics',{bn_id:'HH1112032183'}).then(res=>{
					console.log(res.data)
					this.numList = res.data.json[0]
					this.mailNo = res.data
				})
				
			}
		}
	}
</script>
<style>
	page{
		background-color: #F6F6F6;
		
	}
</style>
<style lang="scss" scoped>
	.content{
		padding: 3%;
		.shop_list{
			width: 100%;
			height: 250rpx;
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #f6f6f6;
			background-color: #fff;
			padding: 10rpx 20rpx;
			border-radius: 10rpx;
			margin: 20rpx 0;
			image{
				width: 200rpx;
				height: 200rpx;
			}
			.list_right{
				display: flex;
				width: 420rpx;
				height: 200rpx;
				margin-left: 20rpx;
				flex-wrap: wrap;
				.title{
					width: 100%;
					text{
						color: #c7ab6e;
					}
				}
				.price{
					width: 100%;
					color: #ba1a30;
					text{
						color: #999999;
						text-decoration: line-through;
						margin-left: 20rpx;
					}
				}
				.Specifications{
					width: 100%;
					display: flex;
					justify-content: space-between;
					color: #999;
					.num{
						color: #999;
					}
				}
			}
		}
		.p1{
			background-color: #fff;
			padding: 30rpx 30rpx;
			border-radius: 12rpx;
			.item{
				display: flex;
				align-items: center;
				margin-top: 30rpx;
				image{
					width: 80rpx;
					height: 80rpx;
					// background-color: pink;
					margin-right: 10rpx;
				}
			}
		}
		.box{
			background-color: #fff;
			margin-top: 30rpx;
			.address{
				margin-left: 18rpx;
				color: #333333;
			}
			.text{
				color: #999999;
			}
			.p2{
				padding-right: 30rpx;
			}
		}
	}
</style>
