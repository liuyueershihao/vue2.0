import Alert from './alert.vue'
import Vue from 'vue'

const alert = function (content, ensureCallback) {
    const div = document.getElementById('popup')
    div.innerHTML = '<Alert :content="content" :ensure="ensureCallback"></Alert>'
    return new Vue({
        el: div,
        data () {
            return {
                content,
                ensureCallback
            }
        },
        components: {
            Alert
        }
    })
}

export default alert
