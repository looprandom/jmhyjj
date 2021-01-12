<template>
    <div class="table">
        <table>
            <tbody>
                <slot name="thead">
                </slot>
                <slot name="tbody"></slot>
            </tbody>
         </table>
    </div>
</template>

<script>
export default {

    setup(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
     .table{
            font-size: 13px;
            // padding: 2px;
            border: 3px solid rgb(148,212,255);
            white-space: nowrap;
            font-weight: 500;
            tbody{
                tr{
                    &:nth-child(odd){
                        background-color: rgb(176,231,255);
                    }
                    &:nth-child(even){
                        background-color: rgb(238,249,255);
                    }
                    th{
                            font-weight: 700;
                            padding: 7px 52px;  //设置左右内边距过大，侧边栏会被挤压
                            border: 1px solid rgb(148,212,255);
                            background: url('../assets/image/enterprise/nav_dropdown_sep.gif')
                        }
                        td{
                            // padding: 0px 20px;
                            line-height: 29px;
                            border: 3px solid rgb(148,212,255)
                        }
                }
            }
            .edit{
                text-decoration: underline;
                color: black;
                &:hover{
                    color: red;
                }
            }
            .checked{
                color: rgb(153,181,194)
            }
    }
</style>