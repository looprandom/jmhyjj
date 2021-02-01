<template>
    <div class="sys_env_config">
        <div class="hed">
            <img src="../assets/image/sysconfig/config.gif" alt="">
            <span>系统环境配置</span>
        </div>
        <div class="mid">
            <span>目前操作功能：环境配置</span>
            <span @click="is_setting = !is_setting">
                <img :src="img">{{is_setting ?'返回' : '修改环境配置'}}
            </span>
        </div>
        <div class="nav">
            <router-link to="/home/sysconfig/sys_env_config/sys_configuation"><span>系统配置</span></router-link>
            <router-link to="/home/sysconfig/sys_env_config/upload_file_cfg"><span>上传文件设置</span></router-link>  
            <router-link to="/home/sysconfig/sys_env_config/login_cfg"><span>登入安全设置</span></router-link>    
        </div>
         <div class="line"></div>
         <div class="view">
             <router-view :is_setting="is_setting"></router-view>
         </div>
    </div>
</template>

<script>
import {ref,computed} from 'vue'
import img1 from '../assets/image/sysconfig/Edit.gif'
import img2 from '../assets/image/sysconfig/back.gif'
export default {
    setup(){
        const is_setting = ref(false)
        const img = computed(() => {
            return is_setting.value ? img2 : img1
        })
        return {
            is_setting,
            img
        }
    }
}
</script>

<style lang="scss" scoped>
   .sys_env_config{
       .hed{
            line-height: 32px;
            font-size: 14px;
            font-weight: 600;
            // width: 100%;
            text-align: left;
            img{
                margin: 0 6px;
            }
            border-bottom: 3px solid black;
       }
       .mid{
           height: 32px;
           line-height: 32px;
            font-size: 12px;
            width: 100%;
            text-align: left;
            overflow: hidden;
            span:first-child{
                padding-left: 5px;
                float: left;
                color: rgb(128,128,128);
            }
            span:last-child{
                float: right;
                vertical-align: baseline;
                padding-right: 7px;
                cursor: pointer;
                img{
                    margin: 0 3px;
                }
                &:hover{
                    text-decoration: underline;
                }
            }
       }
        .nav{
            text-align: left;
            font-size: 13px;
            font-weight: 600;
            a{
                margin: 0 4px;
                color: black;
                &:hover{
                    text-decoration: underline;
                    color: red;
                }
            }
            .router-link-active {
                color: red;
            }
        }
        .line{
               width: 100%;
               height: 0;
               border-top: 2px dotted #000;
               margin-top: 10px;
               margin-bottom: 10px;
        }
        .view{
            padding: 15px;
        }
    }   
</style>