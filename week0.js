// OOP Practice:

// Create an object 5 separate ways that has two properties and one method:
//     - name and age
//     - sayHello()

// 1. Object literal
// var user = {
//     name: 'unknown',
//     age: 0,
//     sayHello() {
//         console.log(
//             `Hello, my name is ${this.name}, I am ${this.age} years old`
//         );
//     },
// };
// user.sayHello();

// 2. Object.create
//    - uses exisiting object literal as a prototype to create new objects
//    - allows a "base" object literal to be used to then add unique properties to it.

// const john = Object.create(user);
// john.name = 'John';
// john.age = 33;
// console.log(john);
// john.sayHello();

// 3. Factory function
//     - function that returns an object
//     - does not allow you to use 'this' or instantiate an object
//     - no inheritance

// function createRobot(name, age) {
//     return {
//         name: name,
//         age: age,
//         sayHello: function () {
//             console.log(
//                 'Hello, My name is ' +
//                     name +
//                     ', the leader of the Autobots. I am ' +
//                     age +
//                     ' years old'
//             );
//         },
//     };
// }

// const optimus = createRobot('Optimus Prime', 'Nine Million');

// optimus.sayHello();

// const magnus = createRobot('Ultra Magnus', 'Eight Million');

// magnus.sayHello();

// 4. Constructor function
//   - function that acts like a class and returns an object
//   - allows you to use 'this' and instantiate an object
//   - inheritance

// function Person(first, age) {
//     this.name = first;
//     this.age = age;
//     this.sayHello = function () {
//         console.log(
//             `Hello!, my name is ${this.name} and I am ${this.age} years old`
//         );
//     };
// }

// const jimmy = new Person('Jimmy', 50);
// const bill = new Person('Bill', 54);

// console.log(jimmy);
// console.log(bill);

// jimmy.sayHello();
// bill.sayHello();

// 5. ES6 Class
//   - syntactic sugar for a constructor function
//   - mimics other OOP languages (sort of)

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.sayHello = function () {
//             console.log(
//                 `Hello, my name is ${this.name} and I am ${this.age} years old`
//             );
//         };
//     }
// }

// let bobby = new Student('Bobby', 12);
// let hank = new Student('Hank', 42);

// bobby.sayHello();
// hank.sayHello();

// Note: All these ways use the prototype chain (prototype object used to provide
//       classical OOP). Every object has a prototype property that points to the
//       prototype object of the object's constructor.

// Problem #1: evaluateObj(obj)

// You are given an object called input containing several key/value pairs and a variable called total whose initial value is 0.
// Iterate through the keys of sumMe; if the value  corresponding to a key is a number, add it to total.

// const input = {
//     hello: 'there',
//     you: 8,
//     are: 7,
//     almost: '10',
//     done: '!',
// };

// const evaluateObj = (obj) => {
//     // initiating total at 0
//     let total = 0;

//     //iterate through values
//     Object.values(input).forEach((value) => {
//         // console.log(value, typeof value)

//         // conditional to pick numbers only
//         if (typeof value === 'number') {
//             total += value; // total = total + value
//         }
//     });

//     return total;
// };

// // evaluateObj(input)
// console.log(evaluateObj(input)); // => 15

// Problem #2: map(array, callback)

// Create a function that takes two arguments: an array and a callback.
// The function will execute the callback on every element of the array.
// The callback should return a new array with the result of the callback.
// Note: the callback can be as simple as adding two arguments together.

// *** Do not use the native map method ***

// const arr = [1, 2, 3, 4, 5];
// const cb = (x) => x * 2;

// const map = (arr, cb) => {
//     const newArray = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         newArray.push(cb(arr[i]));
//     }
//     return newArray;
// };
// console.log(map(arr, cb)); // => [2,4,6,8,10]

// Problem #3: reduce(array, callback, initialValue)

// Create a function that takes an array and reduces the elements to a single value.
// The function loops through the array and applies the callback function to each element.

// The function has an "accumulator value" that keeps track of the accumulated output
// of each loop. It starts out equal to the 3rd argument or first value in passed array.
//   - array is iterated over passing accumulator and next array element as arguments to callback.
//   - callback's return value becomes the new accumulator value.
//   - next loop executes with this new accumulator value.

// *** Do not use the native reduce method ***

//   Example:
//   const nums = [4, 1, 3];
//   const add = function(a, b) { return a + b; }
//   reduce(nums, add, 0); //-> 8

// const nums = [4, 1, 3];
// const cb = function (a, b) {
//     return a + b;
// };

// const reduce = (arr, cb) => {
//     // intitial value
//     let result = 0;
//     // iterate over array
//     for (let i = 0; i < arr.length; i++) {
//         //use callback function with .call()
//         result = cb.call(undefined, result, arr[i], i, arr);
//     }
//     return result;
// };

// console.log(reduce(nums, cb)); // => 8

// Problem #4: unique(arr)

// Write a function that accepts an array of string or numbers as an argument.
// The function should return a new array containing elements of the input array,
// without duplicates.

// const values = [1, 3, 3, 4, 5, 5, 6];

// const unique = (data) => {
//     //return dsts filter elements by index
//     return data.filter((elem, index) => data.indexOf(elem) === index);
// };

// console.log(unique(values)); // => [1,3,4,5,6]
