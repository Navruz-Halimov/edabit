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

// ######3 problem############

// Learn Lodash: _.drop, Drop the First Elements of an Array
// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// Examples
// drop([1, 2, 3], 1) ➞ [2, 3]

// drop([1, 2, 3], 2) ➞ [3]

// drop([1, 2, 3], 5) ➞ []

// drop([1, 2, 3], 0) ➞ [1, 2, 3]

// solution
// 1. function drop(arr, val = 1) {
// 	return arr.slice(val)
// }
// 2. const  drop=(arr,val=1)=>arr.slice(val)

// 3.function drop(arr,val=1){
//     return arr.filter((el,index)=>index>=val)
// }

// ###########4problem###########
// Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

// solution
// 1. function getVoteCount(votes) {
// 	return votes.upvotes + votes.downvotes
// }

// 2. const getVoteCount=(votes)=>votes.upvotes + votes.downvotes
// 3. const getVoteCount = ({ upvotes, downvotes }) => upvotes - downvotes;

// ##########5 problem###########

// Reverse an Array
// Write a function to reverse an array.

// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []

// solution
// 1. function reverse(arr) {
// 	return arr.reverse()
// }
// 2. const reverse=arr=>arr.reverse()

// 3.function reverse(arr) {
// 	let reversedArray=[]
// 	arr.forEach(el=>reversedArray.unshift(el))
// 	return reversedArray
// }

// #############6 problem##################
// Fix the Bug: Simple Array Manipulation
// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

// Examples
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

// before
// function incrementItems(arr) {
// 	for (let i = 0; i < array.length; i++)
// 		arr[i] === arr[i] + 1
// 	return array
// }
// // solution
// function incrementItems(arr) {
// 	for (let i = 0; i < arr.length; i++)
// 		arr[i] = arr[i] + 1
// 	return arr
// }

// ############7 problem############
// ES6: Destructuring Arrays I
// You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

// solution
// const [a, b] = arr;

// ########### 8 problem############
// Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.

// Examples
// getLastItem([1, 2, 3]) ➞ 3

// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// getLastItem([true, false, true]) ➞ true

// solution
// 1. function getLastItem(arr) {
// 	return arr.pop()
// }
// 2. const getLastItem=arr=>arr.pop()
// 3. const getLastItem=arr=>arr[arr.length-1]
// 4. const getLastItem=arr=>arr.slice(-1)[0]

// ############## 9 problem##################
// Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

// solution
// 1. function arrayToString(arr) {
// 	return arr.join('')
// }
// 2. const arrayToString=arr=>arr.join()
// 3. function arrayToString(arr){
//     let result=''
//      arr.forEach(element =>result+=element);
//      return result
// }

// ############10 problem###################
// Concatenating Two Integer Arrays
// Create a function to concatenate two integer arrays.

// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

// solution
// 1. function concat(arr1, arr2) {
// 	return arr1.concat(arr2)
// }

// 2. const concat=(arr1,arr2)=>arr1.concat(arr2)
// 3. const concat=(arr1,arr2)=>[...arr1,...arr2]
// 4. function concat(arr1, arr2) {
// 	for (item of arr2){
// 		arr1.push(item)
// 	}
// 	return arr1
// }

// ##################problem 11#################
// Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// findIndex(["a", "g", "y", "d"], "d") ➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

// solution

// 1. function findIndex(arr, str) {
// 	return arr.indexOf(str)
// }
// 2. function findIndex(arr, str) {
// 	return arr.findIndex(el=>el===str)
// }
// 3. const findIndex=(arr,str)=>arr.indexOf(str)
// 4. const findInde=(arr,str)=>arr.findIndex(el=>el===str)
// 5. function findIndex(arr, str) {
//     for(let i=0; i<arr.length;i++){
//     if(arr[i]==str){
//         return i
//     }
// }
// }

// ###########12 problem#################
// Array Indexing
// Given an index and an array, return the value of the array with the given index.

// Examples
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6

// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5

// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4

// solution
// 1. function valueAt(arr, i) {
// 	return arr[Math.floor(i)]
// }
// 2. const valueAt=(arr,i)=> arr[Math.floor(i)]
// 3. function valueAt(arr,i){
//     return arr.find((el,index)=>index==(Math.floor(i)))
// }
// 4. const valueAt=(arr,i)=>arr.find((el,index)=>index==(Math.floor(i)))
//  5. const valueAt= (arr,i)=>arr.filter((el,index)=>index==(Math.floor(i)))[0]
//  6. function valueAt(arr,i) {
//     return arr.filter((el,index)=>index==(Math.floor(i)))[0]
//  }
// 7. const valueAt = (arr,i) => arr[~~i];
// 8. function valueAt(arr, i) {
// 	return arr[Math.trunc(i)]
// }
// 9. const valueAt=(arr,i)=> arr[Math.trunc(i)]
// 10. function valueAt(arr,i){
//     return arr.find((el,index)=>index==(Math.trunc(i)))
// }
// 11. const valueAt=(arr,i)=>arr.find((el,index)=>index==(Math.trunc(i)))
//  12. const valueAt= (arr,i)=>arr.filter((el,index)=>index==(Math.trunc(i)))[0]
//  13. function valueAt(arr,i) {
//     return arr.filter((el,index)=>index==(Math.trunc(i)))[0]
//  }
