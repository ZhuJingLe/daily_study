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
function getName(n) {
    if (typeof n == 'string') {
        return n;
    }
    else {
        return n();
    }
}
var P;
var s = p.name;
var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing == 'ease-in') {
            // ...
        }
        else if (easing == 'ease-out') {
            // ...
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, 'ease-in');
// button.animate(0,0,'unease'); // error  除 Easing 声明的三个字符串以外 传入其他的值会报错
// 数字字面量类型
function rollDie() {
    // ...
    return 1;
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
    }
}
// 完整性检查
function area2(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        default: return assertNever(s);
    }
}
function assertNever(s) {
    throw new Error("error!");
}
// 多态的 this 类型：表示的是某个包含类或接口的子类型；
var BasicCalculator = /** @class */ (function () {
    function BasicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BasicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BasicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BasicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BasicCalculator;
}());
var instance = new BasicCalculator(10).add(5).multiply(2).currentValue();
// 以上这个类使用了 this 类型，可以继承它
var extendClass = /** @class */ (function (_super) {
    __extends(extendClass, _super);
    function extendClass(value) {
        if (value === void 0) { value = 0; }
        return _super.call(this, value) || this;
    }
    extendClass.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this;
    };
    return extendClass;
}(BasicCalculator));
var outputVal = new extendClass(2).multiply(5).sin().add(1).currentValue();
// 索引类型
// keyof T 表示 T 上已知的公共属性名的联合 例：keyof Person -> 'name' | 'age'
// T[K] 索引访问操作符 
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var P3 = {
    name: 'hh',
    age: 18
};
var strings = pluck(P3, ['name']);
var keys; // string
var val009; // number
