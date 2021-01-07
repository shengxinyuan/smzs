<template>
	<view style="padding: 3%;">
		<view class="items" >
			<view class="items_time">
				2021-01-07 17:57
			</view>
			<view class="items_cont">
				<view class="items_cont_text">
					文章内容
				</view>
				<view class="items_cont_child" @click="inform_detail(1)">
					<view class="child_l">
						查看详细
					</view>
					<view style="color: #999;">
						＞
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			//消息详情
			inform_detail(e){
				
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
.items{
	
	width: 100%;
	.items_time{
		text-align: center;line-height: 66rpx;color: #999999;line-height: 88rpx;
	}
	.items_cont{
		background-color: #fff;padding: 22rpx;
		.items_cont_text{
			color: #999;line-height: 44rpx;
		}
		.items_cont_child{
			display: flex;justify-content: space-between;border-top: 1rpx solid #f1f1f1;margin-top: 22rpx;padding-top: 22rpx;
			.child_l{
				color: #007AFF;
			}
		}
	}
}
</style>
