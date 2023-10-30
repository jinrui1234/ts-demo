"use strict";
//使用class关键字定义一个类
class Person {
    constructor() {
        // 构造函数
        // constructor() {}
        //实例属性,通过对象实例访问
        this.name = "111";
        this.age = 18;
    }
    //readonly ==> 只读属性
    //定义方法
    static sayHello() {
        console.log("hello");
    }
}
//static  ==>  定义静态属性，通过对象（类）直接访问
Person.sex = "男";
const per = new Person();
console.log(per, Person.sex, 111);
