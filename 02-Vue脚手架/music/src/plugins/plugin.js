export default {
    install(Vue,) {
        //全局过滤器
        // Vue.filter('mySlice', function (value) {
        //     return value.slice(0, 4)
        // })

        //定义全局指令
        Vue.directive('resize', {
            bind(el, binding) { // el为绑定的元素，binding为绑定给指令的对象
                let width = '', height = '';
                function isReize() {
                    const style = document.defaultView.getComputedStyle(el);
                    if (width !== style.width || height !== style.height) {
                        binding.value();  // 关键
                    }
                    width = style.width;
                    height = style.height;
                }
                el.__vueSetInterval__ = setInterval(isReize, 300);
            },
            unbind(el) {
                clearInterval(el.__vueSetInterval__);
            }

        })

        //定义混入
        // Vue.mixin({
        //     data() {
        //         return {
        //             x: 100,
        //             y: 200
        //         }
        //     },
        // })

        //给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.timeFormate = (time) => {
            if (time === Infinity || isNaN(time)) {
                return '00:00'
            }
            let minite = Math.floor(time / 60)
            minite = minite > 9.5 ? minite : "0" + minite;
            let secend = Math.floor(time % 60)
            secend = secend > 9.5 ? secend : "0" + secend
            return minite + ":" + secend
        }
        Vue.prototype.getProg = (audio) => {
            let prog = Number(((audio.currentTime / audio.duration) * 100).toFixed(2));
            if (prog !== Infinity && !isNaN(prog)) {
                return 0
            }
            return prog
        }

    }
}