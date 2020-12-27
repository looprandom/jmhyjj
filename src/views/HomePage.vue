<template>
    <div class="home">
        <div class="left">
        <div class="mytask">
            <div class="title"></div>
            <ul>
            <li>待审核</li>
            <li>本周已审核</li>
            <li>本月已审核</li>
            <li>累计审核</li>  
            </ul>
        </div>
        <div class="news">
            <div class="title"></div>
            <ul>
            <li v-for="(item) of news" :key="item.id">
                <div class="new_tit">
                <a href="#">{{item.title}}</a>
                </div>
                <div>{{format_time(item.gmtCreate,'yyyy-MM-dd')}}</div>
            </li>
            </ul>
        </div>
        </div>
        <div class="right">
        <div class="chart" id="chart">
            图表
        </div>
        <div class="map">
            <img src="../assets/image/home/mapon_enping.png" alt="">
            <img src="../assets/image/home/mapon_heshan.png" alt="">
            <img src="../assets/image/home/mapon_jianghai.png" alt="">
            <img src="../assets/image/home/mapon_kaiping.png" alt="">
            <img src="../assets/image/home/mapon_taishan.png" alt="">
            <img src="../assets/image/home/mapon_xinhui.png" alt="">
        </div>
        </div>
    </div>
</template>

<script>
import {ref,onMounted} from 'vue'
import _getNews from '../api/home/getNews'
import format_time from '../util/format_time'
// import { SmileOutlined } from '@ant-design/icons-vue';
// import { notification } from 'ant-design-vue';
var echarts = require('echarts');

function init_chart(){
    // 基于准备好的dom，初始化echarts实例
  console.log(document.getElementById('chart'))
  var myChart = echarts.init(document.getElementById('chart'));
  // 绘制图表
  myChart.setOption({
      title: {
          text: '海洋监测'
      },
      tooltip: {},
      xAxis: {
          data: ['2004年', '2005年', '2006年', '2008年', '2009年', '2010年','2011年','2012年','2013年']
      },
      yAxis: {},
      series: [{
          name: '总产值(亿元)',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      },{
          name: 'GDP(亿元)',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
      },{
          name: '占比同比增长率(%)',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20]
      }]
  });
}

export default {
  name: 'HomePage',
  setup(){
    //初始化图表
    onMounted(()=>{
      init_chart();
    })
    //News
    let news = ref([])
     onMounted(()=>{
      _getNews().then((res)=>{
         if(res.code == 20000){
            news.value = res.data.journalism
         }
      })
    })
    return {
      news,
      format_time
    }
  }
} 
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
    .home{
      //flex布局
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-top: 3px;
      //解决里面子元素内容宽度莫名溢出的问题
      overflow: hidden;
      .left{
        width: 210px;
        margin: 0 3px;
        color: black;
        //定义继承的字体相关属性
        font-size: 12px;
        text-align: left;
        font-family: "Verdana",Arial;
        background-color: #fff;
        ul{
          li{
            padding: 17px ;
            margin: 0 5px;
            div{
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis; //将文本溢出处理成显示省略号
              margin: 6px 0;
            }
            div:nth-child(2){
              padding-bottom: 1px;
              border-bottom: 1px #000 dashed;
            }
          }
        }
        .mytask{
          .title{
             background: url('../assets/image/home/left_tit01.png') left top/cover;
          }
          ul{
            li{
              border-bottom: 2px #ccc solid;
              padding-left: 10px;
            }
            li:nth-child(4){
              border: none;
            }
          }
        }
        .news{
          .title{
             background: url('../assets/image/home/left_tit02.png') left top/cover;
          }
          ul{
            li{
              padding: 4px;
              a{
                color: black;
                font-weight: 500;
                &:hover{
                  text-decoration: underline;
                }
              }

            }
          }
        }
      }
      .right{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        .chart{
          height: 225px;
          background-color: #fff;
          margin: 1px;
        }
        .map{
          background: #D1E9F7 url("../assets/image/home/map_bg.png") center no-repeat;
          flex-grow: 1;
          margin: 1px;
          position: relative;
          img{
            opacity: 0;
            cursor: pointer;
          }
          img:hover{
            //仍然可交互
            opacity: 1;
          }
          img:first-child{
            position: absolute;
            top: 155px;
            left: 386px;
          }
           img:nth-child(2){
            position: absolute;
            top: 43px;
            left: 583px;
          }
           img:nth-child(3){
            position: absolute;
            top: 120px;
            left: 834px;
          }
           img:nth-child(4){
            position: absolute;
            top: 105px;
            left: 483px;
          }
            img:nth-child(5){
            position: absolute;
            top: 168px;
            left: 508px;
          }
           img:nth-child(6){
            position: absolute;
            top: 131px;
            left: 720px;
          }
        }
      }
      .title{
        height: 35px;
      }
    }
</style>