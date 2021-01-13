<template>
	<view class="">
		<view class="header">
			<view class="header_white" :style="{background:background }">
				<view class="gototop" @click="gotoppage">
					<u-icon name="arrow-left" size="50"></u-icon>
				</view>
			</view>
			<view class="me_gold">
				我的金币
			</view>
			<view class="gold_statis">
				
			</view>
		</view>
		<image class="gold_statimg" src="../../static/my/gold_statis.png" mode=""></image>
		<view class="list">
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				background:''
			}
		},
		onPageScroll(e) {
			this.background = 'rgba(246,218,164,'+e.scrollTop / 80 +')'
			
		},
		methods:{
			gotoppage(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	page{background-color: #f6f6f6;}
</style>
<style scoped lang="scss">
	.header{
		width: 100%;height: 360rpx;background-image: url(../../static/my/glod.png);
		background-size: 100% 100%;padding-top: 150rpx;margin-bottom: 120rpx;
		.header_white{
			width: 100%;height: 140rpx;position: fixed;left: 0;top: 0;padding-top: 68rpx;
			.gototop{
				padding-left: 30rpx;
			}
		}
		.me_gold{width: 100%;padding: 0 5%;margin-bottom: 20rpx;font-size: 36rpx;}
		.gold_statis{
			width: 90%;height: 240rpx;padding: 20rpx;margin: 0 5%;border-radius: 14rpx;
			box-shadow: 0 0 10rpx 2rpx #f7dead;
			background-color: #fff;
			font-size: 36rpx;
		}
	}
	.gold_statimg{
		width: 100%;height: 70rpx; margin-bottom: 16rpx;
	}
	.list{
		height: 120vh;width: 500rpx;background-color: pink;
	}
	
</style>
