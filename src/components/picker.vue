<style lang='scss' $scpoed>
#picker{
    font-size: 16px;
}

</style>
<template lang="html">
    <div id='picker' v-show="toggle">
        <div class="weui-mask weui-animate-fade-in"></div>
        <div class="weui-picker weui-animate-slide-up">
            <div class="weui-picker__hd">
                <a href="javascript:;" data-action="cancel" class="weui-picker__action">取消</a>
                <a href="javascript:;" data-action="select" class="weui-picker__action" id='weui-picker-confirm'>确定</a>
            </div>
            <div class="weui-picker__bd">
                <div class="weui-picker__group">
                    <div class="weui-picker__mask"></div>
                    <div class="weui-picker__indicator"></div>
                    <div class="weui-picker__content" @click="scrollFun" style='transform: translate3d(0px, 34px, 0px);'>
                        <div class="weui-picker__item" v-for='data in dataList'>{{data.name}}</div>
                        <div class="weui-picker__item" v-for='data in dataList'>{{data.name}}</div>
                        <div class="weui-picker__item" v-for='data in dataList'>{{data.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['toggle', 'dataList'],
    data () {
        return {
            result: ''
        }
    },
    mounted() {
    },
    methods: {
        scrollFun: function () {
            this.$emit('scrollFun')
        }
    }
}
</script>
