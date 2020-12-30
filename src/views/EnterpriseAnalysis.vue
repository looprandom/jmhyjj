<template>
    <div class="enterpriseAnalysis">
         <div class="params">    
            <span>查询区</span>
            <div class="paramsOne">
                <div>统计要素</div>
                <div>
                    <input type="radio" name="statistics"
                            checked
                            @click="updateChart(0)">所属行业
                    <input type="radio"
                            name="statistics"
                            @click="updateChart(1)" >所属地区
                    <input type="radio"
                            name="statistics"
                            @click="updateChart(2)" >单位类型
                </div>
            </div>
            <div class="paramsTwo">
                <div>展示方式</div>
                <div>
                    <input type="radio" name="display" checked>数量
                    <input type="radio" name="display" >比例
                </div>
            </div>
        </div>
        <div class="chart" id="chart">

        </div>
    </div>
</template>

<script>
import {onMounted} from 'vue'
import getEnterpriseAnalysis from '../api/enterprise/analysis'
var echarts = require('echarts');
const option = {
    title: {
        left: 'center',
        top: 20
    },
     grid:{
            x:25,
            y:45,
            x2:5,
            y2:30,
            // borderWidth:1
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 200,
        top: 40
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}
function init_chart(){
    // 基于准备好的dom，初始化echarts实例
  console.log(document.getElementById('chart'))
  var myChart = echarts.init(document.getElementById('chart'));
  // 绘制图表
  myChart.setOption(option)
     
}
 
export default {
    setup(){     
        //获取服务端数据并更新图表
        const updateChart = (type) => {
              getEnterpriseAnalysis(type).then((res)=>{
                if(res.code === 20000){
                    option.title.text = `企业名录 ( 合计：${res.data.sum}家 )`
                    let analysis = option.series[0].data = []
                    let names = option.legend.data = []
                    res.data.analyseData.forEach((item)=>{
                        analysis.push({name: item.dataName,value: item.dataNum})
                        names.push(item.dataName)
                    })
                }
                console.log(res)
                init_chart()
            })
        }
        onMounted(()=>{
          updateChart(0)
        }) 

        return {
            updateChart
        }
    }
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
     .enterpriseAnalysis{
         background-color: #fff;
        padding: 15px;
       .params{   
           border: 3px solid rgb(148,212,255);
           position: relative;
           padding: 10px;
           font-size: 13px;
           text-align: left;
           color: black;
           font-weight: 500;
            span{
                position: absolute;
                top: -8px;
                left: 35px;
                font-size: 13px;
                font-weight: 500;
                background-color: rgb(225,243,255);
            }
            .paramsOne,.paramsTwo{
                overflow: hidden;
                line-height: 27px;
                div{
                   width: 50%;
                   float: left;
                    &:nth-child(1){
                        background-color: rgb(137,216,255);
                        padding-left: 14px;
                        box-sizing: border-box;
                    }
                     &:nth-child(2){
                        background-color: rgb(219,243,255);
                    }
                }

            }  
            .paramsOne{
                margin-bottom: 3px;
            }
            .paramsTwo{
                margin-top: 1px;
            }
       }
       .chart{
           width: 100%;
           height: 420px;
           padding: 5px;
           overflow: hidden;
       }      
    }
</style>