/**
 * 泛型：创建可重用的组件，一个组件可以支持多种类型的数据
*/

// 泛型函数
// example:定义一个传入参数与返回参数一致的类型变量
// 参数是任意类型
function identity<T>(arg:T):T{
    // console.log(arg.length);  //error!!
    return arg;
}
// 使用以上泛型函数:两种方法
let output = identity<string>('hello');
let output2 = identity('hello');
// 参数是任意类型的数组(或类型为 T 的数组)
function identity2<T>(arg:T[]):T[]{
    console.log(arg.length);  // ok
    return arg;
}



// 泛型类型 T
// 泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明那样
function identity3<T>(arg:T):T{
    return arg;
}
let myIdentity:<T>(arg:T) => T = identity3;
// also
let myIdentity2:<U>(arg:U) => U = identity3;

// 使用带有调用签名的对象字面量来定义泛型函数->这种方法让我们联想到泛型接口
let myIdentity3:{<T>(arg:T):T} = identity3;
// 泛型接口
interface Generic {
    <T>(arg:T):T
}
let myIdentity4:Generic = identity3;


// 泛型类
class GenericClass<T> {
    value: T;
    add: (x:T,y:T) => T;
}
let myGeneric = new GenericClass<number>();
myGeneric.value = 0;
myGeneric.add = function(x,y){return x + y};


// 泛型约束
// 1. 约束传入的参数必须包含 length 属性
interface Lengthwise {
    length: number
}
function LoggingLength<T extends Lengthwise>(arg:T):T{ // 如果 arg 是 number 类型则会报错
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
class BeeKeeper {
    hasMask: boolean;
}
class ZooKeeper {
    nametag: string;
}
class Ani {
    numLegs: number;
}
class Bee extends Ani {
    keeper: BeeKeeper;
}
class Lion extends Ani {
    keeper: ZooKeeper;
}
function createInstance<A extends Ani>(c: new () => A): A {
    return new c();
}
createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!