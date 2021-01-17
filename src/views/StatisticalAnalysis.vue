<template>
    <div class="statistical_analysis">
        <div class="nav-aside" v-if="show_nav">
            <div class="title">统计分析</div>
            <div class="link">
                <div v-for="(item,index) of nav" :key="index">
                    <router-link :to="`/home/${item.path}`">
                        <img src="../assets/image/enterprise/morentu.gif" alt="">
                        {{item.name}}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="close"> 
            <img src="../assets/image/enterprise/close.gif"   
                @click="toggle_show">
        </div>
         <div class="body">
            <div class="hed">
             <router-link to="/404"><span>指标</span></router-link>
            <router-link to="/404"><span>年份</span></router-link>  
            </div>
             <div class="line"></div>
             <div class="main">
                 <div class="left" v-if="show_left">
                     <ul>
                            <li>
                                <span class="iconfont"
                                     :class="show_son[0] ?'icon-heshang':'icon-heshang1' " 
                                     @click="show_son[0] = !show_son[0]"></span>
                                <div class="tit">合计</div>
                                <div v-if="show_son[0]">
                                     <div class="son"><div class="l">----</div><div class="name">总产值</div></div>
                                    <div class="son"><div class="l">----</div><div class="name">增加值</div></div>
                                </div>
                            </li>
                            <li>
                                <span class="iconfont"
                                        :class="show_son[1] ?'icon-heshang':'icon-heshang1' "
                                        @click="show_son[1] = !show_son[1]"></span>
                                <div class="tit">海洋渔业</div>
                                <div v-if="show_son[1]">
                                    <div class="son"><div class="l">----</div><div class="name">海洋水产品</div></div>
                                    <div class="son"><div class="l">----</div><div class="name">海洋渔业服务业</div></div>
                                    <div class="son"><div class="l">----</div><div class="name">海洋水产品加工</div></div>
                                </div>
                            </li>
                            <li>
                                <span class="iconfont"
                                    :class="show_son[2] ?'icon-heshang':'icon-heshang1' "
                                        @click="show_son[2] = !show_son[2]"></span>
                                <div class="tit">海洋油气业</div>
                                <div v-if="show_son[2]">
                                    <div class="son"><div class="l">----</div><div class="name">原油</div></div>
                                    <div class="son"><div class="l">----</div><div class="name">天然气</div></div>
                                </div>
                            </li>
                            <li>
                                <span class="iconfont"
                                        :class="show_son[3] ?'icon-heshang':'icon-heshang1' "
                                        @click="show_son[3] = !show_son[3]"></span>
                                <div class="tit" >海洋矿业</div>
                               <div v-if="show_son[3]">
                                    <div class="son"><div class="l">----</div><div class="name">金属沙矿</div></div>
                                    <div class="son"><div class="l">----</div><div class="name">非金属矿产量</div></div>
                               </div>
                            </li>
                            <li>
                                <span class="iconfont"
                                        :class="show_son[4] ?'icon-heshang':'icon-heshang1' "
                                        @click="show_son[4] = !show_son[4]"></span>
                                <div class="tit">海洋盐业</div>
                                <div v-if="show_son[4]">
                                    <div class="son"><div class="l">----</div><div class="name">海盐产量</div></div>
                                    <div class="son"><div class="l">----</div><div class="name">盐田总面积</div></div>
                                </div>
                            </li>
                             <li>
                                <span class="iconfont"
                                        :class="show_son[4] ?'icon-heshang':'icon-heshang1' "
                                        @click="show_son[4] = !show_son[4]"></span>
                                <div class="tit">海洋盐业</div>
                                <div v-if="show_son[4]">
                                    <div class="son"><div class="l">----</div><div class="name">海盐产量</div></div>
                                    <div class="son"><div class="l">----</div><div class="name">盐田总面积</div></div>
                                </div>
                            </li>
                             <li>
                                <span class="iconfont"
                                        :class="show_son[4] ?'icon-heshang':'icon-heshang1' "
                                        @click="show_son[4] = !show_son[4]"></span>
                                <div class="tit">海洋盐业</div>
                                <div v-if="show_son[4]">
                                    <div class="son"><div class="l">----</div><div class="name">海盐产量</div></div>
                                    <div class="son"><div class="l">----</div><div class="name">盐田总面积</div></div>
                                </div>
                            </li>
                             <li>
                                <span class="iconfont"
                                        :class="show_son[4] ?'icon-heshang':'icon-heshang1' "
                                        @click="show_son[4] = !show_son[4]"></span>
                                <div class="tit">海洋盐业</div>
                                <div v-if="show_son[4]">
                                    <div class="son"><div class="l">----</div><div class="name">海盐产量</div></div>
                                    <div class="son"><div class="l">----</div><div class="name">盐田总面积</div></div>
                                </div>
                            </li>
                     </ul>
                 </div>
                  <div class="close"> 
                    <img src="../assets/image/enterprise/close.gif"   
                        @click="show_left = !show_left">
                </div>
                <div class="show">
                    <div class="params">    
                        <span class="title">查询区</span>
                        <ul>
                            <li>
                                <div class="name">展示年份</div>
                                <div class="content">
                                    <label>
                                        <input type="checkbox" checked>2013
                                    </label>
                                    <label>
                                        <input type="checkbox" checked>2012
                                    </label>
                                    <label>
                                        <input type="checkbox" checked>2011
                                    </label>
                                    <label>
                                        <input type="checkbox" checked>2010
                                    </label>
                                    <label>
                                        <input type="checkbox" checked>2009
                                    </label>
                                    <label>
                                        <input type="checkbox" checked>2008
                                    </label>
                                    <label>
                                        <input type="checkbox" checked>2007
                                    </label>
                                    <label>
                                        <input type="checkbox" checked>2006
                                    </label>
                                    <label>
                                        <input type="checkbox" checked>2005
                                    </label>
                                    <label>
                                        <input type="checkbox" checked>2004
                                    </label>
                                    <label>
                                        <input type="checkbox" checked>2003
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div class="name">所属地区</div>
                                <div class="content">
                                    <select name="" id="">
                                        <option value="江门市">江门市</option>
                                        <option value="台山市">台山市</option>
                                        <option value="鹤山市">鹤山市</option>
                                        <option value="开平市">开平市</option>
                                        <option value="恩平市">恩平市</option>
                                        <option value="新会区">新会区</option>
                                        <option value="蓬江区">蓬江区</option>
                                        <option value="江海区">江海区</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="chart">

                    </div>
                </div>
             </div>
        </div>
    </div>
