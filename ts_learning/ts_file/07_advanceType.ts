// 高级类型
// 1. 交叉类型
function extend<T,U>(first: T,second: U):T & U{
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (const id in second) {
        if (!result.hasOwnProperty(id)) {
            console.log(9999);
            (<any>result)[id] = (<any>second)[id];
        }
    }
    console.log(result);
    return result;
}
class Personb {
    constructor(public name: string) {}
}
interface InterData {
    log():void
}
class ClassInterData implements InterData {
   log(){}
}
var constantObj = extend(new Personb('hello'),new ClassInterData());
constantObj.name;
constantObj.log();

// 2.联合类型
function printSome(value: string,data: string | number){
    if(typeof data == 'number'){
        return (data + 1) + value;
    }
    if(typeof data == 'string'){
        return value + data;
    }
    throw new Error('非 number 和 string 类型');
}
printSome('hello',996);
// printSome('hello',false); // error 

// 可选参数  可选参数会被自动地加上 | undefined
function fun001(name: string,age?: number){}
fun001('hello',12);
fun001('hello',undefined);
fun001('hello');

// 类型别名：类型别名会给一个类型起个新名(只是创建了一个新名来引用那个类型)
type Name = string;
type NameResolve = () => string;
type NameOrResolve = Name | NameResolve;
function getName(n: NameOrResolve):Name{
    if(typeof n == 'string'){
        return n;
    }else{
        return n();
    }
}
// 同接口一样类型别名也可以是泛型
type Container<T> = {value: T};
// 类型别名 + 交叉类型
type LinkedList<T> = T & { next: LinkedList<T> };
interface Person002 {
    name: string
}
var P: LinkedList<Person>;
var s = p.name;


// 接口 VS 类型别名
/**
 * 类型别名不能被 extends 和 implements，也不能 继承和实现其他类型
 * 尽量使用接口代替类型别名，一般接口无法实现的类型就使用 类型别名
*/
type Alias = { num: number };
interface Interface {
    num: number
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;


// 字符串字面量类型
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number,dy: number,easing: Easing){
        if(easing == 'ease-in'){
            // ...
        }else if(easing == 'ease-out'){
            // ...
        }
    }
}
let button = new UIElement();
button.animate(0,0,'ease-in');
// button.animate(0,0,'unease'); // error  除 Easing 声明的三个字符串以外 传入其他的值会报错


// 数字字面量类型
function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
    // ...
    return 1;
}

// 可辨识联合：通过合并单例类型、联合类型、类型保护、类型别名来创建的
interface Square {
    kind: 'square';
    size: number;
}
interface Rectangle {
    kind: 'rectangle';
    width: number;
    height: number
}
interface Circle {
    kind: 'circle';
    radius: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
    switch(s.kind){
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI*s.radius**2
    }
}


// 完整性检查
function area2(s: Shape) {
    switch(s.kind){
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI*s.radius**2;
        default: return assertNever(s)
    }
}
function assertNever(s:never):never {
    throw new Error("error!")
}

// 多态的 this 类型：表示的是某个包含类或接口的子类型；
class BasicCalculator {
    public constructor(protected value: number = 0){}
    public currentValue():number {
        return this.value;
    }
    public add(operand: number): this{
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this{
        this.value *= operand;
        return this;
    }
}
let instance = new BasicCalculator(10).add(5).multiply(2).currentValue();
// 以上这个类使用了 this 类型，可以继承它
class extendClass extends BasicCalculator {
    constructor(value = 0) {
        super(value)
    }
    public sin(){
        this.value = Math.sin(this.value);
        return this;
    }
}
let outputVal = new extendClass(2).multiply(5).sin().add(1).currentValue();

// 索引类型
// keyof T 表示 T 上已知的公共属性名的联合 例：keyof Person -> 'name' | 'age'
// T[K] 索引访问操作符 
function pluck<T,K extends keyof T>(o:T,names: K[]): T[K][] {
    return names.map(n => o[n]);
}
interface Person003 {
    name: string;
    age: number
}
let P3:Person003 = {
    name:'hh',
    age:18
}
let strings:(string | number)[] = pluck(P3,['name']);


// 索引类型和字符串索引签名
interface Data004<T>{
    [value: string]: T
}
let keys: keyof Data004<number>; // string
let val009: Data004<number>['foo']; // number


// 映射类型： 从旧类型中创建新类型的一种方式
type Readonly001<T> = {
    readonly [P in keyof T]: T[P]
}
type Partial001<T> = {
    [P in keyof T]?: T[P]
}
// 使用
type ReadonlyPerson = Readonly001<Person003>;
type PersonPartial = Partial001<Person003>;
