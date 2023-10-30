"use strict";
(function () {
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
})();
