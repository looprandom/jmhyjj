<template>
    <div class="chart_container">
        <div id="chart"></div>
    </div>
</template>

<script>
import {onMounted} from 'vue'
import {useRoute} from 'vue-router'
var echarts = require('echarts')
function init_chart(option){
    // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('chart'));
  // 绘制图表
  myChart.setOption(option)
  setTimeout(()=>{
      myChart.resize()
  },1000)
     
}
export default {
    setup(){
        const route = useRoute()
         if(!route.params.option)
            return 
        const option = JSON.parse(route.params.option)
        option.title.top = 10
        option.grid.top = 40
        onMounted(() => {
            document.getElementById('chart').style.height = '100vh'
            setTimeout(() => {
                init_chart(option)
            })
        })
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
    .chart_container{
            padding: 20px;
            height: 100vh;
            width: 100%;
            box-sizing: border-box;
            min-height: 700px;
            background-color: #fff;
            #chart{
                //盒子模式是content-box
               border: 2px #ccc solid;
               width: 100%;
               height: 100%;
               box-sizing: border-box;
            }
        }
</style>