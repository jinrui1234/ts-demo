(function () {
    //abstract--定义抽象类，不能用来创建对象
    //专门用于继承
    abstract class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        sayHi() {
            console.log("hello")
        }

        //抽象方法，只能定义在抽象类中，子类必须对抽象方法进行重写
        // abstract run(): void
    }
    //继承
    class Dog extends Animal {
        constructor(name: string) {
            //super  表示父类
            super(name)
        }
    }

    const dog = new Dog("dog")

})()