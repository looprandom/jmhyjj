<template>
    <div class="enterprise">
        <NavAside :title="nav_title" :nav="nav" />
        <router-view class="body"></router-view>
    </div>
</template>

<script>
import NavAside from './NavAside'
const nav_title = '企业名录'
const nav = [{
    path: 'enterprise/list',
    content: '企业名录',
    imgurl: require('../assets/image/nav_aside/morentu.gif')
},{
    path: 'enterprise/analysis',
    content: '企业分析',
    imgurl: require('../assets/image/nav_aside/morentu.gif')
}]
export default {
    name: 'Enterprise',
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
    .enterprise{
        padding-top: 5px;
        display: flex;
        min-height: 500px;
        .body{
            flex-grow: 1;
        }
    }
</style>