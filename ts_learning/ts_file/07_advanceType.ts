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


