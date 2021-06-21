// 枚举
// 1.数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right"; // 2
})(Direction || (Direction = {}));
console.log(Direction);
// 2.字符串枚举
var Direction2;
(function (Direction2) {
    Direction2["up"] = "up";
    Direction2["down"] = "down";
    Direction2["left"] = "left";
    Direction2["right"] = "right";
})(Direction2 || (Direction2 = {}));
// 3.异构枚举
var diffType;
(function (diffType) {
    diffType["str"] = "hello";
    diffType[diffType["num"] = 1] = "num";
})(diffType || (diffType = {}));
// 4.计算的和常量成员
// 含字符串值成员的枚举中不允许使用计算值
var Data;
(function (Data) {
    Data[Data["none"] = 0] = "none";
    Data[Data["read"] = 2] = "read";
    Data[Data["write"] = 4] = "write";
    Data[Data["readWrite"] = 6] = "readWrite";
    Data[Data["x"] = 'hello'.length] = "x";
})(Data || (Data = {}));
console.log(Data);
// 联合枚举与枚举成员的类型
// 运行时的枚举  枚举是在运行时真正存在的对象
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function f(obj) {
    return obj.X;
}
f(E);
// 反向映射  根据 enum 的值获取对象属性名  注意：字符串枚举成员除外
var Data2;
(function (Data2) {
    Data2[Data2["A"] = 0] = "A";
})(Data2 || (Data2 = {}));
var a = Data2.A;
console.log(Data2[a]); // 'A'
