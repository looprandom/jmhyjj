<template>
    <div class="announce">
        <div class="message"
            :style="style" 
            @mouseenter="enter"
            @mouseout="out">{{message}}</div>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    props: ['message'],
    setup(){
        //定义鼠标进出"announce"区域的事件
        const style = ref({animationPlayState: 'running'})
        const enter = ()=>{
            style.value.animationPlayState = 'paused'
        }
        const out = ()=>{
            style.value.animationPlayState = 'running'
        }
        return {enter,out,style}
    }
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
    @keyframes cross-slip{
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
    .announce{
        display: inline-block;
        overflow: hidden;

        .message{
            animation: cross-slip 30s linear infinite ;
            text-align: left;
        }
    }
</style>