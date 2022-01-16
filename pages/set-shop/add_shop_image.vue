<template>
	<view>
		<view style="padding: 30rpx;display: flex;align-items: center;justify-content: center;">
			<u-upload max-count="1" :file-list="previewList" :action="upload_url" :name="'file'" width="690" height="360" :auto-upload="true"
				v-on:on-success="result_plan" v-on:on-remove="remove" :header="header"></u-upload>
		</view>
		<view class="save_btn" @click="save">
			<button>保存</button>
		</view>
	</view>
</template>

<script>
	import { commonUrl } from '../../api.js'
	export default {
		data() {
			return {
				previewList: [],
				// upload_url: 'https://zuanshi.semoh.cn/api/uploads',
				upload_url: `${commonUrl}common/upload_alioss`,
				image_plan: '',
				header: {
					'token': uni.getStorageSync('token')
				}
			}
		},
		onLoad(e){
			console.log(e)
			const img = decodeURIComponent(e.img || '');
			if (img) {
				this.image_plan = img
				this.previewList = [{ url: img }]
			}
		},
		methods: {
			// 上传店铺照片
			result_plan(e) {
				console.log(e)
				if (e.status == 1) {
					// this.image_plan = e.data
					this.image_plan = e.data.url
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
						uni.navigateBack()
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
