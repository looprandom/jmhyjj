<template>
   <div class="generate_file_log">
        <div class="params">    
            <span class="title">查询区</span>
            <span>状态：&nbsp;</span>
            <select name="" id="" v-model="status" @click="sendReq">
                <option value="0">全部</option>
                <option value="1">成功</option>
                <option value="2">失败</option>
            </select>
            <span>报表标识：&nbsp;</span>
            <input type="text" v-model="identification">
            <input type="button" value="查询">
        </div>
         <div class="display">
            <div class="table-container">
                <table>
                <tbody>
                    <tr>
                        <th>名称</th>
                        <th>日期</th>
                        <th>来源</th>
                        <th>状态</th>
                    </tr>
                    <tr v-for="(item) of data" :key=item.id>
                       <td>{{item.name}}</td>
                       <td>{{item.date}}</td>
                       <td>{{item.origin}}</td>
                       <td>{{item.status}}</td>
                    </tr>
                    <tr v-if="!data.length" >
                        <td colspan="4" class="none">---- 没有记录 ----</td>
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
             <input type="file">
            <input type="button" value="导入数据">
        </div>
    </div>
</template>

<script>
const tmpdata = [
    {id:1,name: '20150326151543_海洋网导入互联网.zip ',date: '2020-11-24 20:56:50',origin:'互联网导入海洋网 ',status:'成功 '},
    {id:2,name: '20150326151543_海洋网导入互联网.zip ',date: '2020-11-24 20:56:50',origin:'互联网导入海洋网 ',status:'成功 '},
    {id:3,name: '20150326151543_海洋网导入互联网.zip ',date: '2020-11-24 20:56:50',origin:'互联网导入海洋网 ',status:'成功 '}
]
import {ref,onMounted} from 'vue'
import debounce from '../util/debounce'
export default {
    setup(){
        const data = ref([])
        const sum = ref(0)
        const page = ref(1)
        const size = ref(10)
        const status = ref("0")
        const identification = ref("")
        const sendReq = () =>{
            console.log(status.value)
            console.log(identification.value)
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
            status,
            identification,
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
                    line-height: 30px;
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