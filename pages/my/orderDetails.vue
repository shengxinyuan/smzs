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
				<view class="">
					
				</view>
			</view>
		</view>
		<u-count-down :timestamp="timestamp"></u-count-down>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				end_time:'1610699111',//秒杀到期
				timestamp:0
			}
		},
		onLoad() {
			let data = new Date()
			let state = data.getTime()
			let reslut = this.end_time *1000 - state
			this.timestamp = Math.floor(reslut / 1000)
			
			this.ent_time_s()
		},
		methods:{
			
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
			font-size: 30rpx;font-weight: bold;
		}
	}
</style>
