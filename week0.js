/*

OOP Practice:

Create an object 5 separate ways that has two properties and one method: 
    - name and age
    - sayHello()

    1. Object literal
var user = {
  name: "unknown", 
  age: 0,
  sayHello() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`)
  }
};
user.sayHello();

    2. Object.create 
       - uses exisiting object literal as a prototype to create new objects
       - allows a "base" object literal to be used to then add unique properties to it.

  const john = Object.create(user);
  john.name = "John";
  john.age = 33;
  console.log(john)
  john.sayHello()

    3. Factory function 
        - function that returns an object 
        - does not allow you to use 'this' or instantiate an object
        - no inheritance

    function createRobot(name, age) {
        return {
            name: name,
            age: age,
            sayHello: function () {
                console.log('Hello, My name is ' 
                + name + ', the leader of the Autobots. I am ' + age + ' age years old');
            }
        };
    }

    const optimus = createRobot('Optimus Prime', "Nine million");
  
    optimus.sayHello();
  
    const magnus = createRobot('Ultra Magnus', "Eight Million" );
  
    magnus.sayHello();

    4. Constructor function
      - function that acts like a class and returns an object
      - allows you to use 'this' and instantiate an object
      - inheritance 

function Person(first, age) {
  this.name = first;
  this.age = age;
  this.sayHello = function() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`)
  }
}

const jimmy = new Person("Jimmy", 50)
const bill = new Person("Bill", 54)

console.log(jimmy)
console.log(bill)

jimmy.sayHello()
bill.sayHello()

    5. ES6 Class
      - syntactic sugar for a constructor function
      - mimics other OOP languages (sort of)

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
  }
}

let bobby = new Student("Bobby", 12);
let hank = new Student("Hank", 42);

bobby.sayHello()
hank.sayHello()

    Note: All these ways use the prototype chain (prototype object used to provide
          classical OOP). Every object has a prototype property that points to the
          prototype object of the object's constructor.
*/

/*

Problem #1: evaluateObj(obj)

You are given an object called input containing several key/value pairs and a variable called total whose initial value is 0. 
Iterate through the keys of sumMe; if the value  corresponding to a key is a number, add it to total.

*/

//  const input = {
//         hello: 'there',
//         you: 8,
//         are: 7,
//         almost: '10',
//         done: '!'
// };

// const evaluateObj = (obj) => {
//   // initiating total at 0
//   let total = 0;

//   //iterate through values
//   Object.values(input).forEach(value => {
//     // console.log(value, typeof value)

//     // conditional to pick numbers only
//     if(typeof value === 'number'){
//       total += value // total = total + value
//     }
//   });

//   return total;
// }

// // evaluateObj(input)
// console.log(evaluateObj(input)); // => 15

/*
Problem #2: map(array, callback)

Create a function that takes two arguments: an array and a callback.
The function will execute the callback on every element of the array.
The callback should return a new array with the result of the callback.
Note: the callback can be as simple as adding two arguments together.

*** Do not use the native map method ***

*/

// const arr = [1,2,3,4,5];
// const cb = (x) => x * 2;

// const map = (arr, cb) => {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     newArray.push(cb(arr[i]));
//   }
//   return newArray;
// }
// console.log(map(arr, cb))// => [2,4,6,8,10]

/*
Problem #3: reduce(array, callback, initialValue)

Create a function that takes an array and reduces the elements to a single value.
The function loops through the array and applies the callback function to each element.

The function has an "accumulator value" that keeps track of the accumulated output
of each loop. It starts out equal to the 3rd argument or first value in passed array.
  - array is iterated over passing accumulator and next array element as arguments to callback.
  - callback's return value becomes the new accumulator value.
  - next loop executes with this new accumulator value.

*** Do not use the native reduce method ***
  
  Example: 
  const nums = [4, 1, 3];
  const add = function(a, b) { return a + b; }
  reduce(nums, add, 0); //-> 8

*/

// const nums = [4, 1, 3];
// const cb = function(a, b) { return a + b; }

// const reduce = (arr, cb) => {
//   // intitial value
//   let result = 0;
//   // iterate over array
//   for(let i = 0; i < arr.length; i++) {
//     //use callback function with .call()
//     result = cb.call(undefined, result, arr[i], i, arr);
//   }
//   return result;
// }

// console.log(reduce(nums, cb)); // => 8
/*

Problem #4: unique(arr)

Write a function that accepts an array of string or numbers as an argument. 
The function should return a new array containing elements of the input array,
without duplicates.

*/

