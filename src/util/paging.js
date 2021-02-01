
    const sum = ref(0)
    const page = ref(1)
    const size = ref(10)
    const go = ref('')
    const click_go = () => {
        if(!parseInt(go.value) || parseInt(go.value) <= 0){
            page.value = 1
            go.value = ''
            
        }else{
                page.value = parseInt(go.value)
                go.value = ''
        }
        sendReq()
    }
    const change_page = (i) => {
        if(i <= 0)
            page.value = 1
        else 
            page.value = i
        sendReq()
    }
    const input_size = debounce(() => {
        sendReq()
    },1000)
    return {
        sum,
        page,
        size,
        go,
        click_go,
        change_page,
        input_size
    }
