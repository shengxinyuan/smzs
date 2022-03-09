<template>
	<view>
		<web-view id="threeDesignRef" v-if="loaded" :src="design3dUrl"></web-view>
	</view>
</template>

<script>
import { config, env } from '../../config'
export default {
	data() {
		return {
			design3dUrl: config.design3dUrl,
			loaded: false,
			wv: null,
		};
	},
	onLoad(options) {
		let query = ''
		if (uni.getStorageSync('token')) {
			query = `?token=${uni.getStorageSync('token')}&env=${env}`
		} else {
			uni.showModal({
				content: '您还未登录,是否登录?',
				success: res => {
					if (res.confirm) {
						this.com.navto('/pages/login/login')
					}
				},
				fail: () => {},
				complete: () => {}
			});
		}

		if (options.url) {
			this.design3dUrl += `${options.url}/${query}`
		} else {
			this.design3dUrl += `${query}`
		}
		this.loaded = true
	},
	onReady() {
		var currentWebview = this.$scope.$getAppWebview()
		const check = () => {
			this.wv = currentWebview.children()[0]
			if (!this.wv) {
				return setTimeout(() => check(), 100)
			}
			const info = uni.getSystemInfoSync()
			this.wv.setStyle({
				top: info.statusBarHeight,
				bottom: info.safeAreaInsets.bottom,
			})
		}
		check();
	},
	onBackPress({ from }) {
		if (from == 'backbutton' && this.wv) {
			this.wv.canBack((e) => {
				if (e.canBack) {
					this.wv.back()
				} else {
					uni.navigateBack()
				}
			})
			return true;
		}
	},
	methods: {
	},
}
</script>

<style lang="scss">

</style>
