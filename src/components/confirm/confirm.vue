<template lang="html">
    <div id="dialog1" v-if="show">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd"><strong class="weui-dialog__title">弹窗提示</strong></div>
            <div class="weui-dialog__bd">{{content}}</div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="cancelFun">取消</a>
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="ensureFun">确定</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['obj'],
    data () {
        return {
            show: true,
            content: this.obj.content || '是否确认',
            cancel: this.obj.cancel || function () {},
            ensure: this.obj.ensure || function () {},
        }
    },
    methods: {
        cancelFun: function () {
            this.close()
            this.cancel()
        },
        ensureFun: function () {
            this.close()
            this.ensure()
        },
        close: function () {
            this.show = false
        }
    }
    // methods: {
    //     cancel: function () {
    //         this.$emit('cancel')
    //     },
    //     ensure: function () {
    //         this.$emit('ensure')
    //     }
    // }
}
</script>
