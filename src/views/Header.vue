<template>
    <div class="header">
        <div class="top_bg" v-if="show_top"></div>
        <div class="set">
            <ul>
                <li v-for="(item) of menu" :key="item.id">
                    <router-link :to="item.path">{{item.name}}</router-link>
                </li>
            </ul>
            <div @click="logout"><img src="../assets/image/header/tuichu.gif" alt="">&nbsp;<span>安全退出</span></div>
            <div><img src="../assets/image/header/password.gif" alt="">&nbsp;<span>修改密码</span></div>
            <div @click="toggle_top"><img src="../assets/image/header/H_on_Show.gif" alt="">&nbsp;<span>隐藏/展开</span></div>
        </div>   
        <div class="wel">
            <div class="time">{{time.date}}&nbsp;&nbsp;{{time.week}}&nbsp;&nbsp;{{time.clock}}</div>
            <div>欢迎<span class="user">{{role}}</span>登录系统！</div>
            <div><img src="../assets/image/header/xian.gif" alt=""></div>
            <div><img src="../assets/image/header/sound_16x16.gif" alt=""></div>
            <Announce  :message="message" class="grow"/>
            <div class="help">
                <a href="http://10.10.26.15/jmhyjj/Help/default.htm">
                    <img src="../assets/image/header/office.gif" alt="">使用帮助
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {ref,onMounted,reactive,computed} from "vue"
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'
import Announce from '../components/Announce'
import _getMenu from '../api/home/getMenu'
import _logout from '../api/home/logout'
import moment from 'moment'

const tmpRoute = ['/home/homepage','/home/enterprise/list','/home/collect/fill_in','/home/check/report','/home/monitor','/home/statistics','/home/news/news','/home/sysconfig']
export default {
    name: 'Header',
    components:{Announce},
    setup(){
        const router = useRouter()
        const store = useStore()
        //登出逻辑
        function logout(){
            _logout().then((res)=>{
                if(res.code == 20000){
                    localStorage.setItem('token','');
                    router.push('/login')
                }
            })
        }
        //切换显示和隐藏顶部bg逻辑
        const show_top = ref(true)
        function toggle_top(){
            show_top.value = !show_top.value
        }
        //显示的当前用户逻辑
        console.log(store.state.permission)
        const role = computed(()=>{
            return store.state.role
        })
        //显示当前时间逻辑
        const time = reactive({
            date: moment().format("MMM Do YY"),
            week: moment().format('dddd'),
            clock: moment().format('h:mm:ss') 
        })
        setInterval(()=>{
            time.date = moment().format("MMM Do YY")
            time.week = moment().format('dddd')
            time.clock = moment().format('h:mm:ss')
        },1000)
        // const time = ref(format_time(new Date(),'yyyy-MM-dd hh:mm:ss'));
        

        //显示菜单逻辑
        const menu = ref([])
        onMounted(()=>{
             _getMenu().then((res)=>{
                if(res.code == 20000){
                    tmpRoute.forEach((item,index) => {
                        res.data.menu[index].path = item
                    })
                    console.log(res.data.menu)
                     menu.value = res.data.menu
                }
            })       
        })

        return {
            logout,
            show_top,
            toggle_top,
            time,
            role,
            menu,
            message:'系统试运行中，请各位领导和工作人员多提建议!'
        }
    }
}
</script>

<style lang="scss" scoped>
    .header{
        .top_bg{
            height: 125px;
            background: url('../assets/image/header/title_jiangmen.png') 13px no-repeat,url('../assets/image/header/top_blc_.jpg') no-repeat;
        }
        .set{
            height: 31px;
            height: 5vh;
            box-sizing: border-box;
            background: url('../assets/image/header/nav-bg.png');
            ul{
                padding-left: 40px;
                li{
                    float: left;
                    font-weight: 600;
                    line-height: 31px;
                    text-align: center;
                    font-size: 14px;
                    padding: 0 40px;
                    background: url('../assets/image/header/nav_separator.png') left/ 2.5px no-repeat;
                    &:last-child{
                        background:url('../assets/image/header/nav_separator.png') left/ 2.5px no-repeat,
                                    url('../assets/image/header/nav_separator.png') right/2.5px no-repeat;
                    }
                    a{
                        color: white;
                    }
                    a:hover{
                        text-decoration: none;
                        color: black;
                    }
                    .router-link-active {
                        color: black;
                    }

                }
            }  
            div{
                float: right;
                line-height: 31px;
                font-size: 12px;
                color: black;
                margin-right: 15px;
                //不加span字莫名不见
                span{
                    cursor: pointer;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                 img{
                    vertical-align: middle; //文字和图片中线对齐?
                    width: 16px;
                    line-height: 29px;
                }
            }
        }
        .wel{
            height: 26px;
            background-color: rgb(218,237,254);
            font-size: 12px;
            line-height: 26px;
            font-weight: 300;
            display: flex;
            //解决盒子塌陷
            .user{
                color: rgb(0,0,204);
                font-weight: 600;
            }
            .grow{
                flex-grow: 1;
            }
            div{
                margin: 0 8px;
                img{
                    vertical-align: middle;
                }
            }
            div:last-child{
                img{
                    vertical-align: middle;
                    margin-right: 2px;
                }
            }
            .help{
                a{
                    color:black;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
    }
</style>