<template>
    <div class="edit">
        <div class="tit">企业信息</div>
        <div class="opera">
            <span>操作区</span>
            <input type="button" value="保存" @click="save">
            <input type="button" value="返回" @click="back">
        </div>
        <div class="info">
            <div class="left">
                <ul>
                    <li>
                        <div class="name">
                            企业名称
                        </div>
                        <div class="input required">
                            <input type="text"  v-model="params.comName" >
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            组织机构代码
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comCode">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            法定代表人
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comDelegate">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            单位类型
                        </div>
                        <div class="input required">
                            <select name="" id="" v-model="params.comComtype">
                                <option value="0">单产业法人单位</option>
                                <option value="1">产业活动单位</option>
                                <option value="2">多产业法人单位</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            机构类型
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrgtype">
                                <option value="村委会">村委会</option>
                                <option value="其他组织机构">其他组织机构</option>
                                <option value="企业">企业</option>
                                <option value="事业单位">事业单位</option>
                                <option value="机关">机关</option>
                                <option value="社会团体">社会团体</option>
                                <option value="民办非企业单位">民办非企业单位</option>
                                 <option value="基金会">基金会</option>
                                 <option value="居委会">居委会</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            所属行业
                        </div>
                        <div class="input required">
                            <select name="" id="" v-model="params.industryId" >
                                <option v-for="item of industries"
                                         :value="item.id"
                                         :key="item.id">
                                         {{item.name}}
                                </option>
                            </select>
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            主要活动业务1
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.bussiness[0]">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            主要活动业务3
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.bussiness[2]">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            营业状态
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comBusinessstatus">
                                <option value="0">营业</option>
                                <option value="1">停业</option>
                                <option value="2">筹建</option>
                                <option value="3">当年关闭</option>
                                <option value="4">当年破产</option>
                                <option value="5">其他</option>
                            </select>
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            开业(成立)时间(月)
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comCreatemonth">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            单位注册地地址(省)
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegaddrSheng" disabled>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            单位注册地地址(县)
                        </div>
                        <div class="input required">
                            <select name="" id="" v-model="params.comRegaddrXian">
                                <option value="台山市">台山市</option>
                                <option value="鹤山市">鹤山市</option>
                                <option value="开平市">开平市</option>
                                <option value="恩平市">恩平市</option>
                                <option value="新会区">新会区</option>
                                <option value="蓬江区">蓬江区</option>
                                <option value="江海区">江海区</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            单位注册地位于-街道办事处
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegaddrJie">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            单位注册地地址(街) 【详细地址】
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegaddr">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            传真号码
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comFax">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            网址
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comHttp">
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            机关级别工商
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrglevelBus">
                                <option value="国家">国家</option>
                                <option value="省">省</option>
                                <option value="地(市)">地(市)</option>
                                <option value="县(市)">县(市)</option>
                            </select>
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            机关级别编制
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrglevelForm">
                                <option value="国家">国家</option>
                                <option value="省">省</option>
                                <option value="地(市)">地(市)</option>
                                <option value="县(市)">县(市)</option>
                            </select>
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            机关级别民政
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrglevelCivil">
                                <option value="国家">国家</option>
                                <option value="省">省</option>
                                <option value="地(市)">地(市)</option>
                                <option value="县(市)">县(市)</option>
                            </select>
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            机关级别国税
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrglevelNattax">
                                <option value="国家">国家</option>
                                <option value="省">省</option>
                                <option value="地(市)">地(市)</option>
                                <option value="县(市)">县(市)</option>
                            </select>
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            机关级别地税
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrglevelTax">
                                <option value="国家">国家</option>
                                <option value="省">省</option>
                                <option value="地(市)">地(市)</option>
                                <option value="县(市)">县(市)</option>
                            </select>
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            机关级别其他
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrglevelOth">
                                <option value="国家">国家</option>
                                <option value="省">省</option>
                                <option value="地(市)">地(市)</option>
                                <option value="县(市)">县(市)</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            企业控股情况
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comStock">
                                <option value="国有控股">国有控股</option>
                                <option value="集体控股">集体控股</option>
                                <option value="私人控股">私人控股</option>
                                <option value="港澳台商控股">港澳台商控股</option>
                                <option value="外商控股">外商控股</option>
                                <option value="其他">其他</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            执行会计标准类别
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comImpaccclass">
                                <option value="企业会计制度">企业会计制度</option>
                                <option value="事业会计单位制度">事业单位会计制度</option>
                                <option value="行政单位会计制度">行政单位会计制度</option>
                                <option value="民间非盈利组织会计制度">民间非盈利组织会计制度</option>
                                <option value="其他">其他</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            单位类别
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comComclass">
                                <option value="法人单位本部">法人单位本部</option>
                                <option value="法人单位分支机构">法人单位分支机构</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            法人单位详细名称
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comDelcomname">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            法人单位行政区划代码
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comDelcomareacode">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            单位规模
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comComscale">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            注册地城乡代码
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegcitycode">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            传真分机号
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comFaxext">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            固定电话
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comTel">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            行业门类
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comIndustrytype">
                        </div>
                    </li>
                     <li>
                        <div class="name" >
                            单位所在地(省)
                        </div>
                        <div class="input">
                            <input type="text" 
                                v-model="params.comAddressSheng"
                                disabled>
                        </div>
                    </li>
                     <li>
                        <div class="name" >
                            单位所在地(县)
                        </div>
                        <div class="input required">
                            <select name="" id="" v-model="params.comAddressXian">
                                <option value="台山市">台山市</option>
                                <option value="鹤山市">鹤山市</option>
                                <option value="开平市">开平市</option>
                                <option value="恩平市">恩平市</option>
                                <option value="新会区">新会区</option>
                                <option value="蓬江区">蓬江区</option>
                                <option value="江海区">江海区</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            单位所在地(街道办事处)
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comAddressJie">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            单位所在地(街) 【详细地址】
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comAddress">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            统计负责人
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comStaprincipal">
                        </div>
                    </li>
                </ul>
            </div>
            <div class="right">
                <ul>
                     <li>
                        <div class="name">
                            形象图片
                        </div>
                        <div class="input">
                            <div class="img" :style="{backgroundImage: `url(${bgimg})`,color:'black'}">
                            </div>
                            <input type="file"
                                    accept="image/png, image/jpeg, image/gif, image/jpg"
                                    @change="getFile($event)">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            行业代码
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comIndustrycode">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            主要活动业务2
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.bussiness[1]">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            登记注册类型
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comRegtype">
                                <option value="国有">国有</option>
                                <option value="其他有限责任公司">其他有限责任公司</option>
                                <option value="股份有限公司">股份有限公司</option>
                                <option value="私营独资">私营独资</option>
                                <option value="私营合伙">私营合伙</option>
                                <option value="私营有限责任公司">私营有限责任公司</option>
                                <option value="私营股份责任公司">私营股份责任公司</option>
                                <option value="其他">其他</option>
                                <option value="与港澳台商合资经营">与港澳台商合资经营</option>
                                 <option value="与港澳台商合作经营">与港澳台商合作经营</option>
                                  <option value="港澳台商独资">港澳台商独资</option>
                                  <option value="港澳台商投资股份">港澳台商投资股份</option>
                                  <option value="中外合资经营">中外合资经营</option>
                                  <option value="中外合作经营">中外合作经营</option>
                                  <option value="外商投资股份有限公司">外商投资股份有限公司</option>
                                  <option value="集体">集体</option>
                                  <option value="股份合作">股份合作</option>
                                  <option value="国有联营">国有联营</option>
                                  <option value="集体联营">集体联营</option>
                                  <option value="国有与集体联营">国有与集体联营</option>
                                  <option value="其他联营">其他联营</option>
                                  <option value="国有独资公司">国有独资公司 </option>

                            </select>
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            开业(成立)时间(年)
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comCreateyear">
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            统计机构
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comStatisticsorg">
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            单位注册地地址(地)
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegaddrDi" disabled>
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            单位注册地地址(乡)
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegaddrXiang">
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            单位注册地位于-社区(居委会)
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegaddrShe">
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            注册地区划代码
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegareacode">
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            电子邮箱
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comEmail">
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            邮政编码
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comZipcode">
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            登记注册号工商
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegcodeBus">
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            登记注册号编制
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegcodeForm">
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            登记注册号民政
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegcodeCivil">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            登记注册号国税
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegcodeNattax">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            登记注册号地税
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegcodeTax">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            登记注册号其他
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comRegcodeOth">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            隶属关系
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comSubrel" >
                                <option value="中央">中央</option>
                                <option value="省 (自治区、直辖市)">省 (自治区、直辖市)</option>
                                <option value="地 (区、市、州、盟)">地 (区、市、州、盟)</option>
                                <option value="县 (区、市、旗)">县 (区、市、旗)</option>
                                <option value="街道">街道</option>
                                <option value="镇">镇</option>
                                <option value="乡">乡</option>
                                <option value="居委会">居委会</option>
                                <option value="村委会">村委会</option>
                                <option value="其他">其他</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            是否执行2006年《企业会计准则》
                        </div>
                        <div class="input">
                            <input type="radio" :value="1" name="bool" v-model="params.comIsimprule">是
                            <input type="radio" :value="0" name="bool" v-model="params.comIsimprule">否
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            法人单位组织机构代码
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comDelcomcode">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            法人单位详细地址
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comDelcomaddr">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            产业活动单位数
                        </div>
                        <div class="input">
                            <input type="number" v-model="params.comIndustrycount">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            所在地城乡代码
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comCitycode">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            电话分机号
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comTelext">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            长途区号
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comZone">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            移动电话
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comMobile">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            联系电话
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comContacttel">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            单位所在地(地)
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comAddressDi" disabled>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            单位所在地(乡)
                        </div>
                        <div class="input required">
                            <input type="text" v-model="params.comAddressXiang">
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            单位所在地-社区(居委会)
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comAddressShe">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            单位负责人
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comComprincipal">
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            填报人
                        </div>
                        <div class="input">
                            <input type="text" v-model="params.comFillperson">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {reactive,ref,onMounted} from  'vue'
