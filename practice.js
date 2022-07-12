/*

 DIRECTIONS: 

 Fork this repl and use with your pair programming partner. 
 Follow the directions in the Slack channel.

 1. Decide on who will be the Designer or Implementer.
 2. Implementer will read aloud problem then:
     a. Talk strategy on solving it.
     b. Pseudo-code first.
     c. Ask Designer if they have any questions or comments.
     d. Code and test solution (multiple tests and edge cases).
     e. Asks Designer for final questions or comments.
 3. Designer will give feedback for the Implementer.
 4. SWITCH

*/

/*

  PRACTICE PROBLEM:

 Devise a function that accepts a number n and returns the sum of each integer from 1 to n (inclusive).

  test case: 5 => returns 15 (1+2+3+4+5)

  Hint: There are 2 possible solutions. 
        - The first is a basic loop and accumulator variable. 
        - The second is a mathematical formula that only math nerds would know.

   https://nrich.maths.org/2478

   num * (num + 1) / 2;

*/

// const numSum = (num) => {
//     //iterate
//     let total = 0;
//     for (let i = 1; i <= num; i++) {
//         //accumulator
//         total += i;
//     }
//     return total;
// };
// // test case:
// console.log(numSum(5)); // => 15
// console.log(numSum(6)); // => 21

// // edge case:
// console.log(numSum(0)); // => 0

//Solution 2:

// const numSum = (num) => (num * (num + 1)) / 2;
