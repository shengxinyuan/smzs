<template>
	<!-- 社区营销 -->
	<view>
		<view class="head-box">
			<block v-for="(headItem,headIndex) in headList" :key="headIndex">
				<view class="head-min-box" :style="{'background-image':headItem.backgroundImage}">
					<view>
						<view class="community-image">
							<image :src="headItem.communityImage" mode="widthFix"></image>
						</view>
						<view class="community-title">{{headItem.title}}</view>
					</view>
				</view>
			</block>
		</view>
		<view class="community-list-box">
			<block v-for="(detailsItem,detailsIndex) in detailsList" :key="detailsIndex">
				<view class="community-list-min-box">
					<view class="user-photo">
						<image :src="detailsItem.userPhoto" mode="widthFix"></image>
					</view>
					<view class="list-details">
						<view class="list-details-title">
							<view class="title">{{detailsItem.title}}</view>
							<view class="date">{{detailsItem.date}}</view>
						</view>
						<view class="list-details-text">
							<view>{{detailsItem.text01}}</view>
							<view>{{detailsItem.text02}}</view>
						</view>
						<view class="list-details-video">
							<image :src="detailsItem.video" mode="widthFix"></image>
							<view class="play-btn">
								<image src="../../static/community/play.png" mode="widthFix"></image>
							</view>
						</view>
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
				headList: [{
						backgroundImage: 'linear-gradient(0deg, #ffffff 0%, #f8e1b5 100%)',
						communityImage: '../../static/community/head_01.png',
						title: '营销海报'
					},
					{
						backgroundImage: '',
						communityImage: '../../static/community/head_02.png',
						title: '营销视频'
					},
					{
						backgroundImage: '',
						communityImage: '../../static/community/head_03.png',
						title: '营销文案'
					},
					{
						backgroundImage: '',
						communityImage: '../../static/community/head_04.png',
						title: '早安问候'
					}
				],
				detailsList: [{
						userPhoto: '../../static/community/photo.png',
						title: '营销视频',
						date: '5小时前',
						text01: '结婚买“三金”',
						text02: '这三金有何不同？',
						video: '../../static/community/shipin_01.png'
					},
					{
						userPhoto: '../../static/community/photo.png',
						title: '营销视频',
						date: '5小时前',
						text01: '结婚买“三金”',
						text02: '这三金有何不同？',
						video: '../../static/community/shipin_02.png'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.head-box {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		border-top: solid 2upx #eeeeee;
		border-bottom: solid 10upx #f3f7f8;

		.head-min-box {
			width: 120upx;
			padding-top: 20upx;
			padding-bottom: 40upx;

			.community-image {
				width: 120upx;
				display: flex;
				justify-content: center;

				image {
					width: 60%;
				}
			}

			.community-title {
				font-size: 24upx;
				padding-top: 10upx;
				text-align: center;
			}
		}
	}

	.community-list-box {
		padding: 30upx;

		.community-list-min-box {
			display: flex;
			margin-bottom: 40upx;

			.user-photo {
				width: 11%;
				display: flex;

				image {
					width: 100%;
				}
			}

			.list-details {
				width: 89%;
				padding-left: 20upx;
				padding-bottom: 50upx;
				border-bottom: solid 2upx #eeeeee;

				.list-details-title {
					display: flex;
					align-items: center;
					justify-content: space-between;
					font-size: 26upx;

					.date {
						font-size: 24upx;
						color: #999999;
					}
				}

				.list-details-text {
					font-size: 26upx;
					margin-top: 30upx;
					margin-bottom: 20upx;
				}

				.list-details-video {
					display: flex;
					position: relative;

					image {
						width: 100%;
						border-radius: 10upx;
					}

					.play-btn {
						width: 60upx;
						height: 60upx;
						display: flex;
						position: absolute;
						top: 120upx;
						left: 252upx;
						image{
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>
