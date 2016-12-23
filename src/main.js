// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import './assets/style/common.scss'
import router from './route-config'
import VueResource from 'vue-resource'
import 'weui'
import './components/index'
// import weui from 'weui.js'
// import 'vconsole'
// import loading from './components/loading/index'
// Vue.use(loading)
Vue.use(VueResource)
Vue.http.options.xhr = {
    withCredentials: true
}
Vue.http.options.root = '/root'
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'
Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true
    /* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
