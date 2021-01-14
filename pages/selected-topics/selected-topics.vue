<template>
	<!-- 精选专题 -->
	<view class="zl-page">
		<view class="zl-box">
			<block v-for="(selectionItem,selectionIndex) in selectionList" :key="selectionIndex">
				<view class="selection-box" @click="skipSelectionDetails">
					<image :src="selectionItem.image" mode="widthFix"></image>
					<view class="selection-title">
						<text>{{selectionItem.title}}</text>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectionList: [{
						image: '../../static/selection/hunjia_02.png',
						title: '婚嫁三金，结婚必选爆款清单'
					},
					{
						image: '../../static/selection/hunjia_02.png',
						title: '婚嫁三金，结婚必选爆款清单'
					},
					{
						image: '../../static/selection/hunjia_02.png',
						title: '婚嫁三金，结婚必选爆款清单'
					}
				]
			}
		},
		methods: {
			skipSelectionDetails() {
				uni.navigateTo({
					url: 'selection-details'
				})
			}
		}
	}
</script>

<style lang="scss">
	.zl-box {
		padding: 20upx 30upx;
		border-top: solid 2upx #eeeeee;

		.selection-box {
			width: 100%;
			height: 350upx;
			margin-bottom: 30upx;
			display: flex;
			position: relative;

			image {
				width: 100%;
				border-radius: 10upx;
			}

			.selection-title {
				width: 100%;
				height: 62upx;
				padding: 0 20upx;
				background-image: linear-gradient(268deg,
					#094451 0%,
					#02343f 100%);
				border-radius: 0 0 10upx 10upx;
				display: flex;
				align-items: center;
				font-size: 26upx;
				color: #FFFFFF;
				position: absolute;
				bottom: 0;
				left: 0;
			}
		}
	}
</style>
