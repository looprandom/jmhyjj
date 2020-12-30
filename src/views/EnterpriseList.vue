<template>
    <div class="enterpriseList">
        <div class="params">    
            <span class="title">查询区</span>
            <div class="comType">
                单位类型：
                <label for=""><input type="checkbox">全部</label> 
                <label for=""><input type="checkbox">单产业法人单位</label>
                <label for=""><input type="checkbox">多产业法人单位</label>  
                <label for=""><input type="checkbox">产业活动单位</label>    
            </div>
            <div class="industry">
                <table>
                   <tbody>
                    <tr>
                        <td rowspan="6" class="th"><span>所属行业：&nbsp;</span></td>
                        <td><label for=""><input type="checkbox">全部</label></td>
                        <td v-for="item of firstLine" :key="item.id">
                            <label for=""><input type="checkbox">{{item.name}}</label>
                        </td>
                    </tr>
                    <tr v-for="(item,index) of industriesList" :key="index">
                        <td v-for="inItem of item" :key="inItem.id">
                            <label for=""><input type="checkbox">{{inItem.name}}</label>
                        </td>
                    </tr>
                   </tbody>
                </table>
            </div>
            <div class="in">
                所属地区：
                <select>
                    <option value ="台山市">台山市</option>
                    <option value ="鹤山市">鹤山市</option>
                    <option value="开平市">开平市</option>
                    <option value="恩平市">恩平市</option>
                    <option value="新会区">新会区</option>
                    <option value="蓬江区">蓬江区</option>
                    <option value="江海区">江海区</option>
                </select>
                企业名称：
                <input type="text">
                <input type="button" value="查询">
            </div>   
        </div>
        <div class="display">
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
                    <tr>
                       <td>营业状态营业状态营业</td>
                       <td>营业状态营营业状态营</td>
                       <td>营业状态营业状态业状态</td>
                       <td>营业状态业业状态</td>
                       <td>营业状状态营业状态营状态</td>
                       <td>营业状态营业业状态</td>
                        <td>审核</td>
                         <td>编辑</td>
                    </tr>
                      <tr>
                       <td>营业状态状态营业状态</td>
                       <td>营业状态态营业状态</td>
                       <td>营业状态营业状状态态营业状态</td>
                       <td>营业状态营营业状态</td>
                       <td>营业状态营状态营业状态</td>
                       <td>营业状态营业状态营业状态</td>
                        <td>审核</td>
                         <td>编辑</td>
                    </tr>
                     <tr>
                       <td>营业状态状态营业状态</td>
                       <td>营业状态态营业状态</td>
                       <td>营业状态营业状状态态营业状态</td>
                       <td>营业状态营营业状态</td>
                       <td>营业状态营状态营业状态</td>
                       <td>营业状态营业状态营业状态</td>
                       <td>审核</td>
                        <td>编辑</td>
                    </tr>
                     <tr>
                       <td>营业状态状态营业状态</td>
                       <td>营业状态态营业状态</td>
                       <td>营业状态营业状状态态营业状态</td>
                       <td>营业状态营营业状态</td>
                       <td>营业状态营状态营业状态</td>
                       <td>营业状态营业状态营业状态</td>
                       <td>审核</td>
                         <td>编辑</td>
                    </tr>
                     <tr>
                       <td>营业状态状态营业状态</td>
                       <td>营业状态态营业状态</td>
                       <td>营业状态营业状状态态营业状态</td>
                       <td>营业状态营营业状态</td>
                       <td>营业状态营状态营业状态</td>
                       <td>营业状态营业状态营业状态</td>
                        <td>审核</td>
                         <td>编辑</td>
                    </tr>
                     <tr>
                       <td>营业状态状态营业状态</td>
                       <td>营业状态态营业状态</td>
                       <td>营业状态营业状状态态营业状态</td>
                       <td>营业状态营营业状态</td>
                       <td>营业状态营状态营业状态</td>
                       <td>营业状态营业状态营业状态</td>
                        <td>审核</td>
                         <td>编辑</td>
                    </tr>
                     <tr>
                       <td>营业状态状态营业状态</td>
                       <td>营业状态态营业状态</td>
                       <td>营业状态营业状状态态营业状态</td>
                       <td>营业状态营营业状态</td>
                       <td>营业状态营状态营业状态</td>
                       <td>营业状态营业状态营业状态</td>
                        <td>审核</td>
                         <td>编辑</td>
                    </tr>
                     <tr>
                       <td>营业状态状态营业状态</td>
                       <td>营业状态态营业状态</td>
                       <td>营业状态营业状状态态营业状态</td>
                       <td>营业状态营营业状态</td>
                       <td>营业状态营状态营业状态</td>
                       <td>营业状态营业状态营业状态</td>
                       <td>审核</td>
                         <td>编辑</td>
                    </tr>
                    <tr>
                       <td>营业状态状态营业状态</td>
                       <td>营业状态态营业状态</td>
                       <td>营业状态营业状状态态营业状态</td>
                       <td>营业状态营营业状态</td>
                       <td>营业状态营状态营业状态</td>
                       <td>营业状态营业状态营业状态</td>
                       <td>审核</td>
                         <td>编辑</td>
                    </tr>
                    <tr>
                       <td>营业状态状态营业状态</td>
                       <td>营业状态态营业状态</td>
                       <td>营业状态营业状状态态营业状态</td>
                       <td>营业状态营营业状态</td>
                       <td>营业状态营状态营业状态</td>
                       <td>营业状态营业状态营业状态</td>
                       <td>审核</td>
                         <td>编辑</td>
                    </tr>
                </tbody>
            </table>
            <div class="opera">
               <div class="left">
                    <span>总记录：8088条</span>
                    <span>页码：1/809页</span>
                    <span>每页 <input type="text"> 条</span>
               </div>
               <div class="right">
                   <span>首页&nbsp;上一页</span>
                   <span>1 2 3 4 5 6 7 8 9 10 ...</span>
                   <span>下一页</span>
                   <span><input type="text">&nbsp;go</span>
               </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="but">
            <input type="button" value="新增">
            <input type="button" value="导入">
            <input type="button" value="导出">
        </div>
    </div>
</template>

<script>
import {onMounted,ref} from 'vue'
import getIndusty from '../api/enterprise/getIndustry'
export default {
    setup(){
        //获取行业信息
        const industriesList = ref([])
        const firstLine = ref([])
        onMounted(() => {
            getIndusty().then((res) => {
                const industries = res.data.industries
                firstLine.value = industries.slice(0,5)
                let i = 5
                while(i < industries.length){
                    industriesList.value.push(industries.slice(i,i + 6 ))
                    i += 6
                }
            })
        })
        return {
            industriesList,firstLine
        }
    }
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
    .enterpriseList{
        background-color: rgb(225,243,255);
        padding: 15px;
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
           table{
               font-size: 13px;
               padding: 2px;
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
                            padding: 8px 50px;
                            border: 1px solid rgb(148,212,255);
                            background: url('../assets/image/enterprise/nav_dropdown_sep.gif')
                        }
                        td{
                            padding: 8px 20px;
                            border: 3px solid rgb(148,212,255)
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
