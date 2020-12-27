<template>
<div class="login">
    <div class="from">
        <label for="">用户名：<input type="text" v-model="loginMessage.username"></label>
        <label for="">密码：&nbsp;&nbsp;&nbsp;<input type="password" v-model="loginMessage.password"></label>
        <label for="">
            验证码：<input type="text" style="width:150px;" v-model="loginMessage.captcha">
            <img :src="captchaImg" alt="" class="captcha" @click="getCap">
        </label>
        <div class="btn1" @click="login"></div>
        <div class="btn2" @click="clear"></div>    
    </div>
    <div class="copyright">   
        <p>版权所有：江门市海洋与渔业局      技术支持：广东蓝图信息技术有限公司</p>
        <p>推荐宽屏显示器（分辩率：1280*1024以上），浏览器：chrome</p>
    </div>
</div>
</template>

<script>
import _getCap from '../api/login/getCap'
import _login from '../api/login/login'
import {ref,reactive,onMounted} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
export default {
    name: 'Login',
   setup(){
       const router = useRouter()
       const store = useStore()
       const loginMessage = reactive({
           username:'',
           password:'',
           captcha:'',
           captchaKey:''
       })
       //登录逻辑
       const login = ()=>{
            const username = loginMessage.username
            const password = loginMessage.password
            const captcha = loginMessage.captcha
            const captchaKey = loginMessage.captchaKey
            if(!(username&&password&&captcha)) {
                alert('请完成表单信息!')
                return
            }
           _login(username,password,captchaKey,captcha).then((res)=>{
              if(res.code == 20000){
                    localStorage.setItem('token',res.data.token)
                    store.commit('change_role',res.data.role)
                    store.commit('change_permission',res.data.permission)
                    store.commit('change_token',res.data.token)
                    router.go(-1)
              }else{
                  alert(res.errMsg)
              }
           })
       }
       //重置表单
       const clear = ()=>{
           loginMessage.username = '',
           loginMessage.password = '',
           loginMessage.captcha = ''
       }
       //获取验证码
       const captchaImg = ref('')
       const getCap = ()=>{
            _getCap().then((res)=>{
               if(res.code == 20000){
                   captchaImg.value = res.data.captchaInformation.base64Img
                   loginMessage.captchaKey = res.data.captchaInformation.captchaKey
               }else{
                   alert('获取验证码失败')
               }
           })
       }
       onMounted(()=>{
           getCap()
       }) 
       return{
           loginMessage,
           captchaImg,
           clear,
           login,
           getCap
       }
   } 
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
    .login{
        position: relative;
        //width: 1350px;
        // margin: 0 auto;
        height: 720px;
        background: url("../assets/image/login/login.png") no-repeat center top/67%,url("../assets/image/login/bg.gif") repeat left/contain;;
        // background:no-repeat center/80%  wi url("../assets/image/login/login.png"),url("../assets/image/login/bg.gif");
        .from{
            position: absolute;
            top: 296px;
            left: 941px;
            label{
                line-height: 20px;
                font-size: 13px;
                font-weight: 300;
                color: #434242;
                text-align: left;
                display: block;
                margin-bottom: 15px;
                input{
                    height: 24px;
                    width: 200px;
                    line-height: 24px;
                    border: 1px #3a6a76 solid;
                    overflow: hidden;
                }
                .captcha{
                    width: 70px;
                    height: 24px;
                    margin-left: 5px;
                    vertical-align: middle;
                }
            }
            .btn1,.btn2{
                display: inline-block;
                width: 90px;
                height: 38px;
                margin: 0 12px;
                cursor: pointer; //hand是ie专有
            }
            .btn1{
                background: url("../assets/image/login/login_btn01.png");
                margin-left: 33px;
            }
            .btn2{
                background: url("../assets/image/login/login_btn02.png");
            }
            .btn1:hover{
                background-image: url("../assets/image/login/login_btnon01.png");
            }
            .btn2:hover{
                background-image: url("../assets/image/login/login_btnon02.png");
            }
        }
        .copyright{
            position: absolute;
            width: 100%;  //position后无特别指定宽度由内容撑开
            bottom: 30px;
            p{
                font-size: 12px;
                color: black;
                line-height: 18px;
                padding-bottom: 2px;
                text-align: center;
                width: 700px;
                margin: 0 auto;
            }
        }
    }
</style>