</template>

<script>
const nav = [
    {id: 1,name: '海洋产业基本情况',path: '/404'},
    {id: 2,name: '海洋产业基本情况',path: '/404'},
    {id: 3,name: '海洋产业基本情况',path: '/404'},
    {id: 4,name: '海洋产业基本情况',path: '/404'},
    {id: 5,name: '海洋产业基本情况',path: '/404'},
    {id: 6,name: '海洋产业基本情况',path: '/404'},
    {id: 7,name: '海洋产业基本情况',path: '/404'},
    {id: 8,name: '海洋产业基本情况',path: '/404'},
    {id: 9,name: '海洋产业基本情况',path: '/404'},
    {id: 10,name: '海洋产业基本情况',path: '/404'},
    {id: 11,name: '海洋产业基本情况',path: '/404'},
    {id: 12,name: '海洋产业基本情况',path: '/404'},
    {id: 13,name: '海洋产业基本情况',path: '/404'},
    {id: 14,name: '海洋产业基本情况',path: '/404'},
    
]
var echarts = require('echarts');
const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
                lineStyle: {
                    type: 'dashed'
                },
                data: [
                    [{type: 'min'}, {type: 'max'}]
                ]
            }
        },
        {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name: '谷歌',
            type: 'bar',
            stack: '搜索引擎',
            data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
            name: '必应',
            type: 'bar',
            stack: '搜索引擎',
            data: [60, 72, 71, 74, 190, 130, 110]
        },
        {
            name: '其他',
            type: 'bar',
            stack: '搜索引擎',
            data: [62, 82, 91, 84, 109, 110, 120]
        }
    ]
}
function init_chart(){
    // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('chart'))
  // 绘制图表
  myChart.setOption(option)
  //   setTimeout(()=>{
  //     myChart.resize()
  // },1000)
}
import {ref,onMounted} from 'vue'
export default {
    setup() {
        //初始化图表
        onMounted(()=>{
        document.getElementById('chart').style.height = '225px'
        setTimeout(()=>{
            //页面加载顺序问题？
            init_chart()
        },1000)
        })
         //侧边栏关闭逻辑
        const show_nav = ref(true)
        const toggle_show = ()=>{
            show_nav.value = !show_nav.value
        }
        const show_son = ref(new Array(5).fill(true))
        const show_left = ref(true)
        return {
            show_nav,
            toggle_show,
            nav,
            show_son,
            show_left
        }   
    }
}
</script>
<style lang="scss" scoped>
    .statistical_analysis{
         padding-top: 5px;
        display: flex;
        min-height: 610px;
        max-height: 610px;
        .nav-aside{   
            width: 210px;
            height: 100%;
            height: 608px;
            background-color: rgb(225,243,255);
            display: flex;
            flex-direction: column;
            .title{
                background: url("../assets/image/enterprise/banquan.gif");
                margin-top: 2px;
                color: blue;
                font-size: 13px;
                font-weight: 600;
                text-align: left;
                line-height: 25px;
                text-align: center;
            }
            .link{
                flex-grow: 1;
                overflow: auto;
                div{
                    width: 170px;
                    line-height: 45px;
                    background-color: rgb(204,237,254);
                    margin: 6px auto;
                    text-align: center;
                    font-size: 12px;
                    overflow: hidden; //解决外边距重叠
                    border: 1px solid #fff;
                    a{
                        color: black;
                    }
                    img{
                        vertical-align: middle;
                        width: 35px;
                        margin: 5px auto;
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
            background-color: rgb(225,243,255);
            padding: 15px;
            display: flex;
            flex-direction: column;
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
            .main{
                flex-grow: 1;
                overflow: hidden;
                display: flex;
                //使用浮动去bug
                .left{
                    overflow: auto;
                    float: left;
                    width: 210px;
                    height: 100%;
                    background-color: rgb(228,228,228);
                    text-align: left;
                    padding: 17px;
                    box-sizing: border-box;
                    font-size: 14px;
                    ul{
                        li{
                            padding-left:  15px;
                            border-left: 1px dashed rgb(9, 9, 9);
                            position: relative;
                            padding-bottom: 21px;
                            line-height: 20px;
                            span{
                                font-size: 12px;
                                cursor: pointer;
                                font-weight: 600;              
                                position: absolute;
                                top: 0px;
                                left: -7px;
                                background-color: rgb(228,228,228);
                                vertical-align: baseline;
                                &.icon-heshang1{
                                    font-size: 13px;
                                    font-weight: 900;
                                }
                            }
                            .tit{
                                cursor: pointer;
                                 &:hover{
                                        background-color: rgb(118,208,255);
                                }
                            }
                            .son{
                                padding-top: 9px;
                                border-left: 1px dashed rgb(9, 9, 9);
                                overflow: hidden;
                                .l{
                                    color:  rgba(9, 9, 9,0.5);
                                    float: left;
                                }
                                .name{
                                    cursor: pointer;
                                    float: left;
                                    &:hover{
                                        background-color: rgb(118,208,255);
                                    }
                                }
                            }
                        }
                        li:last-child{
                            border: none;
                        }
                    }
                }
                .close{
                    float: left;
                    height: 100%;
                }
                .show{
                    flex-grow: 1;
                    height: 100%;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    background-color: #fff;
                    .params{   
                        border: 3px solid rgb(148,212,255);
                        position: relative;
                        padding: 10px;
                        font-size: 13px;
                        text-align: left;
                        color: black;
                        font-weight: 500;
                        .title{
                            position: absolute;
                            top: -8px;
                            left: 35px;
                            font-size: 13px;
                            font-weight: 500;
                            background-color: #fff;
                        }
                        ul{
                            li{
                                overflow: hidden;
                                line-height: 28px;
                                margin-bottom: 4px;
                                display: flex;
                                .name{
                                    width: 50%;
                                    background-color: rgb(137,216,255);
                                    padding-left: 10px;
                                    box-sizing: border-box;
                                    display: flex;
                                    align-items: center; //垂直居中
                                }
                                .content{
                                    width: 50%;
                                    padding-left: 10px;
                                    box-sizing: border-box;
                                    background-color: rgb(219,243,255);
                                    label{
                                        margin: 0 3px;
                                    }
                                    select{
                                        width: 130px;
                                    }
                                }
                            }
                        }  
                    }
                    #chart{
                        width: 100%;
                        flex-grow: 1;
                        padding: 10px;
                        box-sizing: border-box;
                    } 
                }
            }

        }
    }
</style>