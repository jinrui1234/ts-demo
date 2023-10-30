//声明一个变量a, 同时指定它的类型为number

//1、a设置类型为number，在以后使用中a的值只能为数字
let a: number;
a = 10;
// a = "hello";    //会报错


//2、声明类型，并且赋值
let b: boolean = true;


//3、如果变量的声明和赋值是同时进行的，ts可以自动对变量进行类型检测
let c = false;
c = true;
// c = 1111   //报错


//4、函数传参类型声明,返回值类型声明
function sum(a: number, b: number): number {
    return a + b;
}
sum(10, 20);
// sum(10, "hello");   //报错
//sum(1,2,3)   //多穿参，报错