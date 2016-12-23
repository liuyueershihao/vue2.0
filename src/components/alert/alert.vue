<template lang="html">
    <div v-if="show">
    <div class="weui-mask"></div>
    <div class="weui-dialog">
        <div class="weui-dialog__hd"><strong class="weui-dialog__title">提示</strong></div>
        <div class="weui-dialog__bd">{{content}}</div>
        <div class="weui-dialog__ft">
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="ensureFun">确定</a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['content', 'ensure'],
    data () {
        return {
            show: true
        }
    },
    methods: {
        ensureFun: function () {
            this.ensure()
        },
        close: function () {
            this.show = false
        }
    }
}
</script>
