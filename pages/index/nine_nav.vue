<template>
	<view style="padding-top: 145rpx;">
		<view class="header" >
			<view class="header_l">
				<u-icon name="arrow-left" size="50" color="#FFF"/>
			</view>
			<view class="input-view" >
				<input confirm-type="search" class="nav-bar-input" type="text" :disabled="true" placeholder="输入搜索关键词" @click="search">
				<view style="margin-top: 10rpx;" @click="camear">
					<u-icon name="camera" size="44" color="#666666"></u-icon>
				</view>
			</view>
		</view>
		<view class="textrus">
			<zs-texture></zs-texture>
		</view>
		<view class="contes">
			
			<view style="padding: 0 3%;">
				<!-- <zs-shopping-list></zs-shopping-list> -->
				<zs-shoplist-type></zs-shoplist-type>
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
			
		}
	}
</script>

<style lang="scss" scoped>
	.header{
		position: fixed;left: 0;top: 0;
		height: 145rpx;width: 100%;
		padding-top: 55rpx;padding-left: 30rpx;
		display: flex;
		z-index: 999;background-color: #293C79;
		.header_l{
			width: 12%;
			line-height: 100rpx;
		}
		.input-view {
			display: flex;
			flex-direction: row;justify-content: space-between;
			width: 60%;
			flex: 1;
			height: 60rpx;
			border-radius: 15px;
			padding: 0 15px;
			margin: 7px 0;
			line-height: 60rpx;
			background-color: #eee;
			margin-right: 4%;
			input{
				width: 86%;
				margin-top: 10rpx;
				font-size: 30rpx;
				
			}
		}
	}
	.textrus{
		width: 100%;padding: 0 2%;
		position: fixed;left: 0;top: 145rpx;z-index: 888;
	}
	.contes{
		background-color: #F6F6F6;
		padding-top: 80rpx;margin-top: 80rpx;padding-bottom: 60rpx;
		position: relative;
	}
</style>
