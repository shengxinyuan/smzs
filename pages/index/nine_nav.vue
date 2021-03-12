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
		<view class="textrus">
			<scroll-view class="scroll" scroll-x >
				<view class="scroll_child" v-for="(it,ind) in nav" :key="ind" :class="{active:it.id == currend}" @click="nav_cli(it.id)">
					<view class="">
						{{it.title}}
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="contes">
			<zs-shoplist-type :shop_list="shop_list" :lists="lists" :tops="'230rpx'" :page_login="page_login" :fixed="'fixed'" :paddingTop="'86rpx'"
			:shop_label_texture_id="currend" :shaix_type="'3'" @shop_confim="shop_confim"></zs-shoplist-type>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				nav:[],
				currend:0,
				shop_list:[],
				lists:[],
				page_login:true
			}
		},
		onLoad(op) {
			// console.log(op)
			this.nav = JSON.parse(op.data)
			this.currend = op.id
			this.nav_cli(op.id)
		},
		
		methods:{
			search() {
				this.com.navto('./search')
			},
			//传值
			shop_confim(e){
				this.$api.post('goods',e).then(res=>{
					// console.log(res)
					if(res.status == 1){
						this.shop_list = res.data.data
					}
				})
			},
			//点击
			nav_cli(e){
				this.page_login = false
				this.currend = e
				this.$api.post('goods',{shop_label_texture_id:e}).then(res=>{
					// console.log(res)
					if(res.status == 1){
						this.shop_list = res.data.data
						this.page_login = true
					}
				})
				this.$api.get('screen',{type:2}).then(res=>{
					// console.log(res)
					if(res.status == 1){
						this.lists = res.data
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

<style lang="scss" scoped>
	.header{
		position: fixed;left: 0;top: 0;
		height: 145rpx;width: 100%;
		padding-top: 55rpx;padding-left: 30rpx;
		display: flex;
		z-index: 22;background-color: #293C79;
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
			margin-right: 4%;z-index: 22;
			input{
				width: 86%;
				margin-top: 10rpx;
				font-size: 30rpx;
				
			}
		}
	}
	.textrus{
		width: 100%;
		position: fixed;left: 0;top: 145rpx;z-index: 22;
	}
	.contes{
		width: 100%;
		background-color: #F6F6F6;
		margin-top: 80rpx;padding-bottom: 60rpx;
	}
	.scroll{
		display: flex;white-space: nowrap;background-color: #fff;height: 88rpx;line-height: 76rpx;
		font-size: 32rpx;
		.scroll_child{
			width: 18%;display: inline-block;text-align: center;
			position: relative;
			&.active{
				color: #2d407a;
				&:before{
					content: '';
					position: absolute;
					left: 30%;
					bottom: 8%;
					transform: translateY(-50%);
					height: 6rpx;
					width: 40%;
					background-color: #2d407a;
					// border-radius: 0 4px 4px 0;
					opacity: .8;
				}
			}
		}
		
	}
</style>
