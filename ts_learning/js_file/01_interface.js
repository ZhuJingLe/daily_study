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
/*
    当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，
    但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。
    这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
*/ 
