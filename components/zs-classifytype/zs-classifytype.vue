<template>
	<view>
		<view class="shai" @click="shaix">
			<text>筛选</text><image src="../../static/loudou.png" mode=""></image>
		</view>
			<u-popup v-model="show" mode="right">
				<view class="popups">出淤泥而不染，濯清涟而不妖</view>
			</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false
			};
		},
		methods:{
			shaix(){
				this.show = true
			}
		}
	}
</script>

<style lang="scss" scoped>
.shai{
	display: flex;
	image{
		padding-top: 28rpx;
		width: 30rpx;height: 30rpx;margin: 4rpx;
	}
}
.popups{
	padding: 60rpx 30rpx;
}
</style>
