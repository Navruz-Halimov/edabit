// ############ problem 1###############
// Buggy Code (Part 5)
// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.



// solution
// 1. function printArray(number) {
//     var newArray = [];
  
//     for(var i = 1; i <= number;i++) {
//       newArray.push(i);
//     }
  
//     return newArray;
//   }
//   2. const printArray = n => Array(...Array(n)).map((v, i) => i + 1);
//   3. let printArray = n => [...Array(n)].map((a,b)=> 1 + b * 1);
//   4. const printArray = num => [...Array(num + 1).keys()].slice(1);
