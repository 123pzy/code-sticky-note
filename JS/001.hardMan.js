function hardMan(name) {
    // 延迟函数
    function delay(duration) {
        var start = Date.now()
        while (Date.now() - start < duration) { }
    }

    // 构造hardMan类
    class HardMan {
        constructor(name) {
            // 异步
            setTimeout(() => {
                console.log(`I am ${name}.`);
            }, 0);
            return this // 链式调用
        }
        study(params) {
            // 异步
            setTimeout(() => {
                console.log(`Learning ${params}.`);
            }, 0)
            return this
        }
        rest(duration) {
            // 异步
            setTimeout(() => {
                delay(duration * 1000)
                console.log(`Start learning after ${duration} second.`);
            }, 0)
            return this
        }
        restFirst(duration) {
            /*同步，当链式调用中使用到restFirst方法时,
            先执行这里的同步代码，再执行其他的异步代码*/
            delay(duration * 1000)
            console.log(`Start learning after ${duration} second.`);
            return this
        }
    }
    return new HardMan(name)
}

hardMan('panpan')
hardMan('panpan').rest(3).study('JavaScript')
hardMan('panpan').study('React').restFirst(3)