// 类型推论
let data = 996; // 类型被推断为 number  推断发生在初始化变量和成员

// 最佳通用类型
let data2 = [1,false,'hello']; // (nunber | boolean | string)[]
let data3 = [function(){},1,false];


// 上下文类型
// 类型推论可能按照相反的方向进行
window.onmouseover = function(e){
    console.log(e.button);
}