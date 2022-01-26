import Vue from 'vue'
import App from './App'

// import VueWorker from 'vue-worker';
// Vue.use(VueWorker)

//uview引入
import uView from 'uview-ui';
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

// 360963104@qq   zl238231
// 13260880929    18920417395
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

Vue.prototype.compare = function(property){
	return function(a,b){
		return a[property] - b[property];
	}
}

Vue.prototype.bubbleSort = function(arr){
	for(let i=0;i<arr.length;i++){
		for(let j=1;j<arr.length;j++){
			if(arr[i].price * 1 < arr[j].price * 1){
				let max = arr[j];
				arr[j] = arr[i];
				arr[j+1] = max;
			}
		}
	}
	// return arr
}
