//使用class关键字定义一个类

class Person {
    // 构造函数
    // constructor() {}

    //实例属性,通过对象实例访问
    name: string = "111"
    age: number = 18

    //static  ==>  定义静态属性，通过对象（类）直接访问
    static sex: string = "男"

    //readonly ==> 只读属性

    //定义方法
    static sayHello() {
        console.log("hello");
    }
}

const per = new Person();

console.log(per, Person.sex, 111);