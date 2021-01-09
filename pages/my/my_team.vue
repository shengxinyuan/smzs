<template>
	<view style="padding: 3%;">
		<input type="text" v-model="search" placeholder="搜索手机号或邀请码、回车搜索" @confirm="go_search"/> 
		<view class="data_statis">
			<view class="statis_l">
				<view class="statis_l_t">
					普通用户共计/人
				</view>
				<view class="statis_l_r">
					{{num_s}}
				</view>
			</view>
			<view class="statis_r">
				<view class="statis_l_t">
					超级会员共计/人
				</view>
				<view class="statis_l_r">
					{{num_two}}
				</view>
			</view>
		</view>
		<view class="qh_but">
			<view class="qh_but_l" :class="{'avt':but_ind == 1}" @click="but_ind_cli(1)">一级团队成员 ({{num_s}})</view>
			<view class="qh_but_l" :class="{'avt':but_ind == 2}" @click="but_ind_cli(2)">二级级团队成员({{num_two}})</view>
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
			num_s(){
				let arr = this.num
				let att =0
				if(this.num >= 10000){
					att = this.num /10000
					arr = att.toFixed(2)+'万'
				}
				return arr
			},
			num_two(){
				let arr = this.num_vip
				let att =0
				if(this.num_vip >= 10000){
					att = this.num_vip /10000
					arr = att.toFixed(2)+'万'
				}
				return arr
			},
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
				
				if(this.search == ''){
					this.com.navto('./area_team')
				}else{
					this.com.msg(this.search)
					this.com.navto('./area_team')
				}
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
		width: 100%;display: flex;margin-bottom: 30rpx;border: 1rpx solid #2b3e7b;line-height: 68rpx;border-radius: 50rpx;
		.qh_but_l{
			width: 50%;text-align: center;color: #2b3e7b;
		}
		.avt{
			background-color: #2b3e7b;border-radius: 50rpx;color: white;
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
	.data_statis{
		width: 100%;height: 160rpx;
		margin: 30rpx 0;display: flex;justify-content: space-between;
		.statis_l{
			width: 	49%;height: 100%;background-image: url(../../static/my/team_z.png);
			background-size: 100% 100%;border-radius: 22rpx;padding-left: 18rpx;
			.statis_l_t{
				line-height: 60rpx;
			}
			.statis_l_r{
				font-size: 50rpx;width: 240rpx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
			}
		}
		.statis_r{
			width: 	49%;height: 100%;background-image: url(../../static/my/team_vip_nums.png);
			background-size: 100% 100%;border-radius: 22rpx;padding-left: 18rpx;
			.statis_l_t{
				line-height: 60rpx;
			}
			.statis_l_r{
				font-size: 50rpx;width: 240rpx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
			}
		}
	}
</style>
