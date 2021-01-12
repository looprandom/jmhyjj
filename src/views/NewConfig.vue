<template>
    <div class="newconfig">
        <div class="hed">
            <img src="../assets/image/sysconfig/config.gif" alt="">
            <span>{{title}}列表</span>
        </div>
        <div class="mid">
            <span>目前操作功能：列表</span>
            <router-link to="/new_edit">
                <span><img src="../assets/image/sysconfig/New.gif" alt="">新增{{title}}</span>
            </router-link>
        </div>
        <div class="params">    
            <span class="title">查询区</span>
            <label>主题：<input type="text" v-model="theme"></label> &nbsp;&nbsp;
            <label>关键字：<input type="text" v-model="keyword"></label>&nbsp;&nbsp;
            <label>更新时间：<input type="date" v-model="start_time"> ~ <input type="date" v-model="end_time"></label>&nbsp;&nbsp;
            <input type="button" value="查询" @click="sendReq">
        </div>
        <div class="display">
            <div class="table-container">
                <table>
                <tbody>
                    <tr>
                        <th>主题</th>
                        <th>关键字</th>
                        <th>更新时间</th>
                    </tr>
                    <tr v-for="item of data" :key=item.id>
                       <td>{{item.comName}}</td>
                       <td>{{item.comCode}}</td>
                       <td>{{item.comComtype}}</td>
                       <td>{{item.industryName}}</td>
                       <td>{{item.comAddressCounty}}</td>
                       <td>{{item.comBusinessstatus}}</td>
                        <td class="checked">{{item.comApply}}</td>
                        <td>
                            <router-link :to="`/edit_enterprise?id=${item.id}`"
                                        class="edit">
                                编辑
                            </router-link>
                        </td>
                    </tr>
                    <tr v-if="!data.length" >
                        <td colspan="3" class="none">---- 没有记录 ----</td>
                    </tr>
                </tbody>
            </table>
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
    </div>
</template>

<script>
import {ref,onMounted,computed} from 'vue'
import {useRoute} from 'vue-router'
import debounce from '../util/debounce';
export default {
    setup(){
        const route = useRoute()
        const title = computed(() => {
            if(route.params.type == 'news')
                return '新闻动态'
            else if(route.params.type == 'industry')
                return '行业动态'
        })
        const theme = ref('')
        const keyword = ref('')
        const start_time = ref('')
        const end_time = ref('')
        const data = ref([])
        const sum = ref(0)
        const page = ref(1)
        const size = ref(10)
        const go = ref('')
        const sendReq = () => {
            console.log(theme.value)
            console.log(keyword.value)
            console.log(start_time.value)
            console.log(end_time.value)
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
            theme,
            title,
            keyword,
            start_time,
            end_time,
            data,
            sum,
            page, 
            size,
            go,
            click_go,
            change_page,
            input_size
        }
    },
    beforeRouteUpdate (to, from, next) {
        console.log(this.$route.params)
        next()   
    }
}
</script>

<style lang="scss" scoped>
    .newconfig{
       .hed{
            line-height: 32px;
            font-size: 14px;
            font-weight: 600;
            // width: 100%;
            text-align: left;
            img{
                margin: 0 6px;
            }
            border-bottom: 3px solid black;
       }
       .mid{
           height: 32px;
           line-height: 32px;
            font-size: 12px;
            width: 100%;
            text-align: left;
            overflow: hidden;
            span:first-child{
                padding-left: 5px;
                float: left;
                color: rgb(128,128,128);
            }
            span:last-child{
                float: right;
                vertical-align: baseline;
                padding-right: 5px;
                cursor: pointer;
                img{
                    margin: 0 3px;
                }
                &:hover{
                    text-decoration: underline;
                }
            }
       }
        .params{   
           border: 3px solid rgb(148,212,255);
           margin: 5px;
           position: relative;
           padding: 10px;
           font-size: 13px;
           text-align: left;
           color: black;
           font-weight: 500;
           input[type=button]{
                    width: 44px;
                    height: 24px;
                    cursor: pointer;
                    background: url('../assets/image/enterprise/date_bj.gif');
                }
            .title{
                position: absolute;
                top: -8px;
                left: 35px;
                font-size: 13px;
                font-weight: 500;
                background-color: rgb(225,243,255);
            } 
           
       } 
        .display{
            margin: 5px;
           margin-top: 7px;    
           .table-container{
               height: 270px;
               overflow: auto;
           }
           table{
                font-size: 13px;
                // padding: 2px;
                border: 3px solid rgb(148,212,255);
                white-space: nowrap;
                font-weight: 500;
                text-align: center;
                tbody{
                    tr{
                        text-align: center;
                        &:nth-child(odd){
                            background-color: rgb(176,231,255);
                        }
                            &:nth-child(even){
                            background-color: rgb(238,249,255);
                        }
                        th{
                                font-weight: 700;
                                padding: 7px 52px;  //设置左右内边距过大，侧边栏会被挤压
                                border: 1px solid rgb(148,212,255);
                                background: url('../assets/image/enterprise/nav_dropdown_sep.gif')
                        }
                        td{
                            // padding: 0px 20px;
                            line-height: 29px;
                            border: 3px solid rgb(148,212,255)
                        }
                        td.none{
                            color: red
                        }
                    }
               }
               .edit{
                   text-decoration: underline;
                   color: black;
                   &:hover{
                       color: red;
                   }
               }
               .checked{
                   color: rgb(153,181,194)
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
    }
</style>