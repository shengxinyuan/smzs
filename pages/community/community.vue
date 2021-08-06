<template>
	<!-- 社区营销 -->
	<view>
		<!-- 顶部导航 -->
		<view class="head-box">
			<block v-for="(headItem,headIndex) in headList" :key="headIndex">
				<view class="head-min-box" :class="{active: headItem.id == ind}" @click="nav_cli(headItem.id)">
					<view>
						<view class="community-image">
							<image :src="headItem.communityImage" mode="widthFix"></image>
						</view>
						<view class="community-title">{{headItem.title}}</view>
					</view>
				</view>
			</block>
		</view>
		<view class="community-list-box" v-if="page_show">
			<!-- 营销海报 -->
			<template v-if="ind == 11">
				<view class="community-list-min-box" v-for="(item,index) in list" :key="index">
					<view class="user-photo">
						<image :src="item.admin_img" mode="widthFix"></image>
					</view>
					<view class="list-details">
						<view class="list-details-title">
							<view class="title">{{item.admin_name}}</view>
							<view class="date">{{item.update_time}}</view>
						</view>
						<view class="list-details-text">
							<view>{{item.title}}</view>
						</view>
						<view class="canvas_a">
							<image :src="item.image" mode="widthFix"></image>
						</view>
						<view class="erweima" @click="canvas_hb(item)">
							<image src="../../static/community/erweima.png" mode="widthFix"></image>
							<view>生成商城二维码海报</view>
						</view>
					</view>
				</view>
			</template>
			<u-popup v-model="canvasShow" mode="center">
				<view class="popup-box">
					<view class="canvas-box">
						<zs-lime-painter @success="path = $event" :board="base" isRenderImage>
						</zs-lime-painter>
					</view>
					<view class="save" @click="saveImage">保存到相册</view>
				</view>
			</u-popup>
			<!-- 营销视频 -->
			<template v-if="ind == 12">
				<view class="community-list-min-box" v-for="(item,index) in list" :key="index">
					<view class="user-photo">
						<image :src="item.admin_img" mode="widthFix"></image>
					</view>
					<view class="list-details">
						<view class="list-details-title">
							<view class="title">{{item.admin_name}}</view>
							<view class="date">{{item.update_time}}</view>
						</view>
						<view class="list-details-text">
							<view>{{item.title}}</view>
						</view>
						<view class="list-details-video" @click="vid_creat(item)" v-if="item.vid_show">
							<image :src="item.image" mode="aspectFill"></image>
							<view class="play-btn">
								<image src="../../static/community/play.png" mode="widthFix"></image>
							</view>
						</view>
						<video :src="item.video" :id="'video'+item.id" @ended="end_vid(index)" :autoplay="true" controls
							@pause="zanting(index)" v-if="!item.vid_show"></video>
					</view>
				</view>
			</template>
			<!-- 营销文案 -->
			<template v-if="ind == 13">
				<view class="community-list-min-box" v-for="(item,index) in list" :key="index">
					<view class="user-photo">
						<image :src="item.admin_img" mode="widthFix"></image>
					</view>
					<view class="list-details">
						<view class="list-details-title">
							<view class="title">{{item.admin_name}}</view>
							<view class="date">{{item.update_time}}</view>
						</view>
						<view class="list-details-text">
							<view>{{item.title}}</view>
						</view>
						<view class="list-details-video" @click="vid_creat(item)">
							<image :src="item.image" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			</template>
			<!-- 早安问候 -->
			<template v-if="ind == 14">
				<view class="community-list-min-box" v-for="(item,index) in list" :key="index">
					<view class="user-photo">
						<image :src="item.admin_img" mode="widthFix"></image>
					</view>
					<view class="list-details">
						<view class="list-details-title">
							<view class="title">{{item.admin_name}}</view>
							<view class="date">{{item.update_time}}</view>
						</view>
						<view class="list-details-text">
							<view>{{item.title}}</view>
						</view>
						<view class="list-details-video" @click="vid_creat(item)">
							<image :src="item.image" mode="aspectFill"></image>
						</view>
					</view>
				</view>
			</template>
			<view style="padding-top: 200rpx;" v-if="list.length <= 0">
				<u-empty text="暂无内容" mode="news"></u-empty>
			</view>
		</view>
		<view v-else>
			<zs-login></zs-login>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headList: [{
						communityImage: '../../static/community/head_01.png',
						title: '营销海报',
						id: 11
					},
					{
						communityImage: '../../static/community/head_02.png',
						title: '营销视频',
						id: 12
					},
					{
						communityImage: '../../static/community/head_03.png',
						title: '营销文案',
						id: 13
					},
					{
						communityImage: '../../static/community/head_04.png',
						title: '早安问候',
						id: 14
					}
				],
				list: [],
				ind: 11,
				page_show: false,
				canvasShow: false,
				base: {
					width: '520rpx',
					height: '900rpx',
					views: [{
							type: 'image',
							src: '',
							css: {
								left: '0rpx',
								top: '0rpx',
								width: '520rpx',
								height: '900rpx',
							}
						},
						{
							type: 'image',
							src: '',
							css: {
								left: '200rpx',
								top: '760rpx',
								background: '#ffffff',
								width: '120rpx',
								height: '120rpx',
							}
						}
					]
				},
			}
		},
		onShow() {
			this.nav_cli(this.ind)
		},
		methods: {
			saveImage() {
				this.canvasShow = false
				uni.saveImageToPhotosAlbum({
					filePath: this.path,
					success(res) {
						uni.showToast({
							title: '已保存到相册',
							icon: 'success',
							duration: 2000
						})
					}
				})
			},
			canvas_hb(v) {
				console.log(v)
				this.canvasShow = true
				this.base.views[0].src = v.image
				this.base.views[1].src = this.code_image
			},
			// 视频暂停
			zanting(i) {
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = false;
				innerAudioContext.src = this.list[i].video;
				// innerAudioContext.onPlay(() => {
				//   console.log('开始播放');
				// });
				innerAudioContext.onPause(() => {
					console.log('暂停');
				});
				innerAudioContext.onError((res) => {
					console.log(res.errMsg);
					console.log(res.errCode);
				});
			},
			nav_cli(e) {
				this.ind = e
				this.page_show = false
				this.$api.get('news', {
					label: e
				}).then(res => {
					console.log(res)
					if (res.status == 1) {
						res.data.news.forEach(v => {
							v.vid_show = true
						})
						this.list = res.data.news
						this.code_image = res.data.ewm
						this.page_show = true
					}
				})
			},
			//开始播放
			play(e) {
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				innerAudioContext.src = e.video;
				// innerAudioContext.onPlay(() => {
				//   console.log('开始播放');
				// });
				innerAudioContext.onPlay(() => {
					console.log('播放');
				});
				innerAudioContext.onError((res) => {
					console.log(res.errMsg);
					console.log(res.errCode);
				});
				// let _this = this;
				// let currentId = 'video' + e.id; // 获取当前视频id
				// this.videoContent = uni.createVideoContext(currentId, _this).play();

				// // 获取视频列表
				// let trailer = this.vid;
				// trailer.forEach((item, index) => { // 获取json对象并遍历, 停止非当前视频
				// 	if (item.src != null && item.src != "") {
				// 		let temp = 'video' + item.id;
				// 		if (temp != currentId) {
				// 			// 暂停其余视频
				// 			uni.createVideoContext(temp, _this).pause(); //暂停视频播放事件
				// 		}
				// 	}
				// })
			},
			vid_creat(e) {
				if (e.video == '') {
					let arr = []
					arr.push(e.image)
					uni.previewImage({
						urls: arr,
					});
				} else {
					//改变图片状态
					this.list.forEach((v, i) => { // 获取json对象并遍历, 停止非当前视频
						if (v.id != e.id) {
							v.vid_show = true
						} else {
							v.vid_show = false
						}
					})
				}
			},
		}
	}
