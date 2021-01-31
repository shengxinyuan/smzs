<template>
	<view class="cont">
		<view class="cont_item" v-for="(it,ind) in 6" :key="ind" @click="go_shopdetail(it.id)" >
			<image class="imagea" v-if="it.is_recommend == 1" src="../../static/zhek.png" mode="aspectFill"></image> <!-- 爆款推荐 -->
			<image class="images" src="../../static/shopping.png" mode="aspectFill"></image>
			<view class="it_tit">
				纯金项链
			</view>
			<view class="it_price">
				￥{{ 1988 }}
			</view>
			<view class="it_selt">
				<view class="it_selt_l">
					<text>￥{{ 1688 }}</text><image src="../../static/pifa.png" mode=""></image>
				</view>
				<view class="it_selt_r">
					已售{{ 99 }}件
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
			shop_list:{}
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
	width: 100%;padding: 0 2%;
	display: flex;flex-wrap: wrap;
	.cont_item{
		width: 49%;margin-right: 2%;
		border-radius: 16rpx;background-color: white;
		margin-top: 20rpx;overflow: hidden;
		position: relative;
		.imagea{
			width: 70rpx;height: 84rpx;
			position: absolute;left: 22rpx;top: 0;
			z-index: 10;
		}
		.images{
			width: 100%;
			height: 300rpx;
		}
		.it_tit{
			padding-left: 20rpx;
			font-size: 30rpx;width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;line-height: 60rpx;
		}
		.it_price{
			padding-left: 20rpx;
			font-weight: bold;font-size: 30rpx;line-height: 60rpx;
		}
		.it_selt{
			padding-left: 20rpx;
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
