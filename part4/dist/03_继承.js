"use strict";
//继承：子类的方法会覆盖父类的方法
(function () {
    //父类
    class animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello(type) {
            console.log(`${type}`);
        }
    }
    //继承
    class Cat extends animal {
        constructor(name, age) {
            super(name, age);
        }
        run() {
            console.log(`跑`);
        }
    }
    class Dog extends animal {
        constructor(name, age) {
            super(name, age);
        }
    }
    const dog = new Dog('狗', 11);
    const cat = new Cat('猫', 22);
    console.log(dog, cat);
    dog.sayHello("111111");
    cat.sayHello("222222");
    cat.run();
})();
