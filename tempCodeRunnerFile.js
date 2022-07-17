function Person(first, age) {
    this.name = first;
    this.age = age;
    this.sayHello = function () {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    };
}

const jimmy = new Person('Jimmy', 50);
const bill = new Person('Bill', 54);

console.log(jimmy);
console.log(bill);

jimmy.sayHello();
bill.sayHello();