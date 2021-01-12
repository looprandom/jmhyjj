<template>
    <div class="collect_data_query">
        <div class="hed"><span>数据查询</span></div>
        <div class="line"></div>
        <div class="params">    
            <span class="title">查询区</span>
             <div class="type">
                <span>类型：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <label>
                    <input type="radio" name="type" v-model="type" value="0" @click="sendReq">企事业监测点报表
                </label>
                <label>
                    <input type="radio" name="type" v-model="type" value="1" @click="sendReq">海洋统计年报
                </label>     
            </div>
             <div class="year">
                 <span>年份：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="0">2021&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="1">2020&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="2">2019&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="3">2018&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="4">2017&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="5">2016&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="6">2015&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="7">2014&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="8">2013&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="9">2012&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="10">2011&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="11">2010&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="12">2009&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="13">2008&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="14">2007&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="15">2006&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="16">2005&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="17">2004&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="18">2003&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="19">2002&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="20">2001&nbsp;</label>
            </div>
             <div class="industry">
                <table>
                   <tbody>
                    <tr>
                        <td :rowspan="1 + industriesList.length" class="th"><span>所属行业：&nbsp;</span></td>
                        <td><label @click="sendReq"><input type="checkbox"
                                                :checked="all_industries"
                                                 @click="click_all_industries"
                                                 >全部
                            </label>
                        </td>
                        <td v-for="(item,index) of firstLine" :key="item.id">
                            <label @click="sendReq">
                                <input type="checkbox" 
                                       :checked="industriesCheckList[0][index]"
                                       @click="click_industry(index)">{{item.name}}
                            </label>
                        </td>
                    </tr>
                    <tr v-for="(item,index1) of industriesList" :key="index1">
                        <td v-for="(inItem,index2) of item" :key="inItem.id" @click="sendReq">
                            <label for=""><input type="checkbox"
                                                :checked="industriesCheckList[index1+1][index2]"
                                                @click="click_industry(index1 + 1,index2)">{{inItem.name}}
                            </label>
                        </td>
                    </tr>
                   </tbody>
                </table>
            </div>
            <div class="status">
                <span>报表状态：</span>
                <label>
                    <input type="radio" name="status" v-model="status" value="0" @click="sendReq">全部
                </label>
                <label>
                    <input type="radio" name="status" v-model="status" value="1" @click="sendReq">未填报
                </label>
                 <label>
                    <input type="radio" name="status" v-model="status" value="2" @click="sendReq">未提交
                </label> 
                 <label>
                    <input type="radio" name="status" v-model="status" value="3" @click="sendReq">已入库
                </label>   
            </div>
        </div>
        <div class="display">
            <div class="table-container">
                <table>
                <tbody>
                    <tr>
                        <th>表号</th>
                        <th>报表名称</th>
                        <th>报表日期</th>
                        <th>填报单位</th>
                        <th>填报日期</th>
                        <th>当前状态</th>
                    </tr>
                    <tr v-for="item of data" :key=item.id>
                       <td>{{item.num}}</td>
                       <td>{{item.name}}</td>
                       <td>{{item.report_date}}</td>
                       <td>{{item.com}}</td>
                       <td>{{item.sub_date}}</td>
                       <td>{{item.status}}</td>
                    </tr>
                    <tr v-if="!data.length" >
                        <td colspan="7" class="none">---- 没有记录 ----</td>
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
import {ref,onMounted} from 'vue'
import getIndusty from '../api/enterprise/getIndustry'
import debounce from '../util/debounce'
const tmpdata = [
{num: '海洋经济监测表2',name:'海洋渔业企事业月表',report_date:'2021年1月',com:'江门市海洋与渔业局',sub_date:'',status:'填报数据'},
{num: '海洋经济监测表2',name:'海洋渔业企事业月表',report_date:'2021年1月',com:'江门市海洋与渔业局',sub_date:'',status:'填报数据'},
{num: '海洋经济监测表2',name:'海洋渔业企事业月表',report_date:'2021年1月',com:'江门市海洋与渔业局',sub_date:'',status:'填报数据'}
]
export default {
    setup(){
        const type = ref('0')
        const year = ref('0')
        const status = ref('0')
        const data = ref([])
        const sum = ref(0)
        const page = ref(1)
        const size = ref(10)
         //获取行业信息
        const industriesList = ref([])
        const firstLine = ref([])
        const  industriesCheckList = ref([])
         //industries参数
        const all_industries = ref(true)
        const click_all_industries = () => {
            all_industries.value = !all_industries.value
            let cur = all_industries.value
            industriesCheckList.value.forEach((item) => {
                item.forEach((i,index) => {
                    item[index] = cur
                })
            })
        }
        const click_industry = (index1,index2) => {
            let cur
            //有延迟
            if(index2 === void 0){
                cur = industriesCheckList.value[0][index1] = !industriesCheckList.value[0][index1]
            }else{
                cur = industriesCheckList.value[index1][index2] = !industriesCheckList.value[index1][index2]
            }       
            if(cur == false){
                all_industries.value = false
            }else{
                let flag = industriesCheckList.value.reduce((bool,curVal) => {
                    return bool && !curVal.includes(false)
                },true)
                if(flag)
                        all_industries.value = true
            }
             
        }
        onMounted(() => {
            //异步编程
            getIndusty().then((res) => {
                const industries = res.data.industries
                firstLine.value = industries.slice(0,5)
                industriesCheckList.value.push(ref(new Array(firstLine.value.length).fill(true)).value)
                let i = 5
                while(i < industries.length){
                    let next = industries.slice(i,i + 6 )
                    industriesCheckList.value.push(ref(new Array(next.length).fill(true)).value)
                    industriesList.value.push(next)
                    i += 6
                }
                 sendReq()
            })
            // window.location.reload()
        })
        //有延迟
        const sendReq = () =>{
           setTimeout(() => {
                let parm_industry = ''
                industriesCheckList.value.forEach(item => {
                    item.forEach( i => {
                        parm_industry =  parm_industry + (i ? '1' : '0')
                    })
                })
                console.log(type.value)
                console.log(year.value)
                console.log(parm_industry)
                console.log(status.value)
                data.value = tmpdata
           })
        }
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
            type,
            year,
            industriesList,
             industriesCheckList,
            all_industries,
            click_all_industries,
            click_industry,
            firstLine,
            status,
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
    .collect_data_query{
        background-color: rgb(225,243,255);
        padding: 15px;
        max-height: 100vh;
        min-height: 80vh;
        .hed{
            text-align: left;
            font-size: 13px;
            font-weight: 600;
        }
        .params{   
           border: 3px solid rgb(148,212,255);
           position: relative;
           padding: 10px;
           font-size: 13px;
           text-align: left;
           color: black;
           font-weight: 500;
           input[type=checkbox],input[type=radio]{
               width: 13px;
               height: 13px;
               vertical-align: middle;
           }
            .title{
                position: absolute;
                top: -8px;
                left: 35px;
                font-size: 13px;
                font-weight: 500;
                background-color: rgb(225,243,255);
            }
            .type,.year,.industry,.status{
                margin: 12px 8px;
                padding-bottom: 10px;
            } 
            .type{
                overflow: hidden;
                label{
                    padding-right: 10px;
                }
            }
            .industry{
                table{
                    tr{
                        td{
                            min-width: 138px;
                            padding-bottom: 5px;
                        }
                    }
                    .th{
                        vertical-align: middle;
                        padding-right: 0;
                        padding-bottom: 0;
                        min-width: 0;
                    }
                }
            } 
       } 
       .display{
           margin-top: 5px;
           .table-container{
               height: 250px;
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
       .line{
               width: 100%;
               height: 0;
               border-top: 2px dotted #000;
               margin-top: 10px;
               margin-bottom: 10px;
        }
    }
</style>