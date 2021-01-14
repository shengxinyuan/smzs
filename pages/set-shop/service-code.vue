<template>
	<view class="service-tel-box">
		<view class="tel">
			<view class="u-upload-box">
				<u-upload 
				:action="action"
				:max-count="maxCount"
				:width="width"
				:height="height"></u-upload>
			</view>
		</view>
		<view class="show-switch-box">
			<view class="show-switch-up">
				<view>商城中展示:</view>
				<u-switch v-model="checked" active-color="#2d407a" size="40"></u-switch>
			</view>
			<view class="show-switch-down">
				<u-icon class="icon warning" name="warning"></u-icon>
				<text>商城显示开关按钮可以控制商城是否显示此信息。</text>
			</view>
			<view class="zl-btn">
				<button class="btn">保存</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				action: '',
				maxCount: 1,
				width: 230,
				height: 230,
				checked: true
			}
		},
		methods: {
			change(status) {
				console.log(status);
			},
		}
	}
</script>

<style lang="scss">
	.service-tel-box {
		padding: 0 30upx;

		.tel {
			padding: 30upx 0;
			border-top: solid 2upx #f8f8f8;
			border-bottom: solid 2upx #f8f8f8;

			input {
				font-size: 30upx;
			}
			.u-upload-box{
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.show-switch-box {
			margin-top: 30upx;

			.show-switch-up {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 28upx;
			}

			.show-switch-down {
				margin-top: 20upx;
				font-size: 22upx;
				color: #f9817d;

				.icon {
					font-size: 30upx;
					margin-right: 10upx;
				}
			}

			.zl-btn {
				margin-top: 60upx;

				.btn {
					height: 80upx;
					line-height: 80upx;
					font-size: 28upx;
					color: #FFFFFF;
					background-image: linear-gradient(90deg,
						#2b3f7d 0%,
						#1b2c60 100%);
					border-radius: 40upx;
				}
			}
		}
	}
</style>
