import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'
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
const Collect = () =>
    import ('../views/Collect')
const CollectFillIn = () =>
    import ('../views/CollectFillIn')
const CollectDataQuery = () =>
    import ('../views/CollectDataQuery')
const CollectFillSituation = () =>
    import ('../views/CollectFillSituation')
const Check = () =>
    import ('../views/Check')
const CheckReport = () =>
    import ('../views/CheckReport')
const CheckUrge = () =>
    import ('../views/CheckUrge')
const CheckFile = () =>
    import ('../views/CheckFile')
const Monitor = () =>
    import ('../views/Monitor')
const Chart = () =>
    import ('../views/Chart')
const News = () =>
    import ('../views/News')
const NewDetail = () =>
    import ('../views/NewDetail')
const Table = () =>
    import ('../components/Table')
const NewEdit = () =>
    import ('../views/NewEdit')
const Sysconfig = () =>
    import ('../views/Sysconfig')
const NewConfig = () =>
    import ('../views/NewConfig')
const GenerateFileLog = () =>
    import ('../views/GenerateFileLog')
const ExportPacketLog = () =>
    import ('../views/ExportPacketLog')
const ImportFileLog = () =>
    import ('../views/ImportFileLog')
const ReportForm = () =>
    import ('../views/ReportFrom')
const StatisticalAnalysis = () =>
    import ('../views/StatisticalAnalysis')
const SysEnvConfig = () =>
    import ('../views/SysEnvConfig')
const SysConfiguation = () =>
    import ('../views/SysConfiguration')
const UploadFileCfg = () =>
    import ('../views/UploadFileCfg')
const LoginCfg = () =>
    import ('../views/LoginCfg')


// const constantRouterMap1 = [
//     { path: '/login', name: 'login', component: Login },
//     { path: '/', redirect: '/home' },
//     { path: '/home', redirect: '/home/homepage' },
//     { path: '/home/enterprise', redirect: '/home/enterprise/list' },
//     { path: '/home/collect', redirect: '/home/collect/fill_in' },
//     { path: '/home/check', redirect: '/home/check/report' },
//     { path: '/home/news', redirect: '/home/news/news' },
//     { path: '/home/check/file', redirect: '/home/check/file/generate_file_log' },
//     { path: '/home/sysconfig/sys_env_config', redirect: '/home/sysconfig/sys_env_config/sys_configuation' },
//     {
//         path: '/home',
//         name: 'Home',
//         component: Home,
//         children: [
//             { path: 'homepage', component: HomePage },
//             {
//                 path: 'enterprise',
//                 component: Enterprise,
//                 children: [
//                     { path: 'list', component: EnterpriseList },
//                     { path: 'analysis', component: EnterpriseAnalysis }
//                 ]
//             },
//             {
//                 path: 'collect',
//                 component: Collect,
//                 children: [
//                     { path: 'fill_in', component: CollectFillIn },
//                     { path: 'data_query', component: CollectDataQuery },
//                     { path: 'fill_situation', component: CollectFillSituation }
//                 ]
//             },
//             {
//                 path: 'check',
//                 component: Check,
//                 children: [
//                     { path: 'report', component: CheckReport },
//                     { path: 'urge', component: CheckUrge },
//                     {
//                         path: 'file',
//                         component: CheckFile,
//                         children: [
//                             { path: 'generate_file_log', component: GenerateFileLog },
//                             { path: 'export_packet_log', component: ExportPacketLog },
//                             { path: 'import_file_log', component: ImportFileLog }
//                         ]
//                     }
//                 ]
//             },
//             { path: 'monitor', component: Monitor },
//             { path: 'news/:type', component: News },
//             { path: 'new_detail', component: NewDetail },
//             {
//                 path: 'sysconfig',
//                 component: Sysconfig,
//                 children: [
//                     { path: 'new_config/:type', component: NewConfig },
//                     {
//                         path: 'sys_env_config',
//                         component: SysEnvConfig,
//                         children: [
//                             { path: 'sys_configuation', component: SysConfiguation },
//                             { path: 'upload_file_cfg', component: UploadFileCfg },
//                             { path: 'login_cfg', component: LoginCfg }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 path: 'statistical',
//                 component: StatisticalAnalysis,
//                 children: [

//                 ]
//             }
//         ]
//     },
//     { path: '/edit_enterprise', component: EditEnterprise },
//     { path: '/chart', component: Chart, name: 'chart' },
//     { path: '/table', component: Table, name: 'table' },
//     { path: '/new_edit', component: NewEdit, name: 'new_edit' },
//     { path: '/report_from', component: ReportForm, name: 'report_from' },
//     { path: '/404', component: NoFound },
//     { path: "/:catchAll(.*)", redirect: '/404' }
// ]

// console.log(constantRouterMap1)
export const constantRouterMap = [
    { path: '/login', name: 'login', component: Login }
]

