<template>
<div class="warp">
    <div class="login">
        <div class="from">
            <label for="">用户名：<input type="text" v-model="username"></label>
            <label for="">密码：&nbsp;&nbsp;&nbsp;<input type="password" v-model="password"></label>
            <label for="">
                验证码：<input type="text" style="width:150px;" v-model="captcha">
                <img :src="captchaImg" alt="" class="captcha" @click="cpa_clk">
            </label>
            <div class="btn1" @click="login"></div>
            <div class="btn2" @click="clear"></div>    
        </div>
        <div class="copyright">   
            <p>版权所有：江门市海洋与渔业局      技术支持：广东蓝图信息技术有限公司</p>
            <p>推荐宽屏显示器（分辩率：1280*1024以上），浏览器：chrome</p>
        </div>
    </div>
</div>       

</template>

<script>
import _getCap from '../api/login/getCap'
import _login from '../api/login/login'
export default {
    name: 'Login',
   data(){
       return{
           captchaImg:'',
           captchaKey:'',
           username: '',
           password: '',
           captcha: ''
       }
   },
   methods:{
       getCap(){
           _getCap().then((res)=>{
               if(res.status == 'success'){
                   this.captchaImg = res.data.base64Img
                   this.captchaKey = res.data.captchaKey
               }else{
                   alert('获取验证码失败')
               }
           })
       },
       login(){
            const username = this.username
            const password = this.password
            const captcha = this.captcha
            if(!(username&&password&&captcha)) {
                alert('请完成表单信息!')
                return
            }
           _login(this.username,this.password,this.captchaKey,this.captcha).then((res)=>{
              if(res.success){
                    localStorage.setItem('token',res.data.token)
                    this.$router.go(-1)
              }else{
                  alert(res.data)
              }
           })
       },
       cpa_clk(){
           this.getCap()
       },
       clear(){
           this.username = '',
           this.password = '',
           this.captcha = ''
       }
   },
   created(){
        this.getCap()
   } 
  
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
    .login{
        // position: relative;
        //width: 1350px;
        margin: 0 auto;
        height: 722px;
        background:no-repeat center/80%  100% url("../assets/image/login/login.png")  fixed,url("../assets/image/login/bg.gif");
        .from{
            position: absolute;
            top: 294px;
            left: 965px;
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