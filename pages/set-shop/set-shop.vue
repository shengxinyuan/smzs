<template>
	<!-- 金店管理 -->
	<view class="zl-page">
		<view class="box-one">
			<view class="zl-head">
				<view class="heads">
					<text>金店logo</text>
				</view>
				<view class="images" @click="shopLogoPopup">
					<image class="shop-photo" :src="shopPhoto" mode="widthFix"></image>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
				
				<!-- 选择相册 -->
				<u-popup v-model="show" mode="bottom" border-radius="10">
					<view class="shop-logo-popup">
						<view class="take-picture">拍照</view>
						<view class="album">从相册选择</view>
						<view class="cancel" @click="show = false">取消</view>
					</view>
				</u-popup>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店名称</text>
				</view>
				<view class="nick-name" @click="skipShopName">
					<text>{{shopName}}</text>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店签名</text>
				</view>
				<view class="nick-name" @click="skipShopSignature">
					<text class="u-line-1">{{shopSignature}}</text>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>客服电话</text>
				</view>
				<view class="nick-name" @click="skipServiceTel">
					<text>{{shopTelephone}}</text>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店地址</text>
				</view>
				<view class="nick-name" @click="skipShopAddress">
					<text>{{shopAddress}}</text>
					<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="zl-heads">
				<view class="heads">
					<text>金店客服二维码</text>
				</view>
				<view class="images" @click="skipServiceCode">
					<image class="shop-code" src="../../static/set-shop/ma.png" mode="widthFix"></image>
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
				shopPhoto: '../../static/community/photo.png',
				shopName: '这里是昵称',
				shopSignature: '这里是签名这里是签名这里是签名签名签名签名签名签名',
				shopTelephone: '18252352641',
				shopAddress: '这里是地址',
				show: false
			}
		},
		methods: {
			shopLogoPopup() {
				this.show = true
			},
			skipShopName(){
				uni.navigateTo({
					url:'shop-name'
				})
			},
			skipShopSignature(){
				uni.navigateTo({
					url:'shop-signature'
				})
			},
			skipServiceTel(){
				uni.navigateTo({
					url:'service-tel'
				})
			},
			skipShopAddress(){
				uni.navigateTo({
					url:'shop-address'
				})
			},
			skipServiceCode(){
				uni.navigateTo({
					url:'service-code'
				})
			},
			skipShopData(){
				uni.navigateTo({
					url:'shop-data'
				})
			},
			skipShopCertificate(){
				uni.navigateTo({
					url:'shop-certificate'
				})
			},
			skipShopGoldPrice(){
				uni.navigateTo({
					url:'shop-gold-price'
				})
			},
			skipSetPayee(){
				uni.navigateTo({
					url:'set-payee'
				})
			},
			skipSetWithdraw(){
				uni.navigateTo({
					url:'set-withdraw'
				})
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

		.shop-photo {
			width: 25%;
			border-radius: 100%;
		}

		.shop-code {
			width: 12%;
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
	.shop-logo-popup{
		width: 100%;
		font-size: 32upx;
		padding: 0 30upx;
		.take-picture,.album{
			height: 110upx;
			line-height: 110upx;
			text-align: center;
			border-bottom: solid 2upx #F8F8F8;
		}
		.cancel{
			height: 140upx;
			line-height: 140upx;
			text-align: center;
			border-bottom: solid 2upx #F8F8F8;
			color: #ff3b3b;
		}
	}
</style>
