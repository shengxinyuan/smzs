<template>
	<view>
		<view class="header" >
			<view class="header_va">
				购物车
			</view>
			<view class="rig" @click="go_address">
				 <u-icon name="map" size="36"></u-icon> 收货地址: 相城区德成嘉园广场十九楼万禾网络科技
			</view>
		</view>
		<!-- 加载页 -->
		<view  v-if="page_show">
			<view class="cart_shopping">
				<!-- 空状态 -->
				<view v-if="!cart_show">
					<view class="cart_shop_item" v-for="(it,ind) in 5" :key="ind">
						<view class="cart_shop_item_child">
							<view class="cart_shop_item_l">
								<u-checkbox-group @change="checkboxGroupChange">
									<u-checkbox  shape="circle" active-color="#dd2626" size="40"
										@change="checkboxChange" 
										v-model="qx_type" 
										:name="1"
									>
									</u-checkbox>
								</u-checkbox-group>
							</view>
							<view class="cart_shop_item_c" @click="go_shopdetail(1)">
								<image src="../../static/index/bann1.png" mode="aspectFill"></image>
							</view>
							<view class="cart_shop_item_r">
								<view class="it_title">
									足金项链 足金项链足金项链足金项链足金项链
								</view>
								<view class="it_speac">
									<view >
										金重:25g
									</view>
									<view>
										款号:ZJJ45874
									</view>
								</view>
								<view class="it_speac_bs">
									<view >
										金料：￥19800.00
									</view>
									<view>
										附加费：￥18.63
									</view>
									<view>
										工费： ￥4.50
									</view>
								</view>
							</view>
						</view>
						<view class="item_js">
							<view style="color: #dd2626;">
								￥ <text style="font-size: 32rpx;">19823.16</text>
							</view>
							<u-number-box :min="1" :long-press="false"></u-number-box>
						</view>
					</view>
				</view>
				<!-- 空白状态 -->
				<view v-else style="padding-top: 20%;">
					<u-empty text="购物车为空" mode="car"></u-empty>
				</view>
			</view>
			<!-- 、、小结 -->
			<view v-if="!cart_show">
				<view class="js_canchu">
					金料： 18748.00 工费：84.00 金重： 34.89g
				</view>
				<view class="jis_but">
					<u-checkbox-group @change="checkboxGroupChange">
						<u-checkbox  shape="circle" active-color="#dd2626" size="40"
							@change="checkboxChange" 
							v-model="qx_type" 
							:name="1"
						>全选
						</u-checkbox>
					</u-checkbox-group>
					<view class="jis_right">
						<view style="color: #999;"><!-- <u-icon name="trash" size="40"></u-icon> -->删除选中</view>
						<view class="jis_butcolor" @click="skipVipConfirmOrder">去结算</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 加载 -->
		<view v-else style="padding-top: 20%;">
			<zs-login></zs-login>
		</view>
		
		<!-- tabbar -->
		<zs-tabbar :tab_ind="4"></zs-tabbar>
		<!-- tabbar -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				qx_type:false,
				cart_show:false,//购物车空白显示
				page_show:true,//页面加载显示
			}
		},
		methods: {
			go_address(){
				this.com.navto('../my/receiving')
			},
			//详情
			go_shopdetail(e){
				this.com.navto('../../pages/index/shop_detail?shop_id='+e)
			},
			skipVipConfirmOrder(){
				uni.navigateTo({
					url:'../vip-confirm-order/vip-confirm-order'
				})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style lang="scss" scoped>
	.js_canchu{
		width: 100%;line-height: 60rpx;padding: 0 3%;background-color: white;color: #999;
		position: fixed;left: 0;bottom: 200rpx;border-bottom: 1rpx dashed #999;
	}
.cart_shopping{
	width: 100%;
	padding: 160rpx 3% 260rpx 0;
	
	.cart_shop_item{
		background-color: white;margin-bottom: 20rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		.item_js{
			padding-left: 36%;margin-top: 28rpx;display: flex;justify-content: space-between;
		}
		.cart_shop_item_child{
			display: flex;
		}
		.cart_shop_item_l{
			width: 10%;padding-top: 80rpx,
		}
		.cart_shop_item_c{
			width: 200rpx;height: 200rpx;overflow: hidden;border-radius: 16rpx;
			image{
				width: 100%;height: 100%;
			}
		}
		.cart_shop_item_r{
			width: 59%;padding-left: 20rpx;
			.it_title{
				font-size: 32rpx;
				white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
			}
			.it_speac{
				display: flex;line-height: 56rpx;color: #999;
				view{
					width: 60%;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
				}
				view:nth-child(1){
					width: 36%;
				}
			}
			.it_speac_bs{
				display: flex;color: #999;flex-wrap: wrap;
				view{
					font-size: 26rpx;margin: 2rpx;padding: 0 5rpx;border-radius: 6rpx;
					background-color: #F1F1F1;
				}
			}
		}
	}
}

.jis_but{
		padding: 0 3%;
		width: 100%;height: 100rpx;line-height: 100rpx;background-color: white;
		position: fixed;left: 0;bottom: 100rpx;
		display: flex;justify-content: space-between;
		.jis_right{
			display: flex;justify-content: space-between;
			view{
				margin: 0 10rpx;
			}
			.jis_butcolor{
				padding: 0 30rpx;color: #fff;border-radius: 50rpx;
				margin-top: 15rpx;
				height: 70rpx;
				line-height: 70rpx;
				background-color: #dd2626;
			}
		}
	}
.header{
	position: fixed;left: 0;top: 0;
	height: 145rpx;width: 100%;
	padding-top: 55rpx;padding-left: 30rpx;
	display: flex;
	z-index: 999;background-color: white;
	.header_va{
		width: 20%;
		font-size: 40rpx;line-height: 90rpx;
	}
	.rig{
		width: 78%;color: #999;
		line-height: 100rpx;
		font-size: 28rpx;
		white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
	}
}
</style>
