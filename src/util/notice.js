export default function notice(title, message, delay) {

}
notify.install = function(Vue, options = { delay: 3000 }) {
    Vue.prototype.$notify = function(message, opt = {}) {
        if (notify.el) return; //判断dom上是否存在这个实例
        options = {...options, ...opt };
        let v = Vue.extend(modal);
        let vm = new v;
        let oDiv = document.createElement('div');
        vm.$mount(oDiv);
        vm.value = message;
        document.body.appendChild(vm.$el);
        notify.el = vm.$el; //把实例给notify对象        
        setTimeout(() => {
            document.body.removeChild(vm.$el);
            notify.el = null; // 清空这个对象
        }, options.delay)
    }
}