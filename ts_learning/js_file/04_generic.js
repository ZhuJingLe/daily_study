/**
 * 泛型：创建可重用的组件，一个组件可以支持多种类型的数据
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 泛型函数
// example:定义一个传入参数与返回参数一致的类型变量
// 参数是任意类型
function identity(arg) {
    // console.log(arg.length);  //error!!
    return arg;
}
// 使用以上泛型函数:两种方法
var output = identity('hello');
var output2 = identity('hello');
// 参数是任意类型的数组(或类型为 T 的数组)
function identity2(arg) {
    console.log(arg.length); // ok
    return arg;
}
// 泛型类型 T
// 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明那样
function identity3(arg) {
    return arg;
}
var myIdentity = identity3;
// also
var myIdentity2 = identity3;
// 使用带有调用签名的对象字面量来定义泛型函数->这种方法让我们联想到泛型接口
var myIdentity3 = identity3;
var myIdentity4 = identity3;
// 泛型类
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    return GenericClass;
}());
var myGeneric = new GenericClass();
myGeneric.value = 0;
myGeneric.add = function (x, y) { return x + y; };
function LoggingLength(arg) {
    console.log(arg.length);
    return arg;
}
// 2. 在泛型约束中使用类型参数
// function getProperty(obj:T,key:K){
//     return obj[key]
// }
// let x = {a:'ajl',b:'vue',c:'react'};
// getProperty(x,'a');
// 3. 在泛型里使用类类型
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Ani = /** @class */ (function () {
    function Ani() {
    }
    return Ani;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Ani));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Ani));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
