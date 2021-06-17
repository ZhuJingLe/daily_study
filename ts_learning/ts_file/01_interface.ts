
// 函数参数类型检查
function printName(personObj:{name:string}){
    console.log(personObj.name);
}
printName({name:'zjl'});

// 引入接口概念:用来描述参数的要求
interface personType {
    name:string
}
function printName2(personObj:personType){
    console.log(personObj.name);
}
printName2({name:'zjl'})

// 接口可选属性
/*
    好处： 
    1. 预定义可能不存在的属性
    2. 引用了不存在属性会报错
*/
interface personType2{
    name:string;
    age?:number;
    address?:string;
}
function returnInfo(personObj:personType2):string{
    var str = '我的姓名是' + personObj.name;
    if(personObj.age){
        str = str + ',我的年龄是：' + personObj.age;
    }
    if(personObj.address){
        str = str + ',我的住址是：' + personObj.address;
    }
    return str;
}
returnInfo({name:'zjl',address:'ShangHai China'});

// 只读属性 
interface Persontype3{
    readonly name:string,
}
var person:Persontype3 = {name:'zjl'};
// person.name = 'vae'   error
// readonly vs const
/*const 定义作为变量的值 readonly 一般是用于作为属性的值*/

// 额外的属性检查
/*
    如下例：
    接口预定义了两个属性 name 和 age可选参数
    当传递给函数时的 “age” 写错了时，检查到 “agw” 时会被作为额外属性，TypeScript 会报错
    跳过额外参数检查有三种方法：
        + 类型断言->printName3({name:'zjl',agw:18} as Persontype4)
        + 字符串索引签名
        interface Persontype4{
            name:string,
            age?:number,
            [property:string]:any
        } 
        + 将需要传递的参数赋值给一个变量再进行传递。
        var obj = {name:'zjl',agw:18};
        printName3(obj);
*/
interface Persontype4{
    name:string;
    age?:number;
}
function printName3(obj:Persontype4){
    console.log(obj.name);
}
// printName3({name:'zjl',agw:18}) // error
printName3({name:'zjl',agw:18} as Persontype4);



// 函数类型：接口不仅能用来描述普通对象属性，还可以描述函数类型
/*
    参数名可以重写 但对应位置上的类型不能改变
*/
interface defineFun {
    (name:string,age:number):void
}
let printName4:defineFun;
printName4 = function(myName:string,myage:number){
    console.log(name);
}



// 可索引类型：描述可通过索引而获得的值 eg：a[0],obj[name]
/*
    利用索引签名
*/ 
interface Suoyin{
    [property:number]:string
}
let arr:Suoyin;
arr = ['996','007','666','999'];
console.log(arr[0]);
// 类型“string”的属性“name”不能赋给字符串索引类型“number”
// interface Dic{
//     length:number,
//     name:string,
//     [index:string]:number,
// }


// 类类型：强制某个类去符合某种契约
// 实现接口
interface ClockInterface {
    currentTime:Date;
    setTime(d:Date)
}
class Clock implements ClockInterface {
    currentTime:Date;
    setTime(d:Date){
        this.currentTime = d;
    }
}
// 类静态部分和实例部分的区别
// interface ClockConstructor {
//     new (hour: number, minute: number);
// }

// class Clock2 implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }



// 继承接口：接口也是可以继承的
interface PersonInfo {
    name:string
}
interface PersonDetail extends PersonInfo{
    age:number
}
let person2 = <PersonDetail>{};// 断言
person2.name = 'zjl';
person2.age = 19;


// 混合类型
interface Mix{
    (start:number):string;
    interval:number;
    reset():void;
}



// 接口继承类
/*
    当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，
    但并没有提供具体实现一样。 接口同样会继承到类的private和protected成员。 
    这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
*/
class Cons {
    private state:string; // 子类才能继承该属性
}
interface Inter extends Cons {
    select();
}