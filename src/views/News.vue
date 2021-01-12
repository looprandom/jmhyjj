<template>
    <div class="news">
       <div class="nav">
           <router-link  to="news" ></router-link>
           <router-link  to="industry" ></router-link>
           <span>当前选择：{{title}}</span>
       </div>
       <div class="news_list">
           <img :src="img" alt="" class="logo">
           <div class="query">
               <label>新闻标题：<input type="text" v-model="new_title"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <label>新闻时间：<input type="date" v-model="start_date"></label>&nbsp;&nbsp;
               <label>至&nbsp;&nbsp;<input type="date" v-model="end_date"></label>&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="button" value="查询" @click="sendReq">
           </div>
           <ul>
               <li>
                   <router-link to="/home/new_detail">
                        <img src="../assets/image/news/news_yuan.png" alt="">
                       推进海洋经济综合试验区建设 发展临港经济和海洋航运 加强海洋资源开发
                    </router-link>
                    <span>
                        <img src="../assets/image/news/clock.png" alt="">
                        2015-03-03
                    </span>
                </li>
                 <li>
                   <router-link to="/home/new_detail">
                        <img src="../assets/image/news/news_yuan.png" alt="">
                       推进海洋经济综合试验区建设 发展临港经济和海洋航运 加强海洋资源开发
                    </router-link>
                    <span>
                        <img src="../assets/image/news/clock.png" alt="">
                        2015-03-03
                    </span>
                </li>
                 <li>
                   <router-link to="/home/new_detail">
                         <img src="../assets/image/news/news_yuan.png" alt="">
                       推进海洋经济综合试验区建设 发展临港经济和海洋航运 加强海洋资源开发
                    </router-link>
                    <span>
                        <img src="../assets/image/news/clock.png" alt="">
                        2015-03-03
                    </span>
                </li>
                 <li>
                   <router-link to="/home/new_detail">
                         <img src="../assets/image/news/news_yuan.png" alt="">
                       推进海洋经济综合试验区建设 发展临港经济和海洋航运 加强海洋资源开发
                    </router-link>
                    <span>
                        <img src="../assets/image/news/clock.png" alt="">
                        2015-03-03
                    </span>
                </li>
           </ul>
       </div>
        <div class="opera">
               <div class="left">
                    <span>总记录：{{sum}}条</span>
                    <span>页码：{{page}} /{{Math.ceil(sum / size)}}</span>
                    <span>每页 <input type="number" v-model="size" min="5"
                                        max="50"
                                        @keyup="input_size"> 条</span>
               </div>
               <div class="right">
                   <span
                        ><span @click="change_page(1)" class="go">首页</span>&nbsp;
                        <span @click="change_page(page - 1)" class="go">上一页</span> 
                    </span>
                    <span>
                        <span v-for="n of 10"
                             :key="n"
                              class="go"
                               @click="change_page(page + n - 1)"
                               :class="{current: n === 1}">
                            {{page + n - 1}}
                        </span>
                    </span>
                   <span @click="change_page(page + 1)" class="go">下一页</span>
                   <span><input type="number" v-model="go" min="1">&nbsp;
                        <span @click="click_go" class="go">go</span>
                    </span>
               </div>
        </div>
    </div>
</template>

