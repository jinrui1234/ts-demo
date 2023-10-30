//object 表示一个js对象

// let h: object;
// h = {};
// h = function () { }; 

//1、{} 用来指定对象中可以包含哪些属性
//语法：{属性名：属性值，属性名：属性值}

//在属性名后面加上？,表示属性可选
//可以用接口类型来处理
let h: { name: string, age?: number };
h = { name: "hello", age: 18 };

//[propName: string]: any 任意类型的属性
let w: { name: string, [propName: string]: any };
w = { name: "hello", age: 18 };


//2、设置函数结构的类型声明
// 语法：{行参：类型，行参：类型...} => 返回值 

let r: (a: number, b: number) => number
r = function (a, b): number {
    return a + b;
}


//3、数组
//两种写法:
let y: string[]
//let y:Array<string>

y = ["111", "222"]


//4、元组：固定长度的数组
let z: [string, string];
z = ["111", "222"]


//5、枚举 enum (将可能的情况列举出来)
// let i: { name: string, gender: 0 | 1 };
// i = { name: "hello", gender: 1 };

enum Gender {
    Male = 0,
    Female = 1
}


//6、链接符号
//& 表示同时
let j: { name: string } & { age: number };
j = { name: "111", age: 18 };


//7、类型别名(简化类型使用)
//类似于接口类型
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
k = 2;
l = 5;


