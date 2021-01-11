<template>
	<view class="">
		
		
		<!-- 日历 -->
		<u-calendar v-model="show" :mode="mode"></u-calendar>
	</view> 
</template>

<script>
	export default{
		data(){
			return{
				show: true,
				mode: 'date'
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
