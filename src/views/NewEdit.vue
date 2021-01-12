<template>
    <div class="new_editor">
         <editor v-model="content" @contentData="change" class="editor"></editor>
    </div>
</template>

<script>
import editor from '../components/Quill'
import {ref} from 'vue'
export default {
    setup(){
        const content = ref('')
        const change = (content) => {
            console.log(content)
        }
        return {content,change}
    },
    components:{editor}
}
</script>

<style lang="scss" scoped>
    .new_editor{
        height: 100vh;
        min-height: 600px;
        box-sizing: border-box;
        background-color: #fff;
        .editor{
            height: 650px;
        }
    }
</style>