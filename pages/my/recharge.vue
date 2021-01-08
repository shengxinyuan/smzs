<template>
	<view class="">
		<zs-wallets :pageType="1"></zs-wallets>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		onNavigationBarButtonTap() {
			this.com.navto('./particulars?type='+4)
		},
		methods:{
			
		}
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style scoped lang="scss">
	
</style>
