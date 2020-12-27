import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
const HomePage = () =>
    import ('../views/HomePage')
const Login = () =>
    import ('../views/Login')
const Enterprise = () =>
    import ('../views/Enterprise')
const EnterpriseList = () =>
    import ('../views/EnterpriseList')
const EnterpriseAnalysis = () =>
    import ('../views/EnterpriseAnalysis')

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', redirect: '/home/homepage' },
    { path: '/home/enterprise', redirect: '/home/enterprise/list' },
    {
        path: '/login',
        name: 'Login',
        meta: {
            is_login: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [{
            path: 'homepage',
            component: HomePage
        }, {
            path: 'enterprise',
            component: Enterprise,
            children: [{
                path: 'list',
                component: EnterpriseList
            }, {
                path: 'analysis',
                component: EnterpriseAnalysis
            }]
        }]
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//进入一个路由时判断有没有token,没有则跳登录页
router.beforeEach((to, from, next) => {

    if (to.path == '/login' || to.path == '/regiest') {
        next()
        return
    }

    if (localStorage.getItem('token')) {
        next();
    } else {
        next({
            path: '/login'
        })
    }
})


export default router