<template>
	<view>
		<view class="toast">
			<view class="toast_it">
				<view class="toast_it_title">服务协议和隐私政策</view>
				<view class="toast_it_cont"> 
					请你务必审慎阅读，充分理解"服务协议"和"隐私政策"各条款，包括但不限于：为了向你提供即时通讯、内容分享等服务，我们需要搜集你的设备信息、操作日志等个人信息。你可以在"设置"中查看、变更、删除个人信息并管理你的授权。你可阅读 
					<text style="color: #2B85E4;" @click="fuw(1)">《服务协议》</text> 和 <text style="color: #2B85E4;" @click="fuw(2)">《隐私政策》</text>了解详细信息。如你同意、请点击"同意"开始接受我们的服务。
				</view>
				<view class="toast_but">
					<view @click="no_app">
						暂不使用
					</view>
					<view style="color: #2B85E4;" @click="yes_xy">
						同意
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//暂不使用
			no_app(){
				//退出app
				// #ifdef APP-PLUS
				if (plus.os.name.toLowerCase() === 'android') {
					plus.runtime.quit();
				}
				else{ 
					const threadClass = plus.ios.importClass("NSThread");
					const mainThread = plus.ios.invoke(threadClass, "mainThread");
					plus.ios.invoke(mainThread, "exit");
				}
				// #endif
			},
			//同意
			yes_xy(){
				this.$emit("yesag")
			},
			//协议
			fuw(e){
				this.$emit("agreement",e)
			}
		}
	}
</script>

<style lang="scss" scoped>
.toast{
	position: fixed;left: 0;top: 0;display: flex;align-items: center;justify-content: center;
	width: 100%;height: 100vh;background-color: rgba(0,0,0,0.5);
	.toast_it{
		background-color: white;margin: 0 10%;border-radius: 20rpx;
		line-height: 80rpx;padding: 20rpx;
		.toast_it_title{
			width: 100%;text-align: center;font-size: 32rpx;
		}
		.toast_it_cont{
			margin: 20rpx 0;
			width: 100%;padding: 0rpx 40rpx;
			line-height: 40rpx;font-size: 28rpx;
		}
		.toast_but{
			width: 100%;display: flex;justify-content: space-between;font-size: 32rpx;line-height: 60rpx;border-top: 2rpx solid #f6f6f6;
			padding-top: 20rpx;
			view{
				width: 50%;text-align: center;
			}
			view:nth-child(1){
				border-right: solid 2rpx #f6f6f6;
			}
		}
	}
}
</style>
