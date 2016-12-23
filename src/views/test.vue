
<template>
    <div class="content">
        <div class="weui-tab">
            <div class="weui-tab__panel">

                <a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_default">picker</a>

            </div>
            <tabbar :index='tabbar.index'></tabbar>
        </div>
    </div>
</template>
<script>
// import Vue from 'vue'
import tabbar from '../components/tabbar.vue'
import picker from '../components/picker.vue'
export default {
    beforeRouteEnter(to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当钩子执行前，组件实例还没被创建
        // 可以用这样的方式调用this
        // next(vm => {
        // 通过 `vm` 访问组件实例
        // })
        // 必须调用next函数，否则路由不会被resolved
        next()
    },
    beforeRouteLeave(to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        // 必须调用next函数，否则路由不会被resolved
        // 如果 next(false) 可以取消路由
        next()
    },
    components: {
        tabbar,
        picker
    },
    data() {
        return {
            tabbar: {
                index: 1
            },
        }
    },
    mounted() {
        // this.confirm('hahoh', function () {
        //     this.close()
        //     console.log('cancel')
        // }, function () {
        //     this.close()
        //     console.log('ensure and do somethin')
        // })
        // this.alert('是否确定', function () {
        //     this.close()
        // })
        // this.loading(true)
        // this.toast('操作成功')
    }
}

</script>
