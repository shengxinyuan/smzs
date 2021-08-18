<template>
	<view>
		<web-view :src="'http://zuanshi.dis.wanheweb.com/smsj/?token='+tok+'&name='+name"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tok:'',
				name:'',
			};
		},
		onLoad() {
			this.tok = uni.getStorageSync('token')
			console.log(this.tok)
			let a = uni.getStorageSync('member_info')
			this.name = a.id
			console.log(this.name)
		}
	}
</script>

<style>

</style>
