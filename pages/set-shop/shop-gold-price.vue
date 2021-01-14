<template>
	<view>
		<view class="zl-box">
			<view class="head-box">
				<view class="head-box-left">
					<view class="title">今日商城金价</view>
					<view class="price">
						<text class="rmb">￥</text>
						<text class="money">636.8</text>
					</view>
				</view>
				<view class="head-box-right">
					<view class="title">更新方式</view>
					<view class="uni-padding-wrap">
						<view>
							<label class="radio">
								<radio value="r1" checked="true" :color="Color" />选中</label>
						</view>
						<view>
							<label class="radio">
								<radio value="r2" />未选中</label>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Color:'#f1ac29'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.zl-box {
		padding: 20upx 30upx;

		.head-box {
			display: flex;
			padding: 30upx 0;
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
</style>
