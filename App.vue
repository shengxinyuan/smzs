<script>
	import APPUpdate, { getCurrentNo } from './uni_modules/zhouWei-APPUpdate/js_sdk/appUpdate';
	import { getThreeDesignH5Url } from './utils/constant'

	export default {
		onLaunch: function() {
			console.log('APPUpdate')
			APPUpdate()
			
			console.log('App Launch')
			app锁定竖屏方向
			// #ifdef APP-VUE
			plus.screen.lockOrientation('portrait-primary');
			plus.push.getClientInfoAsync((info) => {
				var cid = info.clientid;
				uni.setStorage({
					key: 'clientid',
					data: cid,
					success: function() {
						console.log(cid);
					}
				});
				console.log(plus.push.getClientInfo())
			}, err => {})
			
			plus.push.addEventListener('click', function(message) {
				// plus.nativeUI.toast('push click'); 
				if (plus.os.name != 'Android') {
					var UIApplication = plus.ios.import("UIApplication");
					var app = UIApplication.sharedApplication();
					var oldNum = app.applicationIconBadgeNumber();
					if (oldNum != 0) {
						var newNum = oldNum - 1;
						plus.runtime.setBadgeNumber(newNum);
						var GeTuiSdk = plus.ios.importClass('GeTuiSdk');
						GeTuiSdk.setBadge(newNum);
					}
					plus.push.clear();
				} else {
					plus.runtime.setBadgeNumber(0);
					plus.runtime.setBadgeNumber(-1);
					uni.removeStorageSync('num')
				}
				console.log(message);
			});
			// #endif
		},
		onShow: function() {
			console.log('App Show')
			// 加载3d设计baseUrl
			// getThreeDesignH5Url()
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";

	uni-checkbox .uni-checkbox-input {
		border-radius: 50%;
	}

	@font-face {
		font-family: 'iconfont';
		/* project id 2039522 */
		src: url('//at.alicdn.com/t/font_2039522_7vyftouomsp.eot');
		src: url('//at.alicdn.com/t/font_2039522_7vyftouomsp.eot?#iefix') format('embedded-opentype'),
			url('//at.alicdn.com/t/font_2039522_7vyftouomsp.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_2039522_7vyftouomsp.woff') format('woff'),
			url('//at.alicdn.com/t/font_2039522_7vyftouomsp.ttf') format('truetype'),
			url('//at.alicdn.com/t/font_2039522_7vyftouomsp.svg#iconfont') format('svg');
	}
	
	.wx_right{
		width: 90px;;
	}
	
	.co_blue {
		color: #293C79;
	}
	
	.pad_b{
		padding: 0 30rpx;
	}
	
	.flex {
		display: flex;
	}
	
	.f_wrap {
		display: flex;
		flex-wrap: wrap;
	}
	
	.f_re {
		display: flex;
		flex-direction: row-reverse;
	}
	
	.fcc {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.fe {
		display: flex;
		justify-content: flex-end;
	}
	
	.fec {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	
	.fce {
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
	
	.fsbc {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.fsb {
		display: flex;
		justify-content: space-between;
	}
	
	.fsac {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.f_c {
		display: flex;
		align-items: center;
	}
	
	.f_e {
		display: flex;
		align-items: flex-end;
	}
	
	.fd {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
	
	.fd_c {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.fdcc {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.fdsbc {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	
	.fdsb {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
