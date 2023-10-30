(
    function () {
        //描述一个对象
        // type myType = {
        //     name: string,
        //     age?: number
        // }

        //接口,同名合并成一个
        interface myInterface {
            name: string,
            age?: number
        }
        interface myInterface {
            gender: string
        }

        const obj: myInterface = {
            name: "111",
            gender: "222"
        }

        interface myInter {
            name: string,
            sayHello(): void
        }
        //使用类去实现一个接口
        //实现接口就是使类满足接口的要求
        class Person implements myInter {
            name: string;
            constructor(name: string) {
                this.name = name;
            }

            sayHello() {
                console.log("hello");
            }
        }
    }
)()