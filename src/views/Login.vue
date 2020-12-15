<template>
  <div class="login">
      <div class="from">
          <label for="">用户名：<input type="text"></label><br><br>
          <label for="">密码：&nbsp;&nbsp;&nbsp;<input type="password"></label><br><br>
          <label for="">验证码：<input type="text" style="width:150px;"></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="登录">
          <input type="button" value="重置">
      </div>
      <div class="copyright">   
          <p>版权所有：江门市海洋与渔业局      技术支持：广东蓝图信息技术有限公司</p>
          <p>推荐宽屏显示器（分辩率：1280*1024以上），浏览器：chrome</p>
      </div>
  </div>
</template>

<script>


export default {
  name: 'Login'

}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
    .login{
        position: relative;
        width: 1350px;
        margin: 0 auto;
        height: 722px;
        background: no-repeat center/80%  750px url("../assets/image/login.png")  fixed ;
        .from{
            position: absolute;
            top: 294px;
            left: 898px;
            label{
                line-height: 20px;
                font-size: 14px;
                color: #434242;
                text-align: left;
                input{
                    height: 24px;
                    width: 200px;
                    line-height: 24px;
                    border: 1px #3a6a76 solid;
                    overflow: hidden;
                }
            }
            input[type=button]{
                width: 90px;
                line-height: 35px;
                border-radius: 3px;
                margin: 0 15px;
                border-width: 0px;
                font-size: 14px;
                color: #434242;
                text-align: center;
                color: white;
                background-color: skyblue;
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