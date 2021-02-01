<template>
  <div class="sysconfig">
    <div class="nav-aside" v-if="show_nav">
        <ul>
            <li>
                <div @click="change_son(0)" class="hed">报表管理</div>
                <div class="son" v-if="son[0]">
                    <div><span class="iconfont icon-yousanjiao2"></span>运算公式</div>
                    <div><span class="iconfont icon-yousanjiao2"></span>流程定义</div>
                    <div><span class="iconfont icon-yousanjiao2"></span>文件导入导出</div>
                    <div><span class="iconfont icon-yousanjiao2"></span>手动生成企业报表</div>
                    <div><span class="iconfont icon-yousanjiao2"></span>报表管理</div>
                    <div><span class="iconfont icon-yousanjiao2"></span>单位管理</div>
                    <div><span class="iconfont icon-yousanjiao2"></span>GDP管理</div>
                </div>
            </li>
             <li>
                <div @click="change_son(1)" class="hed">文档资料发布</div>
                <div class="son" v-if="son[1]">
                     <router-link to="/home/sysconfig/new_config/news"><div><span class="iconfont icon-yousanjiao2"></span>新闻动态</div></router-link>
                    <router-link to="/home/sysconfig/new_config/industry"><div><span class="iconfont icon-yousanjiao2"></span>行业动态</div></router-link>
                </div>
            </li>
             <li>
                <div @click="change_son(2)" class="hed">系统应用</div>
               <div class="son" v-if="son[2]">
                     <div><span class="iconfont icon-yousanjiao2"></span>应用列表管理</div>
                    <div><span class="iconfont icon-yousanjiao2"></span>应用模块管理</div>
                    <div><span class="iconfont icon-yousanjiao2"></span>部门资料管理</div>
                    <div><span class="iconfont icon-yousanjiao2"></span>角色资料管理</div>
                    <div><span class="iconfont icon-yousanjiao2"></span>用户资料管理</div>
                    <div><span class="iconfont icon-yousanjiao2"></span>应用字段设定</div>
                    <div><span class="iconfont icon-yousanjiao2"></span>查询方案定义</div>
                </div>
            </li>
             <li>
                <div @click="change_son(3)" class="hed">系统维护</div>
               <div class="son" v-if="son[3]">
                     <router-link to="/home/sysconfig/sys_env_config"><div><span class="iconfont icon-yousanjiao2"></span>系统环境配置</div></router-link>
                    <div><span class="iconfont icon-yousanjiao2"></span>系统菜单</div>
                </div>
            </li>
        </ul>
    </div>
    <div class="close"> 
        <img src="../assets/image/enterprise/close.gif"   
            @click="toggle_show">
    </div>
    <router-view class="body"></router-view>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup() {
         //侧边栏关闭逻辑
        const show_nav = ref(true)
        const toggle_show = ()=>{
            show_nav.value = !show_nav.value
        }
        //侧栏导航子目录关闭逻辑
        const son = ref(new Array(4).fill(false))
        const change_son = (index) => son.value[index] = !son.value[index]
        return {
            show_nav,
            toggle_show,
            son,
            change_son
        }   
    }
}
</script>

<style lang="scss" scoped>
     .sysconfig{
        padding-top: 5px;
        display: flex;
        min-height: 500px;
        .nav-aside{   
            width: 180px;
            max-height: 500px;
            overflow: auto;
            background-color: rgb(154,173,205);
            padding: 8px;
            font-size: 14px;
            text-align: left;
           ul{
               li{
                   margin-bottom: 10px;
                   .hed{
                       background-color: rgb(108,133,177);
                       line-height: 30px;
                       border-radius: 8px 8px 0 0;
                       color: #fff;
                       padding-left: 30px;
                       cursor: pointer;
                   }
                  .son{
                      a{
                          color: black;
                      }
                       div{
                            line-height: 30px;
                            background-color: #fff;
                            cursor: pointer;
                            &:hover{
                                background-color: #ADC8E9;
                            }
                        }
                        span{
                            font-size: 5px;
                            padding: 0 8px;
                        }
                  }
               }
           }
        }
       .close{
           position: relative;
           width: 15px;
           img{
                cursor: pointer;
                position: absolute;
                top: 50%;
                left: 1px;
                transform: translateY(-50%);
                &:hover{
                    border: 0.3px solid rgb(131, 7, 131);
                    border-radius: 7px;
                }
           }
       }
       .body{
           flex-grow: 1;
        //    height: 100%; ??
           background-color: #fff;
       }
     }
</style>