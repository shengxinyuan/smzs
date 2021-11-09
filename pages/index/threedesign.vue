<template>
	<view>
		<web-view id="threeDesignRef" :src="h5Url"></web-view>
	</view>
</template>

<script>
import { THREE_D_H5_URL } from '../../utils/constant'
	export default {
		data() {
			return {
				h5Url: THREE_D_H5_URL
			};
		},
		onLoad(options) {
			if (options.bn) {
				this.h5Url += options.url ? `${options.url}/?token=${uni.getStorageSync('token')}&bn=${options.bn}` : `?token=${uni.getStorageSync('token')}`
			} else {
				this.h5Url += options.url ? `${options.url}/?token=${uni.getStorageSync('token')}` : `?token=${uni.getStorageSync('token')}`
			}
		},
		methods: {
		},
	}
</script>

<style lang="scss">
</style>
