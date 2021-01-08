<template>
	<view class="">
		<uni-nav-bar left-icon="back" @clickLeft="goto_top" :title="title"></uni-nav-bar>
		
		<!-- 列表 -->
		<view class="part_list">
			<view class="list_child" v-for="(it,ind) in 4" :key="ind">
				<view class="child_l">
					<view class="child_l_top">微信</view>
					<view class="child_l_but" v-if="type == 2">来源 2021-01-08 13:47</view>
					<view class="child_l_but">2021-01-08 13:47</view>
				</view>
				<view class="child_r">
					<view v-if="type==2">
						<view class="child_r_top" style="color: #dd2626;">
							￥300
						</view>
						<view class="child_r_but">
							已到账
						</view>
					</view>
					
					<view class="child_r_top" v-else>
						￥300
					</view>
					
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default{
		data(){
			return{
				title:'',
				type:0
			}
		},
		onLoad(op) {
			this.type = op.type
			console.log(op)
			if(op.type == 1){
				this.title = '提现明细'
			}else if(op.type == 2){
				this.title = '返利明细'
			}else if(op.type == 3){
				this.title = '消费明细'
			}else if(op.type == 4){
				this.title = '充值明细'
			} 
		},
		methods:{
			goto_top(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style scoped lang="scss"> 
	.part_list{
		padding: 3%;
		.list_child{
			background-color: #FFFFFF;margin-bottom: 4rpx;padding: 20rpx;display: flex;justify-content: space-between;
			.child_l{
				.child_l_top{
					line-height: 58rpx;font-size: 32rpx;
				}
				.child_l_but{
					color: #999;
				}
			}
			.child_r{
				padding-top: 14rpx;
				.child_r_top{
					font-size: 32rpx;
				}
				.child_r_but{
					color: #84d27e;
				}
			}
		}
	}
</style>
