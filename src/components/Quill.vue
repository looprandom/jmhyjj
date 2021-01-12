<template>
    <div class="quill">
        <input type="file"
            accept="image/png, image/jpeg, image/gif, image/jpg"
            @change="getFile($event)"
            id="img_upload"
            :style="{position:'absolute',visibility: 'hidden'}">
        <div id="editor"></div>
    </div>
</template>

<script>
import {onMounted} from 'vue'
import upload_image from '../api/news/upload_image'
import Quill from 'quill'
  /* 编辑器操作条选项 */
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], //开关按钮
    ['blockquote'],
    [{'header': 1}, {'header': 2}], //自定义按钮值
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'script': 'sub'}, {'script': 'super'}], // 上标/下标
    [{'indent': '-1'}, {'indent': '+1'}], // 减少缩进/缩进
    [{'direction': 'rtl'}], // 文本方向
    [{'size': ['small', false, 'large', 'huge']}], // 自定义下拉
    [{'header': [1, 2, 3, 4, 5, 6, false]}],
    [{'color': []}, {'background': []}], //使用主题的默认下拉
    [{'font': []}],
    [{'align': []}],
    ['image']
]
const options = {
        theme: 'snow',
        modules: {
          toolbar: {
               container: toolbarOptions
          },
            imageDrop: true,
          imageResize: {
            modules: ['Resize', 'DisplaySize', 'Toolbar'],
            handleStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            displayStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            toolbarStyles: {
              backgroundColor: 'black',
              border: 'none',
              color: 'white'
            },
            toolbarButtonStyles: {},
            toolbarButtonSvgStyles: {}
          }
        },
        placeholder: '请输入~',
        readOnly: false
}
export default {
    setup(props,ctx){
        let quill = {}
        const imageFunction = () => {
             document.getElementById('img_upload').click()
        }
        onMounted(() => {
            quill = new Quill('#editor',options)
            quill.on('text-change', () => {
                ctx.emit('contentData', quill.root.innerHTML)
            })
            let toolbar = quill.getModule('toolbar')
            toolbar.addHandler('image', () => {
                imageFunction()
            })
        })
        const getFile = (e) => {
            let files = e.target.files
            console.log(files[0])
            upload_image(files[0]).then((res) => {
                if(res.code == 20000){
                    console.log(res.data.path)
                   // 获取光标所在位置
                    let length = quill.getSelection().index
                    // 插入图片，res为服务器返回的图片链接地址
                    quill.insertEmbed(length, 'image', res.data.path)
                    // 调整光标到最后
                    quill.setSelection(length + 1)
                }else{
                    alert("图片上传失败")
                }
            })
        }
        return {getFile}

    },
    //vue3 emits option
    emits: {
        contentData: () => {
            return true
        }
    }
}
</script>

