import App from './App'
import uView from "uview-ui";
// i18n部分的配置
// 引入语言包，注意路径
import Chinese from '@/common/locales/zh.js';
import English from '@/common/locales/en.js';
import VueI18n from '@/common/vue-i18n.min.js'

//如果是vue2版本可以在这里配置
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

// 判断市场常见的几种刘海屏机型
uni.getSystemInfo({
	success: function(res) {
		let modelmes = res.model;
		if (modelmes.indexOf('iPhone X') >= 0 || modelmes.indexOf('iPhone XR') >= 0 || modelmes.indexOf(
				'iPhone XS') >= 0 || modelmes.indexOf('iPhone 12') >= 0 || modelmes.indexOf('iPhone 11') >=
			0 || modelmes.indexOf('iPhone11') >= 0 || modelmes.indexOf('iPhone12') >= 0 || modelmes.indexOf(
				'iPhoneXR') >= 0 || modelmes.indexOf('iPhoneX') >= 0) {
			Vue.prototype.$is_bang = true
		} else {
			Vue.prototype.$is_bang = false
		}
	}
});
Vue.use(VueI18n)
const i18n = new VueI18n({
	// 默认语言
	locale: 'zh',
	// 引入语言文件
	messages: {
		'zh': Chinese,
		'en': English,
	}
});

// 由于微信小程序的运行机制问题，需声明如下一行，H5和APP非必填
Vue.prototype._i18n = i18n;
//利用use安装uview 
Vue.use(uView)
App.mpType = 'app'
const app = new Vue({
	i18n,
	...App
})
app.$mount()
// #endif

//vue3版本
// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
