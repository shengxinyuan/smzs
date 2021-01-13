<template>
	<view style="padding: 3% 4%;">
		<view class="inp_it">
			<view class="">
				姓名:
			</view>
			<input type="text" placeholder="请输入" v-model="name"/>
		</view>
		<view class="inp_it">
			<view class="">
				联系方式:
			</view>
			<input type="text" placeholder="请输入" v-model="phone" maxlength="11"/>
		</view>
		<view class="inp_it" @click="show = true">
			<view class="">
				所属城市:
			</view>
			<input type="text" placeholder="请选择" :disabled="true" v-model="reg_val"/>
		</view>
		<view style="margin-top: 140rpx;">
			<zs-button :buttitle="'提交申请'" @but_cli="good"></zs-button>
		</view> 
		<u-picker v-model="show" mode="region" @confirm="region"></u-picker>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				show:false,//显示
				reg_val:'',//地区
				phone:'',//电话
				name:''
			}
		},
		methods:{
			//选地区
			region(e){
				console.log(e)
				this.reg_val = e.province.label +'-'+e.city.label +'-'+e.area.label
			},
			//提交
			good(){
				uni.showToast({
					title:'提交成功'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.inp_it{
		width: 100%;
		display: flex;justify-content: space-between;
		line-height: 56rpx;margin-bottom: 50rpx;
		view{
			width: 20%;text-align: center;font-size: 30rpx;
		}
		input{
			height: 56rpx;padding-left: 20rpx;margin-left: 2%;
			width: 78%;font-size: 28rpx;border: 2rpx solid #eee;
		}
	}
</style>
