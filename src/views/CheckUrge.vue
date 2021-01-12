<template> 
    <div class="check_urge">
        <div class="hed"><span>催办业务</span></div>
        <div class="line"></div>
         <div class="params">    
            <span class="title">查询区</span>
            <div class="year">
                 <span>年份：&nbsp;</span>
                 <div>
                    <label @click="sendReq"><input type="radio" name="year" value="20" v-model="year">2021</label>
                    <label @click="sendReq"><input type="radio" name="year" value="19" v-model="year">2020</label>
                    <label @click="sendReq"><input type="radio" name="year" value="18" v-model="year">2019</label>
                    <label @click="sendReq"><input type="radio" name="year" value="17" v-model="year">2018</label>
                    <label @click="sendReq"><input type="radio" name="year" value="16" v-model="year">2017</label>
                    <label @click="sendReq"><input type="radio" name="year" value="15" v-model="year">2016</label>
                    <label @click="sendReq"><input type="radio" name="year" value="14" v-model="year">2015</label>
                    <label @click="sendReq"><input type="radio" name="year" value="13" v-model="year">2014</label>
                    <label @click="sendReq"><input type="radio" name="year" value="12" v-model="year">2013</label>
                    <label @click="sendReq"><input type="radio" name="year" value="11" v-model="year">2012</label>
                    <label @click="sendReq"><input type="radio" name="year" value="10" v-model="year">2011</label>
                    <label @click="sendReq"><input type="radio" name="year" value="9" v-model="year">2010</label>
                    <label @click="sendReq"><input type="radio" name="year" value="8" v-model="year">2009</label>
                    <label @click="sendReq"><input type="radio" name="year" value="7" v-model="year">2008</label>
                    <label @click="sendReq"><input type="radio" name="year" value="6" v-model="year">2007</label>
                    <label @click="sendReq"><input type="radio" name="year" value="5" v-model="year">2006</label>
                    <label @click="sendReq"><input type="radio" name="year" value="4" v-model="year">2005</label>
                    <label @click="sendReq"><input type="radio" name="year" value="3" v-model="year">2004</label>
                    <label @click="sendReq"><input type="radio" name="year" value="2" v-model="year">2003</label>
                    <label @click="sendReq"><input type="radio" name="year" value="1" v-model="year">2002</label>
                    <label @click="sendReq"><input type="radio" name="year" value="0" v-model="year">2001</label>
                 </div>   
            </div>
            <div class="unit">
               <span>单位：&nbsp;</span>
                <select name="" id="" v-model="region" @click="sendReq">
                    <option value="">全部</option>
                    <option value="197蓝图测试企业01">197蓝图测试企业01</option>
                    <option value="LT测试企业01">LT测试企业01</option>
                    <option value="LT测试企业02">LT测试企业02</option>
                    <option value="LT测试企业03">LT测试企业03</option>
                </select>
            </div>
        </div>
        <div class="display">
            <div class="table-container">
                <table>
                <tbody>
                    <tr>
                        <th>选择</th>
                        <th>表号</th>
                        <th>报告期</th>
                        <th>单位/机构</th>
                        <th>填报开始时间</th>
                        <th>填报结束时间</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for="(item,index) of task" :key="index">
                       <td><input type="checkbox" v-model="check[index]"></td>
                       <td>{{item.num}}</td>
                       <td>{{item.report_date}}</td>
                       <td>{{item.company}}</td>
                       <td>{{item.start_date}}</td>
                       <td>{{item.end_date}}</td>
                        <td>
                            <router-link to="/cuiban"
                                        class="edit">
                                催办
                            </router-link>
                        </td>
                    </tr>
                     <tr v-if="!task.length" >
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
        <div class="line"></div>
        <div class="but">
            <input type="checkbox" v-model="all_check" @click="click_all_check">&nbsp;<span>全选/反选</span>
            <input type="button" value="批量催办">
        </div>
    </div>
</template>

<script>
import {onMounted,ref} from 'vue'
const tmptask = [{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
},
{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
},
{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
},
{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
},
{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
},
{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
},
{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
},
{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
},
{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
},
{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
},
{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
},
{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
},
{
    num: '海洋经济监测表2',
    report_date: '2020年9月',
    company: '蔡企业09',
    start_date: '2020-09-03',
    end_date: '2020-09-18'
}]
export default {
    setup(){
        //params区
        const year = ref(20)
        const region = ref("")
        const sendReq = () => {
          setTimeout(() => {
                console.log(year.value)
                console.log(region.value)
          })
        }
        onMounted(() => {
            task.value = tmptask
            check.value = new Array(tmptask.length).fill(false)
            sendReq()
        })
        const task = ref([])
        const check = ref([])
         //延迟？
        const click_all_check = () => {
           let cur = !all_check.value
           check.value = check.value.map(() => {
               return cur
           })
        }
        const sum = ref(0)
        const page = ref(1)
        const size = ref(10)
        const go = ref('')
        const all_check = ref(false)   
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
        return {
            year,
            region,
            sendReq,
            task,
            sum,
            page,
            size,
            go,
            click_go,
            change_page,
            all_check,
            click_all_check,
            check
        }
    }
}
</script>

<style lang="scss" scoped>
    .check_urge{
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
            .title{
                position: absolute;
                top: -8px;
                left: 35px;
                font-size: 13px;
                font-weight: 500;
                background-color: rgb(225,243,255);
            }
            .year,.unit{
                margin: 12px 8px;
                input{
                    vertical-align: baseline;
                }
            }
            .year{
                display: flex;
                align-items: center;
                span{
                    white-space: nowrap;
                }
                div{
                    line-height: 22px;
                    label{
                        margin-right: 5px;
                    }
                }
            }
            .unit{
                 select{
                    font-size: 13px;
                    width: 120px;
                    line-height: 30px;
                    margin-left: 3px;
                }
            }
        } 
        .display{
           margin-top: 5px;
           .table-container{
               height: 330px;
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
                                padding: 7px 55px;  //设置左右内边距过大，侧边栏会被挤压
                                border: 1px solid rgb(148,212,255);
                                background: url('../assets/image/enterprise/nav_dropdown_sep.gif')
                        }
                        td{
                                padding: 0px 20px;
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