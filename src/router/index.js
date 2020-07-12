import Vue from 'vue'
import VueRouter from 'vue-router'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
import PageThree from '../views/PageThree.vue'
import PageFour from '../views/PageFour.vue'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '用户管理',
        show:true,
        redirect:"/pageOne",
        component: Index,
        children: [
            {
                path: '/pageOne',
                name: '查询用户',
                component: PageOne
            }, {
                path: '/pageTwo',
                name: '添加用户',
                component: PageTwo
            }
        ]
    },
    {
        path: "/navigation",
        name: "导航2",
        show:false,
        component: Index,
        children: [
            {
                path: '/pageThree',
                name: '页面3',
                component: PageThree
            }, {
                path: '/pageFour',
                name: '页面4',
                component: PageFour
            },
        ]
    },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
