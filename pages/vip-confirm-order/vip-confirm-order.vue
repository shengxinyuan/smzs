<template>
	<scroll-view class="zl-page" scroll-x="" scroll-y="">
		<view class="zl-top-title-box">
			<u-icon class="icon warning" name="warning"></u-icon>
			<text class="titles">收货人必须填写真实姓名，否则不能发货！</text>
		</view>
		<view class="tabs-box">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="changeTabs" :height="height" :font-size="26"
			 :bar-width="34" :bar-height="4" :active-color="activeColor" :style="{'border-radius':borderRadius}"></u-tabs>

			<!-- 邮寄 -->
			<view class="tabs-first-box" v-if="isShow01"> 
				<!-- 邮寄地址 -->
				<view class="first-box-one">
					<view>
						<view>
							<view class="user-box">
								<view class="user-name">{{userName}}</view>
								<view class="user-telephone">{{userTelephone}}</view>
							</view>
							<view class="user-address">
								<text>{{userAddress}}</text>
							</view>
						</view>
						<view>
							<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
						</view>
					</view>
					<view>
						<image src="../../static/vip-order/vip_01.png" mode="widthFix"></image>
					</view>
				</view>

				<!-- 速运 保价 -->
				<view class="first-box-two">
					<view>
						<view>
							<view class="express-left">
								<view class="express-sf">
									<image src="../../static/vip-order/sf_01.png" mode="widthFix"></image>
								</view>
								<view class="sf">顺丰速运</view>
							</view>
							<view class="express-btns">
								<view class="express-go">到付</view>
								<view class="express-send">寄付</view>
							</view>
						</view>
						<view>
							<view class="parcel-left">
								<view class="parcel-bj">
									<image src="../../static/vip-order/bao_01.png" mode="widthFix"></image>
								</view>
								<view class="baojia">保价</view>
							</view>
							<view class="parcel-right">
								<text class="zhuyi">*</text>
								<text>因商品为贵重物品，故保价必选，请选择保价方式</text>
							</view>
						</view>
						<view class="parcel-btns">
							<view class="parcel-sf">
								<text class="sf-title">顺丰保价</text>
								<text class="sf-cost">（保费2‰）</text>
								<view class="triangle-topright-box">
									<view class="triangle-topright">
										<u-icon class="icon duihao" name="checkbox-mark"></u-icon>
									</view>
								</view>
							</view>
							<view class="parcel-tpy">
								<text class="tpy-title">太平洋保价</text>
								<text class="tpy-cost">（保费2‰）</text>
							</view>
						</view>
						<view>
							<view class="premium">
								<text class="premium-title">保费：</text>
								<text class="premium-pay">￥{{premiumPay}}</text>
							</view>
						</view>
					</view>
				</view>

				<!-- 挂签 证书 -->
				<view class="first-box-there">
					<view>
						<view class="hang-sign-box">
							<view class="hang-sign-title">挂签</view>
							<view class="hang-sign-text" @click="openPopup01">价格&样本</view>
							<view class="hang-sign-switch">
								<u-switch v-model="checked" size="26" active-color="#2d407a" inactive-color="#cccccc"></u-switch>
							</view>
						</view>
						<view class="log-box hang-sign">
							<view class="log">
								<image src="../../static/vip-order/guaqian_01.png" mode="widthFix"></image>
							</view>
							<view class="log-title">{{hangSignTitle}}</view>
						</view>
					</view>
					<view class="certificate">
						<view class="hang-sign-box">
							<view class="hang-sign-title">证书</view>
							<view class="hang-sign-text">价格&样本</view>
							<view class="hang-sign-switch">
								<u-switch v-model="checked02" size="26" active-color="#2d407a" inactive-color="#cccccc"></u-switch>
							</view>
						</view>
						<view class="log-box zhengshu">
							<view class="log">
								<image src="../../static/vip-order/zhengshu.png" mode="widthFix"></image>
							</view>
							<view class="log-title">{{zhengshuTitle}}</view>
						</view>
					</view>
				</view>

				<!-- 盒子手绳挑选 -->
				<view class="first-box-four">
					<view @click="skipAddedServices">
						<view class="choose-box-left">
							<view class="yuan"></view>
							<view class="choose-box-title">盒子手绳挑选</view>
						</view>
						<view class="packing-charge-right">
							<view class="packing-charge-title">包装服务费</view>
							<view class="packing-charge-pay">￥{{packingChargePay}}</view>
							<view>
								<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
							</view>
						</view>
					</view>
				</view>

				<!-- 商品详情列表 -->
				<view class="first-box-five">
					<view>
						<block v-for="(firstItem,firstIndex) in goodsList" :key="firstIndex">
							<view class="goods-box">
								<view class="good-photo">
									<image :src="firstItem.goodsPhoto" mode="widthFix"></image>
								</view>
								<view class="goods-details">
									<view class="goods-title">{{firstItem.title}}</view>
									<view class="goods-text-one">
										<text>金重：{{firstItem.weight}}</text>
										<text>款号：{{firstItem.styleNumber}}</text>
									</view>
									<view class="goods-text-two">
										<view class="goods-text-two-min-box">
											<text>金料：￥{{firstItem.money01}}</text>
										</view>
										<view class="goods-text-two-min-box">
											<text>工费：￥{{firstItem.money02}}</text>
										</view>
									</view>
									<view class="money-box">
										<text class="rmb">￥</text>
										<text class="integer">{{firstItem.integer}}</text>
										<text class="fractional-part">{{firstItem.fractionalPart}}</text>
									</view>
								</view>
							</view>
						</block>
						<view class="aggregate-box">
							<text class="aggregate-title">总计</text>
							<text class="aggregate-text">金料￥{{goldPrice}}</text>
							<text class="aggregate-text">附加费￥{{loadedPrice}}</text>
							<text class="aggregate-text"> 工费￥{{processCost}}</text>
						</view>
					</view>
				</view>

				<!-- 商品订单列表 -->
				<view class="first-box-six">
					<view class="first-box-six-min-v">
						<view>商品金额</view>
						<view>￥{{goodsMoney}}</view>
					</view>
					<view class="first-box-six-min-v">
						<view>金币抵扣</view>
						<view>-￥{{goldBuckle}}</view>
					</view>
					<view class="first-box-six-min-v" @click="skipDiscountSelect">
						<view>优惠券</view>
						<view class="min-v-right">
							<view class="min-v-text">￥{{coupon}}</view>
							<view>
								<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
							</view>
						</view>
					</view>
					<view class="first-box-six-min-v">
						<view>运费</view>
						<view>￥{{freight}}</view>
					</view>
					<view class="first-box-six-min-v-bottom">
						<view class="min-v-left">
							<view>订单备注</view>
							<view class="min-v-search">选填</view>
						</view>
						<view>
							<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
						</view>
					</view>
				</view>

				<!-- 邮寄底部展示 -->
				<view class="first-box-seven">
					<view class="notice-text">
						<text>{{noticeTexts01}}</text>
					</view>
					<view class="seven-bottom-v">
						<view class="money-box">
							<text class="rmb">￥</text>
							<text class="integer">14718</text>
							<text class="fractional-part">.89</text>
						</view>
						<view class="bottom-v-right">
							<view class="right-left">
								<view class="total-profit">
									<text>利润合计：￥628.19</text>
									<text>约36.6g</text>
								</view>
								<view class="super-vip">
									<view class="super-vip-log">
										<image src="../../static/vip-order/vip_02.png" mode="widthFix"></image>
									</view>
									<view>
										<text>超级会员省了</text>
										<text>￥7374.16</text>
									</view>
								</view>
							</view>
							<view class="right-right">
								<view>提交订单(1)</view>
							</view>
						</view>
					</view>
				</view>

				<!-- 价格样本 -->
				<view>
					<u-popup v-model="popupShow01" mode="center" border-radius="10" :zoom="false" :closeable="true" width="85%">
						<view class="popup-one-box">
							<view class="popup-one-title">
								<text>挂签价格说明</text>
							</view>
							<u-table font-size="26">
								<u-tr>
									<u-th>产品类型</u-th>
									<u-th>证书费（元/件）</u-th>
								</u-tr>
								<u-tr>
									<u-td>足金999/AU750</u-td>
									<u-td>3</u-td>
								</u-tr>
								<u-tr>
									<u-td>超级IP系列</u-td>
									<u-td>10</u-td>
								</u-tr>
								<u-tr>
									<u-td>贵金属手链、项链</u-td>
									<u-td>3</u-td>
								</u-tr>
								<u-tr>
									<u-td>钻石饰品（不分级）</u-td>
									<u-td>5</u-td>
								</u-tr>
								<u-tr>
									<u-td>金条</u-td>
									<u-td>5</u-td>
								</u-tr>
								<u-tr>
									<u-td>金币</u-td>
									<u-td>3</u-td>
								</u-tr>
								<u-tr>
									<u-td>金钞</u-td>
									<u-td>不支持</u-td>
								</u-tr>
							</u-table>
							<view class="popup-one-photo">
								<view class="zhengshu-photo">
									<image src="../../static/vip-order/zhengshu_02.png" mode="widthFix"></image>
								</view>
							</view>
							<view class="popup-one-photo">
								<view class="zhengshu-photo">
									<image src="../../static/vip-order/zhengshu_02.png" mode="widthFix"></image>
								</view>
							</view>
						</view>
					</u-popup>
				</view>
			</view>

			<!--  代发-->
			<view class="tabs-second-box" v-if="isShow02">
				<!-- 寄件地址 -->
				<view class="second-box-one">
					<view>
						<view>
							<view class="send-image">
								<image src="../../static/vip-order/ji.png" mode="widthFix"></image>
							</view>
							<view class="mail-box">
								<view class="user-box">
									<view class="user-name">王笑笑</view>
									<view class="user-telephone">15555555555</view>
								</view>
								<view class="user-address">
									<text>江苏省苏州市相城区嘉元花园</text>
								</view>
							</view>
						</view>
						<view>
							<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
						</view>
					</view>
					<view>
						<image src="../../static/vip-order/vip_01.png" mode="widthFix"></image>
					</view>
				</view>

				<!-- 添加收货地址 -->
				<view class="second-box-two">
					<view>
						<view>
							<view class="put-image">
								<image src="../../static/vip-order/shou.png" mode="widthFix"></image>
							</view>
							<view class="add-address">
								<text>请添加收货地址</text>
							</view>
						</view>
						<view>
							<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
						</view>
					</view>
					<view>
						<image src="../../static/vip-order/vip_01.png" mode="widthFix"></image>
					</view>
				</view>

				<!-- 商品详情列表 -->
				<view class="second-box-there">
					<view>
						<block v-for="(firstItem,firstIndex) in goodsList" :key="firstIndex">
							<view class="goods-box">
								<view class="good-photo">
									<image :src="firstItem.goodsPhoto" mode="widthFix"></image>
								</view>
								<view class="goods-details">
									<view class="goods-title">{{firstItem.title}}</view>
									<view class="goods-text-one">
										<text>金重：{{firstItem.weight}}</text>
										<text>款号：{{firstItem.styleNumber}}</text>
									</view>
									<view class="goods-text-two">
										<view class="goods-text-two-min-box">
											<text>金料：￥{{firstItem.money01}}</text>
										</view>
										<view class="goods-text-two-min-box">
											<text>工费：￥{{firstItem.money02}}</text>
										</view>
									</view>
									<view class="money-box">
										<text class="rmb">￥</text>
										<text class="integer">{{firstItem.integer}}</text>
										<text class="fractional-part">{{firstItem.fractionalPart}}</text>
									</view>
								</view>
							</view>
						</block>
						<view class="aggregate-box">
							<text class="aggregate-title">总计</text>
							<text class="aggregate-text">金料￥{{goldPrice}}</text>
							<text class="aggregate-text">附加费￥{{loadedPrice}}</text>
							<text class="aggregate-text"> 工费￥{{processCost}}</text>
						</view>
					</view>
				</view>

				<!-- 商品订单列表 -->
				<view class="second-box-four">
					<view class="first-box-six-min-v">
						<view>商品金额</view>
						<view>￥14748.32</view>
					</view>
					<view class="first-box-six-min-v">
						<view>运费</view>
						<view>包邮</view>
					</view>
					<view class="first-box-six-min-v-bottom">
						<view class="min-v-left">
							<view>订单备注</view>
							<view class="min-v-search">选填</view>
						</view>
						<view>
							<u-icon class="icon xiangyou" name="arrow-right"></u-icon>
						</view>
					</view>
				</view>

				<!-- 代发底部展示 -->
				<view class="second-box-five">
					<view class="notice-text">
						<text>{{noticeTexts02}}</text>
					</view>
					<view class="open-super-members-bgimg">
						<image src="../../static/bgimage.png" mode="widthFix"></image>
						<view class="open-super-members-box">
							<view>
								<view class="open-super-members-log">
									<image src="../../static/vip-order/vip_02.png" mode="widthFix"></image>
								</view>
								<view class="open-super-members-title">
									<text>开通超级会员，本单预计可省</text>
								</view>
								<view class="open-super-members-price">
									<text>256.00元</text>
								</view>
							</view>
							<u-switch v-model="checked03" size="26" active-color="#2d407a" inactive-color="#cccccc"></u-switch>
						</view>
					</view>
					<view class="bottom-v">
						<view class="money-box">
							<text class="rmb">￥</text>
							<text class="integer">14718</text>
							<text class="fractional-part">.89</text>
						</view>
						<view class="bottom-v-right">
							<view class="right-left">
								<text>利润合计：￥628.19</text>
								<text>约36.6g</text>
							</view>
							<view class="right-right">
								<view>提交订单(1)</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '邮寄'
					}, {
						name: '代发'
					}, {
						name: '自提'
					},
					{
						name: '送货上门'
					}
				],
				current: 0,
				height: '60',
				activeColor: '#2d407a',
				borderRadius: '30upx',
				isShow01: true,
				isShow02: false,
				checked: true,
				checked02: false,
				checked03: true,
				popupShow01: false,
				userName:'王笑笑',
				userTelephone:'15555555555',
				userAddress:'江苏省苏州市相城区嘉园花园',
				premiumPay:'3',
				hangSignTitle:'国家珠宝玉石适量监督检验中心',
				zhengshuTitle:'北京市中工商联珠宝检测中心',
				packingChargePay:'1.0',
				goodsList: [{
						goodsPhoto: '../../static/vip-order/img_01.png',
						title: '足金项链环环相扣',
						weight: '4.7g',
						styleNumber: 'ZJJZ00271',
						money01: '1872.00',
						money02: '15.03',
						integer: '1887',
						fractionalPart: '.05'
					},
					{
						goodsPhoto: '../../static/vip-order/img_02.png',
						title: '足金项链环环相扣',
						weight: '4.7g',
						styleNumber: 'ZJJZ00271',
						money01: '1872.00',
						money02: '15.03',
						integer: '1887',
						fractionalPart: '.05'
					}
				],
				goldPrice: '14601.68',
				loadedPrice: '117.3',
				processCost: '20',
				goodsMoney:'14748.32',
				goldBuckle:'5=500金币',
				coupon:'0',
				freight:'30',
				noticeTexts01: '*因珠宝产品属于贵重物品，一旦出库，产品无质量问题暂不退换货品！建议您对已购买产品进行保价，未保价的包裹丢失或毁损的，不予赔偿，公司无需承担赔偿责任！',
				noticeTexts02: '*因珠宝产品属于贵重物品，一旦出库，产品无质量问题暂不退换货品！'
			}
		},
		methods: {
			changeTabs(index) {
				this.current = index
				if (index !== 0) {
					this.isShow01 = false
				} else {
					this.isShow01 = true
				};
				if (index !== 1) {
					this.isShow02 = false
				} else {
					this.isShow02 = true
				};
				if (index !== 2) {
					this.isShow03 = false
				} else {
					this.isShow03 = true
				}
			},
			change(status) {
				console.log(status);
			},
			openPopup01() {
				this.popupShow01 = true
			},
			skipAddedServices(){
				uni.navigateTo({
					url:'added-services'
				})
			},
			skipDiscountSelect(){
				uni.navigateTo({
					url:'../my/discount_select'
				})
			}
		}
	}
