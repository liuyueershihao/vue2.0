
<template>
    <div class="content">
        <div class="weui-tab">
            <div class="weui-tab__panel">

                <a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_default" @click="clickPicker">picker</a>
            </div>
            <tabbar :index='tabbar.index'></tabbar>
        </div>
    </div>
</template>
<script>
// import Vue from 'vue'
import tabbar from '../components/tabbar.vue'
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
        tabbar
    },
    data() {
        return {
            tabbar: {
                index: 1
            },
            dataList: [{
                name: '飞机'
            }, {
                name: '汽车'
            }, {
                name: '轮船'
            }, {
                name: '自行车'
            }, {
                name: '火车'
            }, {
                name: '走路'
            }, {
                name: '游泳'
            }, {
                name: '跑步'
            }, {
                name: '还有啥'
            }],
        }
    },
    mounted() {
        this.confirm({
            content: '这里有一些提示信息',
            cancel: function () {
                console.log('you has clicked cancel button')
            },
            ensure: function () {
                console.log('you has clicked ensure button')
            }
        })
        // this.alert({
        //     content: '这里有一些提示信息',
        //     ensure: function () {
        //         console.log('you has clicked sure button')
        //     }
        // })
        // this.loading(true)
        // this.toast('操作成功')
    },
    methods: {
        clickPicker: function () {
            let self = this
            this.picker({
                data: self.dataList,
                onChange: function () {
                    console.log(self.dataList[this.tempIndex])
                },
                onClose: function () {
                    console.log(self.dataList[this.tempIndex])
                }
            })
        }
    }
}

</script>
