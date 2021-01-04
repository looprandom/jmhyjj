<template>
    <div class="collect">
        <NavAside :title="nav_title" :nav="nav">
        </NavAside>
        <router-view class="body"></router-view>
    </div>
</template>

<script>
import NavAside from './NavAside'
const nav_title = '采集申报'
const nav = [{
    path: 'collect/fill_in',
    content: '填报数据',
    imgurl: require('../assets/image/nav_aside/fillin.png')
},{
    path: 'collect/data_query',
    content: '数据查询',
    imgurl: require('../assets/image/nav_aside/morentu.gif')
},{
    path: 'collect/fill_situation',
    content: '填报情况',
    imgurl: require('../assets/image/nav_aside/morentu.gif')
}]
export default {
    components:{NavAside},
    setup() {
        return {nav,nav_title}
    }
}
</script>

<style lang="scss" scoped>
    .collect{
        display: flex;
        padding-top: 5px;
        min-height: 610px;
        .body{
            flex-grow: 1;
        }
    }
</style>