(function () {
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        sayHi() {
            console.log("hello")
        }
    }
    //继承
    class Dog extends Animal {
        constructor(name: string) {
            //super  表示父类
            super(name)
        }
    }

})()