<template>
	<view>
		<view style="padding: 30rpx;display: flex;align-items: center;justify-content: center;">
			<u-upload max-count="1" :action="upload_url" :name="'file'" width="690" height="360" :auto-upload="true"
				v-on:on-success="result_plan" v-on:on-remove="remove" :header="header"></u-upload>
		</view>
		<view class="save_btn" @click="save">
			<button>保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				upload_url: 'https://zuanshi.semoh.cn/api/uploads',
				image_plan: '',
				header: {
					'token': uni.getStorageSync('token')
				}
			}
		},
		methods: {
			// 上传店铺照片
			result_plan(e) {
				console.log(e)
				if (e.status == 1) {
					this.image_plan = e.data
				} else {
					console.log(e.message)
				}
			},
			// 上传照片删除
			remove(i) {
				this.image_plan = ''
			},
			save(){
				if (this.image_plan == '') {
					uni.showToast({
						title: '照片不能为空!',
						icon: 'none'
					});
					return
				}
				this.$api.post('manage',{image:this.image_plan}).then(res=>{
					if (res.status == 1) {
						uni.showToast({
							title: '修改成功',
							icon: 'none'
						});
						setTimeout(function() {
							uni.navigateBack()
						}, 1500);
					}
				})
			}
		}
	}
</script>

<style>
	.save_btn{
		padding: 30rpx;
		margin-top: 20rpx;
	}
	.save_btn button {
		font-size: 30upx;
		color: #FFFFFF;
		background-image: linear-gradient(90deg,
				#2b3f7d 0%,
				#1b2c60 100%);
		border-radius: 40upx;
	}
</style>
