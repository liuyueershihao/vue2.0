import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        // 重定向
        {
            path: '/',
            redirect: '/test'
        },
        {
            path: '/test',
            component: require('./views/test.vue'),
            beforeEnter: (to, from, next) => {
                console.log('beforeEnter in routes')
                next()
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    // 确保要调用 next 方法，否则钩子就不会被 resolved
    next()
})

router.afterEach(route => {
    console.log('成功浏览到:' + route.path)
})

export default router
