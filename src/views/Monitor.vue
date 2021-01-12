<template>
    <div class="monitor">
        <div class="params">    
            <span class="title">查询区</span>
            <div class="type">
                <span>类型：&nbsp;</span>
                <label @click="sendReq"><input type="radio" name="type" v-model="type" value="0">企事业监测点报表&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="type" v-model="type" value="1">海洋统计年报&nbsp;</label>
            </div>
            <div class="index">
                <span>指标：&nbsp;</span>
                <label  @click="sendReq"><input type="radio" name="index" v-model="index" value="0">应提交&nbsp;</label>
                <label  @click="sendReq"><input type="radio" name="index" v-model="index" value="1">已提交&nbsp;</label>
                <label  @click="sendReq"><input type="radio" name="index" v-model="index" value="2">未提交&nbsp;</label>
                <label  @click="sendReq"><input type="radio" name="index" v-model="index" value="3">未按时&nbsp;</label>
                <label  @click="sendReq"><input type="radio" name="index" v-model="index" value="4">提交率&nbsp;</label>
                <label  @click="sendReq"><input type="radio" name="index" v-model="index" value="5">通过&nbsp;</label>
                <label  @click="sendReq"><input type="radio" name="index" v-model="index" value="6">通过率&nbsp;</label>
            </div>
            <div class="year">
                 <span>年份：&nbsp;</span>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="0">2021&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="1">2020&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="2">2019&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="3">2018&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="4">2017&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="5">2016&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="6">2015&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="7">2014&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="8">2013&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="9">2012&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="10">2011&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="11">2010&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="12">2009&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="13">2008&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="14">2007&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="15">2006&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="16">2005&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="17">2004&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="18">2003&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="19">2002&nbsp;</label>
                <label @click="sendReq"><input type="radio" name="year" v-model="year" value="20">2001&nbsp;</label>
            </div>
            <div class="region">
                <span>地区：&nbsp;</span>
                <select name="" id="" v-model="region" @click="sendReq">
                    <option value="">江门市</option>
                    <option value="台山">台山市</option>
                    <option value="鹤山">鹤山市</option>
                    <option value="开平">开平市</option>
                    <option value="恩平">恩平市</option>
                    <option value="新会">新会区</option>
                    <option value="蓬江">蓬江区</option>
                    <option value="江海">江海区</option>
                </select>
            </div>
        </div>
        <div class="chart_container">
            <div id="chart_monitor">
            </div>
            <div class="full_screen iconfont icon-quanping" @click="toChart"></div>
        </div>
    </div>
</template>

<script>
import {onMounted,ref} from 'vue'
import {useRouter} from 'vue-router'
var echarts = require('echarts')
let seriesLabel = {
    normal: {
        show: true,
        textBorderColor: '#333',
        textBorderWidth: 2
    }
}
const option = {
    title: {
      text:'海统年综合海洋经济监测报表评估' ,
      left: 'center'
    },
    dataset: {
        source: [
            [ 'amount', 'chart'],
            [ 12, '海洋渔业企事业年表'],
            [ 10, '海洋渔业企事业月表'],
            [ 2, '海洋油汽业企事业年表'],
            [ 1, '海洋油汽业企事业月表'],
            [ 3, '海洋矿业企事业月表'],
            [ 1, '海洋盐业企事业年表'],
            [ 2, '海洋盐业企事业月表'],
            [ 3, '海洋船舶工业企事业年表'],
            [ 5, '海洋船舶工业企事业月表'],
            [ 2, '海洋化工业企事业年表'],
            [ 1, '海洋化工业企事业月表'],
            [ 1, '海洋生物医药企事业年表'],
            [ 2, '海洋生物医药企事业月表'],
            [ 1, '海洋工程建筑业企事业年表1'],
            [ 1, '海洋工程建筑业企事业年表2']
        ]
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {
                name:'',
                title: ''
            }
        },
        showTitle: true
    },
    grid: {
        left: 200,
        top: 30,
        bottom: 50,
        right: 30
    },
    xAxis: {name: ''},
    yAxis: {type: 'category',inverse: true},
    visualMap: {
        orient: 'horizontal',
        left: 'center',
        min: 0,
        max: 20,
        text: ['High', 'Low'],
        // Map the score column to color
        dimension: 0,
        inRange: {
            color: ['#94d4ff','#D7DA8B', '#E15457']
        }
    },
    series: [
        {
            type: 'bar',
            label: seriesLabel,
            encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'chart'
            }
        }
    ]
}

function init_chart(){
    // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('chart_monitor'));
  // 绘制图表
  myChart.setOption(option)
    setTimeout(()=>{
      myChart.resize()
  },1000)
     
}
export default {
    setup(){
        const router = useRouter()
        const region = ref("")
        const type = ref(0)
        const index = ref(0) 
        const year = ref(0)
        const sendReq = () => {
            setTimeout(() => {
                console.log(region.value)
                console.log(type.value)
                console.log(index.value)
                console.log(year.value)
            },500)
        }
        onMounted(() => {
            document.getElementById('chart_monitor').style.height = '380px'
            setTimeout(() => {
                init_chart()
            },1000)
            sendReq()
        })
        const toChart = () => {
            router.push({
                name: 'chart',
                params: {option: JSON.stringify(option)}
            })
        }       
        return {region,type,index,year,toChart,sendReq}
    },
    beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        next(vm => {
           vm.$forceUpdate()
        })
    },
}
</script>

<style lang="scss" scoped>
      .monitor{
        background-color: rgb(225,243,255);
        padding: 15px;
        max-height: 100vh;
        min-height: 80vh;
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
                background-color: rgb(225,243,255);
            }
            .type,.year,.index,.region{
                margin: 12px 8px;
            }
            .region{
                select{
                    font-size: 13px;
                    width: 120px;
                    line-height: 30px;
                    margin-left: 3px;
                }
            }
        } 
        .chart_container{
            padding: 8px;
            height: 380px;
            margin-top: 30px;
            background-color: #fff;
             position: relative;
            #chart_monitor{
                //盒子模式是content-box
               border: 2px #ccc solid;
               width: 100%;
               height: 100%;
            }
            .full_screen{
                   position: absolute;
                   cursor: pointer;
                   right: 40px;
                   top: 17px;
                   font-size: 19px;
                   color: rgb(102,102,102);
                   font-weight: 500;
                   &:hover{
                       color: red;
                   }
            }
        }
      }
</style>