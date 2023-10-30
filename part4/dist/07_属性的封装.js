"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        getName() {
            return this._name;
        }
        setName(name) {
            this._name = name;
        }
        get name() {
            return this._name;
        }
        set name(name) {
            this._name = name;
        }
    }
    const per = new Person("1111", 19);
    console.log(per);
    //属性可以修改
    // per.getName();
    // per.setName("22222");
    console.log(per.name, "name");
    per.name = "3333333333333333333333333333333";
    console.log(per);
})();
