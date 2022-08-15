/* 

    WE WILL USE THESE PROBLEMS FOR WEEKS 1,2 and 3.

    During Week 3, we will be adding some new concepts with these problems.

    Many will seem difficult, don't worry, you have a few weeks to get through them.

    You can either work on the problems in the Leetcode IDE, or just work on them
    in this repl.it. 
    
    Note: Some solutions that you submit in the Leetcode IDE will not pass because
          they are not 'efficient' enough. Do not worry about that now, just focus
          on understanding the problem, finding a strategy, and finding a solution
          that works. We will focus on efficiency later.

*/

/*
fizzBuzz
https://leetcode.com/problems/fizz-buzz/
*/

// var fizzBuzz = function (n) {
//     let result = [];
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push('FizzBuzz');
//         } else if (i % 3 === 0) {
//             result.push('Fizz');
//         } else if (i % 5 === 0) {
//             result.push('Buzz');
//         } else {
//             result.push(`${i}`);
//         }
//     }
//     return result;
// };
// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));

/*
addDigits
https://leetcode.com/problems/add-digits/
*/

// var addDigits = function (num) {
//     //turned into a string
//     num = num + '';
//     //find length
//     if (num.length === 1) return Number(num);

//     const result = num
//         // .toString()
//         .split('')
//         .reduce((acc, elem) => {
//             const digit = Number(elem);
//             acc += digit;
//             // console.log(acc, digit);
//             return acc;
//         }, 0);
//     // console.log(typeof result, result);
//     return addDigits(result);
// };

// console.log(addDigits(38)); //=> 2

/*
twoSum
https://leetcode.com/problems/two-sum/
*/

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};

console.log(twoSum([15, 7, 11, 2], 9)); //[0,1]
console.log(twoSum([3, 2, 4], 6)); //[1,2]

/*
Valid Palindrome
https://leetcode.com/problems/valid-palindrome/
*/

// var isPalindrome = function (s) {
//     var re = /[\W_]/g;
//     var lowRegStr = s.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join('');
//     return reverseStr === lowRegStr;
// };

// console.log(isPalindrome('A man, a plan, a canal: Panama')); //=> true
// console.log(isPalindrome('race a car')); //=> false
// console.log(isPalindrome(' ')); //=> true

/*
Valid Anagram
https://leetcode.com/problems/valid-anagram/
*/

// var isAnagram = function (s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }
//     if (s.split('').sort().join('') === t.split('').sort().join('')) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(isAnagram('anagram', 'nagaram')); // true
// console.log(isAnagram('rat', 'car')); // false

/*
Roman to Integer
https://leetcode.com/problems/roman-to-integer/
*/

// var romanToInt = function (s) {
//     if (typeof s !== 'string') return NaN;
//     const romanRegExp =
//         /^(?=[MDCLXVI])(M*)(?:(C)(?:(D)|(M))|(D?)(C{0,3}))(?:(X)(?:(L)|(C))|(L?)(X{0,3}))(?:(I)(?:(V)|(X))|(V?)(I{0,3}))$/i;
//     let parts = s.match(romanRegExp);
//     if (!parts) return NaN;
//     let result = 0;
//     [
//         0, 1000, -100, 500, 1000, 500, 100, -10, 50, 100, 50, 10, -1, 5, 10, 5,
//         1,
//     ].forEach((weight, i) => (result += weight * (parts[i] || '').length));
//     return result;
// };

// console.log(romanToInt('III')); //3
/*  
Valid Parentheses
https://leetcode.com/problems/valid-parentheses/
*/

// var isValid = function (s) {
//     const arr = [];
//     for (let char of s) {
//         if (char === ')' && arr[arr.length - 1] === '(') {
//             arr.pop();
//         } else if (char === ']' && arr[arr.length - 1] === '[') {
//             arr.pop();
//         } else if (char === '}' && arr[arr.length - 1] === '{') {
//             arr.pop();
//         } else {
//             arr.push(char);
//         }
//     }
//     return arr.length === 0;
// };

// console.log(isValid('()')); // true
// console.log(isValid('(){}[]')); // true
// console.log(isValid('(]')); // false

/*
Find the Difference of Two Arrays
https://leetcode.com/problems/find-the-difference-of-two-arrays/
*/

// var findDifference = function (nums1, nums2) {
//     let set1 = new Set(nums1),
//         set2 = new Set(nums2);

//     let a = [],
//         b = [];
//     for (let e of set1) if (!set2.has(e)) a.push(e);
//     for (let e of set2) if (!set1.has(e)) b.push(e);

//     return [a, b];
// };

// console.log(findDifference([1, 2, 3], [2, 4, 6])); // [[1,3],[4,6]]

/*
Concatenation of Array
https://leetcode.com/problems/concatenation-of-array/
*/

/*
Shuffle the Array
https://leetcode.com/problems/shuffle-the-array/
*/

/*
Flipping an Image
https://leetcode.com/problems/flipping-an-image/
*/

/*
Maximum Subarray
https://leetcode.com/problems/maximum-subarray/
*/

/*
Contains Duplicate
https://leetcode.com/problems/contains-duplicate/
*/

/*
Best Time to Buy and Sell Stock
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/

/*
Climbing Stairs
https://leetcode.com/problems/climbing-stairs/
*/

/*
Pascals Triangle
https://leetcode.com/problems/pascals-triangle/
*/
