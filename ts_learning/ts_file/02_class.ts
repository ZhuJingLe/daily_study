// 声明一个简单的类并创建一个实例
class Hello {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    greet(){
        console.log('hello '+this.name);
    }
}
console.log(new Hello('zjl'));



// 继承
class Animal {
    getNum(num:number){
        console.log(`这种动物现存${num}只`);
    }
}
class Dog extends Animal {
    eat(){
        console.log('动物都需要觅食~~~');
        
    }
}
let dog = new Dog();
dog.getNum(100);
dog.eat();



// 公共、私有、受保护的修饰符
// public 
class Animal2 {
    public name:string;
    public constructor(name:string){
        this.name = name;
    }
}
/*
 private:成员被 private 标记时，就不能在声明它的类的内部访问；
*/ 
class Animal3 {
    private name:string;
    constructor(name:string) {
        this.name = name;
    }
}
// new Animal3('haha').name; // 属性“name”为私有属性，只能在类“Animal3”中访问
/*
    protected:与 private 类似 但是可以在派生类中访问它
*/ 
class Animal4 {
    protected name:string
    constructor(name:string) {
        this.name = name;  
    }
}
class Dog2 extends Animal4 {
    type:string;
    constructor(name:string,type:string) {
        super(name);
        this.type = type;
    }
    getInfo(){
        console.log('dog 的名字是'+this.name+'品种是'+this.type);
    }
}
new Dog2('小黑','哈士奇').getInfo();

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
class Animal5 {
    readonly name:string
    constructor(name:string) {
        this.name = name;
    }
}
// new Animal5('hah')='heihe';  error！

/**
 * 参数属性：将变量声明和赋值合并在一起
 * */ 
class Animal6 {
    readonly type:string = '哈士奇'
    constructor(readonly name:string) {
        
    }
}
console.log(new Animal6('mark').name);
console.log(new Animal6('hah'),Animal6);


/**
 * 存取器： 使用 get/set 拦截对对象成员的访问
 * */ 
let pwd = 123;
class Animal7 {
    private _name:string;
    get name():string{
        console.log('get~~~');
        return this._name;
    }
    set name(name:string){
        console.log('set~~~~');
        if(pwd == 123){
            this._name = name;
        }else{
            console.log('pwd is error');
            
        }
    }
}
let anl = new Animal7();
anl.name = 'haha'; // set
if(anl.name){ // get
    console.log(anl.name) // get
}


/**
 * 以上的讨论都是类的实例成员（类被实例化时才会被初始化） 接下来介绍 类的静态成员
 * 静态属性：这些属性存在于类本身而不是类的实例上面
 * */ 
class Area {
    static wh = {w:0,h:0};
}
console.log(Area.wh);


/**
 * 抽象类：一般不会直接被实例化而是作为其他派生类的基类
 * 不同于接口它可以包含成员实现细节
 * abstract 关键字实现的抽象方法 必须在抽象类中实现；
 * */ 
// eg:
abstract class Animal8 {
    abstract speak():void;
    move():void {
        console.log('moving~~~~~');
    }
}
// eg2
abstract class Animal9 {
    constructor(public name:string) {};
    printName(){
        console.log('thia animal name is '+this.name);
    }
    abstract printInfo():void; // 必须在抽象子类中实现
}
class Cat extends Animal9 {
    constructor(name:string){
        super(name)
    }
    printInfo(){
        console.log('子类~~~~');
    }
    getinfo(){
        console.log('子类~~~');
    }
}
var catobj = new Cat('jerry');
catobj.getinfo();
catobj.printInfo();
catobj.printName();



/**
 *高级技巧
  构造函数
  在 typescript 中定义一个类的时候，其实是定义了类的实例类型
 * */ 
class Animal11 {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    print(){
        return 'hello' + this.name;
    }
}
let an2:Animal11;
an2 = new Animal11('zjl');
an2.print();

/**
 * 把类当作接口使用
 * */ 
class Person {
    name:string;
    age:number;
}
interface Person2 extends Person {
    address:string
}
let stu:Person2 = {name:'haha',age:18,address:'ShangHai China'}