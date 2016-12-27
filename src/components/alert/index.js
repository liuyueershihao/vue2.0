import Alert from './alert.vue'
import Vue from 'vue'

const alert = function (obj) {
    const div = document.getElementById('popup')
    div.innerHTML = '<Alert :obj="obj"></Alert>'
    return new Vue({
        el: div,
        data () {
            return {
                obj
            }
        },
        components: {
            Alert
        }
    })
}

export default alert
