<template>
    <div class="login_cfg">
        <ul>
            <li>
                <div class="name">允许登入时密码出错次数(默认为20次,同一IP)</div>
                <div class="content">
                    <input type="number" 
                            v-model="cfg.wrong_num"
                            v-if="is_setting">
                    <span v-else>{{cfg.wrong_num}}</span>
                </div>
            </li>
             <li>
                <div class="name">禁止登入时间(默认60)分</div>
                <div class="content">
                    <input type="number" 
                            v-model="cfg.prohibit_login_time"
                            v-if="is_setting">
                    <span v-else>{{cfg.prohibit_login_time}}</span>
                    <span class="red">设定此值需要重启动应用程序 </span>
                </div>
             </li>
              <li>
                <div class="name">禁止登入IP列表(每行一个IP,IP地址段以xxx.xxx.xxx.xxx)</div>
                <div class="content">
                    <textarea  v-model="cfg.prohibit_ip_list"
                            v-if="is_setting">
                    </textarea>
                    <span v-else>{{cfg.prohibit_ip_list}}</span>
                </div>
             </li>
        </ul>
    </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    props: {
        is_setting: {
            required: true,
            type: Boolean
        }
    },
    setup(){
        const cfg = reactive({
            wrong_num: '20',
            prohibit_login_time: '60',
            prohibit_ip_list: ''
        })
        return {cfg}
    }
}
</script>

<style lang="scss" scoped>
    .login_cfg{
        ul{
            li{
                overflow: hidden;
                display: flex;
                text-align: left;
                font-size: 14px;
                line-height: 30px;
                margin-bottom: 3px;
                .name,.content{
                    width: 50%;
                    padding-left: 5px;
                    box-sizing: border-box;
                }
                .name{
                    background-color: rgb(202,232,242);
                }
                .content{
                    background-color: rgb(233,242,247);
                    .red{
                        color: red;
                        padding-left: 5px;
                    }
                    input{
                        width: 350px;
                    }
                    select{
                        width: 120px;
                    }
                    textarea{
                        width: 350px;
                    }
                }
            }
        }
    }
</style>