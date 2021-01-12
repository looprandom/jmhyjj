<template>
    <div class="new_detail">
       <h3>推进海洋经济综合试验区建设 发展临港经济和海洋航运 加强海洋资源开发</h3>
       <div class="per">
           <span>发布人：管理员&nbsp;&nbsp;&nbsp;&nbsp;</span>
           <span>更新时间：2015-02-10&nbsp;&nbsp;&nbsp;&nbsp;</span>
           <span @click="change_font">{{big_font ? '大' : '小'}}字体</span>
       </div>
       <div class="line"></div>
       <div class="article" :class="big_font ? 'big_font' : 'small_font'">
           <p>广东省省长朱小丹在该省十二届人大第三次会议上作政府工作报告时指出,广东将推进</p>
           <p>朱小丹在报告中说,2014年广东省贯彻落实国家“一带一路”战略,对争当21世纪海上丝21世纪海上丝绸之路建设排头兵作出规划部署,成功举办首届广东21世纪海上丝绸之路2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”</p>
           <p>朱小丹在报告中说,2014年广东省贯彻落实国家“一带一路”战略,对争当21世纪海上丝21世纪海上丝绸之路建设排头兵作出规划部署,成功举办首届广东21世纪海上丝绸之路</p>
           <p>朱小丹在报告中说,2014年广东省贯彻落实国家“一带一路”战略,对争当21世纪海上丝21世纪海上丝绸之路建设排头兵作出规划部署,成功举办首届广东21世纪海上丝绸之路</p>
           <p>朱小丹在报告中说,2014年广东省贯彻落实国家“一带一路”战2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”略,对争当21世纪海上丝21世纪海上丝绸之路建设排头兵作出规划部署,成功举办首届广东21世纪海上丝绸之路</p>
           <p>朱小丹在报告中说,2014年广东省贯彻落实国家“一带一路”战略,对争当21世纪海上丝21世纪海上丝绸之路建设排头兵作出规划部署,成功举办首届广东21世纪海上丝绸之路</p>
           <p>朱小丹在报告中说,2014年广东省贯彻落实国家“一带一路”战2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”2014年广东省贯彻落实国家“一带一路”略,对争当21世纪海上丝21世纪海上丝绸之路建设排头兵作出规划部署,成功举办首届广东21世纪海上丝绸之路</p>
           <p>朱小丹在报告中说,2014年广东省贯彻落实国家“一带一路”战略,对争当21世纪海上丝21世纪海上丝绸之路建设排头兵作出规划部署,成功举办首届广东21世纪海上丝绸之路</p>
           <p>朱小丹在报告中说,2014年广东省贯彻落实国家“一带一路”战略,对争当21世纪海上丝21世纪海上丝绸之路建设排头兵作出规划部署,成功举办首届广东21世纪海上丝绸之路</p>
       </div>
       <div class="footer">
           <span>来源：中国海洋报&nbsp;&nbsp;&nbsp;&nbsp;</span>
           <span>作者：网络&nbsp;&nbsp;&nbsp;&nbsp;</span>
           <span>发布时间：2015-02-12 14:14:14</span>
       </div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        const big_font = ref(false)
        const change_font = () => {
            big_font.value = !big_font.value
        }
        return {big_font,change_font}
    }
}
</script>

<style lang="scss" scoped>
    .new_detail{
        background-color: rgb(251,249,250);
        padding: 15px;
        max-height: 100vh;
        min-height: 80vh;
        h3{
            margin: 16px;
            margin-bottom: 30px;
            font-size: 19px;
            font-weight: 700;
            text-align: center;
        }
        .per{
            text-align: center;
            font-size: 14px;
            span:nth-child(3):hover{
                cursor: pointer;
                color: red;
            }
        }
        .line{
            border-bottom: 2px solid #ccc;
            margin: 5px;
            margin-bottom: 30px;
        }
        .article{
            background-color: #fff;
            height: 400px;
            overflow: auto;
            &.big_font{
                font-size: 16px;
            }
            &.small_font{
                font-size: 14px;
            }
            p{
                text-align: left;
                letter-spacing: 1px;
                line-height: 28px;
                text-indent: 2em;
                font-weight: 500;
            }
        }
        .footer{
            text-align: left;
            font-size: 14px;
            margin: 20px;
        }
    }
</style>