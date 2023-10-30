//object 表示一个js对象
// let h: object;
// h = {};
// h = function () { }; 
//1、{}用来指定对象中可以包含哪些属性
//语法：{属性名：属性值，属性名：属性值}
//在属性名后面加上？,表示属性可选
var h;
h = { name: "hello", age: 18 };
//[propName: string]: any 任意类型的属性
var w;
w = { name: "hello", age: 18 };
//2、设置函数结构的类型声明
// 语法：{行参：类型，行参：类型...} => 返回值 
var r;
r = function (a, b) {
    return a + b;
};
//3、数组
//两种写法:
var y;
//let y:Array<string>
y = ["111", "222"];
//4、元组：固定长度的数组
var z;
z = ["111", "222"];
//5、枚举 enum (将可能的情况列举出来)
// let i: { name: string, gender: 0 | 1 };
// i = { name: "hello", gender: 1 };
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
//6、链接符号
//& 表示同时
var j;
j = { name: "111", age: 18 };
var k;
var l;
k = 2;
l = 5;
