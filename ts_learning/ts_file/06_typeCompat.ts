// 类型兼容性
/**
 * TS 里的类型兼容是基于结构子类型的；
 * 结构类型：使用其成员来描述类型的方式，与名义类型形成对比；
*/
interface Named {
    name: string
}
class Persona {
    name: string;
}
let p: Named;
p = new Persona();
// TS 结构化类型系统的基本规则是，如果 X 要兼容 Y，那么 Y 至少具有与 X 相同的属性；
// eg
let info = {name:'evan',age:17};
p = info;

// eg: 检查函数参数时使用相同的规则
function logFun(name: Named){
    console.log(name);
}
logFun(info);

// 比较两个函数
// simple eg
let x = (a: number)=>0;
let y = (b: number, c: number)=> 0;
y = x; // ok  x 的参数（个数 和 对应类型）包含在 y 中
// x = y; // error

// 根据返回值判断
let g = () => ({name:'vue'});
let b = () => ({name:'vue',dec:'front end framework'});
g = b; // ok  b包含a返回值的个数和类型
// b = a; // error

// 函数参数的双向协变


// 可选参数及剩余参数


