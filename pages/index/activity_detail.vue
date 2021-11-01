<template>
	<view>
		<view class="text">
			<u-parse :html="content"></u-parse>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:''
			}
		},
		onLoad(e) {
			this.$api.get('banner',{id:e.id}).then(res=>{
				if(res.status == 1){
					this.content = res.data[0].content
				}
			})
		}
		
	}
</script>

<style lang="scss" scoped>
.text{
	padding: 0 3%;
}
</style>
