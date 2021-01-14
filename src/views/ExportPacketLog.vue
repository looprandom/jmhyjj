<template>
   <div class="generate_file_log">
        <div class="params">    
            <span class="title">查询区</span>
            <span>日期：&nbsp;</span>
            <input type="date" v-model="date">
            <input type="button" value="查询">
        </div>
         <div class="display">
            <div class="table-container">
                <table>
                <tbody>
                    <tr>
                        <th>数据包标识</th>
                        <th>日期</th>
                        <th>来源</th>
                        <th>下载次数</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for="(item) of data" :key=item.id>
                       <td><a href="#/404">{{item.identification}}</a></td>
                       <td>{{item.date}}</td>
                       <td>{{item.origin}}</td>
                       <td>{{item.download_amount}}</td>
                       <td><router-link to="/404">下载</router-link></td>
                    </tr>
                    <tr v-if="!data.length" >
                        <td colspan="5" class="none">---- 没有记录 ----</td>
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
        <div class="line"></div>
         <div class="but">
            <input type="button" value="生成数据">
        </div>
    </div>
</template>

<script>
const tmpdata = [
{id: 1,identification: '20210104231425_互联网导入海洋网 ', date: '2021-01-04 23:14:26', origin: '互联网导入海洋网 ',download_amount: '3'},
{id: 2,identification: '20210104231425_互联网导入海洋网 ', date: '2021-01-04 23:14:26', origin: '互联网导入海洋网 ',download_amount: '3'},
{id: 3,identification: '20210104231425_互联网导入海洋网 ', date: '2021-01-04 23:14:26', origin: '互联网导入海洋网 ',download_amount: '3'}
]
import {ref,onMounted} from 'vue'
import debounce from '../util/debounce'
export default {
    setup(){
        const data = ref([])
        const sum = ref(0)
        const page = ref(1)
        const size = ref(10)
        const date = ref("")
        const sendReq = () =>{
            console.log(date.value)
            data.value = tmpdata
        }
        onMounted(() => {
          sendReq()  
        })
        const go = ref('')
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
            date, 
            data,
            sum,
            page,
            size,
            go,
            click_go,
            change_page,
            input_size,
            sendReq
        }
    }
}
</script>

<style lang="scss" scoped>
    .generate_file_log{
         .params{   
           border: 3px solid rgb(148,212,255);
           position: relative;
           padding: 10px;
           font-size: 13px;
           text-align: left;
           color: black;
           font-weight: 500;
            .title{
                position: absolute;
                top: -8px;
                left: 35px;
                font-size: 13px;
                font-weight: 500;
                background-color: rgb(225,243,255);
            }
            select,input{
                    font-size: 13px;
                    width: 180px;
                    line-height: 22px;
                    margin-right: 80px;
                    vertical-align: middle;
            }
            input[type=text]{
                line-height: 16px;
            }
            input[type=button]{
                    width: 45px;
                    line-height: 20px;
                    margin-left: 5px;
                    cursor: pointer;
                    background: url('../assets/image/enterprise/date_bj.gif');
            }        
        }
        .display{
           margin-top: 5px;
           .table-container{
               height: 380px;
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
                                padding: 0px 20px;
                                line-height: 29px;
                                border: 3px solid rgb(148,212,255);
                                a{
                                    color: black;
                                    padding: 0 3px;
                                    &:hover{
                                        color: red;
                                        text-decoration: underline;
                                    }
                                }
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
       .line{
               width: 100%;
               height: 0;
               border-top: 2px dotted #000;
               margin-top: 10px;
               margin-bottom: 10px;
        }
        .but{
            text-align: left;
             input[type=button]{
                    padding: 0 6px;
                    height: 24px;
                    margin-left: 10px;
                    font-size: 14px;
                    cursor: pointer;
                    background: url('../assets/image/enterprise/date_bj.gif');
            }
            span{
                font-size: 14px;
            }
            input[type=checkbox]{
                vertical-align: baseline;
            }
        }     
    }
</style>