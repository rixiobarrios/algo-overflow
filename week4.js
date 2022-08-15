/*

JavaScript is a compiled language. It is not compiled well in advance, as are many traditionally compiled languages. 

Traditional languages have 3 stages of the "compilation" process:
 - Tokenizing/Lexing: breaking into chunks and tokens
 - Parsing: take stream of tokens into a tree of element (AST tree)
 - Code generation: Abstract Syntax Tree => executable code

 JavaScript doesn't have a "build" step for compilation, so it needs
 a more advanced process to compile to make it much, much faster to get
 to the executable code stage.

 JS Compilation and Execution

 The JS Engine compiles and executes the JS code with help from the 
 Compiler and Scope to improve speed and efficiency.

     - Compiler parses and generates executable code 
     - JS Engine executes the "executable code" in the browser or node  environment.

 Compiler Process

   - Breaks down code into tokens, then to a AST tree, then to executable code
   - The code generation step is broken into two parts:
      - Works with Scope to check if a variable already exists for scope collection
        If exists, skips it, otherwise asks Scope to declare a new variable
      - Then Compiler produces code for JS Engine to execute later
   - Two distinct actions are taken for variable assignment (LHS and RHS)
 
 Scope

   - When the JS Engine executes the code from the Compiler, it has to lookup variables
     that have been declared and it consults with Scope.
   - Scope is defined as a "left hand scope" and "right hand scope" to the compiler.
   - LHS (left hand side) - JS Engine performs an LHS lookup for a variable name. 
     This is when a variable is declared on the left hand side of the equal.
   - RHS (right hand side) - JS Engine performs an RHS lookup for a variable (source).
     - variables that are 
     - function declarations are considered RHS

   function foo(a) {
     var b = a;
     return a + b;
   }

   var c = foo( 2 );

   LHS: a = 2; b = a; c = foo(2)
   RHS: function foo...; a + b

   So "scope" is defined where to look for things.
   JS organizes scopes with functions and blocks. 
   
   Lexical Scope

   Scope is lexical, which means the availability of variables "depends" on where they
   are defined. This also allows inner scope to have access to outer scope's variables.

   A function nested inside another function has access to it's parents' functions 
   variables. Also known as the "scope chain".

   Execution Context

   The execution context is the environment in which a JavaScript function is being 
   executed. Each execution context has its own variable scope.

   Whenever a function is invoked, a new execution context is pushed onto the call 
   stack, and a new variable environment is created along with it. The function’s code
   runs in the new execution context and has access to the variable environment in the
   execution context directly below that new execution context (the one in which the
   function was invoked).

   Upon exit of the function, the execution context is popped off of the call stack.
   Code in one execution context is stopped until the code in the execution context
   above it finishes running.
 
   Closure

    - Happens as a result of writing code that relies on lexical scope.
    - Closure is when a function "remembers" it's lexical scope even when the function
      is executed outside that lexical scope. This can be used as a function is passed
      as a callback or take a function and return it back. 
    - Via closure, it will "remember" that reference to outer scope and variables.
      Also called it "backpack" (reference to original scope)
    - Closure requires to return a function (otherwise it's just lexical scope)
    
  What are closures used for?

  Closures give us the ability to gain some benefits normally associated with 
  object-oriented programming, namely data privacy and data encapsulation
  (thus name “closure”). When the structure of the encapsulated data and the methods
  used to access/manipulate the data is too simple to justify using actual
  object-oriented programming, closures provide a convenient solution.

  Closures can aid in maintaining secure and private access to variables, by creating 
  functions that serve as the only objects with access to these variables. The 
  functionality of the functions themselves serves as a method of whitelisting
  the ways that those variables can be mutated. Because only the created functions
  have access to the variables.

  Closures are used especially often when functionality is being imported into a file
  from another file. The code in the imported file is executed, creating a closure
  for any function(s) exported from the file. This is a common method for JavaScript 
  libraries to be made available for use to a developer’s application and helps
  developers maintain modularity of their code.


   References:

   https://www.youtube.com/watch?v=gNhdufVqXeE (scope)
   
   https://www.youtube.com/watch?v=vKJpN5FAeF4
   https://www.youtube.com/watch?v=3a0I8ICR1Vg&t=67s
   
   https://dmitripavlutin.com/simple-explanation-of-javascript-closures/
   https://wesbos.com/javascript/03-the-tricky-bits/closures
*/