import {useRouter,useRoute} from 'vue-router'
import saveEnterprise from '../api/enterprise/saveEnterprise'
import getDetailCominfo from '../api/enterprise/getDetailCominfo'
import  getIndustry from '../api/enterprise/getIndustry'
import bg from '../assets/image/enterprise/noimg.jpg';
export default {
    setup(){
        const router = useRouter()
        const route = useRoute()
        onMounted(() => {
            if(route.query.id){
            getDetailCominfo(route.query.id).then(res => {
                for(let key in res.data.detailComInfo) 
                    params[key] = res.data.detailComInfo[key]
                     if(params.comImgurl){
                        bgimg.value = params.comImgurl
                    }
                    delete params.comImgurl
                    if(params.comIndustrycount == -1){
                        params.comIndustrycount = ''
                    }
                })
                params.jude = '0'
            }else{
                params.jude = '1'
            }      
        })
        const params = reactive({
            bussiness: new Array(3).fill(''),   //主要业务活动
            comAddress: '',                     //所在地单位所在地地址（街）【所在地详细地址】
            comAddressDi: '江门市',                    //单位所在地地址（地）
            comAddressJie: '',                  //单位所在地位于-街道办事处
            comAddressShe: '',                   //单位所在地位于-社区（居委会）
            comAddressSheng: '广东省',                //单位所在地地址（省）
            comAddressXian: '',                 //单位所在地地址（县）
            comAddressXiang: '',                //单位所在地地址乡
            comBusinessstatus: '',              //营业状态
            comCitycode: '',                    //所在地城乡代码
            comCode: '',                        //组织机构代码
            comComclass: '',                    //单位类别
            comComprincipal: '',                //单位负责人
            comComscale: '',                    //单位规模
            comComtype: '',                     //单位类型
            comContacttel: '',                  //联系电话
            comCreatemonth: '',                 //开始营业时间月
            comCreateyear: '',                  //开始营业时间年
            comDelcomaddr: '',                  //法人单位详细地址
            comDelcomareacode: '',              //法人单位行政区划代码
            comDelcomcode: '',                  //法人单位组织机构代码
            comDelcomname: '',                  //法人单位详细名称
            comDelegate: '',                    //法定负责人
            comEmail: '',                       //电子邮箱
            comFax: '',                         //传真号码
            comFaxext: '',                      //传真分机号
            comFillperson: '',                  //填报人
            comHttp: '',                        //网址
            comImpaccclass: '',                 //执行会计标准类别
            comIndustrycode: '',                //行业代码
            comIndustrycount: '',               //产业活动单位数
            comIndustrytype: '',                //行业门类
            comIsimprule: '',                   //是否执行2006年《企业会计准则》
            comMobile: '',                      //移动电话
            comName: '',                        //企业名称
            comOrglevelBus: '',                 //机关级别工商
            comOrglevelCivil: '',               //机关级别民政
            comOrglevelForm: '',                //机关级别编制
            comOrglevelNattax: '',              //机关级别国税
            comOrglevelOth: '',                 //机关级别其他
            comOrglevelTax: '',                 //机关级别地税
            comOrgtype: '',                     //机构类型
            comRegaddr: '',                     //单位注册地地址（街）【注册地详细地址】
            comRegaddrDi: '江门市',                   //注册地区地
            comRegaddrJie: '',                  //注册地区街道办
            comRegaddrShe: '',                  //注册地区社区居委会
            comRegaddrSheng: '广东省',                //注册地区省
            comRegaddrXian: '',                 //注册地区县
            comRegaddrXiang: '',                //注册地区乡
            comRegareacode: '',                 //注册地区划代码
            comRegcitycode: '',                 //注册地城乡代码
            comRegcodeBus: '',                  //登记注册号工商
            comRegcodeCivil: '',                //登记注册号民政
            comRegcodeForm: '',                 //登记注册号编制
            comRegcodeNattax: '',               //登记注册号国税
            comRegcodeOth: '',                  //登记注册号其他
            comRegcodeTax: '',                  //登记注册号地税
            comRegtype: '',                     //登记注册的类型
            comStaprincipal: '',                //统计负责人
            comStatisticsorg: '',               //统计机构
            comStock: '',                       //企业控股情况
            comSubrel: '',                      //隶属关系
            comTel: '',                         //固定电话
            comTelext: '',                      //电话分机号
            comZipcode: '',                     //邮政编码
            comZone: '',                        //长途区号
                                                //企业形象图片(默认不传)
            industryId: ''                      //所属行业
        })
        const save = ()=>{
            if(!params.comIndustrycount)
                params.comIndustrycount = -1
            console.log(params.comIndustrycount)
            saveEnterprise(params).then((res)=>{
               if(res.code === 20000){
                   router.go(-1)
               }else if(res.code === 10003){
                  alert("图片格式错误")
               }else if(res.code === 10001){
                    alert("保存失败，请确保填写完全必填项")
               }else{
                    alert("保存失败，请确保填写完全必填项")
               }
            },() => {
                alert("保存失败，请确保填写完全必填项")
            })
        }
        const bgimg = ref(bg)
        const getFile = (e) => {
            let files = e.target.files
            params.image = files[0]
           if(typeof FileReader !== void 0){
                let reads = new FileReader()
                reads.readAsDataURL(files[0])
                reads.addEventListener('load',function(){
                        bgimg.value = this.result
                })
           }
        }

        //获取行业信息
        const industries = ref([])
        onMounted(() => {
            getIndustry().then(res => {
                industries.value = res.data.industries
            })
        })
       const back = () => {
           router.go(-1)
       }
       return {
            params,
            bgimg,
            getFile,
            save,
            industries,
            back
        }
    }
}
</script>

