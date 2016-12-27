import Confirm from './confirm.vue'
import Vue from 'vue'

const confirm = function (obj) {
    const div = document.getElementById('popup')
    div.innerHTML = '<Confirm :obj="obj"></Confirm>'
    return new Vue({
        el: div,
        data () {
            return {
                obj
            }
        },
        components: {
            Confirm
        }
    })
}

export default confirm
