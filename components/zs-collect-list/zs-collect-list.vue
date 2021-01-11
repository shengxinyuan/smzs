<template>
	<view class="cont">
		<view class="cont_item" v-for="(it,ind) in 8" :key="ind" @longpress="long">
			<view class="checkbox" v-if="page_del">
				<label class="radio" @click="checkbox(ind)">
					 <checkbox  :checked="type_check" />
				</label>
			</view>
			<image class="images" src="../../static/shopping.png" mode="aspectFill" @click="go_shopdetail(1)"></image>
			<view class="it_tit">
				黄金手镯 18k金 钻石挚爱
			</view>
			<view class="it_price">
				<view>
					￥2298
				</view>
				<u-icon name="heart-fill" size="44"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pay_type:[],
				pay_type_zj:"",
				
			};
		},
		props:{
			page_del:{
				default:false
			},
			type_check:{ //选中状态
				default:false
			}
		},
		methods:{
			//详情
			go_shopdetail(e){
				this.com.navto('../../pages/index/shop_detail?shop_id='+e)
			},
			//点击选择
			checkbox(e){
				this.$emit('checkbox',e)
			}, 
			//长按
			long(){
				this.$emit("long")
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
		.checkbox{
			position: absolute;top: 24rpx;right: 4rpx;z-index: 20;
		}
		.images{
			width: 100%;
			height: 280rpx;
		}
		.it_tit{
			font-size: 30rpx;width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;line-height: 60rpx;
		}
		.it_price{
			font-weight: bold;font-size: 30rpx;line-height: 60rpx;display: flex;justify-content: space-between;color: #df3636;
		}
	}
	.cont_item:nth-child(2n+2){
		margin-right: 0;
	}
}
</style>
