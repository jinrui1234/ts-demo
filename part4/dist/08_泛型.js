"use strict";
//泛型
//在定义函数或者类时，遇到类型不明确就可以使用泛型
//案例一    ----泛型函数
function fn(a) {
    return a;
}
;
fn(10); //自动推断类型
fn('10'); // 指定泛型（类型）
//案例二
function test(a, b) {
    return a;
}
;
test("1111", 10);
function fn3(a) {
    return a.length;
}
fn3({ length: 10 });
//案例四
class MyClass {
    constructor(data) {
        this.data = data;
    }
}
const my = new MyClass("10");
