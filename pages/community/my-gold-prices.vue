<template>
	<view class="zl-box">
		<view class="tabs-box">
			<u-tabs
			:list="tabsList" 
			:is-scroll="false" 
			:current="current" 
			:height="height" 
			:font-size="24"
			:show-bar="false"
			:active-color="activeColor"
			:bg-color="bgColor"
			:active-item-style="activeItemStyle"
			@change="changeTabs"></u-tabs>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabsList: [{
						name: '店铺金价'
					}, {
						name: '其他金价'
					}],
				current: 0,
				height: 62,
				activeColor: '#ffffff',
				bgColor:'#f6f6f6',
				activeItemStyle:{
					backgroundColor: '#1b2c60',
					borderRadius: '30upx',
				}
			}
		},
		methods: {
			changeTabs(index) {
				this.current = index
				if (index !== 0) {
					this.isShow01 = false
				} else {
					this.isShow01 = true
				};
				if (index !== 1) {
					this.isShow02 = false
				} else {
					this.isShow02 = true
				}
			},
		}
	}
</script>

<style lang="scss">
	.zl-box{
		padding: 20upx 40upx;
	}
	.tabs-box{
		background-color: #F6F6F6;
		border-radius: 30upx;
	}
</style>
