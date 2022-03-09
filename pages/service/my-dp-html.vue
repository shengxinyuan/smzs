<template>
	<view>
		<web-view v-if="url" :src="url"></web-view>
	</view>
</template>

<script>
	import { config } from '../../config.js' 
	export default {
		data() {
			return {
				url: '',
			};
		},
		onLoad() {
			const token = uni.getStorageSync('token')
			const member_info = uni.getStorageSync('member_info')
			this.url = `${config.h5Url}smsj/?token=${token}&name=${member_info.id}`
		}
	}
</script>

<style>

</style>
