import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
//uview引入
import uView from 'uview-ui'
Vue.use(uView)

import com from 'utils/common.js'
Vue.prototype.com = com

import api from './api.js'
Vue.prototype.$api = api

const app = new Vue({
    ...App
})
app.$mount()
