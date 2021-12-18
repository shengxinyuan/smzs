import Vue from 'vue'
import App from './App'

//uview引入
import uView from 'uview-ui';
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'


import com from 'utils/common.js'
Vue.prototype.com = com

import api from './api.js'
Vue.prototype.$api = api

const app = new Vue({
    ...App
})
app.$mount()

Vue.prototype.wxShare = function() {
	uni.showModal({
	    title: '提示',
	    content: '微信小程序暂不支持此功能，请前往下载APP。',
		showCancel:false,
	    success: function (res) {
	       
	    }
	});
}

Vue.prototype.debounce = function(fn,delay) {
	let timer
	return function (...args) {
	    if (timer) {
	      clearTimeout(timer)
	    }
	    timer = setTimeout(() => {
	      fn.apply(this, args)
	    }, delay)
	}
}

Vue.prototype.throttle = function(fn,delay){
	console.log(fn);
	let last = 0 // 上次触发时间
	return (...args) => {
	    const now = Date.now()
	    if (now - last > delay) {
	      last = now
	      fn.apply(this, args)
	    }
	}
}
