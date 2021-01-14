<template>
    <div class="report_from">
        <div class="operation_flow">
            <span class="tit">业务流程</span>
            <div class="pic">
                <div class="start success">开始</div>
                <div class="iconfont icon-youchangjiantou allow"></div>
                <div class="in cur">填报数据</div>
                <div class="iconfont icon-youchangjiantou allow"></div>
                <div class="in">县(市)审核</div>
                <div class="iconfont icon-youchangjiantou allow"></div>
                <div class="in">入库</div>
                <div class="iconfont icon-youchangjiantou allow"></div>
                <div class="end">结束</div>
            </div>
        </div>
        <div class="report_info">
            <span class="tit">报表信息</span>
            <div class="hed">
                <h3>海洋渔业企事业年表</h3>
                <div class="aside">
                    <ul>
                        <li>表号：<span>海洋经济监测表1</span></li>
                        <li>制表机关：<span>江门市海洋与渔业局</span></li>
                        <li>批准机关：<span>江门市统计局</span></li>
                        <li>批准文号：<span>江统函[2014]4号</span></li>
                        <li>有效期至：<span>2016年2月底</span></li>
                    </ul>
                </div>
            </div>
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>序号</th>
                            <th>指标</th>
                            <th>计量单位</th>
                            <th>指标值</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>海水养殖产量</td>
                            <td>万吨</td>
                            <td><input type="text"></td>
                        </tr>
                         <tr>
                            <td>2</td>
                            <td>海水养殖产量</td>
                            <td>万吨</td>
                            <td><input type="text"></td>
                        </tr>
                         <tr>
                            <td>3</td>
                            <td>海水养殖产量</td>
                            <td>万吨</td>
                            <td><input type="text"></td>
                        </tr>
                         <tr>
                            <td>4</td>
                            <td>海水养殖产量</td>
                            <td>万吨</td>
                            <td><input type="text"></td>
                        </tr>
                         <tr>
                            <td>5</td>
                            <td>海水养殖产量</td>
                            <td>万吨</td>
                            <td><input type="text"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="operation_area">
            <span class="tit">操作区</span>
        <div class="but">
            <input type="button" value="保存">
            <input type="button" value="公式校验">
            <input type="button" value="提交">
            <input type="button" value="导出xls">
            <input type="button" value="导入xls">
            <input type="button" value="汇总数据">
            <input type="button" value="删除">
            <input type="button" value="取消">
            <input type="button" value="关闭" @click="$router.go(-1)">
        </div>
        </div>
    </div>
</template>

<script>
export default {
    setup(){

    }
}
</script>

<style lang="scss" scoped>
    @keyframes cur {
         0% { border: 3px solid red; }
        17% { border: none; }
        34% { border: 3px solid red; }
        51% { border: none; }
        68% { border: 3px solid red; }
        85% { border: none; }
        100% { border: 3px solid red; }
    }
    .report_from{
        height: 100vh;
        box-sizing: border-box;
        min-height: 700px;
        padding: 20px 35px;
        background-color: rgb(255,243,255);
        display: flex;
        flex-direction: column;
        .tit{
                position: absolute;      
                top: -8px;
                left: 15px;
                padding: 0 4px;
                background-color: rgb(255,243,255);; 
                font-size: 14px;
                font-weight: 600;
        }
        .operation_flow{
            position: relative;
            height: 100px;
            border: 2px solid rgb(176,223,254);
            padding: 5px;
            box-sizing: border-box;
            .pic{
                height: 100%;
                background-color: rgb(255,243,225);
                display: flex;
                align-items: center;
                box-sizing: border-box;
                padding-left: 80px;
                font-size: 14px;
                font-weight: 500;
                .start,.end{
                    border-radius: 30px 30px;
                    text-align: center;
                    line-height: 50px;
                    width: 100px;
                    cursor: pointer;
                    background-color: rgb(194,224,248);
                }
                .allow{
                    margin: 0 2px;
                }
                .success{
                    border: 3px solid green;
                }
                .cur{
                    animation: cur linear 3s;
                    box-sizing: border-box;
                    border: 3px solid red;
                }
                .in{
                    background-color: rgb(194,224,248);
                    text-align: center;
                    line-height: 50px;
                    width: 100px;
                    cursor: pointer;
                     border-radius: 5px 5px;
                }
            }
        }
        .report_info{
            position: relative;
            height: 100px;
            border: 2px solid rgb(176,223,254);
            padding: 5px;
            box-sizing: border-box;
            flex-grow: 1;
            // overflow: auto;
            margin: 13px 0px;
            h3{
                margin: 5px 0;
                font-size: 18px;
                font-weight: 600;
                text-align: center;
            }
            .aside{
                overflow: hidden;
                text-align: right;
                ul{
                    float: right;
                    line-height: 28px;
                    font-size: 13px;
                    font-weight: 500;
                    li{
                        span{
                            text-align: left;
                            width: 140px;
                            display: inline-block;
                        }
                    }
                }
            }
            .table{
                margin-top: 5px;
                overflow: auto;
                table{
                    width: 100%;
                    text-align: center;
                    font-size: 12px;
                    thead{
                        th{
                            line-height: 20px;
                            background-color: rgb(196,196,198);
                            border: 1px solid black;
                        }
                    }
                    tbody{
                        td{
                            line-height: 22px;
                            border: 1px solid black;
                            input{
                                border: none;
                                outline: none;
                            }
                        }
                    }
                }
            }
        }
        .operation_area{
            position: relative;
            border: 2px solid rgb(176,223,254);
            padding: 5px;
            box-sizing: border-box;
            .but{
                line-height: 50px;
                text-align: left;
                input[type=button]{
                        padding: 0 6px;
                        height: 24px;
                        font-size: 14px;
                        cursor: pointer;
                        background: url('../assets/image/enterprise/date_bj.gif');
                }
                span{
                    font-size: 14px;
                }
            }   
        }
    }
</style>