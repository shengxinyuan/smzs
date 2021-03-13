<template>
	<view>
		<web-view :src="'https://uland.taobao.com/sem/tbsearch?refpid=mm_26632258_3504122_32538762&keyword='+url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:''
			};
		},
		onLoad(a) {
			this.url = a.url
		}
	}
</script>

<style lang="scss">

</style>
