// 枚举
// 1.数字枚举
enum Direction {
    up, // 0
    down,// 1
    left,// 2
    right // 2
}
console.log(Direction);
// 2.字符串枚举
enum Direction2 {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right'
}
// 3.异构枚举
enum diffType {
    str = 'hello',
    num = 1,
}
// 4.计算的和常量成员
// 含字符串值成员的枚举中不允许使用计算值
enum Data {
    none,
    read = 1 << 1,
    write = 1 << 2,
    readWrite = read | write,
    x = 'hello'.length
}
console.log(Data);

// 联合枚举与枚举成员的类型

// 运行时的枚举  枚举是在运行时真正存在的对象
enum E {
    X,Y,Z
}
function f(obj:{X:number}){
    return obj.X
}
f(E);

// 反向映射  根据 enum 的值获取对象属性名  注意：字符串枚举成员除外
enum Data2 {
    A
}
var a = Data2.A;
console.log(Data2[a]); // 'A'

// const 枚举
const enum Data3 {
    A = 1,
    B = A * 2
}
// console.log(Data3); // error！！

// 外部枚举：用来描述已经存在的枚举类型的形状
declare enum Data4 {
    A= 1,
    B,
    C = 2
}




