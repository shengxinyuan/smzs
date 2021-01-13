<template>
	<!-- 增值服务 -->
	<view class="zl-page">
		<view class="zzfw-box">

			<!-- 包装服务 -->
			<view class="zzfw-box-one">
				<view class="zzfw-title">
					<view class="zzfw-title-log">
						<image src="../../static/vip-order/dabao.png" mode="widthFix"></image>
					</view>
					<view class="title">包装服务</view>
				</view>
				<view class="zzfw-pack-charges">
					<view class="search-pack-charges">
						<u-icon class="icon duihao" name="checkbox-mark"></u-icon>
					</view>
					<view class="text">首饰打包费用（包含外纸箱、泡沫等材料费）</view>
				</view>
				<view class="zzfw-cost">
					<view>保费：</view>
					<view class="cost-pay">￥{{premium}}</view>
				</view>
			</view>

			<!-- 配件挑选 -->
			<view class="zzfw-box-two">
				<view class="pjtx-box">
					<view class="pjtx-log">
						<image src="../../static/vip-order/peijian.png" mode="widthFix"></image>
					</view>
					<view class="title">
						<text>配件挑选</text>
						<text class="text-right">（盒子、手绳）</text>
					</view>
				</view>
				<view class="gift-package-box">
					<scroll-view class="scroll-view_H" scroll-x="true">
						<view class="scroll_item" v-for="(giftItem,giftIndex) in giftList" :key="giftIndex">
							<view class="gift-package-min-box">
								<view class="gift-package-photo" :style="{'border':giftItem.border}">
									<image :src="giftItem.photo" mode="widthFix"></image>
								</view>
								<view class="gift-package-title u-line-1" :style="{'color':giftItem.fontColor}">{{giftItem.title}}</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="zzfw-number-box">
					<view class="zzfw-number-title">数量</view>
					<u-number-box v-model="value" @change="valChange"></u-number-box>
				</view>
			</view>
			
			<!-- 底部展示 -->
			<view class="zzfw-bottom-box">
				<view class="zzfw-bottom-left">
					<text>合计：</text>
					<text class="money">￥{{totalMoney}}</text>
				</view>
				<view class="zzfw-bottom-btn" @click="skipVipConfirmOrder">
					<text>确定</text>
				</view>
			</view>
		</view>
		
		<!-- 专属客服 -->
		<drag-button :isDock="true" :existTabBar="true" @btnClick="btnClick" />
	</view>
</template>

<script>
	import dragButton from "@/components/drag-button/drag-button.vue";
	export default {
		data() {
			return {
				premium:'3',
				giftList:[
					{
						border:'solid 2upx #2d407a',
						photo:'../../static/vip-order/box_02.png',
						title:'戒指/耳钉盒',
						fontColor:'#2d407a'
					},
					{
						border:'',
						photo:'../../static/vip-order/box_03.png',
						title:'15号、16号手绳',
						fontColor:'#999999'
					},
					{
						border:'',
						photo:'../../static/vip-order/box_02.png',
						title:'戒指/耳钉盒',
						fontColor:'#999999'
					},
					{
						border:'',
						photo:'../../static/vip-order/box_03.png',
						title:'15号、16号手绳',
						fontColor:'#999999'
					},
					{
						border:'',
						photo:'../../static/vip-order/box_02.png',
						title:'戒指/耳钉盒',
						fontColor:'#999999'
					},
					{
						border:'',
						photo:'../../static/vip-order/box_03.png',
						title:'15号、16号手绳',
						fontColor:'#999999'
					}
				],
				value: 13,
				totalMoney:'32'
			}
		},
		methods: {
			valChange(e) {
				console.log('当前值为: ' + e.value)
			},
			skipVipConfirmOrder(){
				uni.navigateTo({
					url:'vip-confirm-order'
				})
			}
		}
	}
</script>

<style lang="scss">
	.zzfw-box {
		padding: 20upx 30upx;
	}

	.zzfw-box-one {
		padding: 20upx;
		margin-bottom: 20upx;
		background-color: #FFFFFF;
		border-radius: 10upx;

		.zzfw-title {
			display: flex;
			align-items: center;

			.zzfw-title-log {
				width: 5%;
				display: flex;

				image {
					width: 100%;
				}
			}

			.title {
				margin-left: 16upx;
				font-size: 28upx;
				font-weight: bold;
			}
		}

		.zzfw-pack-charges {
			display: flex;
			align-items: center;
			margin: 30upx 0;

			.search-pack-charges {
				width: 32upx;
				height: 32upx;
				background-color: #063f4c;
				border-radius: 100%;
				display: flex;
				align-items: center;
				justify-content: center;

				.icon {
					font-size: 24upx;
					color: #FFFFFF;
				}
			}

			.text {
				font-size: 26upx;
				color: #666666;
				margin-left: 16upx;
			}
		}

		.zzfw-cost {
			font-size: 28upx;
			display: flex;
			justify-content: flex-end;
			align-items: center;

			.cost-pay {
				font-weight: bold;
				color: #ef2d2d;
			}
		}
	}

	.zzfw-box-two {
		padding: 20upx;
		background-color: #FFFFFF;
		border-radius: 10upx;

		.pjtx-box {
			display: flex;
			align-items: center;

			.pjtx-log {
				width: 5%;
				display: flex;

				image {
					width: 100%;
				}
			}

			.title {
				margin-left: 16upx;
				font-size: 28upx;
				font-weight: bold;

				.text-right {
					font-size: 22upx;
					color: #666666;
				}
			}
		}

		.gift-package-box {
			margin: 30upx 0;
			width: 100%;

			.scroll-view_H {
				display: flex;
				white-space: nowrap;

				.scroll_item {
					display: inline-block;
					width: 29%;
				}
			}

			.gift-package-min-box {
				margin-right: 20upx;

				.gift-package-photo {
					display: flex;
					border-radius: 10upx;
					box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.06);

					image {
						width: 100%;
					}
				}

				.gift-package-title {
					padding-top: 10upx;
					font-size: 22upx;
				}
			}
		}

		.zzfw-number-box {
			display: flex;
			justify-content: flex-end;
			align-items: center;

			.zzfw-number-title {
				font-size: 28upx;
				color: #666666;
				margin-right: 20upx;
			}
		}
	}
	.zzfw-bottom-box{
		width: 100%;
		height: 100upx;
		padding: 0 30upx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		.zzfw-bottom-left{
			font-size: 22upx;
			margin-right: 30upx;
			.money{
				font-size: 26upx;
				font-weight: bold;
				color: #f12f34;
			}
		}
		.zzfw-bottom-btn{
			width: 31%;
			height: 70upx;
			line-height: 70upx;
			background-image: linear-gradient(0deg, 
					#eb4241 0%, 
					#ef463f 100%);
					text-align: center;
					font-size: 26upx;
					color: #FFFFFF;
					border-radius: 34upx;
		}
	}
</style>
