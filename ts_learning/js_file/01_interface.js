// 函数参数类型检查
function printName(personObj) {
    console.log(personObj.name);
}
printName({ name: 'zjl' });
function printName2(personObj) {
    console.log(personObj.name);
}
printName2({ name: 'zjl' });
function returnInfo(personObj) {
    var str = '我的姓名是' + personObj.name;
    if (personObj.age) {
        str = str + ',我的年龄是：' + personObj.age;
    }
    if (personObj.address) {
        str = str + ',我的住址是：' + personObj.address;
    }
    return str;
}
returnInfo({ name: 'zjl', address: 'ShangHai China' });
var person = { name: 'zjl' };
function printName3(obj) {
    console.log(obj.name);
}
// printName3({name:'zjl',agw:18}) // error
printName3({ name: 'zjl', agw: 18 });
var printName4;
printName4 = function (myName, myage) {
    console.log(name);
};
var arr;
arr = ['996', '007', '666', '999'];
console.log(arr[0]);
var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var person2 = {}; // 断言
person2.name = 'zjl';
person2.age = 19;
// 接口继承类
