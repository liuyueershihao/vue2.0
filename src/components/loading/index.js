import Vue from 'vue'
import Loading from './loading.vue'

const loading = function (param) {
    // if (param !== true || param !== false) {
    //     throw window.error('the param of loading function need a value of boolean')
    //     return
    // }
    const div = document.getElementById('popup')
    div.innerHTML = '<Loading :toggle="param"></Loading>'
    return new Vue({
        el: div,
        components: {
            Loading
        },
        data () {
            return {
                param
            }
        }
    })
}

export default loading
