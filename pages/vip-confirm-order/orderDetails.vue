<template>
	<view>
		<view class="sure" v-if="shop_det.status == 10">
			待确认
		</view>
		<text class="sure" v-if="shop_det.status == 30">待完成</text>
		<text class="sure" v-if="shop_det.status == 50">已完成</text>
		
		<!-- 地址 -->
		<view class="address">
			<view class="address_top">
				<view class="address_l">
					收货人
				</view>
				{{shop_det.address_id.contact}} {{shop_det.address_id.mobile}}
			</view>
			<view class="address_b">
				<view class="address_l">
					收货地址 <!-- <text>{{shop_det.sf_change == 0 ? '到付' : '邮寄'}}</text> -->
				</view>
				<view class="address_r">
					<view class="address_r_l" v-if="shop_det.address_id">
						{{shop_det.address_id.province +','+ shop_det.address_id.city +','+ shop_det.address_id.area +',' + shop_det.address_id.address}} 
						
					</view>
				</view>
			</view>
			
		</view>
		
		<!-- 商品 -->
		<view class="shop">
			<view class="shop_title">
				<view class="title_l">
					订单编号：{{shop_det.bn}}
				</view>
				<!-- <view class="title_r">
					待付款
				</view> -->
			</view>
			<view class="shop_list"  v-for="(its,ind) in shop_det.order_goods">
				<image :src="its.image" mode="aspectFill" @click="order_detail(item.id,10)"></image>
				<view class="list_right">
					<view @click="order_detail(item.id)">
						<view class="title">{{its.title}}</view>
						<view class="Specifications">金重：{{its.sku.weight}}g<text class="num"> 条码：{{its.sku.bar_code}}</text></view>
						<view class="list_right_its">
							<text >金料:￥{{its.gold_price}} </text>	
							<text >工费:￥{{its.labor_price}}/g </text>
						</view>
						<!-- <view class="price">￥{{its.total}} <text>*{{its.count}}</text></view> -->
					</view>
				</view>
			</view>
			<view class="heji">
				<text  class="heji_l">共 {{shop_det.count}} 件</text>
				<text class="heji_r"> 合计：<text>￥{{shop_det.total}}</text></text>
			</view>
		</view>
		<!-- 商品汇总 -->
		<view class="st_data">
			<view class="statis">
				<view class="statis_l">
					商品汇总
				</view>
				<view class="statis_r">
					共 {{shop_det.count}} 件 ￥{{shop_det.total}}
				</view>
			</view>
			<!-- 工费 -->
			<view class="statis">
				<view class="statis_l">
					工费
				</view>
				<view class="statis_r">
					￥{{shop_det.total_labor_price}}
				</view>
			</view>
		</view>
		<view class="st_data" style="margin-bottom: 60rpx;">
			<view class="statis" v-if="shop_det.message">
				<textarea :placeholder="'备注'+shop_det.message" :disabled="true" />
			</view>
			<!-- 工费 -->
			<view class="statis">
				<view class="statis_l">
					订单编号
				</view>
				<view class="statis_r">
					<text @click="make(shop_det.bn)">复制</text>{{shop_det.bn}}
				</view>
			</view>
			<view class="statis">
				<view class="statis_l">
					创建时间
				</view>
				<view class="statis_r"  >
					{{shop_det.create_time}}
				</view>
			</view>
		</view>
		
		<view class="toast_order">
			<view class="toast_but">
				<view></view>
				<view class="toast_but_r"  v-if="shop_det.status == 10">
					<view class="toast_but_no" @click="no_order(shop_det.id)">
						取消订单
					</view>
					<view class="toast_but_pay" @click="goto_pages(shop_det.bn)">
						平台下单
					</view>
				</view>
				<view  class="toast_but_r"  v-if="shop_det.status == 30">
					<view class="toast_but_no" @click="order_logist_wl(shop_det.bn)">查看物流</view> <!-- // -->
					<view class="toast_but_pay" @click="sure_details(shop_det.id)">确认收货</view> <!-- // -->
				</view>
				<view class="toast_but_r"  v-if="shop_det.status == 50">
					<view class="toast_but_no" @click="shouh">售后服务</view> <!-- // -->
					<view class="toast_but_pay" @click="del_order(shop_det.id,shop_det.status)">删除订单</view> <!-- // -->
				</view>
				<view class="toast_but_r"  v-if="shop_det.status == 60">
					<view class="toast_but_pay" v-if="shop_det.status == 60 && shop_det.return_type == 1" @click="shen_details(shop_det.id)">撤销</view>
					<view class="toast_but_pay" v-if="shop_det.status == 60 && shop_det.return_type == 2" @click="order_logist(shop_det)">再次申请</view> <!-- // -->
					<view class="toast_but_pay" v-if="shop_det.status == 60 && shop_det.return_type == 3" @click="del_order(shop_det.id,shop_det.status)">删除订单</view> <!-- // -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				// end_time:'1610699111',//秒杀到期
				timestamp:0,
				order_id:0,
				shop_det:'',
				status:''
			}
		},
		watch:{
			// timestamp(a){
			// 	if(this.shop_det.status == 10){
			// 		if(a <=0){
			// 			uni.navigateBack()
			// 		}
			// 	}
			// }
		},
		onLoad(op) {
			console.log(op)
			this.order_id = op.page_type
			this.page_reader()
		},
		methods:{
			
			page_reader(){
				this.$api.get('order_goods',{id:this.order_id,is_h5:1}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_det = res.data
					}
				})
			},
			//物流
			order_logist_wl(e){
					this.com.navto('../my/logistr?cont='+e)
			},
			shouh(){
				this.com.navto('../service/service')
			},
			//确认收货
			sure_details(e){
				let that = this
				uni.showModal({
					content:'您确定收到货物了吗？',
					success(a) {
						if(a.confirm){
							that.$api.put('orders',{id:e,type:1}).then(res=>{
								console.log(res)
								if(res.status == 1){
									that.com.redto('./order?state='+ 30 +'&index='+ 3)
								}else{
									that.com.msg(res.message)
								}
							})
						}
					}
				})
			},
			//删除订单
			del_order(e,ty){
				let that = this
				uni.showModal({
					content:'您确定删除该订单吗？？',
					success(a) {
						if(a.confirm){
							that.$api.del('orders',{id:e}).then(res=>{
								console.log(res)
								if(res.status == 1){
									that.com.redto('../my/order?state='+ 50 +'&index='+ 5)
								}else{
									that.com.msg(res.message)
								}
							})
						}
					}
				})
			},
			//复制订单号
			make(e){
				uni.setClipboardData({
					data: e,
					success: function () {
						console.log('success');
					}
				})
			},
			//取消订单
			no_order(e){
				let that = this
				uni.showModal({
					content:'确认取消该订单吗？',
					success(re) {
						if(re.confirm){
							that.$api.put('orders',{id:e,type:2,is_h5:1}).then(res=>{
								if(res.status == 1){
									that.com.redto('./order?state='+ 10 +'&index='+ 1)
								}else{
									that.com.msg(res.message)
								}
							})
						}
					}
				})
			},
			goto_pages(e){
				// console.log(e)
				let data = {
					bn: e,
					current:1
				}
				this.com.navto('../vip-confirm-order/vip-confirm-order?data=' + JSON.stringify(data))
			}
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6;
	}
