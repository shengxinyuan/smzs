<template>
	<view>
		<view class="zl-box">
			<view class="head-box">
				<view class="head-box-left">
					<view class="title">今日商城金价</view>
					<view class="price">
						<text class="rmb">￥</text>
						<text class="money">{{todayPrice}}</text>
					</view>
				</view>
				<view class="head-box-right">
					<view class="title">更新方式</view>
					<view class="uni-padding-wrap">
						<radio-group @change="radioChange">
							<view class="radio-box">
								<label class="radio">
									<radio value="r1" checked="true" :color="Color" :style="styleSize" />{{radio01}}</label>
							</view>
							<view class="radio-box" @click="openPopup">
								<label class="radio oneself-set">
									<radio value="r2" :color="Color" :style="styleSize" />{{radio02}}</label>
							</view>
						</radio-group>
					</view>
				</view>
			</view>
			<u-table class="table" font-size="26" padding="34upx 0" border-color="#f6f6f6">
				<u-tr v-for="(tableItem,tableIndex) in tableList" :key="tableIndex">
					<u-td>
						<view class="table-td" @click="skipGoldPrices01(tableItem)">
							<view>{{tableItem.title01}}</view>
							<view>
								<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
							</view>
						</view>
					</u-td>
					<u-td>
						<view class="table-td" @click="skipGoldPrices02(tableItem)">
							<view>{{tableItem.title02}}</view>
							<view>
								<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
							</view>
						</view>
					</u-td>
				</u-tr>
			</u-table>
		</view>

		<!-- 自己设置 弹出层 -->
		<u-popup v-model="popupShow" mode="center" border-radius="10" :closeable="false" width="78%">
			<view>
				<view class="popup-box-up">
					<view class="popup-title">设置金价更新</view>
					<view class="popup-set">
						<view style="width: 78%;">
							<view class="set-box">
								<view class="set-title">浮动范围值：</view>
								<view class="set-text">
									<view class="text-one symbol">±</view>
									<input class="input" :value="value01" type="number" />
									<view>元</view>
								</view>
							</view>
							<view class="set-box">
								<view class="set-title">更 新 间 隔：</view>
								<view class="set-text">
									<view class="text-one">每</view>
									<input class="input" :value="value02" type="number" />
									<view>小时</view>
								</view>
							</view>
						</view>
					</view>
					<view>
						<button class="btn" @click="skipBackPage">保存并执行</button>
					</view>
				</view>
				<view class="popup-box-down">
					<view>
						<text>{{explainText01}}</text>
					</view>
					<view>
						<text>{{explainText02}}</text>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				todayPrice:'636.8',
				radio01:'与采购系统同步',
				radio02:'自己设置',
				Color: '#f1ac29',
				styleSize: 'transform:scale(0.7)',
				tableList: [{
						title01: '足金金价',
						title02: '铂金金价',
						url01:'gold-prices'
					},
					{
						title01: '金条金价',
						title02: 'K金倍率'
					},
					{
						title01: '5G黄金倍率',
						title02: '铂金金价'
					},
					{
						title01: '3D硬金倍率',
						title02: '古法金倍率',
						url02:'gold-ratio'
					},
					{
						title01: '人气爆款倍率',
						title02: '钻饰倍率'
					},
					{
						title01: 'IP产品倍率',
						title02: '银饰品倍率'
					},
					{
						title01: '裸石商品倍率',
						title02: '无氰5D倍率'
					}
				],
				popupShow: false,
				value01:'1',
				value02:'2',
				explainText01:'*浮动范围：当采购系统金价高于或低于您设置的数字是整数且不能小于1，商城金价将更新金价。',
				explainText02:'*更新间隔：按您设置的间隔时间更新金价，间隔时间必须是整数且不能小于1。'
			}
		},
		methods: {
			radioChange: function(evt) {
				for (let i = 0; i < this.length; i++) {
					if (this.value == evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			openPopup() {
				this.popupShow = true
			},
			skipBackPage(){
				this.popupShow = false
			},
			skipGoldPrices01(tableItem){
				uni.navigateTo({
					url:tableItem.url01
				})
			},
			skipGoldPrices02(tableItem){
				uni.navigateTo({
					url:tableItem.url02
				})
			}
		}
	}
</script>

<style lang="scss">
	.zl-box {
		padding: 20upx 30upx;

		.head-box {
			display: flex;
			padding: 20upx 0;
			background-color: #fff6e5;

			.head-box-left {
				width: 50%;
				text-align: center;
				border-right: solid 2upx #f6ce82;

				.title {
					font-size: 24upx;
					color: #666666;
				}

				.price {
					color: #f1ac29;
					margin: 40upx 0;

					.rmb {
						font-size: 30upx;
					}

					.money {
						font-size: 50upx;
					}
				}
			}

			.head-box-right {
				width: 50%;

				.title {
					font-size: 24upx;
					color: #666666;
					text-align: center;
				}
			}
		}
	}

	.uni-padding-wrap {
		margin-top: 20upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.radio-box {
		margin-bottom: 20upx;
		display: flex;
		align-items: center;
	}

	.radio {
		font-size: 26upx;
		color: #f1ac29;
	}

	.oneself-set {
		color: #999999;
	}

	.table {
		margin-top: 50upx;

		.table-td {
			padding: 0 20upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.icon {
				color: #cccccc;
			}
		}
	}

	.popup-box-up {
		padding: 40upx 0;

		.popup-title {
			font-size: 30upx;
			text-align: center;
			margin-bottom: 70upx;
		}

		.popup-set {
			display: flex;
			justify-content: center;
			align-items: center;

			.set-box {
				width: 100%;
				display: flex;
				align-items: center;
				margin-bottom: 30upx;

				.set-title {
					width: 35%;
					font-size: 26upx;
					color: #575c5e;
				}

				.set-text {
					width: 60%;
					font-size: 26upx;
					color: #666666;
					display: flex;
					align-items: center;
					
					.text-one{
						width: 10%;
					}
					.symbol{
						font-size: 36upx;
					}

					.input {
						width: 60%;
						height: 52upx;
						margin: 0 10upx;
						font-size: 28upx;
						text-align: center;
						background-color: #f6f6f6;
					}
				}
			}
		}

		.btn {
			width: 69%;
			height: 62upx;
			line-height: 62upx;
			font-size: 26upx;
			color: #FFFFFF;
			background-image: linear-gradient(90deg,
				#2b3f7d 0%,
				#1b2c60 100%);
			border-radius: 30upx;
		}
	}
	.popup-box-down{
		padding: 30upx;
		background-color: #f6f6f6;
		font-size: 22upx;
		color: #f5b47f;
	}
</style>
