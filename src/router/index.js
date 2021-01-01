import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
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
const NoFound = () =>
    import ('../views/NotFound')
const EditEnterprise = () =>
    import ('../views/EditEnterprise')

const constantRouterMap = [{
        path: '/login',
        name: 'login',
        component: Login
    }, { path: '/', redirect: '/home' },
    { path: '/home', redirect: '/home/homepage' },
    { path: '/home/enterprise', redirect: '/home/enterprise/list' },
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
    },
    { path: '/edit_enterprise', component: EditEnterprise },
    { path: '/404', component: NoFound },
    { path: "/:catchAll(.*)", redirect: '/404' }
]

// const adminRouteMap = [
//     { path: '/', redirect: '/home' },
//     { path: '/home', redirect: '/home/homepage' },
//     { path: '/home/enterprise', redirect: '/home/enterprise/list' },
//     {
//         path: '/home',
//         name: 'Home',
//         component: Home,
//         children: [{
//             path: 'homepage',
//             component: HomePage
//         }, {
//             path: 'enterprise',
//             component: Enterprise,
//             children: [{
//                 path: 'list',
//                 component: EnterpriseList
//             }, {
//                 path: 'analysis',
//                 component: EnterpriseAnalysis
//             }]
//         }]
//     }
// ]


const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouterMap
})


//进入一个路由时判断有没有token(有token后进登录页跳转进主页?),没有则跳登录页
router.beforeEach((to, from, next) => {

    if (localStorage.getItem('token')) {
        if (to.path == '/login' || to.path == '/regiest') {
            next({ path: '/' })
            return
        }
        next();
        return
    }
    if (to.path == '/login' || to.path == '/regiest') {
        next()

        return
    }
    next({
        path: '/login'
    })
})


export default router