<style lang="scss" scoped>
    .edit{
        background-color: rgb(240,251,255);
        min-height: 720px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        .tit{
            text-align: center;
            margin: 10px;
            font-weight: 700;
            font-size: 19px;
        }
        .opera{
            position: relative;
            border: 3px solid rgb(107,196,254);
            padding: 3px ;
            padding-top: 15px;
            margin: 5px;
            text-align: left;
            span{
                position: absolute;
                top: -10px;
                left: 37px;
                background-color: rgb(240,251,255);
            }
            input{
                    width: 60px;
                    height: 24px;
                    margin-left: 10px;
                    position: relative;
                    cursor: pointer;
                    background: url('../assets/image/enterprise/date_bj.gif');
                    
                }
        }
        .info{
            display: flex;
            flex-grow: 1;
            overflow: scroll;
            border: 2px solid rgb(107,196,254);
            margin: 7px;
            text-align: left;
            font-size: 14px;
            font-weight: 500;
            line-height: 30px;
            padding: 5px;
            .left{
                width: 50%;
                box-sizing: border-box;
                ul{
                    li{
                        display: flex;
                        padding-bottom: 5px;
                        .name{
                            background-color: rgb(137,216,255);
                            width: 60%;
                            padding-left: 5px;
                            box-sizing: border-box;
                        }
                        .input{
                            flex-grow: 1;
                            padding-left: 5px;
                            position: relative;
                            input[type=text],select{
                                height: 15px;
                                width: 202px;
                            }
                            select{
                                height: 20px;
                                width: 210px;
                            }
                            &.required::after{
                               
                                    color: red;
                                    content: "*";
                                    font-size: 28px;
                                    position: absolute;
                                    right: 64px;
                                    line-height: 37px;
                            }
                        }
                    }
                }
            }
            .right{
                width: 50%;
                box-sizing: border-box;
                 ul{
                    li{
                        display: flex;
                        padding-bottom: 5px;
                        .name{
                            background-color: rgb(137,216,255);
                            width: 60%;
                            padding-left: 5px;
                            box-sizing: border-box;
                            display: flex;
                            align-items: center;
                        }
                        .input{
                            flex-grow: 1;
                            padding-left: 5px;
                            position: relative;
                            input[type=text],input[type=number],select{
                                height: 15px;
                                width: 202px;
                            }
                            select{
                                height: 20px;
                                width: 210px;
                            }
                             &.required::after{
                               
                                    color: red;
                                    content: "*";
                                    font-size: 28px;
                                    position: absolute;
                                    right: 64px;
                                    line-height: 37px;
                            }
                        }
                        .img{
                            width: 135px;
                            height: 135px;
                            background-color: gray;
                            margin-left: 16px;
                            margin-bottom: 3px;
                            background: url("../assets/image/enterprise/noimg.jpg") center center/cover no-repeat;
                        }
                    }
                }
            }
        }
    }
</style>