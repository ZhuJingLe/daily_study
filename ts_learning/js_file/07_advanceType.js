// 高级类型
// 1. 交叉类型
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            console.log(9999);
            result[id] = second[id];
        }
    }
    console.log(result);
    return result;
}
var Personb = /** @class */ (function () {
    function Personb(name) {
        this.name = name;
    }
    return Personb;
}());
var ClassInterData = /** @class */ (function () {
    function ClassInterData() {
    }
    ClassInterData.prototype.log = function () { };
    return ClassInterData;
}());
var constantObj = extend(new Personb('hello'), new ClassInterData());
constantObj.name;
constantObj.log();
// 2.联合类型
function printSome(value, data) {
    if (typeof data == 'number') {
        return (data + 1) + value;
    }
    if (typeof data == 'string') {
        return value + data;
    }
    throw new Error('非 number 和 string 类型');
}
printSome('hello', 996);
// printSome('hello',false); // error 
// 可选参数  可选参数会被自动地加上 | undefined
function fun001(name, age) { }
fun001('hello', 12);
fun001('hello', undefined);
fun001('hello');
