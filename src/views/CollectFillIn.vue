<template>
    <div class="collect_fill_in">
        <div class="hed"><span>采集申报</span></div>
        <div class="line"></div>
        <div class="display">
            <div class="table-container">
                <table>
                <tbody>
                    <tr>
                        <th>表号</th>
                        <th>报表名称</th>
                        <th>报告日期</th>
                        <th>填报单位</th>
                        <th>填报日期</th>
                        <th>当前状态</th>
                    </tr>
                    <tr v-for="item of data" :key=item.id>
                      <td>{{item.num}}</td>
                       <td><router-link to="/report_from">{{item.name}}</router-link></td>
                       <td>{{item.report_date}}</td>
                       <td>{{item.com}}</td>
                       <td>{{item.sub_date}}</td>
                       <td>{{item.status}}</td>
                    </tr>
                    <tr v-if="!data.length" >
                        <td colspan="8" class="none">---- 没有记录 ----</td>
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
    </div>
</template>

<script>
const tmpdata = [
{num: '海洋经济监测表2',name:'海洋渔业企事业月表',report_date:'2021年1月',com:'江门市海洋与渔业局',sub_date:'',status:'填报数据'},
{num: '海洋经济监测表2',name:'海洋渔业企事业月表',report_date:'2021年1月',com:'江门市海洋与渔业局',sub_date:'',status:'填报数据'},
{num: '海洋经济监测表2',name:'海洋渔业企事业月表',report_date:'2021年1月',com:'江门市海洋与渔业局',sub_date:'',status:'填报数据'}
]
import {ref,onMounted} from 'vue'
import debounce from '../util/debounce'
export default {
    setup(){
        const data = ref([])
        const sum = ref(0)
        const page = ref(1)
        const size = ref(10)
        const go = ref('')
        const sendReq = () => {
            data.value = tmpdata
            console.log(data.value)
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
     .collect_fill_in{
        background-color: rgb(225,243,255);
        padding: 15px;
        max-height: 100vh;
        min-height: 80vh;
        .hed{
            text-align: left;
            font-size: 13px;
            font-weight: 600;
        }
        .display{
           margin-top: 5px;
           .table-container{
               height: 430px;
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
                                // padding: 0px 20px;
                                line-height: 29px;
                                border: 3px solid rgb(148,212,255);
                                a{
                                    color: black;
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
     }
</style>