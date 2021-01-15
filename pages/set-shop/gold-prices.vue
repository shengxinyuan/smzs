<template>
	<view class="zl-box">
		<block v-for="(item,index) in list" :key="index">
			<view class="gold-prices-box">
				<view class="gold-prices-box-up">
					<view class="up-title">{{item.goldTitle}}</view>
					<view class="up-prices">
						<text class="rmb">￥</text>
						<text class="number">{{item.goldPrice}}/g</text>
					</view>
				</view>
				<view class="gold-prices-box-down">
					<view class="price-box">
						<view class="price-min-box">
							<view class="left">
								<view class="left-title">{{item.title01}}</view>
								<view class="left-price">￥{{item.price01}}/g</view>
							</view>
							<view class="right">
								<view class="right-symbol">+</view>
								<input class="input" type="number" :value="item.value01" />
								<view class="right-symbol">=</view>
							</view>
							<view class="right-price">￥{{item.sumPrice01}}/g</view>
						</view>
						<view class="price-min-box">
							<view class="left">
								<view class="left-title">{{item.title02}}</view>
								<view class="left-price">￥4.2/g</view>
							</view>
							<view class="right">
								<view class="right-symbol">+</view>
								<input class="input" type="number" :value="item.value02" />
								<view class="right-symbol">=</view>
							</view>
							<view class="right-price">￥{{item.sumPrice02}}/g</view>
						</view>
					</view>
					<view class="circle-left"></view>
					<view class="circle-right"></view>
				</view>
			</view>
		</block>
		<view class="explain">
			<view class="explain-title">说明</view>
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
			<button class="btn" @click="skipShopGoldPrice">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						goldTitle: '足金999',
						goldPrice: '451.2',
						title01: '今日料价',
						price01: '407',
						value01: '233',
						sumPrice01: '427',
						title02: '工费',
						price02: '4.2',
						value02: '4',
						sumPrice02: '8.2'
					},
					{
						goldTitle: '足金999.9',
						goldPrice: '451.2',
						title01: '今日料价',
						price01: '407',
						value01: '233',
						sumPrice01: '427',
						title02: '工费',
						price02: '4.2',
						value02: '4',
						sumPrice02: '8.2'
					}
				],
				explain01:'1、倍率设置：APP端的批发拿货价x您设置的倍率=您的商城售价',
				explain02:'2、XXX倍率修改后，本平台仍将显示您的拿货成本价格；',
				explain03:'3、修改的倍率仅用于您的批发商商城'
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
	.zl-box {
		padding: 20upx 30upx;
	}

	.gold-prices-box {
		margin-bottom: 30upx;

		.gold-prices-box-up {
			width: 100%;
			height: 80upx;
			padding: 0 60upx;
			background-image: linear-gradient(180deg,
				#f3e9df 0%,
				#f6efe9 100%);
			border-radius: 10upx 10upx 0 0;
			border-bottom: dashed 2upx #cccccc;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.up-title {
				font-size: 26upx;
			}

			.up-prices {
				color: #ef2d2d;

				.rmb {
					font-size: 20upx;
				}

				.number {
					font-size: 34upx;
					font-weight: bold;
				}
			}
		}

		.gold-prices-box-down {
			width: 100%;
			padding: 40upx 0;
			background-color: #F6F6F6;
			border-radius: 0 0 10upx 10upx;
			display: flex;
			justify-content: center;
			position: relative;

			.price-box {
				width: 74%;

				.price-min-box {
					display: flex;
					align-items: center;
					margin-bottom: 30upx;

					.left {
						width: 23%;
						text-align: center;
						padding-right: 20upx;

						.left-title {
							font-size: 22upx;
							color: #999999;
						}

						.left-price {
							font-size: 26upx;
							color: #ee2e2e;
						}
					}

					.right {
						width: 50%;
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-weight: bold;

						.right-symbol {
							font-size: 30upx;
						}

						.input {
							width: 66%;
							height: 52upx;
							background-color: #FFFFFF;
							font-size: 28upx;
							text-align: center;
							border-radius: 6upx;
						}
					}

					.right-price {
						width: 28%;
						text-align: center;
						font-weight: bold;
						font-size: 26upx;
					}
				}
			}

			.circle-left {
				width: 24upx;
				height: 24upx;
				background-color: #FFFFFF;
				border-radius: 100%;
				position: absolute;
				left: -12upx;
				top: -12upx;
			}

			.circle-right {
				width: 24upx;
				height: 24upx;
				background-color: #FFFFFF;
				border-radius: 100%;
				position: absolute;
				right: -12upx;
				top: -12upx;
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
		padding: 0 30upx;
		position: fixed;
		bottom: 20upx;
		left: 0;

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