</style>
<style scoped lang="scss">
	.sure{
		padding: 3%;font-size: 38rpx;font-weight: bold;
	}
	.toast_order{
		width: 100%;padding: 3%;
		.toast_title{
			font-size: 30rpx;font-weight: bold;margin-bottom: 30rpx;
		}
		.toast_but{
			display: flex;justify-content: space-between;
			.toast_but_r{
				
				width: 60%;
				display: flex;justify-content: space-around;
				.toast_but_no{
					height: 60rpx;line-height: 56rpx;
					font-size: 28rpx;color: #999;border: 2rpx solid #999;border-radius: 50rpx;padding: 0 20rpx;
				}
				.toast_but_pay{
					height: 60rpx;line-height: 60rpx;
					font-size: 28rpx;color: #fff;background-color: #ee453f; border-radius: 50rpx;padding: 0 20rpx;
				}
			}
		}
	}
	.address{
		padding: 20rpx 3%;background-color: white;margin-top: 20rpx;
		.address_top{
			margin-bottom: 20rpx;
			display: flex;
		}
		.address_b{
			display: flex;justify-content: space-between;
		}
		.address_l{
			width: 160rpx;white-space: nowrap;
			color: #999;
			text{
				display: inline-block;color: white;background-color: #2b3f7d;padding: 0 16rpx;margin-left: 14rpx;border-radius: 50rpx;
			}
		}
		.address_r{
			width: 100%;
			color: #333;
			.address_r_l{
				line-height: 40rpx;
			}
			.address_r_r{
				line-height: 80rpx;margin-left: 28rpx;color: #999;
			}
		}
	}
	.st_data{
		margin: 20rpx 0;
		.statis{
			width: 100%;background-color: white;display: flex;justify-content: space-between;
			padding: 20rpx 3%;font-size: 30rpx;
			textarea{
				width: 100%;font-size: 28rpx;
			}
			.statis_r{
				text{
					color: #293c79;margin-right: 28rpx;
				}
			}
		}
	}
	.shop{
		width: 100%;padding: 20rpx 3% 0 3%;background-color: white;
		margin-top: 20rpx;
		.shop_title{
			width: 100%;display: flex;justify-content: space-between;padding-bottom: 20rpx;border-bottom: 1rpx solid #eee;
			line-height: 50rpx  ;
			.title_l{
				color: #999;font-size: 30rpx;
			}
			.title_r{
				color: #273b76;font-size: 32rpx;
			}
		}
		.shop_list{
			width: 100%;
			display: flex;
			// align-items: center;
			border-bottom: 1rpx solid #f6f6f6;
			padding-top: 20rpx;
			image{
				width: 200rpx;
				height: 200rpx;
			}
			.list_right{
				width: 430rpx;
				margin-left: 20rpx;
				position: relative;
				.go_buy_abs{
					position: absolute;
					right: 10rpx;bottom: 6rpx;
					// background-image: url('https://zuanshi.semoh.cn/applet_static/course/add_03.png') ;
					background-repeat: no-repeat;
					background-size: cover;
					width: 146rpx;
					height: 53rpx;margin-left: 25rpx;
					color: #fff;
					text-align: center;
					line-height: 53rpx;z-index: 20;
				}
				.list_right_its{
					display: flex;flex-wrap: wrap;
					text{
						display: inline-block;padding: 2rpx 10rpx;background-color: #eee;font-size: 24rpx;margin: 4rpx 10rpx;white-space: nowrap;
						border-radius: 6rpx;color: #999;
					}
				}
				.title{
					font-weight: bold;font-size: 32rpx;
					width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
					
				}
				.price{
					width: 100%;line-height: 70rpx;
					color: #ba1a30;display: flex;justify-content: space-between;
					text{
						color: #999999;
						// text-decoration: line-through;
					}
				}
				.Specifications{
					width: 100%;color: #999;line-height: 60rpx;
					display: flex;
					justify-content: space-between;
					.num{
						color: #999;
					}
				}
			}
		}
		.heji{
			line-height: 80rpx;border-top: 2rpx solid #eee;
			.heji_l{
				font-size: 26rpx;color: #999;margin-right: 26rpx;
			}
			.heji_r{
				font-size: 28rpx;
				text{
					color: #ee453f;font-size: 34rpx;
				}
			}
		}
	}
	
</style>
