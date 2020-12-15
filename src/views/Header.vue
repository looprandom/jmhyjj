<template>
    <div class="header">
        <div class="top_bg"></div>
        <div class="set">
            <div><img src="../assets/image/tuichu.gif" alt="">&nbsp;<a href="#">安全退出</a></div>
            <div><img src="../assets/image/password.gif" alt="">&nbsp;<a href="#">修改密码</a></div>
            <div><img src="../assets/image/H_on_Show.gif" alt="">&nbsp;<a href="#">隐藏/展开</a></div>
        </div>   
        <div class="wel">
            <div class="time">2020年12月15日&nbsp;&nbsp;星期二&nbsp;&nbsp;22:49:57</div>
            <div>欢迎登录系统！</div>
            <div><img src="../assets/image/xian.gif" alt=""></div>
            <div><img src="../assets/image/sound_16x16.gif" alt=""></div>
            <div class="help">
                <img src="../assets/image/office.gif" alt="">
                使用帮助
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'  
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
    .header{
        .top_bg{
            height: 125px;
            background: url('../assets/image/title_jiangmen.png') 13px no-repeat,url('../assets/image/top_blc_.jpg') no-repeat;
        }
        .set{
            height: 29px;
            background-color: rgb(71,177,223);
            div{
                img{
                    vertical-align: middle; //文字和图片中线对齐?
                    width: 16px;
                    line-height: 29px;
                };
                float: right;
                line-height: 29px;
                font-size: 12px;
                color: black;
                margin-right: 15px;

            }
        }
        .wel{
            height: 26px;
            background-color: rgb(218,237,254);
            font-size: 12px;
            line-height: 26px;
            font-weight: 300;
            //解决盒子塌陷
            overflow: hidden;
            div{
                float: left;
                margin: 0 8px;
                img{
                    vertical-align: middle;
                }
            }
            div:last-child{
                float: right;
                img{
                    vertical-align: middle;
                    margin-right: 2px;
                }
            }
        }
    }
</style>