<template>
	<view style="padding-top: 145rpx;">
		<view class="header" >
			<view class="header_l" @click="gototop">
				<u-icon name="arrow-left" size="50" color="#FFF"/>
			</view>
			<view class="input-view" >
				<input confirm-type="search" class="nav-bar-input" type="text" :disabled="true" placeholder="输入搜索关键词" @click="search">
				<view style="margin-top: 10rpx;" @click="camear">
					<u-icon name="camera" size="44" color="#666666"></u-icon>
				</view>
			</view>
		</view>
		<view class="contes">
			<zs-shoplist-type :tops="'145rpx'" :paddingTop="'80rpx'" :shop_list="shop_list" :lists="list" :fixed="'fixed'"
			:cate_fist_id="cate_id" @shop_confim="shop_confim"
			></zs-shoplist-type>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				cate_id:-1,
				list:'',//筛选条件
				shop_list:[]
			}
		},
		onLoad(op) {
			this.cate_id = op.classify_id
			console.log(op)
			this.page_render()
		},
		methods:{
			//页面渲染
			page_render(){
				//筛选条件
				this.$api.get('screen',{cate_id:this.cate_id}).then(res=>{
					// console.log(res)
					if(res.status == 1){
						this.list = res.data
					}
				})
				this.$api.post('goods',{cate_fist_id:this.cate_id}).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_list = res.data.data
					}
				})
			},
			// 确定筛选
			shop_confim(e){
				this.$api.post('goods',e).then(res=>{
					console.log(res)
					if(res.status == 1){
						this.shop_list = res.data.data
					}
				})
			},
			//上一页
			gototop(){
				uni.navigateBack({})
			}
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6;
	}
</style>
<style lang="scss" scoped>
	.header{
		position: fixed;left: 0;top: 0;
		height: 145rpx;width: 100%;
		padding-top: 55rpx;padding-left: 30rpx;
		display: flex;
		z-index: 20;background-color: #293C79;
		.header_l{ 
			width: 12%;
			line-height: 100rpx;
		}
		.input-view {
			display: flex;
			flex-direction: row;justify-content: space-between;
			width: 60%;
			flex: 1;
			height: 60rpx;
			border-radius: 15px;
			padding: 0 15px;
			margin: 7px 0;
			line-height: 60rpx;
			background-color: #eee;
			margin-right: 4%;
			input{
				width: 86%;
				margin-top: 10rpx;
				font-size: 30rpx;
				
			}
		}
	}
	.contes{
		width: 100%;
		background-color: #F6F6F6;
		padding-bottom: 60rpx;
	}
</style>