</script>

<style lang="scss">
	.xiangyou {
		font-size: 30upx;
		color: #666666;
	}

	.zl-top-title-box {
		background-color: #2d407a;
		padding: 10upx 30upx;
		color: #feebc0;

		.warning {
			font-size: 32upx;
			margin-right: 10upx;
		}

		.titles {
			font-size: 22upx;
		}
	}

	.tabs-box {
		padding: 20upx 30upx;
	}

	.tabs-first-box {
		padding-bottom: 210upx;
	}

	.first-box-one {
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
		position: relative;

		.user-box {
			display: flex;

			.user-name {
				font-size: 28upx;
			}

			.user-telephone {
				padding-left: 20upx;
				font-size: 26upx;
				color: #999999;
			}
		}

		.user-address {
			font-size: 26upx;
			margin-top: 20upx;
		}
	}

	.first-box-one>view:first-of-type {
		padding: 30upx 20upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.first-box-one>view:last-of-type {
		width: 100%;

		image {
			width: 100%;
			position: absolute;
			bottom: 0;
		}
	}

	.first-box-two,
	.first-box-there,
	.first-box-four,
	.first-box-five,
	.second-box-there {
		padding: 20upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
	}

	.first-box-two>view>view:first-of-type {
		width: 100%;
		display: flex;

		.express-left {
			width: 50%;
			display: flex;

			.express-sf {
				width: 10%;
				display: flex;
				align-items: center;

				image {
					width: 100%;
				}
			}

			.sf {
				font-size: 28upx;
				padding-left: 10upx;
			}
		}

		.express-btns {
			width: 50%;
			display: flex;
			font-size: 24upx;
			text-align: center;
			justify-content: flex-end;
			align-items: center;

			.express-go {
				width: 80upx;
				height: 34upx;
				line-height: 34upx;
				background-color: #2d407a;
				border-radius: 18upx;
				color: #FFFFFF;
			}

			.express-send {
				width: 80upx;
				height: 34upx;
				line-height: 34upx;
				background-color: #eeeeee;
				border-radius: 18upx;
				color: #666666;
				margin-left: 20upx;
			}
		}
	}

	.first-box-two>view>view:nth-of-type(2) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30upx;
		padding: 30upx 0;
		border-top: solid 2upx #eeeeee;

		.parcel-left {
			width: 16%;
			display: flex;

			.parcel-bj {
				width: 31%;
				display: flex;
				align-items: center;

				image {
					width: 100%;
				}
			}

			.baojia {
				font-size: 28upx;
				padding-left: 10upx;
			}
		}

		.parcel-right {
			font-size: 22upx;
			color: #999999;

			.zhuyi {
				color: #f8c35c;
			}
		}
	}

	.parcel-btns {
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.sf-title,
		.tpy-title {
			font-size: 30upx;
			font-weight: bold;
		}

		.sf-cost,
		.tpy-cost {
			font-size: 22upx;
		}

		.parcel-sf {
			width: 45%;
			padding: 18upx 0;
			text-align: center;
			border: solid 2upx #063f4c;
			border-radius: 6upx;
			box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.04);
			position: relative;

			.triangle-topright-box {
				position: absolute;
				top: 0;
				right: 0;

				.triangle-topright {
					width: 0;
					height: 0;
					border-top: 36upx solid #2d407a;
					border-left: 46upx solid transparent;

					.duihao {
						font-size: 20upx;
						color: #FFFFFF;
						position: absolute;
						top: 0;
						right: 0;
					}
				}
			}

		}

		.parcel-tpy {
			width: 46%;
			padding: 18upx 0;
			text-align: center;
			margin-left: 20upx;
			border-radius: 6upx;
			box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.04);
		}
	}

	.first-box-two>view>view:last-of-type {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin-top: 20upx;

		.premium {
			font-size: 28upx;

			.premium-pay {
				color: #ea3a4a;
				font-weight: bold;
			}
		}
	}

	.certificate {
		margin-top: 20upx;
	}

	.hang-sign-box {
		display: flex;
		align-items: center;
		font-size: 28upx;
		font-weight: bold;

		.hang-sign-title {
			width: 15%;
		}

		.hang-sign-text {
			width: 25%;
			color: #ed4440;
		}

		.hang-sign-switch {
			width: 60%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
		}
	}

	.log-box {
		display: flex;
		align-items: center;

		.log {
			width: 5%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.log-title {
			font-size: 22upx;
			color: #000000;
			padding-left: 10upx;
		}
	}

	.hang-sign {
		padding: 20upx 0;
		border-bottom: solid 2upx #eeeeee;
	}

	.zhengshu {
		padding-top: 20upx;
	}

	.first-box-four>view {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.choose-box-left {
			display: flex;
			align-items: center;

			.yuan {
				width: 30upx;
				height: 30upx;
				border: solid 2upx #cccccc;
				border-radius: 100%;
			}

			.choose-box-title {
				padding-left: 10upx;
				font-size: 28upx;
			}
		}

		.packing-charge-right {
			display: flex;
			align-items: center;
			font-size: 22upx;

			.packing-charge-title {
				color: #999999;
			}

			.packing-charge-pay {
				color: #ed4440;
				padding-left: 10upx;
			}

			.xiangyou {
				margin-left: 20upx;
			}
		}
	}

	.goods-box {
		display: flex;

		.good-photo {
			width: 23%;
			display: flex;

			image {
				width: 100%;
				border-radius: 10upx;
			}
		}

		.goods-details {
			margin-left: 20upx;

			.goods-title {
				font-size: 28upx;
			}

			.goods-text-one {
				margin-top: 20upx;
				margin-bottom: 10upx;
				font-size: 22upx;
				color: #666666;

				text {
					margin-right: 30upx;
				}
			}

			.goods-text-two {
				display: flex;
				font-size: 20upx;
				color: #777777;

				.goods-text-two-min-box {
					padding: 4upx 14upx;
					background-color: #f6f6f6;
					margin-right: 20upx;
					border-radius: 6upx;
				}
			}

			.money-box {
				margin-top: 50upx;
				padding-bottom: 30upx;

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

	.money-box {
		color: #ea3a4a;

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

	.aggregate-box {
		padding-top: 20upx;
		border-top: solid 2upx #eeeeee;
		font-size: 24upx;

		.aggregate-title {
			color: #666666;
			margin-right: 40upx;
		}

		.aggregate-text {
			margin-right: 30upx;
		}
	}

	.first-box-six,
	.second-box-four {
		padding: 0 30upx;
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

			.min-v-right {
				display: flex;
				align-items: center;

				.min-v-text {
					color: #ea3a4a;
				}

				.xiangyou {
					margin-left: 20upx;
				}
			}
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
	}

	.first-box-seven {
		position: fixed;
		bottom: 0;
		left: 0;

		.notice-text {
			padding: 20upx 30upx;
			font-size: 22upx;
			color: #ec9f67;
			background-color: #fffaf0;
		}

		.seven-bottom-v {
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
					text {
						padding-right: 10upx;
					}

					.total-profit {
						font-size: 20upx;
						color: #999999;
					}

					.super-vip {
						display: flex;
						margin-top: 10upx;
						font-size: 22upx;
						color: #2d407a;

						.super-vip-log {
							width: 7%;
							display: flex;
							align-items: center;
							margin-right: 10upx;

							image {
								width: 100%;
							}
						}
					}
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
	}
	
	.popup-one-box{
		padding: 30upx;
		.popup-one-title{
			margin-top: 20upx;
			margin-bottom: 30upx;
			font-size: 30upx;
			font-weight: bold;
			text-align: center;
		}
		.popup-one-photo{
			margin-top: 30upx;
			display: flex;
			justify-content: center;
			align-items: center;
			.zhengshu-photo{
				width: 50%;
				display: flex;
				image{
					width: 100%;
				}
			}
		}
	}

	.tabs-second-box {
		padding-bottom: 250upx;
	}

	.second-box-one {
		padding: 30upx 20upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
		position: relative;
	}

	.second-box-one>view:first-of-type {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.second-box-one>view>view:first-of-type {
		width: 80%;
		display: flex;
		align-items: center;

		.send-image {
			width: 7%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.mail-box {
			padding-left: 20upx;

			.user-box {
				display: flex;

				.user-name {
					font-size: 28upx;
				}

				.user-telephone {
					padding-left: 20upx;
					font-size: 26upx;
					color: #999999;
				}
			}

			.user-address {
				font-size: 26upx;
				margin-top: 20upx;
			}
		}
	}

	.second-box-one>view:last-of-type {
		width: 100%;

		image {
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	.second-box-two {
		padding: 50upx 20upx;
		margin: 20upx 0;
		background-color: #FFFFFF;
		border-radius: 10upx;
		position: relative;
	}

	.second-box-two>view:first-of-type {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.second-box-two>view>view:first-of-type {
		width: 80%;
		display: flex;
		align-items: center;

		.put-image {
			width: 7%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.add-address {
			font-size: 26upx;
			margin-left: 20upx;
		}
	}

	.second-box-two>view:last-of-type {
		width: 100%;

		image {
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}

	.second-box-five {
		position: fixed;
		bottom: 0;
		left: 0;

		.notice-text {
			padding: 20upx 30upx;
			font-size: 22upx;
			color: #ec9f67;
			background-color: #fffaf0;
		}

		.open-super-members-bgimg {
			width: 100%;
			display: flex;
			position: relative;

			image {
				width: 100%;
			}

			.open-super-members-box {
				width: 100%;
				padding: 0 30upx;
				position: absolute;
				top: 0;
				left: 0;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
		}
	}

	.open-super-members-box>view:first-of-type {
		width: 80%;
		height: 68upx;
		display: flex;
		align-items: center;

		.open-super-members-log {
			width: 5%;
			display: flex;

			image {
				width: 100%;
			}
		}

		.open-super-members-title {
			font-size: 26upx;
			font-weight: bold;
			color: #1c2c5c;
			margin-left: 20upx;
		}

		.open-super-members-price {
			padding: 4upx 10upx;
			margin-left: 20upx;
			background-image: linear-gradient(90deg,
				#2b3f7d 0%,
				#1b2c60 100%);
			font-size: 24upx;
			color: #fff0cd;
			border-radius: 4upx;
		}
	}

	.bottom-v {
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
				font-size: 20upx;
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