export const asyncRouterMap = [
    { path: '/', redirect: '/home', meta: { roles: ['超级管理员'] } },
    { path: '/home', redirect: '/home/homepage', meta: { roles: ['超级管理员'] } },
    { path: '/home/enterprise', redirect: '/home/enterprise/list', meta: { roles: ['超级管理员'] } },
    { path: '/home/collect', redirect: '/home/collect/fill_in', meta: { roles: ['超级管理员'] } },
    { path: '/home/check', redirect: '/home/check/report', meta: { roles: ['超级管理员'] } },
    { path: '/home/news', redirect: '/home/news/news', meta: { roles: ['超级管理员'] } },
    { path: '/home/check/file', redirect: '/home/check/file/generate_file_log', meta: { roles: ['超级管理员'] } },
    { path: '/home/sysconfig/sys_env_config', redirect: '/home/sysconfig/sys_env_config/sys_configuation', meta: { roles: ['超级管理员'] } },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { roles: ['超级管理员'], root: true },
        children: [
            { path: 'homepage', component: HomePage, meta: { roles: ['超级管理员'], title: '首页' } },
            {
                path: 'enterprise',
                component: Enterprise,
                meta: { roles: ['超级管理员'], title: '企业名录' },
                children: [
                    { path: 'list', component: EnterpriseList, meta: { roles: ['超级管理员'] } },
                    { path: 'analysis', component: EnterpriseAnalysis, meta: { roles: ['超级管理员'] } }
                ]
            },
            {
                path: 'collect',
                component: Collect,
                meta: { roles: ['超级管理员'], title: '采集申报' },
                children: [
                    { path: 'fill_in', component: CollectFillIn, meta: { roles: ['超级管理员'] } },
                    { path: 'data_query', component: CollectDataQuery, meta: { roles: ['超级管理员'] } },
                    { path: 'fill_situation', component: CollectFillSituation, meta: { roles: ['超级管理员'] } }
                ]
            },
            {
                path: 'check',
                component: Check,
                meta: { roles: ['超级管理员'], title: '审核校对' },
                children: [
                    { path: 'report', component: CheckReport, meta: { roles: ['超级管理员'] } },
                    { path: 'urge', component: CheckUrge, meta: { roles: ['超级管理员'] } },
                    {
                        path: 'file',
                        component: CheckFile,
                        meta: { roles: ['超级管理员'] },
                        children: [
                            { path: 'generate_file_log', component: GenerateFileLog, meta: { roles: ['超级管理员'] } },
                            { path: 'export_packet_log', component: ExportPacketLog, meta: { roles: ['超级管理员'] } },
                            { path: 'import_file_log', component: ImportFileLog, meta: { roles: ['超级管理员'] } }
                        ]
                    }
                ]
            },
            { path: 'monitor', component: Monitor, meta: { roles: ['超级管理员'], title: '监测评估' } },
            {
                path: 'statistical',
                component: StatisticalAnalysis,
                meta: { roles: ['超级管理员'], title: '统计分析' },
                children: [

                ]
            },
            { path: 'news/:type', component: News, meta: { roles: ['超级管理员'], title: '信息发布' } },
            { path: 'new_detail', component: NewDetail, meta: { roles: ['超级管理员'] } },
            {
                path: 'sysconfig',
                component: Sysconfig,
                meta: { roles: ['超级管理员'], title: '系统设置' },
                children: [
                    { path: 'new_config/:type', component: NewConfig, meta: { roles: ['超级管理员'] } },
                    {
                        path: 'sys_env_config',
                        component: SysEnvConfig,
                        children: [
                            { path: 'sys_configuation', component: SysConfiguation, meta: { roles: ['超级管理员'] } },
                            { path: 'upload_file_cfg', component: UploadFileCfg, meta: { roles: ['超级管理员'] } },
                            { path: 'login_cfg', component: LoginCfg, meta: { roles: ['超级管理员'] } }
                        ]
                    }
                ]
            },
        ]
    },
    { path: '/edit_enterprise', component: EditEnterprise, meta: { roles: ['超级管理员'] } },
    { path: '/chart', component: Chart, name: 'chart', meta: { roles: ['超级管理员'] } },
    { path: '/table', component: Table, name: 'table', meta: { roles: ['超级管理员'] } },
    { path: '/new_edit', component: NewEdit, name: 'new_edit', meta: { roles: ['超级管理员'] } },
    { path: '/report_from', component: ReportForm, name: 'report_from', meta: { roles: ['超级管理员'] } },
    { path: '/404', component: NoFound },
    { path: "/:catchAll(.*)", redirect: '/404' }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouterMap
})

// adminRouteMap.forEach(item => {
//     router.addRoute(item)
// })


//进入一个路由时判断有没有token(有token后进登录页跳转进主页?),没有则跳登录页
router.beforeEach((to, from, next) => {
    if (localStorage.getItem('token')) {
        if (to.path == '/login' || to.path == '/regiest') {
            next({ path: '/' })
        } else {
            if (store.getters.roles.length === 0) {
                store.dispatch('getInfo').then((res) => {
                    const roles = res.data.roles
                    console.log(res.data)
                    store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
                        store.getters.addRouters.forEach((item) => {
                            router.addRoute(item) // 动态添加可访问路由表
                        })
                        next({...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                    })
                })
            } else {
                next() // 当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
            }
        }
    } else {
        if (to.path == '/login' || to.path == '/regiest') {
            next()
            return
        }
        next({
            path: '/login'
        })
    }
})


export default router