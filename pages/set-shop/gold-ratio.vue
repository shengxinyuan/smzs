<template>
	<view class="zl-box">
		<view class="gold-ratio-box">
			<view class="title">{{ratioTitle}}</view>
			<input class="input" type="number" :value="value" />
		</view>
		<view class="explain">
			<view class="explain-title">{{explainTitle}}</view>
			<view>
				<view>
					{{explain01}}
				</view>
				<view>
					{{explain02}}
				</view>
				<view>
					{{explain03}}
				</view>
			</view>
		</view>
		<view class="bottom-btn">
			<button class="btn" @click="skipShopGoldPrice">{{btnName}}</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ratioTitle:'古法金倍率',
				value:'2',
				explainTitle:'说明',
				explain01:'1、倍率设置：APP端的批发拿货价x您设置的倍率=您的商城售价',
				explain02:'2、XXX倍率修改后，本平台仍将显示您的拿货成本价格；',
				explain03:'3、修改的倍率仅用于您的批发商商城',
				btnName:'保存'
			}
		},
		methods: {
			skipShopGoldPrice(){
				uni.navigateTo({
					url:'shop-gold-price'
				})
			}
		}
	}
</script>

<style lang="scss">
	.zl-box{
		padding: 30upx;
		border-top: solid 2upx #f6f6f6;
		.gold-ratio-box{
			margin-top: 20upx;
			margin-bottom: 30upx;
			.title{
				font-size: 30upx;
				font-weight: bold;
				margin-bottom: 20upx;
			}
			.input{
				width: 100%;
				height: 78upx;
				text-align: center;
				font-size: 32upx;
				font-weight: bold;
				background-color: #F6F6F6;
				border-radius: 6upx;
			}
		}
	}
	.explain {
		font-size: 22upx;
		color: #999999;
		display: flex;
	
		.explain-title {
			width: 12%;
		}
	}
	.bottom-btn {
		width: 100%;
		margin-top: 160upx;
	
		.btn {
			height: 78upx;
			line-height: 78upx;
			font-size: 30upx;
			color: #FFFFFF;
			background-image: linear-gradient(90deg,
				#2b3f7d 0%,
				#1b2c60 100%);
			border-radius: 40upx;
		}
	}
</style>
