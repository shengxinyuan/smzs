<template>
	<view>
		<view style="padding: 30rpx;display: flex;align-items: center;justify-content: center;">
			<u-upload
				ref="uUpload"
				max-count="9"
				:file-list="previewList"
				:action="upload_url"
				:name="'file'"
				:auto-upload="true"
				:header="header"
			></u-upload>
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
				header: {
					'token': uni.getStorageSync('token')
				}
			}
		},
		onLoad(e){
			uni.showLoading({ mask: true })
			this.$api.get('shop/banner/query_picture').then((res) => {
				console.log(res);
				uni.hideLoading()
				if (res.status == 1) {
					this.previewList = res.data.map(url => ({ url }))
				}
			}).catch(() => {
				uni.hideLoading()
			})
		},
		methods: {
			save(){
				const files = this.$refs.uUpload.lists.filter(val => {
					return val.progress == 100;
				// }).map((val) => val.response ? val.response.data : val.url)
				}).map((val) => val.response ? val.response.data.url : val.url)
				console.log(files)
				if (files.length === 0) {
					uni.showToast({
						title: 'banner不能为空!',
						icon: 'none'
					});
					return
				}
				this.$api.post('shop/banner/set_picture',{img_url:files}).then(res=>{
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
