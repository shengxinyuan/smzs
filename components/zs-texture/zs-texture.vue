<template>
	<view style="width: 100%;">
		<scroll-view class="scroll" scroll-x >
			<view class="scroll_child" :class="{active:head_ind == ''}" @click="nav_cli('')">
				<view class="">
					全部
				</view>
			</view>
			<view class="scroll_child" v-for="(it,ind) in lists" :key="ind" :class="{active:it.id == head_ind}" @click="nav_cli(it.id)">
				<view class="">
					{{it.title}}
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
		props:{
			lists:{}
		},
		methods:{
			nav_cli(e){
				this.head_ind = e
				this.$emit('nav_cli',e)
			}
		}
	}
</script>

<style lang="scss" scoped>
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
