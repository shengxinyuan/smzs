<template>
	<view class="">
		<zs-wallets @but_cli="but_cli" :pageType="2"></zs-wallets>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		onNavigationBarButtonTap() {
			this.com.navto('./particulars?type='+1)
		},
		methods:{
			//提现成功
			but_cli(){
				uni.showModal({
					title:'提现申请提交成功',
					content:'平台审核通过后会向您的账户进行转账，请耐心等待',
					confirmText:'继续提现',
					cancelText:"返回钱包",
					success(a) {
						if(a.confirm){
							
						}else{
							uni.navigateBack()
						}
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	
</style>
