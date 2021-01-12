<template>
    <div class="check">
        <NavAside :title="nav_title" :nav="nav" />
        <router-view class="body"></router-view>
    </div>
</template>

<script>
import NavAside from './NavAside'
const nav_title = '审核校对'
const nav = [{
    path: 'check/report',
    content: '报表业务',
    imgurl: require('../assets/image/nav_aside/morentu.gif')
},{
    path: 'check/urge',
    content: '催办业务',
    imgurl: require('../assets/image/nav_aside/morentu.gif')
},{
    path: 'check/file/generate_file_log',
    content: '文件导入导出',
    imgurl: require('../assets/image/nav_aside/morentu.gif')
}]
export default {
    components:{NavAside},
    setup(){
        return{
            nav,
            nav_title
        }
    }
}
</script>

<style lang="scss" scoped>
    .check{
        display: flex;
        padding-top: 5px;
        min-height: 610px;
        .body{
            flex-grow: 1;
        }
    }
</style>