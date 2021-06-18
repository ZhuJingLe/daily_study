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
// public 
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    return Animal2;
}());
/*
 private:成员被 private 标记时，就不能在声明它的类的内部访问；
*/
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    return Animal3;
}());
// new Animal3('haha').name; // 属性“name”为私有属性，只能在类“Animal3”中访问
/*
    protected:与 private 类似 但是可以在派生类中访问它
*/
var Animal4 = /** @class */ (function () {
    function Animal4(name) {
        this.name = name;
    }
    return Animal4;
}());
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(name, type) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        return _this;
    }
    Dog2.prototype.getInfo = function () {
        console.log('dog 的名字是' + this.name + '品种是' + this.type);
    };
    return Dog2;
}(Animal4));
new Dog2('小黑', '哈士奇').getInfo();
// PEIVATE  error example!!!
// class Animal5 {
//     private or protected name:string
//     private or protected constructor(name:string) {
//         this.name = name;  
//     }
// }
// new Animal5(); error
/**
 * readonly 修饰符&&关键字
 * 使用该关键字可以将属性设置为只读的
 * 只读属性必须在声明或构造函数里被初始化->?
 * */
var Animal5 = /** @class */ (function () {
    function Animal5(name) {
        this.name = name;
    }
    return Animal5;
}());
// new Animal5('hah')='heihe';  error！
/**
 * 参数属性：将变量声明和赋值合并在一起
 * */
var Animal6 = /** @class */ (function () {
    function Animal6(name) {
        this.name = name;
        this.type = '哈士奇';
    }
    return Animal6;
}());
console.log(new Animal6('mark').name);
console.log(new Animal6('hah'), Animal6);
/**
 * 存取器： 使用 get/set 拦截对对象成员的访问
 * */
var pwd = 123;
var Animal7 = /** @class */ (function () {
    function Animal7() {
    }
    Object.defineProperty(Animal7.prototype, "name", {
        get: function () {
            console.log('get~~~');
            return this._name;
        },
        set: function (name) {
            console.log('set~~~~');
            if (pwd == 123) {
                this._name = name;
            }
            else {
                console.log('pwd is error');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Animal7;
}());
var anl = new Animal7();
anl.name = 'haha'; // set
if (anl.name) { // get
    console.log(anl.name); // get
}
/**
 * 以上的讨论都是类的实例成员（类被实例化时才会被初始化） 接下来介绍 类的静态成员
 * 静态属性：这些属性存在于类本身而不是类的实例上面
 * */
var Area = /** @class */ (function () {
    function Area() {
    }
    Area.wh = { w: 0, h: 0 };
    return Area;
}());
console.log(Area.wh);
/**
 * 抽象类：一般不会直接被实例化而是作为其他派生类的基类
 * 不同于接口它可以包含成员实现细节
 * abstract 关键字实现的抽象方法 必须在抽象类中实现；
 * */
// eg:
var Animal8 = /** @class */ (function () {
    function Animal8() {
    }
    Animal8.prototype.move = function () {
        console.log('moving~~~~~');
    };
    return Animal8;
}());
// eg2
var Animal9 = /** @class */ (function () {
    function Animal9(name) {
        this.name = name;
    }
    ;
    Animal9.prototype.printName = function () {
        console.log('thia animal name is ' + this.name);
    };
    return Animal9;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.printInfo = function () {
        console.log('子类~~~~');
    };
    Cat.prototype.getinfo = function () {
        console.log('子类~~~');
    };
    return Cat;
}(Animal9));
var catobj = new Cat('jerry');
catobj.getinfo();
catobj.printInfo();
catobj.printName();
/**
 *高级技巧
  构造函数
  在 typescript 中定义一个类的时候，其实是定义了类的实例类型
 * */
var Animal11 = /** @class */ (function () {
    function Animal11(name) {
        this.name = name;
    }
    Animal11.prototype.print = function () {
        return 'hello' + this.name;
    };
    return Animal11;
}());
var an2;
an2 = new Animal11('zjl');
an2.print();
/**
 * 把类当作接口使用
 * */
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var stu = { name: 'haha', age: 18, address: 'ShangHai China' };
