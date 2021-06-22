var Persona = /** @class */ (function () {
    function Persona() {
    }
    return Persona;
}());
var p;
p = new Persona();
// TS 结构化类型系统的基本规则是，如果 X 要兼容 Y，那么 Y 至少具有与 X 相同的属性；
// eg
var info = { name: 'evan', age: 17 };
p = info;
// eg: 检查函数参数时使用相同的规则
function logFun(name) {
    console.log(name);
}
logFun(info);
// 比较两个函数
// simple eg
var x = function (a) { return 0; };
var y = function (b, c) { return 0; };
y = x; // ok  x 的参数（个数 和 对应类型）包含在 y 中
// x = y; // error
// 根据返回值判断
var g = function () { return ({ name: 'vue' }); };
var b = function () { return ({ name: 'vue', dec: 'front end framework' }); };
g = b; // ok  b包含a返回值的个数和类型
// b = a; // error
// 函数参数的双向协变
// 可选参数及剩余参数
