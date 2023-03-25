function checkFun(value) {

    // 原代码 

    // if(value === '小狗'){
    //     console.log("小狗汪汪叫");
    // }else if(value === '小猫'){
    //     console.log("小猫喵喵叫");
    // }else if(value === '老虎'){
    //     console.log("老虎嗷嗷叫");
    // }else{
    //     console.log("什么也不叫");
    // }

    // ----------------------------------------------------------------

    // 存储条件 及行为
    // const targetList = [
    //     ["小狗", "小狗汪汪叫"],
    //     ["小猫", "小猫喵喵叫"],
    //     ["老虎", "老虎嗷嗷叫"]
    // ]
    // let target = targetList.find(item => item[0] === value)
    // if (target) {
    //     return console.log(target[1])
    // } else {
    //     return console.log('什么也不叫')
    // }

    // ----------------------------------------------------------------

    // 模糊查找
    const targetList = [
        [() => value.includes('狗'), () => console.log("小狗汪汪叫")],
        [() => value.includes('猫'), () => console.log("小猫喵喵叫")],
        [() => value.includes('虎'), () => console.log("老虎嗷嗷叫")]
    ]
    let target = targetList.find(item => item[0]())
    if (target) {
        return target[1]()
    } else {
        return console.log('什么也不叫')
    }
}
checkFun("猫咪")