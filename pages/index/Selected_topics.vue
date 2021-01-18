<template>
	<view>
		<view class="head">
			<image src="../../static/selection/hunjia_02.png" mode=""></image>
		</view>
		<view class="fixeds" id="evaluate" >
			<scroll-view class="swiper" scroll-x >
				<view class="swiper_item" v-for="(it,ind) in 6" :key="ind" @click="nav_cli(ind)" :class="{active:nav_idnex == ind}">
					婚庆三金
				</view>
			</scroll-view>
		</view>
		<view class="">
			<zs-shoplist-type></zs-shoplist-type>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nav_idnex:0,
				nav_top:10,
			};
		},
		mounted() {
			var query = uni.createSelectorQuery()
			//获取对应模块到顶部的距离
			//评论
			query.select('#evaluate').boundingClientRect((res) => {
				console.log(res)
				this.nav_top = res.top -100 
			}).exec()
		},
		onPageScroll(e){
			console.log(e)
		},
		methods:{
			nav_cli(e){
				this.nav_idnex = e
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
.head{
	width: 100%;height: 370rpx;
	image{
		width: 100%;height: 100%;
	}
}
.fixeds{
	width: 100%;height: 80rpx;line-height: 80rpx;z-index: 20;
	.swiper{
		display: flex;white-space: nowrap;
		.swiper_item{
			display: inline-block;width: 28%;text-align: center;
			position: relative;
			&.active{
				font-weight: bold;
				color: #2d407a;
				// background: #f8f8f8;
				&:before{
					content: '';
					position: absolute;
					left: 40%;
					top: 88%;
					transform: translateY(-50%);
					height: 6rpx;
					width: 20%;
					background-color: #2d407a;
					opacity: .8;
					
				}
			}
		}
	}
	
}
</style>
