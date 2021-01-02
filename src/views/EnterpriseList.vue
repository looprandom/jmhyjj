<template>
    <div class="enterpriseList">
        <div class="params">    
            <span class="title">查询区</span>
            <div class="comType">
                单位类型：
                <label for=""><input type="checkbox"
                                     :checked="comType[0]"
                                     @click="click_all_comType">全部
                </label> 
                <label for=""><input type="checkbox"
                                     :checked="comType[1]"
                                     @click="click_comType(1)">单产业法人单位</label>
                <label for=""><input type="checkbox"
                                     :checked="comType[2]"
                                     @click="click_comType(2)">多产业法人单位</label>  
                <label for=""><input type="checkbox" 
                                    :checked="comType[3]"
                                     @click="click_comType(3)">产业活动单位</label>
                <label for=""><input type="checkbox" 
                                    :checked="comType[4]"
                                     @click="click_comType(4)">其他</label>    
            </div>
            <div class="industry">
                <table>
                   <tbody>
                    <tr>
                        <td rowspan="6" class="th"><span>所属行业：&nbsp;</span></td>
                        <td><label for=""><input type="checkbox"
                                                :checked="all_industries"
                                                 @click="click_all_industries">全部
                            </label>
                        </td>
                        <td v-for="(item,index) of firstLine" :key="item.id">
                            <label for="">
                                <input type="checkbox" 
                                       :checked="industriesCheckList[0][index]"
                                       @click="click_industry(index)">{{item.name}}
                            </label>
                        </td>
                    </tr>
                    <tr v-for="(item,index1) of industriesList" :key="index1">
                        <td v-for="(inItem,index2) of item" :key="inItem.id">
                            <label for=""><input type="checkbox"
                                                :checked="industriesCheckList[index1+1][index2]"
                                                @click="click_industry(index1 + 1,index2)">{{inItem.name}}
                            </label>
                        </td>
                    </tr>
                   </tbody>
                </table>
            </div>
            <div class="in">
                所属地区：
                <select v-model="region">
                    <option value ="江门市">江门市</option>
                    <option value ="台山市">台山市</option>
                    <option value ="鹤山市">鹤山市</option>
                    <option value="开平市">开平市</option>
                    <option value="恩平市">恩平市</option>
                    <option value="新会区">新会区</option>
                    <option value="蓬江区">蓬江区</option>
                    <option value="江海区">江海区</option>
                </select>
                企业名称：
                <input type="text" v-model="enterprise_name">
                <input type="button" value="查询" @click="sendReq">
            </div>   
        </div>
        <div class="display">
            <div class="table-container">
                <table>
                <tbody>
                    <tr>
                        <th>企业名称</th>
                        <th>组织机构代码</th>
                        <th>单位类型</th>
                        <th>所属行业</th>
                        <th>所属区县</th>
                        <th>营业状态</th>
                        <th>批复</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for="item of companies" :key=item.id>
                       <td>{{item.name}}</td>
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
                </tbody>
            </table>
            </div>
            <div class="opera">
               <div class="left">
                    <span>总记录：{{sum}}条</span>
                    <span>页码：{{page}} /{{Math.ceil(sum / page)}}</span>
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
            <router-link to="/edit_enterprise">
                 <input type="button" value="新增">
            </router-link>
            <input type="button" value="导入">
            <input type="button" value="导出">
        </div>
    </div>
</template>

<script>
import {onMounted,ref} from 'vue'
import debounce from '../api/../util/debounce'
import getIndusty from '../api/enterprise/getIndustry'
import getEnterprise from '../api/enterprise/getEnterprise'
export default {
    setup(){
        //获取行业信息
        const industriesList = ref([])
        const firstLine = ref([])
        const  industriesCheckList = ref([])
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
      
        //params区
        //comType参数
        const comType = ref([true,true,true,true,true])
        const click_all_comType = () => {
            let cur = comType.value[0]
            for(let i = 0;i < comType.value.length;i++){
                comType.value[i] = !cur
            }
        }
        const click_comType = (index) => {
            comType.value[index] = !comType.value[index]
            if(comType.value[index] === false)
                comType.value[0] = false
            else{
                if(!comType.value.slice(1).includes(false))
                    comType.value[0] = true
            }
        }
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
            if(!index2)
                cur = industriesCheckList.value[0][index1] = !industriesCheckList.value[0][index1]
            else
                cur = industriesCheckList.value[index1][index2] = !industriesCheckList.value[index1][index2]

            if(cur === false)
                all_industries.value = false
            else{
                let flag = industriesCheckList.value.reduce((bool,curVal) => {
                    return bool && !curVal.includes(false)
                },true)
                if(flag)
                        all_industries.value = true
            }
             
        }
        //企业名
        const enterprise_name = ref('')
        //地区
        const region = ref('江门市')
        //查询
        const sendReq = () => {
            const parm_comType = comType.value.map((item) => {
                return item ? '1' : '0'
            }).slice(1).join('')
            let parm_industry = ''
            industriesCheckList.value.forEach(item => {
                item.forEach( i => {
                    parm_industry =  parm_industry + (i ? '1' : '0')
                })
            })
            let parm_region = '' 
            if(region.value != '江门市')
                parm_region = region.value
            const parm_enterprise = enterprise_name.value
            getEnterprise({comTypes: parm_comType,
                            county: parm_region,
                            industrys:parm_industry,
                            name: parm_enterprise,
                            page: parseInt(page.value) - 1,
                            size: parseInt(size.value) ? parseInt(size.value) : 10 })
                            .then(res => {
                               if(res.code === 20000){
                                    companies.value = res.data.companies
                                    sum.value = parseInt(res.data.sum)
                               }
                            })
        }

        const companies = ref([])
        const sum = ref(0)
        const page = ref(1)
        const size = ref(10)
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
            industriesList,
            firstLine,
            comType,
            click_all_comType,
            click_comType,
            industriesCheckList,
            all_industries,
            click_all_industries,
            click_industry,
            enterprise_name,
            region,
            sendReq,
            companies,
            sum,
            page,
            size,
            go,
            click_go,
            change_page,
            input_size
        }
    }
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
    .enterpriseList{
        background-color: rgb(225,243,255);
        padding: 15px;
        max-height: 100vh;
        min-height: 80vh;
        // height: 700px;
       .params{   
           border: 3px solid rgb(148,212,255);
           position: relative;
           padding: 10px;
           font-size: 13px;
           text-align: left;
           color: black;
           font-weight: 500;
           input[type=checkbox]{
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
            .comType{
                overflow: hidden;
                label{
                    padding-right: 10px;
                }
                padding-bottom: 10px;
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
            .in{
                select{
                    width: 207px;
                    vertical-align: middle;
                    margin-right: 15px;
                }
                input[type=text]{
                    vertical-align: middle;
                    height: 16px;
                    width: 207px;
                    margin-right: 15px;
                }
                input[type=button]{
                    width: 44px;
                    height: 24px;
                    cursor: pointer;
                    background: url('../assets/image/enterprise/date_bj.gif');
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
                                border: 3px solid rgb(148,212,255)
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
                    width: 44px;
                    height: 24px;
                    margin-left: 10px;
                    cursor: pointer;
                    background: url('../assets/image/enterprise/date_bj.gif');
                }
        }     
    }
</style>
