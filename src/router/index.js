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


const constantRouterMap = [

    { path: '/login', name: 'login', component: Login },
    { path: '/', redirect: '/home' },
    { path: '/home', redirect: '/home/homepage' },
    { path: '/home/enterprise', redirect: '/home/enterprise/list' },
    { path: '/home/collect', redirect: '/home/collect/fill_in' },
    { path: '/home/check', redirect: '/home/check/report' },
    { path: '/home/news', redirect: '/home/news/news' },
    { path: '/home/check/file', redirect: '/home/check/file/generate_file_log' },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            { path: 'homepage', component: HomePage },
            {
                path: 'enterprise',
                component: Enterprise,
                children: [
                    { path: 'list', component: EnterpriseList },
                    { path: 'analysis', component: EnterpriseAnalysis }
                ]
            },
            {
                path: 'collect',
                component: Collect,
                children: [
                    { path: 'fill_in', component: CollectFillIn },
                    { path: 'data_query', component: CollectDataQuery },
                    { path: 'fill_situation', component: CollectFillSituation }
                ]
            },
            {
                path: 'check',
                component: Check,
                children: [
                    { path: 'report', component: CheckReport },
                    { path: 'urge', component: CheckUrge },
                    {
                        path: 'file',
                        component: CheckFile,
                        children: [
                            { path: 'generate_file_log', component: GenerateFileLog },
                            { path: 'export_packet_log', component: ExportPacketLog },
                            { path: 'import_file_log', component: ImportFileLog }
                        ]
                    }
                ]
            },
            { path: 'monitor', component: Monitor },
            { path: 'news/:type', component: News },
            { path: 'new_detail', component: NewDetail },
            {
                path: 'sysconfig',
                component: Sysconfig,
                children: [
                    { path: 'new_config/:type', component: NewConfig }
                ]
            },
            {
                path: 'statistical',
                component: StatisticalAnalysis,
                children: [

                ]
            }
        ]
    },
    { path: '/edit_enterprise', component: EditEnterprise },
    { path: '/chart', component: Chart, name: 'chart' },
    { path: '/table', component: Table, name: 'table' },
    { path: '/new_edit', component: NewEdit, name: 'new_edit' },
    { path: '/report_from', component: ReportForm, name: 'report_from' },
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