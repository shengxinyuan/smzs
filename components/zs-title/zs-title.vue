<template>
	<view>
		<view class="con">
			<view class="jint" v-show="page_show">
				
			</view>
			<view class="title">
				<view class="title_red">
					{{titleRed}}
				</view>
				<view class="title_bla">
					{{title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:{
			titleRed:{},
			title:{},
			page_show:{
				default:false
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.con{
	display: flex;
	.jint{
		width: 10rpx;height: 50rpx;
		background-image: linear-gradient(#d5b260,#fff2ce,#d5b260);
	}
	.title{
		font-size: 38rpx;line-height: 60rpx;padding-left: 20rpx;
		font-weight: 580;display: flex;
		.title_red{
			color: red;
		}
	}
}
</style>
