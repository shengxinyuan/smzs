<template>
	<view>
		<view class="orders_d">
			<view style="display: flex;justify-content: space-between;margin-bottom: 20rpx;">
				<view style="font-weight: bold;">
					店铺管理
				</view>
			</view>
			<view style="display: flex;flex-wrap: wrap;">
				<view class="orders_it" v-for="(it,ind) in store_admin" :key="ind" @click="goto_vip_set(ind)">
					<view class="images">
						<image :src="it.img" mode="widthFix"></image>
					</view>
					<view class="">
						{{it.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				store_admin:[
					{
						img:'../../static/my/my_store.png',
						name:"我的店铺"
					},
					{
						img:'../../static/my/store_order.png',
						name:"店铺订单"
					},
					{
						img:'../../static/my/store_shez.png',
						name:"店铺设置"
					},
					{
						img:'../../static/my/pram_kingstore.png',
						name:"推广店铺"
					},
					{
						img:'../../static/my/king_priceshare.png',
						name:"金价分享"
					},
					{
						img:'../../static/my/tuoke.png',
						name:"引流拓客"
					},
					{
						img:'../../static/my/shejiao.png',
						name:"社交营销"
					},
					{
						img:'../../static/my/zhuanti.png',
						name:"精选专题"
					}
				]
			};
		},
		props:{
			skip:{
				type: Boolean,
			},
			menber_json:{},
			jinx:{}
		},
		methods:{
			goto_vip_set(ind){
				let that = this
				if(this.skip == true){
					if(ind == 0){
						this.com.navto('../../pages/service/my-dp-html') 
						// plus.runtime.openURL("http://zhuanshi.nxm.wanheweb.com/smsj/index.html#/");
					}else if(ind == 1){
						this.com.navto('../../pages/shop-orders/shop-orders')
					}else if(ind == 2){
						this.com.navto('../../pages/set-shop/set-shop')
					} else if(ind == 3){
						this.com.navto('../../pages/community/shop-code')
					} else if(ind == 4){
						this.com.navto('../../pages/community/my-gold-prices')
					}else if(ind == 5){
						this.com.navto('../../pages/community/talk')
					} else if(ind == 6){
						this.com.navto('../../pages/community/community')
					} else if(ind == 7){
						this.com.navto('../../pages/index/Selected_topics?id='+this.jinx[1].id+'&type='+JSON.stringify(this.jinx))
					}
				}else{
					uni.showModal({
						title:'您还不是会员，是否去开通？',
						success(a) {
							if(a.confirm){
								uni.navigateTo({
									url:'../../pages/my/vip_member'
								})
							}
						}
					})
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
.orders_d{
	padding: 20rpx;background-color: white;margin-top: 16rpx;border-radius: 20rpx;
	background-image: url(../../static/my/dianbu_bgimage.png);
	background-size: 100% 100%;
	.orders_it{
		width: 25%;
		font-size: 24rpx;
		color: #666;
		margin-bottom: 10rpx;
		text-align: center;
		.images{
			height: 80rpx;
			display: flex;align-items: center;justify-content: center;
			image{
				width: 50rpx;
			}
		}
	}
}
</style>
