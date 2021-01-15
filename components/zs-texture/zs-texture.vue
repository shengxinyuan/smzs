<template>
	<view>
		<scroll-view class="scroll" scroll-x >
			<view class="scroll_child" v-for="(it,ind) in list" :key="ind" :class="{active:ind == head_ind}" @click="nav_cli(ind)">
				<view class="">
					{{it.name}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				head_ind:0,
				list:[
					{name:"全部"},
					{name:"黄金"},
					{name:"铂金"},
					{name:"18K金"},
					{name:"24K金"},
					{name:"白银"},
					{name:"钻石"},
					{name:"珍珠"}
				]
			}
		},
		methods:{
			nav_cli(e){
				this.head_ind = e
			}
		}
	}
</script>

<style lang="scss" scoped>
.scroll{
	display: flex;white-space: nowrap;background-color: #fff;height: 80rpx;line-height: 76rpx;
	.scroll_child{
		width: 18%;display: inline-block;text-align: center;
		position: relative;
		&.active{
			color: #2d407a;
			&:before{
				content: '';
				position: absolute;
				left: 35%;
				bottom: 10%;
				transform: translateY(-50%);
				height: 7rpx;
				width: 30%;
				background-color: #2d407a;
				border-radius: 0 4px 4px 0;
				opacity: .8;
			}
		}
	}
	
}
</style>
