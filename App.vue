<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			// app锁定竖屏方向
			// #ifdef APP-PLUS
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
</style>
