<template>
	<view class="">
		<view class="user">
			<view class="user_item" style="border-bottom: 1rpx solid #F6F6F6;">
				<view class="it_left">
					姓名
				</view>
				<view class="it_right">
					<input type="text" placeholder="请输入姓名" v-model="name"/>
				</view>
			</view>
			<view class="user_item" >
				<view class="it_left">
					联系方式
				</view>
				<view class="it_right">
					<input type="text" placeholder="请输入联系方式" maxlength="11" v-model="phone"/>
				</view>
			</view>
		</view>
		<view class="content">
			<textarea value="" placeholder="请输入定制描述" v-model="discride"/>
			<view class="">
				请上传图片
			</view>
			<view class="">
				<u-upload :action="action" ref="uUpload" max-count="2" ></u-upload>
			</view>
			<view class="" style="margin-top: 30rpx;">
				请上传视频
			</view>
			<view class="vid_f">
				<view v-if="ship_list !=''">
					<video src="" controls></video>
				</view>
				
				<view class="videos_list" v-if="ship_list.length < 2" @click="videos">
					<view class="vid_icon">
						<u-icon name="camera" size="50" color="#666"></u-icon>
					</view>
					<view class="vid_tit">
						选择视频
					</view>
				</view>
			</view>
		</view>
		
		<view class="button_b">
			<zs-button :buttitle="提交" @but_cli="but_cli" ></zs-button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				name:'',
				phone:'',
				discride:'',
				action: 'http://hbcw.nxm.wanheweb.com/api/uploads',
				lists:[],
				ship_list:[]
			}
		},
		onReady() {
			// 得到整个组件对象，内部图片列表变量为"lists"
			this.lists = this.$refs.uUpload.lists;
		},
		methods:{
			//上传视频
			videos(){
				let that = this
				 uni.chooseVideo({ 
					maxDuration:60,
					count: 1,
					sourceType: ['camera', 'album'],
					success: function (res) {
						console.log(res)
						// console.log(res.tempFilePath)
						let src = res.tempFilePath;
						// return
						uni.uploadFile({
							url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
							filePath: src,
							name: 'file',
							formData: {
								'user': 'test'
							},
							success: (red) => { 
								console.log(red);
							}
						});
					}
				});
			},
			// 提交
		}
	}
</script>

<style lang="scss" scoped>
.user{
	width: 100%;border-top: 20rpx solid #F6F6F6;border-bottom: 20rpx solid #F6F6F6;
	background-color: white;
	.user_item{
		padding: 0 3%;
		display: flex;font-size: 30rpx;
		.it_left{
			width: 20%;line-height: 80rpx;
			
		}
		.it_right{
			width: 80%;padding-top: 20rpx;
			input{
				width: 100%;
				display: inline-block;font-size: 30rpx;
			}
		}
	}
}
.content{
	width: 100%;background-color: white;padding: 3%;
	textarea{
		width: 100%;height: 260rpx;font-size: 30rpx;
	}
	.vid_f{
		width: 100%;
		display: flex;flex-wrap: wrap;
		video{
			margin: 10rpx;width: 200rpx;height: 200rpx;
		}
		.videos_list{
			width: 200rpx;height: 200rpx;background-color: #f4f5f6;border-radius: 10rpx;margin: 10rpx;
			text-align: center;padding-top: 50rpx;
			.vid_tit{
				color: #666;line-height: 60rpx;
			}
		}
	}
	
}
</style>
