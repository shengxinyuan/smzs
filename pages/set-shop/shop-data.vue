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
	import uCharts from '../../components/u-charts/u-charts/u-charts.js';
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
			
		},
		methods: {
			
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
