<template>
    <div class="upload_file_cfg">
        <ul>
            <li>
                <div class="name">上传文件路径 默认为/Manager/Public/</div>
                <div class="content">
                    <input type="text" 
                            v-model="cfg.path"
                            v-if="is_setting">
                    <span v-else>{{cfg.path}}</span>
                </div>
            </li>
             <li>
                <div class="name">上传图片缩图高度 默认120px</div>
                <div class="content">
                    <input type="number" 
                            v-model="cfg.imgH"
                            v-if="is_setting">
                    <span v-else>{{cfg.imgH + 'px'}}</span>
                </div>
             </li>
              <li>
                <div class="name">上传图片缩图宽度 默认 180px</div>
                <div class="content">
                    <input type="number" 
                            v-model="cfg.imgW"
                            v-if="is_setting">
                    <span v-else>{{cfg.imgW + 'px'}}</span>
                </div>
             </li>
              <li>
                <div class="name">上传文件扩展名 多个以,号分开</div>
                <div class="content">
                    <input type="text" 
                            v-model="cfg.extent"
                            v-if="is_setting">
                    <span v-else>{{cfg.extent}}</span>
                </div>
             </li>
              <li>
                <div class="name">上传文件大小(Kb为单位)</div>
                <div class="content">
                    <input type="number" 
                            v-model="cfg.size"
                            v-if="is_setting">
                    <span v-else>{{cfg.size + 'Kb'}}</span>
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
            path: '~/Manager/Public/',
            imgH: '120',
            imgW: '180', 
            extent: 'zip,rar,doc,jpg,png,gif,bmp,swf',
            size: '1024',
        })
        return {cfg}
    }
}
</script>

<style lang="scss" scoped>
    .upload_file_cfg{
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