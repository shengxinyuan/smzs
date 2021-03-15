<template>
	<view class="zl-box">
		<view class="box-one">
			<view class="title"><text>{{title}}</text></view>
			<view class="text"><text>{{text}}</text></view>
			<view><text>成色：{{purity}}</text></view>
			<view class="weight"><text>克重：{{weight}}</text></view>
		</view>
		<view class="box-two">
			<u-checkbox-group>
				<view style="display: flex;justify-content: space-between;flex-wrap: wrap;">
					<view class="photo-box" v-for="(item,index) in imgList" :key="index">
						<view class="photo">
							<image src="../../static/index/ii.png" mode="aspectFill"></image>
						</view>
						<view class="checkbox">
							<u-checkbox @change="checkboxChange" v-model="item.checked" shape="circle" active-color="#2d407a"></u-checkbox>
						</view>
					</view>
				</view>
			</u-checkbox-group>
		</view>
		<view class="bottom-box">
			<view class="min-box">
				<image src="../../static/index/haoyou.png" mode="aspectFill"></image>
				<view style="margin-top: 6upx;">微信好友</view>
			</view>
			<view class="min-box">
				<image src="../../static/index/pyq.png" mode="aspectFill"></image>
				<view style="margin-top: 6upx;">朋友圈</view>
			</view>
			<view class="min-box">
				<image src="../../static/index/lianjie.png" mode="aspectFill"></image>
				<view style="margin-top: 6upx;">分享链接</view>
			</view>
			<view class="min-box">
				<image src="../../static/index/save.png" mode="aspectFill"></image>
				<view style="margin-top: 6upx;">生成海报</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '婚嫁双喜龙凤套链',
				text: '设计师将龙凤呈祥与花卉、双喜元素结合，寓意佳偶天成，天生一对，婚后生活幸福美满',
				purity: '足金999.9',
				weight: '18.16g-18.41g',
				imgList: [{
						checked: false
					},
					{
						checked: false
					},
					{
						checked: false
					},
					{
						checked: false
					}
				]
			}
		},
		methods: {
			checkboxChange(e) {
				//console.log(e);
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
	.zl-box {
		padding: 30upx;

		.box-one {
			font-size: 26upx;

			.text {
				margin: 10upx 0;
			}

			.weight {
				margin-top: 10upx;
			}
		}

		.box-two {
			margin-top: 40upx;
			
			.photo-box{
				position: relative;
				.photo {
					margin-bottom: 10upx;
					image {
						width: 220upx;
						height: 220upx;
						border-radius: 10upx;
					}
				}
				.checkbox {
					position: absolute;
					right: -24upx;
					top: 0;
				}
			}
		}
	}
	.bottom-box{
		width: 100%;height: 180upx;
		padding: 0 50upx;
		background-color: #fff;
		display: flex;align-items: center;justify-content: space-between;
		position: fixed;bottom: 0;left: 0;z-index: 998;
		.min-box{
			text-align: center;
			font-size: 22upx;
			color: #666666;
			image{
				width: 80upx;
				height: 80upx;
			}
		}
	}
</style>
