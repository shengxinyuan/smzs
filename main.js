import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
//uview引入
import uView from 'uview-ui'
Vue.use(uView)

import com from 'utils/common.js'
Vue.prototype.com = com

import Json from './Json.js'

const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}
Vue.prototype.$api = json
const app = new Vue({
    ...App
})
app.$mount()
