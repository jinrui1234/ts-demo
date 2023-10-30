
//泛型
//在定义函数或者类时，遇到类型不明确就可以使用泛型


//案例一    ----泛型函数
function fn<T>(a: T): T {
    return a;
};

fn(10);             //自动推断类型
fn<string>('10');   // 指定泛型（类型）


//案例二
function test<T, K>(a: T, b: K): T {
    return a;
};

test<string, number>("1111", 10);


//案例三
interface inter {
    length: number
}

function fn3<T extends inter>(a: T): number {
    return a.length
}


fn3({ length: 10 });


//案例四
class MyClass<T> {
    data: T;
    constructor(data: T) {
        this.data = data;
    }
}

const my = new MyClass<string>("10");