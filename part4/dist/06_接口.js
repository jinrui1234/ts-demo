"use strict";
(function () {
    //描述一个对象
    // type myType = {
    //     name: string,
    //     age?: number
    // }
    const obj = {
        name: "111",
        gender: "222"
    };
    //使用类去实现一个接口
    //实现接口就是使类满足接口的要求
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("hello");
        }
    }
})();
