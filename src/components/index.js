import Vue from 'vue'
import toast from './toast/index'
import loading from './loading/index'
import confirm from './confirm/index'
import alert from './alert/index'
import picker from './picker/index'

Vue.prototype.toast = toast
Vue.prototype.loading = loading
Vue.prototype.confirm = confirm
Vue.prototype.alert = alert
Vue.prototype.picker = picker