// const values = [1,3,3,4,5,5,6];

// const unique = (data) => {
//   //return data filter elements by index
// return data.filter((elem, index) => data.indexOf(elem) === index);
// }

// console.log(unique(values))// => [1,3,4,5,6]

/*

Problem #5: factorsOf(num)

Write a function that takes in a number as an arg and return an array 
containing all positive numbers that are able to divide into num with no remainder.

*/

// const factorOf = (num) => {
//   //new empty array
//     let newArr = [];
//   //iterate to count up to num
//     for (let i = 1; i <= num; i++) {
//       // console.log(i)
//       //   newArr.push(i);
//       //conditional for all positive numbers that are able to divide into num with no remainder.
//       if(num % i === 0) {
//         // console.log(i)
//         //push new numbers to new array
//         newArr.push(i)
//       }
//     }
//   return newArr
// }

// console.log(factorOf(7))

/*

Problem #6: isPrime(number)

Define a function that returns true if number is prime. 
Otherwise, false. A number is prime if it is only divisible by 1 and itself.

*/

// const isPrime = (num) => {
//   //initiate loop with prime number
// for(let i = 2; i < num; i++) {
//   //if number is prime
//   if(num % i === 0) {
//     return false;
//   }
//   //return a prime number and above
//   return num > 1;
//  }
// }

// console.log(isPrime(8));//=> false

/*

Problem #7: choosePrimes(nums)

Write a function that takes in an array of numbers as args. 
The function should return a new array containing the primes from the original array. 

Hint: Use the isPrime function you wrote earlier.
*/

// const choosePrimes = (nums) => {
//     let newArr = [];
//     // console.log(nums);
//     nums.forEach((elem) => {
//         // console.log(elem);
//         if (isPrime(elem)) {
//             newArr.push(elem);
//         }
//     });
//     return newArr;
// };

// console.log(choosePrimes([3, 4, 7, 12, 15])); //=> [3,7]

/*

Problem #8: mostVowels(sentence)

Write a function that takes in a sentence string and returns the word of the sentence that contains the most vowels. 

BONUS: Do not use the built-in .split() or join() method.

Use a helper function to count the vowels in a word.
*/

// const mostVowels = (str) => {
//     str = str + " ";
//   const vowels = "AEIOUaeiou"
//   let currentChar, currentWord, currentVowelsCount;
//   let wordWithMostVowels = '', mostVowelsCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     currentChar = str[i];
//     currentWord += currentChar;
//     if (vowels.includes(currentChar)) currentVowelsCount++;
//     if (currentChar === " ") {
//       if (currentVowelsCount > mostVowelsCount) {
//         wordWithMostVowels = currentWord;
//         mostVowelsCount = currentVowelsCount;
//       }
//       currentWord = "";
//       currentVowelsCount = 0;
//     }
//   }
//   return wordWithMostVowels;
// }

// console.log(mostVowels("hello world"));

/*

Problem #9: reverseSentence(str)

Write a function that takes in a sentence string as an arg.
The function should return a new sentence string where the order of the words is reversed.

Note: Reverse the order among words, not the order among characters.

Ignore punctuation (,.!?).

BONUS: Do not use the built-in .split(), join() or reverse() method.

*/

// const reverseSentence = (str) => {
//   return str.split(' ').reverse().join(' ');

// }

// console.log(reverseSentence("this is a really cool hat")); // => hat cool really a is this

/*

Problem #10: containsWord(str, str)

Write a function containsWord(sentence, targetWord) that accepts two strings as args. The function should return a boolean indicating whether the targetWord is found inside of the sentence. Remove punctuation and ignore capitalization.

Solve this without using String's split(), indexOf() or includes() methods.

test case:

containsWord("This is a wonderful algorithm!", "algorithm") // => true
containsWord("This is a wonderful algorithm", "algorithm") // => true
*/

// const containsWord = (text, word) => {
//   text = text + ' '
//   // target 1 word at a time
//   let currentWord = ''

//   for(i in text){
//     const c = text[i]
//     // if ' ' means end of word. do vowel count on word
//     if(c !== ' ') {
//       currentWord += c
//     } else {
//       // is currentWord the target?
//       if(currentWord == word) return true
//       // reset currentWord
//       currentWord = ''
//     }
//   }
//   return false
// }

// console.log(containsWord("this is really cool", "is")); // true
