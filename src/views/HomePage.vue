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
        <div class="chart_container">
          <div class="chart" id="chart">
          </div>
           <div class="full_screen iconfont icon-quanping" @click="toChart"></div>
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
import {useRouter} from 'vue-router'
// import { SmileOutlined } from '@ant-design/icons-vue';
// import { notification } from 'ant-design-vue';
var echarts = require('echarts');
const option = {
      title: {
          text: '海洋监测',
          left: 'center',
          top: 15
      },
      grid:{
            x:30,
            y:45,
            x2:15,
            y2:30,
            // borderWidth:1
      },
      tooltip: {},
      toolbox: {
        show: true,
        feature: {
            saveAsImage: {
                name:'',
                title: ''
            }
        }
      },
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

export default {
  name: 'HomePage',
  setup(){
    const router = useRouter()
    //初始化图表
    onMounted(()=>{
      document.getElementById('chart').style.height = '225px'
      setTimeout(()=>{
        //页面加载顺序问题？
         init_chart()
      },1000)
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
    
    const toChart = () => {
            router.push({
                name: 'chart',
                params: {option: JSON.stringify(option)}
            })
        }
    return {
      news,
      format_time,
      toChart
    }
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
          min-height: 447px;
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
        .chart_container{
          height: 225px;
          width: 100%;
          background-color: #fff;
          position: relative;
          .chart{
              height: 100%;
              background-color: #fff;
              margin: 1px;
              box-sizing: border-box;
            }
           .full_screen{
              position: absolute;
              cursor: pointer;
              right: 40px;
              top: 8px;
              font-size: 19px;
              color: rgb(102,102,102);
              font-weight: 500;
              &:hover{
                  color: red;
              }
            }
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
            left: 393px;
          }
           img:nth-child(2){
            position: absolute;
            top: 43px;
            left: 591px;
          }
           img:nth-child(3){
            position: absolute;
            top: 120px;
            left: 841px;
          }
           img:nth-child(4){
            position: absolute;
            top: 105px;
            left: 490px;
          }
            img:nth-child(5){
            position: absolute;
            top: 170px;
            left: 515px;
          }
           img:nth-child(6){
            position: absolute;
            top: 129px;
            left: 726px;
          }
        }
      }
      .title{
        height: 35px;
      }
    }
</style>