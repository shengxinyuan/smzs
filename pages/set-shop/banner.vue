<template>
	<view>
		
		<view style="padding: 30rpx;display: flex;align-items: center;justify-content: center;">
			<u-upload ref="uUpload" max-count="9" :file-list="previewList" :action="upload_url" :name="'file'"
				:auto-upload="true" :header="header"></u-upload>
		</view>
		<view class="save_btn" @click="save">
			<button>保存</button>
		</view>
		<view class="tips">*建议banner图片像素：750*400 或等比例缩放的尺寸</view>
	</view>
</template>

<script>
	import {
		commonUrl
	} from '../../api.js'
	export default {
		data() {
			return {
				member_info: {},
				previewList: [],
				upload_url: `${commonUrl}common/upload_alioss`,
				header: {
					'token': uni.getStorageSync('token')
				}
			}
		},
		onLoad(e) {
			this.getImgs()
		},
		methods: {
			getImgs() {
				uni.showLoading({
					mask: true
				})
				this.member_info = uni.getStorageSync('member_info');
				this.$api.get('manage', {
					member_id: this.member_info.id
				}).then((res) => {
					uni.hideLoading()
					if (res.status == 1) {
						this.previewList = res.data.banner_list.map(item => ({
							url: item.image_url
						}))
						console.log(this.previewList);
					}
				}).catch(() => {
					uni.hideLoading()
				})
			},
			save() {
				const files = this.$refs.uUpload.lists.filter(val => {
					return val.progress == 100;
				}).map((val) => val.response ? val.response.data.url : val.url)
				console.log(files)
				this.$api.post('manage', {
					'banner_list': files.join(',')
				}).then(res => {
					if (res.status == 1) {
						uni.showToast({
							title: '修改成功',
							icon: 'none'
						});
					}
				})
			}
		}
	}
</script>

<style>
	.save_btn {
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
	.tips {
		text-align: center;
	}
</style>
