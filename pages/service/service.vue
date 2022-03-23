<template>
	<view class="kefu">
		<image class="img" :src="img" mode="widthFix"></image>
		<button type="default" @click="saveImage">保存客服二维码</button>
		<view class="tip">微信内扫描二维码就能联系客服</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: 'https://sermer-app-oss.oss-cn-hangzhou.aliyuncs.com/front-end-static/kefu.jpg'
			}
		},
		methods: {
			saveImage() {
				uni.saveImageToPhotosAlbum({
					filePath: this.img,
					success(res) {
						uni.showToast({
							title: '已保存到相册！',
							icon: 'success',
							duration: 2000
						})
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.kefu {
	padding: 80rpx 30rpx;
}
.img {
	display: block;
	margin: 0 auto;
}
.tip {
	text-align: center;
	margin-top: 20rpx;
	color: #f00;
	font-size: 24rpx;
}
</style>
