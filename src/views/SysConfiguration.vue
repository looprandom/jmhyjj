<template>
    <div class="sys_configuration">
        <ul>
            <li>
                <div class="name">系统名称</div>
                <div class="content">
                    <input type="text" 
                            v-model="cfg.name"
                            v-if="is_setting">
                    <span v-else>{{cfg.name}}</span>
                </div>
            </li>
             <li>
                <div class="name">系统版本</div>
                <div class="content">
                    <input type="text" 
                            v-model="cfg.edition"
                            v-if="is_setting">
                    <span v-else>{{cfg.edition}}</span>
                </div>
            </li>
             <li>
                <div class="name">是否自动检测新版本 默认为true</div>
                <div class="content">
                    <div>
                        <select name="" id="" v-if="is_setting" v-model="cfg.test_edition">
                            <option value="true">True</option>
                            <option value="false">False</option>
                        </select>
                        <span v-else>{{cfg.test_edition == 'true' ? 'True' : 'False'}}</span>
                    </div>
                </div>
            </li>
             <li>
                <div class="name">是否启用用户访问日志 默认为true</div>
                <div class="content">
                    <select name="" id="" v-if="is_setting" v-model="cfg.access_log">
                            <option value="true">True</option>
                            <option value="false">False</option>
                    </select>
                    <span v-else>{{cfg.access_log == 'true' ? 'True' : 'False'}}</span>
                    <span class="red">(此配置为"系统使用报告"提供源数据)</span>
                </div>
            </li>
             <li>
                <div class="name">是否启用新增数据日志 默认为true</div>
                <div class="content">
                    <select name="" id="" v-if="is_setting" v-model="cfg.new_data_log">
                            <option value="true">True</option>
                            <option value="false">False</option>
                    </select>
                    <span v-else>{{cfg.new_data_log == 'true' ? 'True' : 'False'}}</span>
                    <span class="red">(此配置为"系统使用报告"-"用户新增数据记录"提供源数据)</span>
                </div>
            </li>
             <li>
                <div class="name">是否启用删除数据日志 默认为true</div>
                <div class="content">
                     <select name="" id="" v-if="is_setting" v-model="cfg.dele_data_log">
                            <option value="true">True</option>
                            <option value="false">False</option>
                    </select>
                    <span v-else>{{cfg.dele_data_log == 'true' ? 'True' : 'False'}}</span>
                    <span class="red">(此配置为"系统使用报告"-"用户删除数据记录"提供源数据)</span>
                </div>
            </li>
            <li>
                <div class="name">是否启用更新数据日志 默认为true</div>
                <div class="content">
                   <select name="" id="" v-if="is_setting" v-model="cfg.update_data_log">
                            <option value="true">True</option>
                            <option value="false">False</option>
                    </select>
                    <span v-else>{{cfg.update_data_log == 'true' ? 'True' : 'False'}}</span>
                    <span class="red">(此配置为"系统使用报告"-"用户更新数据记录"提供源数据)</span>
                </div>
            </li>
             <li>
                <div class="name">是否允许GZip压缩输出网页 默认false</div>
                <div class="content">
                   <select name="" id="" v-if="is_setting" v-model="cfg.gzip">
                            <option value="true">True</option>
                            <option value="false">False</option>
                    </select>
                    <span v-else>{{cfg.gzip == 'true' ? 'True' : 'False'}}</span>
                    <span class="red">使用此功能，可能导致Ajax远程读取数据无效!</span>
                </div>
            </li>
            <li>
                <div class="name">IP地址查询链接</div>
                <div class="content">
                     <input type="text" 
                            v-model="cfg.ip_addr"
                            v-if="is_setting">
                    <span v-else>{{cfg.ip_addr}}</span>
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
            name: 'ASP.NET权限管理系统(FrameWork)',
            edition: '1.0.8 ',
            test_edition: 'true', 
            access_log: 'false',
            new_data_log: 'false',
            dele_data_log: 'false',
            update_data_log: 'false',
            gzip: 'false',
            ip_addr: 'http://www.yahoo.cn/s?p={0}'
        })
        return {cfg}
    }
}
</script>

<style lang="scss" scoped>
    .sys_configuration{
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
                }
            }
        }
    }
</style>