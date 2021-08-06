<template>
	<view>
		<view class="header" @click="go_address">
			<view class="rig" v-if="shop_list.address">
				 <u-icon name="map" size="26"></u-icon>
				 <text class="address">收货地址: {{shop_list.address.province+shop_list.address.city+shop_list.address.area+shop_list.address.address}}</text>
			</view>
			<u-icon name="arrow-right" size="14" color="#999"></u-icon>
		</view>
		<!-- 加载页 -->
		<view  v-if="page_show">
			<view class="cart_shopping">
				<!-- 空状态 -->
				<view v-if="cart_show">
					<view class="cart_shop_item" v-for="(it,ind) in shop_list.data" :key="ind">
						<view class="cart_shop_item_child">
							<view class="cart_shop_item_l">
								<u-checkbox-group @change="checkbox_d(it.id,it.count)">
									<u-checkbox  shape="circle" active-color="#dd2626" size="36"
										v-model="it.status == check" 
										:name="1" 
									>
									</u-checkbox>
								</u-checkbox-group>
							</view>
							<view class="cart_shop_item_c" @click="go_shopdetail(it.shop_goods_id)">
								<image :src="it.image" mode="aspectFill"></image>
							</view>
							<view class="cart_shop_item_r">
								<view class="it_title">
									{{it.title}}
								</view>
								<view class="it_speac">
									<view >
										金重：{{it.weight}}g
									</view>
									<view>
										条码：{{it.bar_code}}
									</view>
								</view>
								<view class="it_speac_bs" >
									<view style="margin-top: 6rpx;">
										库存：{{it.stock}}
									</view>
									<view v-if="vip_type">
										金料：￥{{it.price_vip}}
									</view>
									<view v-else>
										金料：￥{{it.price_normal}}
									</view>
									<view style="margin-top: 6rpx;">
										工费：{{((it.labor/1)/(it.weight/1)).toFixed(2)}}/g
									</view>
								</view>
							</view>
						</view>
						<view class="item_js">
							<view style="color: #dd2626;">
								<text class="rmb">￥</text>
								<text style="font-size: 30rpx;">{{(it.xiaoj/1).toFixed(2)}}</text>
							</view>
							<u-number-box v-model="it.count" :step="1" :max="it.stock" :min="1" :long-press="false" @change="number_box($event,it.id)"></u-number-box>
						</view>
					</view>
				</view>
				<!-- 空白状态 -->
				<view v-else style="padding-top: 20%;">
					<u-empty text="购物车为空" mode="car"></u-empty>
				</view>
			</view>
			<!-- 、、小结 -->
			<view v-if="cart_show">
				<!-- <view class="js_canchu">
					<text>金料：￥{{goldl}}</text>
					<text>工费：￥{{wage}}</text>
					<text>金重：{{goldwrig}}g</text>
				</view> -->
				<view class="jis_but">
					<u-checkbox-group>
						<u-checkbox  shape="circle" active-color="#dd2626" size="36"
							@change="checkboxChange" 
							v-model="qx_type" 
							:name="1" 
						><text style="font-size: 26upx;">全选</text>
						</u-checkbox>
					</u-checkbox-group>
					<view class="jis_right">
						<view style="color: #999;" @click="del_cart"><!-- <u-icon name="trash" size="40"></u-icon> -->删除选中</view>
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
		<!-- <zs-tabbar-all></zs-tabbar-all> -->
		<!-- tabbar -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cart_show:false,//购物车空白显示 
				page_show:true,//页面加载显示
				shop_list:[],
				vip_type:false,
				check:1,
				qx_type:false,//全选
			}
		},
		onShow() {
			this.page_show = false
			this.page_reader()
		},
		watch:{
			shop_list(a){
				this.shop_list.data.every(i=>{
					if(i.status == 1){
						return this.qx_type = true
					}else{
						return this.qx_type = false
					}
				})
			}
		},
		computed:{
			//金料
			goldl(){
				let arr = 0
				let vip = uni.getStorageSync('viptype')
				if(vip && this.shop_list.data){
					this.shop_list.data.forEach(i=>{
						if(i.status == 1){
							arr +=  JSON.parse(i.price_vip) * i.count
						}
					})
					this.vip_type = true
				}else{
					this.shop_list.data.forEach(i=>{
						if(i.status == 1){
							arr +=  JSON.parse(i.price_normal)* i.count
						}
					})
					this.vip_type = false
				}
				return arr.toFixed(2)
			},
			//工费
			wage(){
				let arr = 0
				this.shop_list.data.forEach(i=>{
					if(i.status == 1){
						arr +=  JSON.parse(i.labor)* i.count
					}
				})
				return arr.toFixed(2)
			},
			//金重
			goldwrig(){
				let arr = 0
				this.shop_list.data.forEach(i=>{
					if(i.status == 1){
						arr +=  JSON.parse(i.weight)* i.count
					}
				})
				return arr.toFixed(2)
			}
		},
		onReady() {
			uni.hideTabBar()
		},
		methods: {
			page_reader(){
				this.$api.get('cart').then(res=>{
					// console.log(res)
					if(res.status == 1){
						this.shop_list = res.data
						this.page_show = true 
						if(res.data.data && res.data.data.length >0){
							this.cart_show = true
						}
						// 会员
						let vip = uni.getStorageSync('viptype')
						if(vip){
							res.data.data.forEach(i=>{
								i.xiaoj = JSON.parse(i.price_vip) + JSON.parse(i.labor)
							})
							this.vip_type = true
						}else{
							res.data.data.forEach(i=>{
								i.xiaoj = JSON.parse(i.price_normal) + JSON.parse(i.labor)
							})
							this.vip_type = false
						}
					}
				})
			},
			//单选
			checkbox_d(e,num){
				this.$api.put('cart',{status:1,cart_id:e,count:num}).then(res=>{
					// console.log(res)
					if(res.status==1){
						this.page_reader()
					}
				})
			},
			//全选
			checkboxChange(e){
				this.$api.get('cartselections').then(res=>{
					if(res.status == 1){
						this.page_reader()
					}
				})
			},
			//修改数量
			number_box(e,id){
				console.log(e.value,id)
				this.$api.put('cart',{cart_id:id,count:e.value}).then(res=>{
					// console.log(res)
					if(res.status==1){
						this.page_reader()
					}
				})
			},
			go_address(){
				this.com.navto('../my/receiving?is_mine='+1)
			},
			//详情
			go_shopdetail(e){
				this.com.navto('../../pages/index/shop_detail?shop_id='+e)
			},
			//结算
			skipVipConfirmOrder(){
				uni.navigateTo({
					url:'../vip-confirm-order/vip-confirm-order'
				})
			},
			//选中删除
			del_cart(){
				let that = this;
				let arr = ''
				this.shop_list.data.forEach(i=>{
					if(i.status == 1){
						arr += i.id+','
					}
				})
				if(arr == ''){
					this.com.msg('没有选中的商品')
				}else{
					uni.showModal({
						content:'确认删除选中商品吗?',
						success(q) {
							if(q.confirm){
								that.$api.del('cart',{cart_id:arr.substr(0,arr.length -1)}).then(res=>{
									// console.log(res)
									if(res.status == 1){
										that.com.msg(res.message)
										that.page_reader()
									}
								})
							}
						}
					})
				}
			},
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6;
	}
