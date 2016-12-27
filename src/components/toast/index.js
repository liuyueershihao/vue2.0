import Toast from './toast.vue'
import Vue from 'vue'
const toast = function (content) {
    const div = document.getElementById('popup')
    div.innerHTML = '<Toast :content="content"></Toast>'
    return new Vue({
        el: div,
        data () {
            return {
                content
            }
        },
        components: {
            Toast
        }
    }).$children[0]
}
export default toast
