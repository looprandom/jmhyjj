<template>
    <div class="enterprise">
        <div class="nav-aside" v-if="show_nav">
            <div class="title">企业名录</div>
            <div class="link">
                <div>
                    <router-link to="/home/enterprise/list">
                        <img src="../assets/image/enterprise/morentu.gif" alt="">
                        企业名录
                    </router-link>
                </div>
                <div>
                    <router-link to="/home/enterprise/analysis">
                        <img src="../assets/image/enterprise/morentu.gif" alt="">
                        企业分析
                    </router-link>
                </div>
            </div>
        </div>
       <div class="close"> 
           <img src="../assets/image/enterprise/close.gif"   
                @click="toggle_show">
        </div>
        <router-view class="query"></router-view>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name: 'Enterprise',
    setup(){
        //侧边栏关闭逻辑
        const show_nav = ref(true)
        const toggle_show = ()=>{
            show_nav.value = !show_nav.value
        }
        return{
            show_nav,
            toggle_show
        }
    }
}
</script>

<style lang="scss" scoped>
    .enterprise{
        padding-top: 5px;
        display: flex;
        min-height: 500px;
        .nav-aside{   
            width: 210px;
            background-color: rgb(225,243,255);
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
                div{
                    width: 70px;
                    height: 70px;
                    background-color: rgb(204,237,254);
                    margin: 20px auto;
                    text-align: center;
                    font-size: 13px;
                    overflow: hidden; //解决外边距重叠
                    border: 1px solid #fff;
                    a{
                        color: black;
                    }
                    img{
                        display: block;
                        width: 50px;
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
        .query{
            flex-grow: 1;
        }
    }
</style>