</script>

<style>
	page {
		background-color: #F6F6F6;
	}
</style>
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

			&.active {
				background-image: linear-gradient(0deg, #ffffff 0%, #f8e1b5 100%);
			}

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

	.popup-box{
		width: 100%;
		.canvas-box {
			// width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.save{
			width: 100%;
			margin: 20rpx auto;
			width: 200rpx;
			height: 60rpx;
			line-height: 60rpx;
			background-color: #2d407a;
			border-radius: 40rpx;
			font-size: 24rpx;
			text-align: center;
			color: #fff;
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
					// height: 100rpx;
					width: 100%;
					border-radius: 50%;
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
					font-size: 26rpx;
					margin-top: 30rpx;
					margin-bottom: 20rpx;
				}

				.canvas_a {
					image {
						width: 300rpx;
					}
				}

				.erweima {
					margin-top: 10rpx;
					display: flex;
					align-items: center;
					font-size: 26rpx;
					color: #999;

					image {
						width: 28rpx;
						margin-right: 10rpx;
					}
				}

				.list-details-video {
					display: flex;
					justify-content: flex-start;
					width: 100%;
					position: relative;
					border-radius: 10rpx;

					.play-btn {
						position: absolute;
						top: 46%;
						left: 20%;
						width: 80rpx;
						height: 80rpx;

						image {
							width: 100%;
						}
					}

					image {
						width: 50%;
						height: 500rpx;
					}
				}

				video {
					width: 50%;
					height: 500rpx;
					border-radius: 10rpx;
				}
			}
		}
	}
</style>
