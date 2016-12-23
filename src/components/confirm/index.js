import Confirm from './confirm.vue'
import Vue from 'vue'

const confirm = function (content, cancelCallback, ensureCallback) {
    const div = document.getElementById('popup')
    div.innerHTML = '<Confirm :content="content" :cancel="cancelCallback" :ensure="ensureCallback"></Confirm>'
    return new Vue({
        el: div,
        data () {
            return {
                content,
                cancelCallback,
                ensureCallback
            }
        },
        components: {
            Confirm
        }
    })
}

export default confirm
