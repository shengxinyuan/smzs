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
						<image :src="it.img" mode="widthFix" ></image>
						<view v-if="it.type == 2" class="red-dot"></view>
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
				
			};
		},
		props:{
			skip:{
				type: Boolean,
				// default: true
			},
			menber_json:{},
			jinx:{},
			islogin: false,
			// store_admin: Array,
			store_admin: {
				type: Array,
				default: function(){
					return []
				}
			}
		},
		created() {
			console.log(this.skip);
		},
		mounted(){
			console.log(this.store_admin);
		},
		methods:{
			goto_vip_set(ind){
				if (!this.islogin) {
					uni.showModal({
						content:'您还未登录，是否登录？',
						success(aq) {
							if(aq.confirm){
								uni.navigateTo({
									url:'/pages/login/login'
								})
							}
						}
					})
					return
				}
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
									url:'/pages/my/vip_member'
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
	background-image: url(https://zuanshi.semoh.cn/applet_static/my/dianbu_bgimage.png);
	background-size: 100% 100%;
	.orders_it{
		width: 25%;
		font-size: 24rpx;
		color: #666;
		margin-bottom: 10rpx;
		text-align: center;
		.images{
			position: relative;
			height: 80rpx;
			display: flex;align-items: center;justify-content: center;
			image{
				width: 50rpx;
				height: auto;
			}
		}
	}
}
.red-dot{
	position: absolute;
	right: 45rpx;
	top: 5rpx;
	width: 20rpx;
	height: 20rpx;
	border-radius: 50%;
	background-color: red;
}
</style>
