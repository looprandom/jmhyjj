<template> 
    <div class="check_file">
         <div class="hed">
             <router-link to="/home/check/file/generate_file_log"><span>生成文件日志</span></router-link>
            <router-link to="/home/check/file/export_packet_log"><span>导出数据包日志</span></router-link>  
             <router-link to="/home/check/file/import_file_log"><span>导出文件日志</span></router-link>    
        </div>
        <div class="line"></div>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .check_file{
        background-color: rgb(225,243,255);
        padding: 15px;
        max-height: 100vh;
        min-height: 80vh;
        .hed{
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
        .router-link-active{
            color: red;
        } 
    }
</style>