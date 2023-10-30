"use strict";
(function () {
    //abstract--定义抽象类，不能用来创建对象
    //专门用于继承
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHi() {
            console.log("hello");
        }
    }
    //继承
    class Dog extends Animal {
        constructor(name) {
            //super  表示父类
            super(name);
        }
    }
    const dog = new Dog("dog");
})();
