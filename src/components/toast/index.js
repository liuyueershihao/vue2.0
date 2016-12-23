import Toast from './toast.vue'
import Vue from 'vue'
const toast = function (param) {
    const div = document.getElementById('popup')
    div.innerHTML = '<Toast :content="param"></Toast>'
    return new Vue({
        el: div,
        data () {
            return {
                param: param
            }
        },
        components: {
            Toast
        }
    }).$children[0]
}
export default toast
