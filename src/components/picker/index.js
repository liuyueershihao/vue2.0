import Vue from 'vue'
import Picker from './picker.vue'

const picker = function (obj) {
    const div = document.getElementById('popup')
    div.innerHTML = '<Picker :obj="obj"></Picker>'
    return new Vue({
        el: div,
        data () {
            return {
                obj
            }
        },
        components: {
            Picker
        }
    })
}

export default picker