<script>
import {ref,onMounted,computed} from 'vue'
import {useRoute} from 'vue-router'
import debounce from '../util/debounce'
import img1 from '../assets/image/news/news_tit.png'
import img2 from '../assets/image/news/hangye_tit.png'
export default {
    setup(){
        const route = useRoute()
        const title = computed(() => {
            if(route.params.type == 'news')
                return '新闻动态'
            else if(route.params.type == 'industry')
                return '行业动态'
        })
        const img = computed(() => {
            if(route.params.type == 'news')
                return img1
            else if(route.params.type == 'industry')
                return img2
        })
        const new_title = ref("")
        const start_date = ref("")
        const end_date = ref("")
        const sum = ref(0)
        const page = ref(1)
        const size = ref(10)
        const go = ref('')
        const sendReq = () => {
            console.log("params: ")
            console.log("new_title: " + new_title.value)
            console.log("start_date.value: " + start_date.value)
            console.log("end_date.value: " + end_date.value)
            console.log("sum: " + sum.value)
            console.log("page: " + page.value)
            console.log("size: " + size.value)
        }
        onMounted(() => {
            sendReq()
        })
        const click_go = () => {
            console.log(parseInt(go.value))
            if(!parseInt(go.value) || parseInt(go.value) <= 0){
                page.value = 1
                go.value = ''
                
            }else{
                 page.value = parseInt(go.value)
                 go.value = ''
            }
            sendReq()
        }
        const change_page = (i) => {
            if(i <= 0)
                page.value = 1
            else 
                page.value = i
            sendReq()
        }
        const input_size = debounce(() => {
            sendReq()
        },1000)
        return {
            sendReq,
            sum,
            page,
            size,
            go,
            click_go,
            change_page,
            input_size,
            new_title,
            start_date,
            end_date,
            title,
            img
        }
    },
    beforeRouteUpdate (to, from, next) {
        this.sendReq()
        next()   
    }
}
</script>

<style lang="scss" scoped>
    .news{
        background-color: rgb(245,250,254);
        padding: 20px;
        max-height: 100vh;
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        .nav{
            padding: 8px;
            overflow: hidden;
            position: relative;
            background-color: #fff;
            a{
                float: left;
                line-height: 45px;
                font-size: 18px;
                height: 45px;
                width: 240px;
                margin-right: 30px;
                font-weight: 600;
                color: #fff;
                &:nth-child(1){
                    background: url("../assets/image/news/news_btn.gif") center center/cover no-repeat;
                    &:hover{
                            &::after{
                                content: "新闻动态";
                            }
                           background: rgb(27,184,227);
                    }
                }
                &:nth-child(2){
                    background: url('../assets/image/news/hangye_btn.gif') center center/cover no-repeat;
                    &:hover{
                        &::after{
                                content: "行业动态";
                        }
                         background: rgb(170,189,100);
                    }
                }
            }
            span{
                position: absolute;
                right: 8px;
                bottom: 3px;
                font-size: 14px;
                color: rgb(126,126,126);
            }
        }
        .news_list{
            padding: 10px;
            // overflow: hidden;
            margin-top: 35px;
            position: relative;
            background-color: #fff;
            flex-grow: 1;
            overflow: auto;
            .logo{
                position: absolute;
                z-index: 999;
                left: 4px;
                top: 0px;
            }
            .query{
                line-height: 40px;
                font-size: 14px;
                input{
                    vertical-align: middle;
                }
                input[type=button]{
                    width: 70px;
                    text-align: center;
                    cursor: pointer;
                }
            }
            ul{
                margin-top: 35px;
                li{
                    text-align: left;
                    letter-spacing: 2px;
                    border-bottom: 2px solid #e4e4e2;
                    font-size: 14px;
                    line-height: 38px;
                    &:hover{
                        background-color: rgb(249,249,249);
                        text-decoration: underline;
                    }
                    img{
                        vertical-align: middle;
                        width: 15px;
                        margin-right: 4px;
                    }
                    a{
                        color: black;
                    }
                    span{
                        float: right;
                    }
                }
            } 
        }
         .opera{
               display: flex;
               font-size: 12px;
               font-weight: 500;
               margin-top: 30px;
               span{
                   padding: 3px;
               }
               input{
                   vertical-align: middle;
                   width: 32px;
                   height: 18px;
               }
               .left{
                   flex-grow: 1;
                   text-align: left;
               }
               .right{
                   text-align: left;
                   .go{
                       &:hover{
                           text-decoration: underline;
                           cursor: pointer;
                       }
                   }
                   .current{
                       color: red;
                   }
               }
        }
    }
</style>