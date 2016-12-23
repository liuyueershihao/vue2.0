<template lang="html">
    <div id="toast" v-if='toggle'>
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
        <!-- 这个图标在chrome上显示有问题，在iphone6微信上正常显示 -->
        <i class="weui-icon-success-no-circle weui-icon_toast"></i>
        <p class="weui-toast__content">{{content}}</p>
    </div>
</div>
</template>

<script>
export default {
    props: ['content'],
    data () {
        return {
            toggle: true
        }
    },
    mounted() {
        this.showFun()
    },
    methods: {
        showFun: function () {
            this.toggle = true
            setTimeout(() => {
                this.toggle = false
            }, 2000)
        }
    }
}
</script>
