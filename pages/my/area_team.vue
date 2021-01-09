<template>
	<view style="padding: 3%;">
		<input type="text" v-model="search" placeholder="搜索手机号或邀请码、回车搜索" @confirm="go_search"/> 
		
		<view class="qh_but">
			<view class="qh_but_l" :class="{'avt':but_ind == 1}" @click="but_ind_cli(1)">区域合伙人 </view>
			<view class="qh_but_l" :class="{'avt':but_ind == 2}" @click="but_ind_cli(2)">全部用户</view>
		</view>
		<!-- //列表 -->
		<view class="list" v-if="but_ind == 1">
			<view class="list_item" v-for="(it,ind) in 6" :key="ind">
				<image src="../../static/kefu.png" mode=""></image>
				<view class="list_item_name">
					{{names_com}}
				</view>
				<text class="list_item_vip" v-if="ind % 2 == 0">
					超级会员
				</text>
			</view>
		</view>
		<view class="list" v-else>
			<view class="list_item" v-for="(it,ind) in 3" :key="ind">
				<image src="../../static/kefu.png" mode=""></image>
				<view class="list_item_name">
					{{names_com}}
				</view>
				<text class="list_item_vip" v-if="ind % 4 == 0">
					超级会员
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				search:'',
				num:15121,
				num_vip:2400,
				names:"王志刚",
				but_ind:1
			}
		},
		computed:{
			
			names_com(){
				let arr =""
				if(this.names.length >= 2 && this.names.length < 4){
					arr = this.names.replace(/^./g, '*');
				}else if(this.names.length >= 4){
					arr = this.names.replace(/^../g, '**');
				}
				return arr
			}
		},
		methods:{
			go_search(){
				this.com.msg(this.search)
				this.search = ''
			},
			//团队切换
			but_ind_cli(e){
				this.but_ind = e
			}
		}
	}
</script>

<style>
	page{
		background-color: #F1F1F1;
	}
</style>
<style lang="scss" scoped>
	//切换
	.qh_but{
		width: 100%;display: flex;margin-bottom: 30rpx;line-height: 68rpx;border-radius: 50rpx;
		margin-top: 30rpx;
		.qh_but_l{
			width: 50%;text-align: center;
		}
		.avt{
			border-radius: 50rpx;font-weight: bold;color: #2b3e7b;
			text-decoration: underline;
		}
	}
	.list{
		width: 100%;background-color: #FFFFFF;padding: 20rpx;border-radius: 16rpx; 
		.list_item{
			width: 100%;display: flex;
			image{
				width: 86rpx;height: 86rpx;border-radius: 50%;margin-right: 20rpx;
			}
			.list_item_name{
				line-height: 86rpx;font-size: 34rpx;
			}
			.list_item_vip{
				padding: 2;padding: 0 24rpx;height: 40rpx;margin-top: 25rpx;color: #fff;
				background-color: #ffd775;border-radius: 10rpx;margin-left: 20rpx;
			}
		}
	}
	input{
		background-color: #fff;line-height: 70rpx;height: 70rpx;padding-left: 30rpx;border-radius: 50rpx;font-size: 28rpx;
	}
</style>
