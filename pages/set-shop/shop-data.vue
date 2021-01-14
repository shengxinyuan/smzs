<template>
	<view>
		<view class="visit-box">
			<view class="visit-title">
				<view class="visit-logo">
					<image src="../../static/set-shop/fangwen.png" mode="widthFix"></image>
				</view>
				<view class="title">今日访问</view>
			</view>
			<view class="visit-number">
				<text class="number">{{visitNumber}}</text>
				<text class="ren">人</text>
			</view>
		</view>
		<view class="qiun-columns">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt">
				<view class="statistics-title">
					<view class="visit-title-left">
						<view class="visit-logo">
							<image src="../../static/set-shop/tongji.png" mode="widthFix"></image>
						</view>
						<view class="title">访问统计</view>
					</view>
					<view class="statistics-title-right">
						<view class="month">一个月</view>
						<view class="week">一周</view>
					</view>
				</view>
			</view>
			<view class="qiun-charts">
				<canvas canvas-id="canvasArea" id="canvasArea" class="charts" @touchstart="touchArea"></canvas>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@../../components/u-charts/u-charts/u-charts.js';
	var _self;
	var canvaArea = null;

	export default {
		data() {
			return {
				visitNumber:'20',
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
			}
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			getServerData() {
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data: {},
					success: function(res) {
						console.log(res.data.data)
						let Area = {
							categories: [],
							series: []
						};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						Area.categories = res.data.data.Area.categories;
						Area.series = res.data.data.Area.series;
						_self.showArea("canvasArea", Area);
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
				});
			},
			showArea(canvasId, chartData) {
				canvaArea = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'area',
					fontSize: 11,
					legend: true,
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						min: 10,
						max: 180,
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						area: {
							type: 'straight',
							opacity: 0.2,
							addLine: true,
							width: 2
						}
					}
				});

			},
			touchArea(e) {
				canvaArea.showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.visit-box {
		padding: 30upx;
		border-top: solid 2upx #F8F8F8;

		.visit-title {
			display: flex;
			align-items: center;

			.visit-logo {
				width: 4%;
				display: flex;
				margin-right: 20upx;

				image {
					width: 100%;
				}
			}
		}

		.visit-number {
			height: 120upx;
			line-height: 120upx;
			margin-top: 20upx;
			box-shadow: 0px 0px 30px 0px rgba(45, 64, 122, 0.08);
			background-color: #FFFFFF;
			border-radius: 10upx;
			text-align: center;
			.number{
				font-size: 50upx;
				font-weight: bold;
			}
			.ren{
				font-size: 24upx;
			}
		}
	}
	
	.statistics-title{
		padding: 30upx;
		margin-bottom: 20upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.visit-title-left {
			width: 50%;
			display: flex;
			align-items: center;
		
			.visit-logo {
				width: 8%;
				display: flex;
				margin-right: 20upx;
		
				image {
					width: 100%;
				}
			}
		}
		.statistics-title-right{
			display: flex;
			align-items: center;
			font-size: 24upx;
			.month{
				width: 100upx;
				height: 40upx;
				line-height: 40upx;
				text-align: center;
				margin-right: 20upx;
				border-radius: 20upx;
				background-color: #2d407a;
				color: #FFFFFF;
			}
			.week{
				width: 100upx;
				height: 40upx;
				line-height: 40upx;
				text-align: center;
				border-radius: 20upx;
				background-color: #eeeeee;
				color: #666666;
			}
		}
	}

	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
	}

	.charts {
		width: 750upx;
		height: 500upx;
	}
</style>
