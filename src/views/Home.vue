<template>
  <div class="home">
    <div class="left">
      <div class="mytask">
        <div class="title">我的任务</div>
        <ul>
          <li>待审核</li>
          <li>本周已审核</li>
          <li>本月已审核</li>
          <li>累计审核</li>  
        </ul>
      </div>
      <div class="news">
        <div class="title">新闻动态</div>
        <ul>
          <li>
            <div class="new_tit">
              <a href="#">全省实施广东海洋经济综合试验区发展规划工作会议在广州召开</a>
            </div>
            <div>2015-03-03</div>
          </li>
           <li>
            <div class="new_tit">
              <a href="#">全省实施广东海洋经济综合试验区发展规划工作会议在广州召开</a>
            </div>
            <div>2015-03-03</div>
          </li>
           <li>
            <div class="new_tit">
              <a href="#">全省实施广东海洋经济综合试验区发展规划工作会议在广州召开</a>
            </div>
            <div>2015-03-03</div>
          </li>
           <li>
            <div class="new_tit">
              <a href="#">全省实施广东海洋经济综合试验区发展规划工作会议在广州召开</a>
            </div>
            <div>2015-03-03</div>
          </li>
           <li>
            <div class="new_tit">
              <a href="#">全省实施广东海洋经济综合试验区发展规划工作会议在广州召开</a>
            </div>
            <div>2015-03-03</div>
          </li>
           <li>
            <div class="new_tit">
              <a href="#">全省实施广东海洋经济综合试验区发展规划工作会议在广州召开</a>
            </div>
            <div>2015-03-03</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="chart" id="chart">
        图表
      </div>
      <div class="map">

      </div>
    </div>
  </div>
</template>

<script>
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
  name: 'Home',
  mounted(){
    init_chart();
  }
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
    .home{
      //flex布局
      display: flex;
      height: 659px;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-top: 3px;
      .left{
        width: 230px;
        margin: 0 2px;
        color: black;
        //定义继承的字体相关属性
        font-size: 13px;
        font-family: "Verdana",Arial;
        background-color: #fff;
        ul{
          li{
            padding: 15px ;
            margin: 0 5px;
            div{
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis; //将文本溢出处理成显示省略号
              margin: 6px 0;
            }
            div:nth-child(2){
              padding-bottom: 8px;
              border-bottom: 1px #000 dashed;
            }
          }
        }
        .mytask{
          ul{
            li{
              border-bottom: 2px #ccc solid;
            }
            li:nth-child(4){
              border: none;
            }
          }
        }
        .news{
          ul{
            li{
              padding: 7px;
            }
          }
        }
      }
      .right{
        flex-grow: 1;
        .chart{
          height: 260px;
          margin: 1px;
        }
        .map{
          background: #D1E9F7 url("../assets/image/home/map_bg.png") center no-repeat;
          height: 400px;
          margin: 1px;
        }
      }
      .title{
        background-color: rgb(43,185,230);
        line-height: 40px;
        color: #EEF9FD;
      }
    }
</style>
