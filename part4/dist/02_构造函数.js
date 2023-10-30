"use strict";
//important!!!
//构造函数
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        // alert("汪汪汪")
        console.log(this, this.name, "this");
    }
}
const dog = new Dog("111", 1);
const dog2 = new Dog("222", 2);
const dog3 = new Dog("333", 3);
console.log(dog, dog2, dog3);
console.log(dog.bark());
