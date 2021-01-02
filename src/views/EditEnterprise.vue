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
                                <option value="sdasd">sda</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            机构类型
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrgtype"></select>
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
                            <select name="" id="" v-model="params.comBusinessstatus"></select>
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
                            <input type="text" v-model="params.comRegaddrSheng">
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            单位注册地地址(县)
                        </div>
                        <div class="input required">
                            <input type="text" v-model="params.comRegaddrXian" >
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
                            <select name="" id="" v-model="params.comOrglevelBus"></select>
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            机关级别编制
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrglevelForm"></select>
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            机关级别民政
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrglevelCivil"></select>
                        </div>
                    </li>
                     <li>
                        <div class="name">
                            机关级别国税
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrglevelNattax"></select>
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            机关级别地税
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrglevelTax"></select>
                        </div>
                    </li>
                      <li>
                        <div class="name">
                            机关级别其他
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comOrglevelOth"></select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            企业控股情况
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comStock"></select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            执行会计标准类别
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comImpaccclass"></select>
                        </div>
                    </li>
                    <li>
                        <div class="name">
                            单位类别
                        </div>
                        <div class="input">
                            <select name="" id="" v-model="params.comComclass"></select>
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
                                v-model="params.comAddressSheng">
                        </div>
                    </li>
                     <li>
                        <div class="name" >
                            单位所在地(县)
                        </div>
                        <div class="input required">
                            <input type="text" v-model="params.comAddressXian" >
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
                            <select name="" id="" v-model="params.comRegtype"></select>
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
                            <input type="text" v-model="params.comRegaddrDi">
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
                            <select name="" id="" v-model="params.comSubrel" ></select>
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
                            <input type="text" v-model="params.comIndustrycount">
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
                            <input type="text" v-model="params.comAddressDi">
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
                })
            }
            console.log(params)
        })
        const params = reactive({
            bussiness: new Array(3).fill(''),   //主要业务活动
            comAddress: '',                     //所在地单位所在地地址（街）【所在地详细地址】
            comAddressDi: '',                    //单位所在地地址（地）
            comAddressJie: '',                  //单位所在地位于-街道办事处
            comAddressShe: '',                   //单位所在地位于-社区（居委会）
            comAddressSheng: '',                //单位所在地地址（省）
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
            comRegaddrDi: '',                   //注册地区地
            comRegaddrJie: '',                  //注册地区街道办
            comRegaddrShe: '',                  //注册地区社区居委会
            comRegaddrSheng: '',                //注册地区省
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
            params.jude = '1'
            saveEnterprise(params).then((res)=>{
               if(res.code === 20000){
                   router.go(-1)
               }else{
                   alert("保存失败，请确保填写完全必填项")
               }
            },() => {
                alert("保存失败，请确保填写完全必填项")
            })
        }
        const bgimg = ref(bg)
        if(params.image){
            bgimg.value = params.image
        }
        delete params.image
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