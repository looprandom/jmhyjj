<template>
    <div class="statistical_analysis">
        <div class="nav-aside" v-if="show_nav">
            <div class="title">统计分析</div>
            <div class="link">
                <div v-for="(item,index) of nav" :key="index">
                    <router-link :to="`/home/${item.path}`">
                        <img src="../assets/image/enterprise/morentu.gif" alt="">
                        {{item.name}}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="close"> 
            <img src="../assets/image/enterprise/close.gif"   
                @click="toggle_show">
        </div>
        </div>
        <div class="body"></div>
</template>

<script>
const nav = [
    {id: 1,name: '海洋产业基本情况',path: '/404'},
    {id: 2,name: '海洋产业基本情况',path: '/404'},
    {id: 3,name: '海洋产业基本情况',path: '/404'},
    {id: 4,name: '海洋产业基本情况',path: '/404'},
    {id: 5,name: '海洋产业基本情况',path: '/404'},
    {id: 6,name: '海洋产业基本情况',path: '/404'},
    {id: 7,name: '海洋产业基本情况',path: '/404'},
    {id: 8,name: '海洋产业基本情况',path: '/404'},
    {id: 9,name: '海洋产业基本情况',path: '/404'},
    {id: 10,name: '海洋产业基本情况',path: '/404'},
    {id: 11,name: '海洋产业基本情况',path: '/404'},
    {id: 12,name: '海洋产业基本情况',path: '/404'},
    {id: 13,name: '海洋产业基本情况',path: '/404'},
    {id: 14,name: '海洋产业基本情况',path: '/404'},
    
]
import {ref} from 'vue'
export default {
    setup() {
         //侧边栏关闭逻辑
        const show_nav = ref(true)
        const toggle_show = ()=>{
            show_nav.value = !show_nav.value
        }
        return {
            show_nav,
            toggle_show,
            nav
        }   
    }
}
</script>

<style lang="scss" scoped>
    .statistical_analysis{
         padding-top: 5px;
        display: flex;
        min-height: 610px;
        max-height: 610px;
        .nav-aside{   
            width: 210px;
            height: 100%;
            height: 608px;
            background-color: rgb(225,243,255);
            display: flex;
            flex-direction: column;
            .title{
                background: url("../assets/image/enterprise/banquan.gif");
                margin-top: 2px;
                color: blue;
                font-size: 13px;
                font-weight: 600;
                text-align: left;
                line-height: 25px;
                text-align: center;
            }
            .link{
                flex-grow: 1;
                overflow: auto;
                div{
                    width: 170px;
                    line-height: 45px;
                    background-color: rgb(204,237,254);
                    margin: 6px auto;
                    text-align: center;
                    font-size: 12px;
                    overflow: hidden; //解决外边距重叠
                    border: 1px solid #fff;
                    a{
                        color: black;
                    }
                    img{
                        vertical-align: middle;
                        width: 35px;
                        margin: 5px auto;
                    }
                }
            }
        }
       .close{
           position: relative;
           width: 15px;
           img{
                cursor: pointer;
                position: absolute;
                top: 50%;
                left: 1px;
                transform: translateY(-50%);
                &:hover{
                    border: 0.3px solid rgb(131, 7, 131);
                    border-radius: 7px;
                }
           }
       }
        .body{
            flex-grow: 1;
        }
    }
</style>