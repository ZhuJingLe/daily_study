/**
 * TS 函数
 * 1.匿名函数
 * 2.有名函数
*/
var sub = function (x, y) {
    return x - y;
};
function add(x, y) {
    return x + y;
}
/**
 * TS 函数类型
 * */
//  1.为函数定义类型
function add2(x, y) {
    return x + y;
}
var add3 = function (x, y) { return x + y; };
//2. 书写函数的完整类型   函数的类型只是由参数类型和返回值组成的
var add4 = function (x, y) {
    return x + y;
};
/**
 * 可选参数和默认参数
 *
*/
// 1. 可选参数:必须跟在必填参数后面
function printname(firstname, lastname) {
    if (lastname) {
        return lastname + firstname;
    }
    else {
        return firstname;
    }
}
console.log(printname('z', 'll'));
// console.log(printname('z','ll','324')); error
console.log(printname('z'));
// 2. 默认参数
function printname2(firstname, lastname) {
    if (lastname === void 0) { lastname = 'hahah'; }
    if (lastname) {
        return lastname + firstname;
    }
    else {
        return firstname;
    }
}
/**
 * 剩余参数
*/
function bulidName(firstname) {
    var lastnameList = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        lastnameList[_i - 1] = arguments[_i];
    }
    return firstname + lastnameList.join(' ');
}
console.log(bulidName('z', 'heihei', 'haha', 'hehe'));
// this 和 箭头函数
var personObj = {
    name: 'zjl',
    age: 18,
    printInfo: function () {
        return function () {
            console.log(this, this.name + this.age); // this == window
        };
    }
};
var fun = personObj.printInfo();
var val = fun();
console.log(val);
// this 参数
