<template>
	<!-- 金店管理 -->
	<view class="zl-page">
		<view class="box-one">
			<view class="zl-heads">
				<view class="heads"> 
					<text>金店logo</text>
				</view>
				<view class="images" @click="shopLogoPopup">
					<image class="shop-photo" :src="shopPhoto" mode="aspectFill"></image>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店名称</text>
				</view>
				<view class="nick-name" @click="skipShopName">
					<text>{{data.title}}</text>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店签名</text>
				</view>
				<view class="nick-name" @click="skipShopSignature">
					<text class="u-line-1">{{data.remark||'还没设置签名~'}}</text>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>客服电话</text>
				</view>
				<view class="nick-name" @click="skipServiceTel">
					<text>{{data.telephone||'还没设置手机号~'}}</text> 
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店地址</text>
				</view>
				<view class="nick-name" @click="skipShopAddress">
					<text>{{data.province}}{{data.city}}{{data.area}}{{data.address}}</text>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店客服二维码</text>
				</view>
				<view class="images" @click="skipServiceCode">
					<image class="shop-code" :src="data.qr_code" @click="imgpreview(data.qr_code)" mode="aspectFill"></image>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="box-two">
			<view class="zl-heads">
				<view class="heads">
					<text>金店数据</text>
				</view>
				<view class="nick-name" @click="skipShopData">
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>商城证书</text>
				</view>
				<view class="nick-name" @click="skipShopCertificate">
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店金价</text>
				</view>
				<view class="nick-name" @click="skipShopGoldPrice">
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="box-there">
			<view class="zl-heads" @click="skipSetPayee">
				<view class="heads">
					<text>收款设置</text>
				</view>
				<view class="nick-name">
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads" @click="skipSetWithdraw">
				<view class="heads">
					<text>提现设置</text>
				</view>
				<view class="nick-name">
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				image:'',
				data : [] ,
				shopPhoto: '',
				shopName: '',
				shopSignature: '',
				shopTelephone: '',
				shopAddress: '',
				show: false,
				text: 'uni.request',
				avatar:''
			}
		},
		onLoad() {
		},
		onShow(){
			this.$api.get("manage").then(res=>{
				console.log(res)
				this.data = res.data
				this.shopPhoto=res.data.avatar
			})
		},
		methods: {
			//图片预览
			imgpreview(e){
				let arr = []
				arr.push(e)
				uni.previewImage({
					urls:arr
				})
			},
			shopLogoPopup() {
				let that = this
				uni.chooseImage({
					sourceType: ['camera '], //从相册选择
					success: (chooseImageRes) => {
						console.log(chooseImageRes)
						const tempFilePaths = chooseImageRes.tempFilePaths[0]
						console.log(chooseImageRes.tempFilePaths[0])
						uni.uploadFile({
							url: 'http://zhuanshi.nxm.wanheweb.com/api/uploads',
							filePath: tempFilePaths,
							name: 'file',
							formData: {
								'user': 'test'
							},
							header:{
								'token':uni.getStorageSync('token')
							},
							success: (up) => {
								that.image = JSON.parse(up.data).data
								// console.log(JSON.parse(up.data))
								that.shopPhoto = that.image
								that.$api.post('manage',{avatar:that.image}).then(res=>{
									console.log(res)
								})
							}
						});
						
					}
				});
			},
			skipShopName() {
				uni.navigateTo({
					url: './shop-name?title='+this.data.title+'&id='+this.data.id
				})
			},
			skipShopSignature() {
				uni.navigateTo({
					url: './shop-signature?remark='+this.data.remark
				})
			},
			skipServiceTel() {
				uni.navigateTo({
					url: './service-tel?telephone='+this.data.telephone+'&is_display='+this.data.is_display
				})
			},
			skipShopAddress() {
				uni.navigateTo({
					url: './shop-address?province='+this.data.province+'&city='+this.data.city+'&area='+this.data.area+'&address='+this.data.address
				})
			},
			skipServiceCode() {
				uni.navigateTo({
					url: 'service-code'
				})
			},
			//金店数据
			skipShopData() {
				uni.navigateTo({
					url: 'shop-data'
				})
			},
			skipShopCertificate() {
				uni.navigateTo({
					url: 'shop-certificate'
				})
			},
			skipShopGoldPrice() {
				uni.navigateTo({
					url: 'shop-gold-price'
				})
			},
			skipSetPayee() {
				uni.navigateTo({
					url: 'set-payee'
				})
			},
			skipSetWithdraw() {
				uni.navigateTo({
					url: 'set-withdraw'
				})
			},
			selectPhoto(){
				let _that = this
				uni.chooseImage({
				    count: 1, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //使用相机
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths[0]));
						uni.uploadFile({
							url: 'http://zhuanshi.nxm.wanheweb.com/api/uploads', //仅为示例，非真实的接口地址
							filePath: res.tempFilePaths[0],
							name: 'file',
							formData: {
								'user': 'test'
							},
							methods : 'POST',
							header:{	// uni.getStorageSync('token')
								// 'content-type': 'application/x-www-form-urlencoded',
								'token':uni.getStorageSync('token')},
							success: (uploadFileRes) => {
								console.log(uploadFileRes.data);
								_that.data = {
									'avatar' : uploadFileRes.data.data
								}
							}
						});
				    }
				});
			}
		}
	}
</script>

<style lang="scss">
	.box-one,
	.box-two,
	.box-there {
		background-color: #FFFFFF;
		border-top: solid 20upx #F8F8F8;
	}

	.zl-head {
		padding: 20upx 30upx;
		border-bottom: solid 2upx #F8F8F8;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.zl-heads {
		width: 100%;
		height: 100upx;
		padding: 0 30upx;
		border-bottom: solid 2upx #F8F8F8;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.heads {
		font-size: 28upx;
	}

	.images {
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		image{
			width: 80rpx;height: 86rpx;
		}
		.shop-photo {
			width: 25%;
			border-radius: 100%;
			background-color: #F6F6F6;
		}

		.shop-code {
			width: 80rpx;height: 80rpx;
		}
	}

	.nick-name {
		width: 70%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		font-size: 26upx;
		color: #999999;
	}

	.icon {
		font-size: 32upx;
		color: #CCCCCC;
		margin-left: 10upx;
	}

	.shop-logo-popup {
		width: 100%;
		font-size: 32upx;
		padding: 0 30upx;

		.take-picture,
		.album {
			height: 110upx;
			line-height: 110upx;
			text-align: center;
			border-bottom: solid 2upx #F8F8F8;
		}

		.cancel {
			height: 140upx;
			line-height: 140upx;
			text-align: center;
			border-bottom: solid 2upx #F8F8F8;
			color: #ff3b3b;
		}
	}
</style>
