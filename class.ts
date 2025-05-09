// class VS interface

interface Person {
    name: string;
    age: number;
}

const p1: Person = {
    name: "Janet",
    age: 28, // 必須手動填寫，無預設值
};


class Person {
    name: string = "Default Name";
    age: number = 18;

    constructor(name?: string, age?: number) {
        if (name) this.name = name;
        if (age) this.age = age;
    }
}

const p2 = new Person(); // name: "Default Name", age: 18
const p3 = new Person("Janet", 28); // name: "Janet", age: 28