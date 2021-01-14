<template>
	<view>
		<view class="nav_head">
			<view class="head_item"  v-for="(it,ind) in list" :key="ind" @click="navhead_cli(ind)">
				<view class="it_tiem" :class="{acts: ind == navIndex}">
					{{it.time}}
				</view>
				<text class="it_tit" :class="{active:navIndex == ind}">
					{{it.title}}
				</text>
			</view>
		</view>
		<view class="shop_cont">
			<zs-shoplist-seckill></zs-shoplist-seckill>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						time:'14:00',
						title:'抢购中'
					},
					{
						time:'14:00',
						title:'即将开抢'
					},
					{
						time:'14:00',
						title:'即将开抢'
					}
				],
				navIndex:0
			}
		},
		methods:{
			navhead_cli(e){
				this.navIndex = e
			}
		}
	}
</script>

<style scoped lang="scss">
	page{
		background-color: #F6F6F6;
	}
	.nav_head{
		width: 100%;padding: 16rpx 3%;
		background-color: white;
		display: flex;
		.head_item{
			width: 33%;text-align: center;
			.it_tiem{
				font-size: 36rpx;font-weight: bold;
			}
			.acts{
				color: #e8372f;
			}
			.it_tit{
				display: inline-block;
				font-size: 28rpx;color: #666;
			}
			.active{
				padding: 0 20rpx;border-radius: 50rpx;
				color: white;background-color: #e8372f;
			}
		}
		
	}
	.shop_cont{
		padding:  0 3%;
	}
</style>