/*

    Problem #1: createFunction

    Create a function createFunction that creates and returns a function. 
    When that newly created function is called, it should return the string 
    'hello world'.
*/

function createFunction() {
    // todo
}

const myFunction = createFunction();
console.log(myFunction); // create and return a function
console.log(myFunction()); // return 'hello world'

/*

 Problem #2: createFunctionWithInput

 Create a function createFunctionWithInput that accepts one input and returns a 
 function. When that created function is called, it should return the input that was 
 passed to createFunctionWithInput when it was created.

*/

function createFunctionWithInput(input) {
    // todo
}

const sampleFunc = createFunctionWithInput('sample');
console.log(sampleFunc); // create and return a function
console.log(sampleFunc()); // should log: 'sample'

const helloFunc = createFunctionWithInput('hello');
console.log(helloFunc()); // should log: 'hello'

/*

  Problem #3: Scoping

  Examine the code for the outer function. Notice that we are returning a function and 
  that function is using variables that are outside of its scope. Uncomment those lines 
  of code. 
  
  Try to deduce the output before executing.

*/

function outer() {
    let counter = 0;
    function incrementCounter() {
        counter++;
        console.log('counter', counter);
    }
    return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// willCounter();
// jasCounter();
// willCounter();

/*

   Problem #4: addbyX

   Now we are going to create a function addByX that returns a function that will add
   an input by x.

*/

function addByX(numInput) {
    // todo
}

const addByTwo = addByX(2);
addByTwo(1); //should return 3
addByTwo(2); //should return 4
addByTwo(3); //should return 5

/*

   Problem #5: once

   Write a function once that accepts a callback as input and returns a function. 
   
   When the returned function is called the first time, it should call the callback and 
   return that output. If it is called any additional times, instead of calling the 
   callback again it will simply return the output value from the first time it was called.

*/

function once(cb) {
    // todo
}

// callback:
const addByTwoOnce = once(function (num) {
    return num + 2;
});

console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7

/*

     Problem #6: after

     Write a function after that takes the number of times the callback needs to be called 
     before being executed as the first parameter and the callback as the second parameter.
   
*/

function after(numOfCalls, callback) {
    // todo
}

const called = function (string) {
    return 'hello ' + string;
};
const afterCalled = after(3, called);
console.log(afterCalled);

console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> nothing is printed
console.log(afterCalled('world')); // -> 'hello world' is printed

/*

   Problem #7: delay

   Write a function delay that accepts two arguments, a callback and the wait time in 
   milliseconds. Delay should return a function that, when invoked waits for the specified
   amount of time before executing. HINT - research setTimeout();

*/

function delay(cb, wait) {
    // todo
}

let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

/*

  Problem #8: saveOutput

  Create a function saveOutput that accepts a function (that will accept one argument),
  and a string (that will act as a password). saveOutput will then return a function that
  behaves exactly like the passed-in function, except for when the password string is 
  passed in as an argument. 
  
  When this happens, the returned function will return an object
  with all previously passed-in arguments as keys, and the corresponding outputs as values

*/

function saveOutput(func, string) {
    // todo
}

const multiplyBy2 = function (num) {
    return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

/*
    Problem #9: cycleIterator

    Create a function cycleIterator that accepts an array, and returns a function. 
    The returned function will accept zero arguments. When first invoked, the returned function 
    will return the first element of the array. When invoked a second time, the returned function
    will return the second element of the array, and so forth. 
    
    After returning the last element of the array, the next invocation will return the first 
    element of the array again, and continue on with the second after that, and so forth.

*/

function cycleIterator(arr) {
    // todo
}

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);

console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'

/*
   Problem #10: dateStamp

   Create a function dateStamp that accepts a function and returns a function. The returned
   function will accept whatever arguments the passed-in function accepts and return an object
   with a date key whose value is today's date (not including the time) represented as a human
   readable string (see the Date object for conversion methods), and an output key that contains
   the result from invoking the passed-in function.

*/

function dateStamp(func) {
    // todo
}

const stampedMultBy2 = dateStamp((n) => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

/*
    Problem #11: censor

    Create a function censor that accepts no arguments. censor will return a function that will
    accept either two strings, or one string. When two strings are given, the returned function
    will hold onto the two strings as a pair, for future use. When one string is given, the
    returned function will return the same string, except all instances of a first string 
    (of a saved pair) will be replaced with the second string (of a saved pair).

*/

function censor() {
    // todo
}

const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
// should log: 'The slow, brown fox jumps over the lazy cats.'
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.'));
