(
    function () {
        class Person {
            //ts可以在属性前面添加属性修饰符
            //public - 默认值，在任意位置可以访问
            //private-私有属性,只能在类的内部进行访问和修改
            //static - 静态属性,实例无法访问,只能通过类访问
            // readonly - 只读
            //protect - 受保护的属性，只能在当前类和类子类使用

            private _name: string
            private _age: number
            constructor(name: string, age: number) {
                this._name = name
                this._age = age
            }
            getName() {
                return this._name
            }
            setName(name: string) {
                this._name = name
            }

            get name() {
                return this._name
            }
            set name(name) {
                this._name = name
            }
        }

        const per = new Person("1111", 19)
        console.log(per)

        //属性可以修改
        // per.getName();
        // per.setName("22222");
        console.log(per.name, "name");
        per.name = "3333333333333333333333333333333"
        console.log(per)

    }
)()