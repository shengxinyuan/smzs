<template>
	<view>
		<web-view id="threeDesignRef" v-if="loaded" :src="h5Url"></web-view>
	</view>
</template>

<script>
import { THREE_D_H5_URL } from '../../utils/constant'
import { commonUrl } from '../../api.js'
export default {
	data() {
		return {
			h5Url: THREE_D_H5_URL,
			loaded: false,
			wv: null,
		};
	},
	onLoad(options) {
		let query = ''
		let env = commonUrl.includes('zuanshi.dis.wanheweb.com') ? 'prod' : 'test'
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
			this.h5Url += `${options.url}/${query}`
		} else {
			this.h5Url += `${query}`
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
