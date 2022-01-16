<template>
	<view class="zl-page">
		<view>
			<view>
				<!-- 商品详情列表 -->
				<view class="order">
					<view class="goods-box">
						<view class="good-photo">
							<image :src="order.image" mode="aspectFill"></image>
						</view>
						<view class="goods-details">
							<view class="goods-title">{{order.title}} sadas</view>
							<view class="money-box" style="display: flex;justify-content: space-between;">
								<view class="">
									<text class="rmb">￥</text>
									<text class="integer" v-if="!viptype">{{order.goods_money_normal}}</text>
									<text class="integer" v-else>{{order.goods_money_vip}}</text>
								</view>
								<view style="color: #999;">
									*{{order.order_count}}
								</view>
							</view>
						</view>
					</view>
				</view>

				<!-- 商品订单列表 -->
				<view class="first-box-six">
					<view class="first-box-six-min-v-bottom" @click="input_show = true">
						<view class="min-v-left">
							<view>物流单号 </view>
							<view class="min-v-search">选填</view>
						</view>
						<view>
							<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
						</view>
					</view>
					<input v-if="input_show" v-model="input_val" placeholder="" />
				</view>
				
			</view>
		</view>
		<!--  底部-->
		<view class="tabs-second-box" >
			<!-- 代发底部展示 -->
			<view class="second-box-five">
				<view class="bottom-v">
					<view class="money-box">
					</view>
					<view class="bottom-v-right" >
						<view class="right-right" @click="submit_order">
							<view>确认发货</view>
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
				input_val:'',
				input_show:false,//输入框
				order: {},
			}
		},
		onLoad(op) {
			
		},
		methods: {
			go_pages_add(){
				this.com.navto('../my/receiving?is_mine='+ 1 +'&type='+0 + '&current='+ this.current)
			},
			//提交订单
			submit_order(){
				
			}
		}
	}
</script>

<style>
	page{
		background-color: #F6F6F6
	}
</style>
<style lang="scss" scoped>
	.zl-page{
		
	}
	.xiangyou {
		font-size: 30upx;
		color: #666666;
	}

	.order,
	.second-box-there {
		padding: 20upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
	}

	.goods-box {
		display: flex;

		.good-photo {
			width: 25%;
			display: flex;

			image {
				width: 166rpx;
				height: 166rpx;background-color: #eee;
				border-radius: 10upx;
			}
		}

		.goods-details {
			margin-left: 20upx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 20rpx 0;

			.goods-title {
				font-size: 28upx;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			.money-box {
				.rmb {
					font-size: 22upx;
				}

				.integer {
					font-size: 30upx;
					font-weight: bold;
				}

				.fractional-part {
					font-size: 22upx;
				}
			}
		}
	}

	.first-box-six {
		padding: 0 30upx 30upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;

		.first-box-six-min-v {
			padding: 30upx 0;
			font-size: 26upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: solid 2upx #eeeeee;
		}

		.first-box-six-min-v-bottom {
			padding: 30upx 0;
			font-size: 26upx;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.min-v-left {
				display: flex;
				align-items: center;

				.min-v-search {
					color: #999999;
					margin-left: 50upx;
				}
			}

			.xiangyou {
				font-size: 30upx;
				color: #666666;
				margin-left: 20upx;
			}
			
		}
		input {
			font-size: 28rpx;
			padding: 10rpx;
			background-color: #eee;
			height: 40rpx;
		}
	}

	.tabs-second-box {
		width: 100%;
		padding-bottom: 250upx;
	}

	.second-box-five {
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
	}

	.bottom-v {
		width: 100%;
		height: 100upx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 20upx;

		.bottom-v-right {
			display: flex;
			align-items: center;

			.right-left {
				padding-right: 10upx;
				font-size: 24upx;
				color: #999999;
			}

			.right-right {
				padding: 18upx 30upx;
				margin-left: 10upx;
				background-color: #ef463f;
				font-size: 26upx;
				color: #FFFFFF;
				border-radius: 34upx;
			}
		}
	}
</style>
