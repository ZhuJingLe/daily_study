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
// 声明一个简单的类并创建一个实例
var Hello = /** @class */ (function () {
    function Hello(name) {
        this.name = name;
    }
    Hello.prototype.greet = function () {
        console.log('hello ' + this.name);
    };
    return Hello;
}());
console.log(new Hello('zjl'));
// 继承
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.getNum = function (num) {
        console.log("\u8FD9\u79CD\u52A8\u7269\u73B0\u5B58" + num + "\u53EA");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.eat = function () {
        console.log('动物都需要觅食~~~');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.getNum(100);
dog.eat();
// 公共、私有、受保护的修饰符
