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