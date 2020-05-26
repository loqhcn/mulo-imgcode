/* eslint-disable */

import Vue from 'vue'
import App from './App.vue'

//注册组件
import c from '../src/index.js'
Vue.use(c)

window.vm = new Vue({
    render: h => h(App)
}).$mount('#app')

