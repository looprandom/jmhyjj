export default function debounce(fn, delay, scope) {
    let timer = null;
    // 返回函数对debounce作用域形成闭包
    return function() {
        // setTimeout()中用到函数环境总是window,故需要当前环境的副本；
        let context = scope || this,
            args = arguments;
        // 如果事件被触发，清除timer并重新开始计时
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    }
}