<template>
	<view class="content">
		<view style="background-color: #fff;font-size: 36rpx;font-weight: bold;padding: 2% 20rpx;">
			待签收
		</view>
		<view style="margin: 20rpx 0;font-weight: bold;" v-if="numList.ship_bn">
			<text style="margin-right: 20rpx;">物流信息：{{numList.ship_bn}}</text>
			<text style="color: #EE453F" @click="copy(numList.ship_bn)">复制</text>
		</view>
		<view class="p1">
			<view class="step-item" v-for="(item, index) in wuliu" :key="index">
				<view>{{item.time}}</view>
				<view>{{item.status}}</view>
			</view>
		</view>
		<!-- <view class="box">
			<view class="p1 text">
				收货地址:<text class="address">{{ wl_cont.address_detail }}</text>
			</view>
			<view class="p2">
				<uni-steps :options="options" direction="column" ></uni-steps>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options: [],
				page_cont: '',
				wl_cont: '',
				numList: [],
				mailNo: '',
				wuliu: [],
			}
		},
		onLoad(op) {
			console.log(op.cont)
			this.page_cont = op.cont
			this.page_type()
		},
		onShow() {
			// this.page_type()
		},
		methods: {
			page_type() {
				// this.page_cont.bn
				this.$api.post('logistics', {
					bn_id: this.page_cont
				}).then(res => {
					console.log(res.data)
					this.numList = res.data
					this.wuliu = res.data.logistic_detail
				})
			},
			copy(e) {
				console.log(e)
				uni.setClipboardData({
					data: e,
					success: function() {
						console.log('success');
					}
				});
			},
		}
	}
</script>
<style>
	page {
		background-color: #F6F6F6;
	}
</style>
<style lang="scss" scoped>
	.step-item {
		margin-bottom: 42rpx;
		font-size: 24rpx
	}
	
	.content {
		padding: 3%;

		.shop_list {
			width: 100%;
			height: 250rpx;
			display: flex;
			align-items: center;
			border-bottom: 1rpx solid #f6f6f6;
			background-color: #fff;
			padding: 10rpx 20rpx;
			border-radius: 10rpx;
			margin: 20rpx 0;

			image {
				width: 200rpx;
				height: 200rpx;
			}

			.list_right {
				display: flex;
				width: 420rpx;
				height: 200rpx;
				margin-left: 20rpx;
				flex-wrap: wrap;

				.title {
					width: 100%;

					text {
						color: #c7ab6e;
					}
				}

				.price {
					width: 100%;
					color: #ba1a30;

					text {
						color: #999999;
						text-decoration: line-through;
						margin-left: 20rpx;
					}
				}

				.Specifications {
					width: 100%;
					display: flex;
					justify-content: space-between;
					color: #999;

					.num {
						color: #999;
					}
				}
			}
		}

		.p1 {
			background-color: #fff;
			padding: 30rpx 30rpx;
			border-radius: 12rpx;

			.item {
				display: flex;
				align-items: center;
				margin-top: 30rpx;

				image {
					width: 80rpx;
					height: 80rpx;
					// background-color: pink;
					margin-right: 10rpx;
				}
			}
		}

		.box {
			background-color: #fff;
			margin-top: 30rpx;

			.address {
				margin-left: 18rpx;
				color: #333333;
			}

			.text {
				color: #999999;
			}

			.p2 {
				padding-right: 30rpx;
			}
		}
	}
</style>