</style>
<style lang="scss" scoped>
	
.cart_shopping{
	width: 100%;
	padding: 0rpx 3% 260rpx 3%;
	
	.cart_shop_item{
		background-color: white;margin-bottom: 20rpx;
		padding: 20rpx;
		border-radius: 10rpx;
		.item_js{
			padding-left: 36%;margin-top: 28rpx;display: flex;justify-content: space-between;
			.rmb{
				font-size: 22upx;
			}
		}
		.cart_shop_item_child{
			display: flex;
		}
		.cart_shop_item_l{
			width: 8%;padding-top: 80rpx,
		}
		.cart_shop_item_c{
			// width: 160rpx;height: 160rpx;
			overflow: hidden;border-radius: 10rpx;
			// border: solid 0.5upx #f1f1f1;
			image{
				width: 160rpx;height: 160rpx;
			}
		}
		.cart_shop_item_r{
			padding-left: 20rpx;
			.it_title{
				font-size: 28rpx;
				white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
			}
			.it_speac{
				display: flex;align-items: center; line-height: 56rpx;color: #999;font-size: 22upx;
				view{
					white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
				}
				view:nth-child(1){
					padding-right: 30upx;
				}
			}
			.it_speac_bs{
				display: flex;align-items: center; color: #999;flex-wrap: wrap;
				view{
					font-size: 20rpx;border-radius: 6rpx;
					background-color: #F1F1F1;margin-right: 20upx;padding: 2upx 10upx;
				}
			}
		}
	}
}

.jis_but{
		padding: 0 3%;
		width: 100%;height: 100rpx;background-color: white;
		position: fixed;left: 0;bottom: 100rpx;
		display: flex;justify-content: space-between;align-items: center;
		.jis_right{
			display: flex;justify-content: space-between;align-items: center;
			view{
				font-size: 24upx;
				margin: 0 10rpx;
			}
			.jis_butcolor{
				padding: 0 45rpx;color: #fff;border-radius: 50rpx;
				height: 56rpx;
				line-height: 56upx;
				background-image: linear-gradient(0deg,#eb4241 0%,#ef463f 100%);
			}
		}
	}
.header{
	width: 100%;height: 80rpx;
	padding: 0 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #f6f6f6;
	.guanli{
		font-size: 24rpx;
		color: #999;
	}
	.rig{
		width: 78%;color: #999;
		display: flex;align-items: center;
		font-size: 24rpx;
		white-space: nowrap;text-overflow: ellipsis;overflow: hidden;
		.address{
			padding-left: 6upx;
		}
	}
}
.js_canchu{
		width: 100%;line-height: 60rpx;padding: 0 3%;background-color: white;color: #999;
		position: fixed;left: 0;bottom: 200rpx;border-bottom: 1rpx dashed #999;font-size: 22upx;
		text{
			margin-right: 20upx;
		}
	}
</style>
