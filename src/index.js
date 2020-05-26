/* eslint-disable */
import ImgCode from './ImgCode.vue'

const install = function (Vue) {
    Vue.component(ImgCode.name, ImgCode)
}

/* 浏览器上引入 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
    //全局的ajax
    window.$http = window.Vue.prototype.$http;
}
export default {
    install,
    version: '0.0.1',
    ImgCode
}
