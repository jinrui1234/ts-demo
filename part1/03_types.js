//1、字面量:也可以使用字面量进行类型声明
var m;
// m = 11   //报错
//2、可以使用｜来链接多个类型（联合类型）
var g;
g = 123;
g = "123";
// g = true   //报错
var n;
n = "1111";
// n = "3333"   //报错
//3、any 表示任意类型,可以随意赋值，相当于关闭了类型检测
//使用ts时间，不建议使用any    
// let a    //隐试any
var d;
d = 111;
d = "111";
//4、unknown  表示未知类型的值
//any +  unknown 的区别:
//any 类型的变量赋值给指定类型的变量，不会报错，相当于关闭了其它变量的类型检测
//unknown(类型安全的any,不能直接赋值给其它变量)  类型的变量赋值给指定类型的变量，会报错
var e;
e = 111;
e = "111";
e = true;
//5、类型断言,可以用来告诉解析器变量的实际类型
//两种写法:
// let s = e as string;
// let s = <string>e;
//6、函数返回值
function add() {
    return "10";
}
//void  表示没有返回值
function test() {
    // return undefined
}
//never 表示永远不会返回结果,常用于报错
function test2() {
    throw new Error("错误");
}
