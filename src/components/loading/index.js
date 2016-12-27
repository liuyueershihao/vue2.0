import Vue from 'vue'
import Loading from './loading.vue'

const loading = function (bool) {
    if (Object.prototype.toString.call(bool) !== '[object Boolean]') {
        throw new Error('the param of loading function need a value of boolean')
    }
    const div = document.getElementById('popup')
    div.innerHTML = '<Loading :toggle="bool"></Loading>'
    return new Vue({
        el: div,
        components: {
            Loading
        },
        data () {
            return {
                bool
            }
        }
    })
}

export default loading
