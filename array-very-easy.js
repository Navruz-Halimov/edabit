
//#####1.Problem######

//  Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

// solution
// 1. function getFirstValue(arr) {
// 	return arr[0]
// }
// 2. const getFirstValue=arr=>arr[0]


// ######### 2problem##########

// Pair Management
// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]

// solution
// 1. function makePair(num1, num2) {
// 	return [num1,num2]
// }
// 2. const makePair=(num1,num2)=>[num1,num2]

// 3. const makePair=(num1,num2)=> [...arguments]