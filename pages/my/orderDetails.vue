<template>
	<view>
		<view style="padding: 3%;font-size: 38rpx;font-weight: bold;">
			待支付
		</view>
		<view class="toast_order">
			<view class="toast_title">
				超时未支付订单将自动取消
			</view>
			<view class="toast_but">
				<view></view>
				<view class="toast_but_r">
					<view class="toast_but_no">
						取消订单
					</view>
					<view class="toast_but_pay" @click="goto_page('./payments')">
						去支付<u-count-down :show-hours="false" bg-color="" color="#fff" :timestamp="timestamp"></u-count-down>
					</view>
				</view>
			</view>
		</view>
		<!-- 地址 -->
		<view class="address">
			<view class="address_l">
				收货地址 <text>邮寄</text>
			</view>
			<view class="address_r">
				<view class="address_r_l">
					德诚嘉园广场写字楼1903 
					<view>
						龙叔 1566666666
					</view>
				</view>
				<!-- <view class="address_r_r">
					＞
				</view> -->
			</view>
		</view>
		<!-- 商品汇总 -->
		<view class="st_data">
			<view class="statis">
				<view class="statis_l">
					商品汇总
				</view>
				<view class="statis_r">
					共 1 件 约1.90g ￥620.00
				</view>
			</view>
			<!-- 工费 -->
			<view class="statis">
				<view class="statis_l">
					工费
				</view>
				<view class="statis_r">
					￥12.00
				</view>
			</view>
			<view class="statis">
				<view class="statis_l">
					合计
				</view>
				<view class="statis_r" style="color: #ee453f;">
					￥632.00
				</view>
			</view>
		</view>
		<!-- 商品 -->
		<view class="shop">
			<view class="shop_title">
				<view class="title_l">
					订单编号：hh4874155545
				</view>
				<view class="title_r">
					待付款
				</view>
			</view>
			<view class="shop_list"  v-for="(its,ind) in 2">
				<image src="../../static/community/list_01.png" mode="aspectFill" @click="order_detail(item.id,10)"></image>
				<view class="list_right">
					<view @click="order_detail(item.id)">
						<view class="title">足金项链 环环相扣</view>
						<view class="Specifications">金重：5.8g<text class="num"> 款号：0141448</text></view>
						<view class="list_right_its">
							<text v-for="it in 3">金料:￥1800 </text>	
						</view>
						<view class="price">￥1888</view>
					</view>
				</view>
			</view>
			<view class="heji">
				<text  class="heji_l">共 2 件</text>
				<text class="heji_r"> 合计：<text>￥3776</text></text>
			</view>
		</view>
		
		<view class="st_data" style="margin-bottom: 60rpx;">
			<view class="statis">
				<view class="statis_l">
					备注
				</view>
				<view class="statis_r">
					无
				</view>
			</view>
			<!-- 工费 -->
			<view class="statis">
				<view class="statis_l">
					订单编号
				</view>
				<view class="statis_r">
					<text @click="make">复制</text>hh4874155545
				</view>
			</view>
			<view class="statis">
				<view class="statis_l">
					创建时间
				</view>
				<view class="statis_r"  >
					2020-1-15 11:13:18
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
				timestamp:0
			}
		},
		onLoad() {
			let data = new Date()
			let state = data.getTime()
			let end_time = state + 300000
			console.log(end_time) 
			let reslut = end_time - state
			this.timestamp = Math.floor(reslut / 1000)
			
		},
		methods:{
			//复制
			make(){
				uni.setClipboardData({
					data: 'hh4874155545',
					success: function () {
						console.log('success');
					}
				})
			},
			goto_page(e){
				this.com.navto(e)
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
	.toast_order{
		width: 100%;background-color: #fff;padding: 3%;
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
					height: 60rpx;line-height: 56rpx;
					font-size: 28rpx;color: #fff;background-color: #ee453f; border-radius: 50rpx;padding: 0 20rpx;
				}
			}
		}
	}
	.address{
		display: flex;justify-content: space-between;padding: 20rpx 3%;background-color: white;margin-top: 20rpx;
		.address_l{
			width: 32%;white-space: nowrap;
			color: #999;
			text{
				display: inline-block;color: white;background-color: #2b3f7d;padding: 0 16rpx;margin-left: 14rpx;border-radius: 50rpx;
			}
		}
		.address_r{
			display: flex;
			color: #333;
			.address_r_l{
				text-align: right;line-height: 40rpx;
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
			.statis_l{
				color: #999;
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
					// background-image: url('/static/course/add_03.png') ;
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
					color: #ba1a30;
					text{
						color: #999999;
						text-decoration: line-through;
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
