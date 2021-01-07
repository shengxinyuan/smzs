<template>
	<view class="cont">
		<view class="cont_item" v-for="(it,ind) in 6" :key="ind" @click="go_shopdetail(1)">
			<image class="imagea" src="../../static/zhek.png" mode="aspectFill"></image>
			<image class="images" src="../../static/shopping.png" mode="aspectFill"></image>
			<view class="it_tit">
				黄金手镯 18k金 钻石挚爱
			</view>
			<view class="it_price">
				￥2298
			</view>
			<view class="it_selt">
				<view class="it_selt_l">
					<text>￥1980</text><image src="../../static/pifa.png" mode=""></image>
				</view>
				<view class="it_selt_r">
					已售45512件
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
		methods:{
			go_shopdetail(e){
				this.com.navto('../../pages/index/shop_detail?shop_id='+e)
			}
		}
	}
</script>

<style lang="scss" scoped>
.cont{
	width: 100%;
	display: flex;flex-wrap: wrap;
	.cont_item{
		width: 49%;margin-right: 2%;
		border-radius: 16rpx;background-color: white;
		margin-top: 20rpx;overflow: hidden; padding: 2%;
		position: relative;
		.imagea{
			width: 70rpx;height: 82rpx;
			position: absolute;left: 22rpx;top: 0;
			z-index: 20;
		}
		.images{
			width: 100%;
			height: 280rpx;
		}
		.it_tit{
			font-size: 32rpx;width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;line-height: 60rpx;
		}
		.it_price{
			font-weight: bold;font-size: 32rpx;
		}
		.it_selt{
			width: 100%;display: flex;justify-content: space-between;
			line-height: 40rpx;
			.it_selt_l{
				padding-top: 10rpx;
				text{
					color: #ea5b72;font-size: 26rpx;
				}
				image{
					width: 80rpx; height: 30rpx;
				}
			}
			.it_selt_r{
				width: 150rpx;
				color: #998;line-height: 50rpx;font-size: 26rpx;
				white-space: nowrap;overflow: hidden;text-overflow: ellipsis;
			}
		}
	}
	.cont_item:nth-child(2n+2){
		margin-right: 0;
	}
}
</style>
