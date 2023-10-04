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

// ################## 13 problem###########
// Find the Index (Part 1)
// Create a function that finds the index of a given item.

// Examples
// search([1, 5, 3], 5) ➞ 1

// search([9, 8, 3], 3) ➞ 2

// search([1, 2, 3], 4) ➞ -1


// solution
// 1. function search(arr, item) {
// 	return arr.indexOf(item)
// }
// 2. const search=(arr,item)=>arr.indexOf(item)
// 3. function search(arr,item) {
//     return arr.findIndex(el=>el==item)
// }
// 4. const search=(arr,item)=>arr.findIndex(el=>el==item)
// 5. function search(arr,item) {
//     return arr.findLastIndex(el=>el==item)
// }
// 6. const search=(arr,item)=>arr.findLastIndex(el=>el==item)
// 7. function search(arr, item) {
// 	for(var i = 0;i<arr.length;i++){
// 		if(arr[i] == item) return i;
// 	}
// 	return -1;
// }


//################problem 14####################

// Buggy Code (Part 3)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// sumArray([1, 2, 3, 4, 5]) ➞ 15

// sumArray([-1, 0, 1]) ➞ 0

// sumArray([0, 4, 8, 12]) ➞ 24
// given
// function sumArray(arr) {
// 	sum ,	
//   for (i=0, i<arr, i++) {
// 	  sum+=arr[i]
// 	}
//   return sum
// }


// solution
// function sumArray(arr) {
// 	let sum=0;
//   for (let i=0; i<arr.length; i++) {
// 	  sum+=arr[i]
// 	}
//   return sum
// }

// ############ 15problem############
// Find the Index (Part #2)
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// Examples
// search([1, 2, 3, 4], 3) ➞ 2

// search([2, 4, 6, 8, 10], 8) ➞ 3

// search([1, 3, 5, 7, 9], 11) ➞ -1

// solution
// 1. function search(arr, item) {
// 	return arr.indexOf(item)
// }
// 2. const search=(arr,item)=>arr.indexOf(item)
// 3. function search(arr,item) {
//     return arr.findIndex(el=>el==item)
// }
// 4. const search=(arr,item)=>arr.findIndex(el=>el==item)
// 5. function search(arr,item) {
//     return arr.findLastIndex(el=>el==item)
// }
// 6. const search=(arr,item)=>arr.findLastIndex(el=>el==item)
// 7. function search(arr, item) {
// 	for(var i = 0;i<arr.length;i++){
// 		if(arr[i] == item) return i;
// 	}
// 	return -1;
// }


// ##################16 problem##############

// Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true

// check([1, 1, 2, 1, 1], 3) ➞ false

// check([5, 5, 5, 6], 5) ➞ true

// check([], 5) ➞ false
// solution
// 1. function check(arr, el) {
// 	return arr.includes(el)
// }
// 2. const check=(arr, el)=>arr.includes(el)
// 3. function check(arr, el) {
// 	return arr.indexOf(el)>=0?true:false
// }
// 4.function check(arr, el) {
// 	for (var i = 0; i < arr.length; i++){
// 		if (arr[i] === el){
// 			return true;
// 		}
// 	}
// 	return false;
// }
// 5.function check(arr, el) {
// 	return arr.indexOf(el) > -1;
// }
// 6. function check(arr,el) {
//     return arr.some(el=>el)
// }
// 7. function check(arr, el) {
// 	return arr.some(element=>element==el)
// }
// 8. const check=(arr, el)=>arr.some(element=>element==el)



// ###############17 problem###############
// Less Than, Greater Than
// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// Examples
// arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]

// arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]

// arrBetween(7, 32, [1, 2, 3, 78]) ➞ []


// solution
// 1. function arrBetween(num1, num2, arr) {
//     return	arr.filter(el=>el>num1 && el<num2)
//     }
// 2. const arrBetween=(num1,num2,arr)=>arr.filter(el=>el>num1 && el<num2)
// 3. function arrBetween(num1,num2,arr) {
//     let result=[]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>num1 && arr[i]<num2){
//             result.push(arr[i])
//         }
//     }
//     return result
// }


// ##############################18 problem ####################
// 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

// Examples
// fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

// fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

// fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

// #solution
// 1. function fiftyThirtyTwenty(ati) {
// 	return { "Needs": ati*0.5, "Wants": ati*0.3, "Savings": ati*0.2 }
// }
// 2. const fiftyThirtyTwenty = a => a = {Needs:a/2, Wants:a*.3, Savings:a*.2};

// ################# 19 problem #####################
// Similar Bread
// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// Examples
// hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ) ➞ true

// hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// ) ➞ false

// hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// ) ➞ false

// solution
// 1. function hasSameBread(arr1, arr2) {
// 	return arr1[0]==arr2[0] && arr1[arr1.length-1]==arr2[arr2.length-1]
// }
// 2. const hasSameBread=(arr1,arr2)=> arr1[0]==arr2[0] && arr1[arr1.length-1]==arr2[arr2.length-1]
// 3. function hasSameBread(arr1, arr2) {
// 	return arr1.shift() === arr2.shift() && arr1.pop() === arr2.pop();
// }
// 4. const hasSameBread = (arr1, arr2) => {
// 	const [a, b, c] = arr1
// 	const [x, y, z] = arr2
// 	return a==x && c ==z
// }
// 5. function hasSameBread(arr1, arr2) {
// 	return arr1.includes(arr2[0]) && arr1.pop()===arr2[arr2.length-1]
// }
// 6. const hasSameBread=(arr1,arr2)=>arr1.includes(arr2[0]) && arr1.pop()===arr2[arr2.length-1]

// ############# 20 problem #############
// Convert All Array Items to String
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// Examples
// parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]

// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]

// parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

// parseArray([]) ➞ []

// solution
// 1. function parseArray(arr) {
// 	return arr.map(el=>el.toString())
// }
// 2. const parseArray=arr=>arr.map(el=>el.toString())
// 3. function parseArray(arr){
//     let result=[]
//     for(el of arr){
//         result.push(el.toString())
//     }
// 	return result
// }
// 4. const parseArray = a => a.map(String)
// 5. function parseArray(arr) {
// 	return arr.map(m=>m+'')
// }

// ########### 21 problem###########
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
// 3. function concat(arr1, arr2) {
//     return [...arr1,...arr2]
// }
// 4. const concat=(arr1,arr2)=>[...arr1,...arr2]
// 5. function concat(arr1,arr2) {
//     let result =[]
//     result.push(arr1,arr2)
//     return result
// }
// 6. function concat(arr1,arr2) {
//     let result =[]
//     result.push(...arr1,...arr2)
//     return result
// }

// ############## 22 problem#################
// Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:

// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]

// toNumberArray(["91", "44"]) ➞ [91, 44]

// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

// solution
// 1. function toNumberArray(arr) {
// 	return arr.map(el=>parseFloat(el))
// }
// 2. const toNumberArray = arr =>arr.map(el=>parseFloat(el))  
// 3. const toNumberArray=arr=>arr.map(el=>+el)
// 4. function toNumberArray(arr) {
// 	return arr.map(Number)
// }
// 5.const toNumberArray = arr => arr.map(Number);


// #################### 23 problem####################
// Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]

// solution
// 1. function arrayValuesTypes(arr) {
// 	return arr.map(el=>typeof(el))
// }
// 2. const arrayValuesTypes=arr=>arr.map(el=>typeof(el))
// 3. function arrayValuesTypes(arr){
//     let result=[]
//     arr.forEach(element => {
//         result.push(typeof(element))
//     });
//     return result
// }


// ##############24 problem#################
// ES6: Destructuring Arrays IV
// There is an easy way to assign to array values to the nth index by using rest parameter syntax.

// var [head, tail] = [1, 2, 3, 4]

// console.log(head) // outputs  1
// console.log(tail) // outputs 2
// But how could I make tail = [2, 3, 4] instead of tail = 2?

// solution
// Change the string so that it will evaluate to head = 1 and tail = [2, 3, 4] 
// Use the Rest element
// const str = '[head, ...tail] = [1, 2, 3, 4]'


// ######### 25 problem###########
// Squares and Cubes
// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

// Examples
// checkSquareAndCube([4, 8]) ➞ true

// checkSquareAndCube([16, 48]) ➞ false

// checkSquareAndCube([9, 27]) ➞ true

// solution
// 1. function checkSquareAndCube(arr) {
// 	return Math.sqrt(arr[0])===Math.cbrt(arr[1])
// }
// 2. function checkSquareAndCube = (arr)=>Math.sqrt(arr[0])===Math.cbrt(arr[1])


// ############ 26 problem########################
// Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples
// totalAmountAdjectives({ a: "moron" }) ➞ 1

// totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3

// totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) ➞ 4

// solution
// 1. function totalAmountAdjectives(obj) {
// 	return Object.keys(obj).length
// }
// 2. const totalAmountAdjectives=obj=>Object.keys(obj).length
// 3. function totalAmountAdjectives(obj) {
// 	return Object.values(obj).length
// }
// 4. const totalAmountAdjectives=obj=>Object.values(obj).length

// 5. function totalAmountAdjectives(obj) {
// 	return Object.entries(obj).length
// }
// 6. const totalAmountAdjectives=obj=>Object.entries(obj).length



//############### 27 ####################
// Recreating the String.length Property
// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
// length("Hello World") ➞ 11

// length("Edabit") ➞ 6

// length("wash your hands!") ➞ 16

// solution
//1. function length(s) {
// 	return s.length
// }
// 2. const length=(s)=>s.length
// 3. const length=(s)=>s.lastIndexOf('')
// 4. function length(s) {
// 	return s.lastIndexOf('');
// }
// 5. function length(s) {
// 	let count = 0;
//   	for(let c of s){
// 		count++;
// 	}
//   	return count;
// }
// 6. const length = s => [...s].reduce(a => a+1, 0);


// ########### 28 #######################
// Half, Quarter and Eighth
// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// Examples
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]

// 1. function halfQuarterEighth(n) {
//  return [n/2,n/4,n/8]	
// }
// 2. const halfQuarterEighth=n=>[n/2,n/4,n/8]


// ########### 29 ####################
// Multiply Every Array Item by Two
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// Examples
// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]

// solution
// 1. function getMultipliedArr(arr) {
// 	return arr.map(el=>el*2)
// }
// 2. const getMultipliedArr=arr=>arr.map(el=>el*2)
// 3. function getMultipliedArr(arr){
//     let result=[]
//     for(let i=0; i<arr.length; i++){
//         result.push(arr[i]*2)
//     }
//     return result
// }



// ############### 30 problem################
// Array of Word Lengths
// Create a function that takes an array of words and transforms it into an array of each word's length.

// Examples
// wordLengths(["hello", "world"]) ➞ [5, 5]

// wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])

// solution
// 1. function wordLengths(arr) {
// 	return arr.map(el=>el.length)
// }
// 2. const wordLengths = arr => arr.map(el=>el.length)
// 3. function wordLengths(arr){
//     let result = []
//     for(item of arr){
//         result.push(item.length)
//     }
// 	return result
// }
// 4. function wordLengths(arr){
//     let result = []
//     arr.forEach(element => {
//         result.push(element.length)
//     });
//     return result
// }


// ############ 31 problem##########################
// Difference of Volumes of Cuboids
// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Examples
// findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ➞ 12040

// findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) ➞ 276

// findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) ➞ 405

// findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) ➞ 5412


// solution
// 1. function findDifference(a, b) {
// 	return Math.abs(a.reduce((el,acc)=>el*acc,1)-b.reduce((el,acc)=>el*acc,1))
// }
// 2. const findDifference=(a,b)=>Math.abs(a.reduce((el,acc)=>el*acc,1)-b.reduce((el,acc)=>el*acc,1))
// 3.const findDifference =([a, b, c], [d, e, f]) => 
// Math.abs(a * b * c - d * e * f);
// 4. function findDifference(a, b) {
// 	return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))
// }
// 5. const findDifference = (cube1, cube2) => {
// 	const [[a, b, c], [d, e, f]] = [cube1, cube2];
// 	return Math.abs(a*b*c - d*e*f);
// }
// 6. const reducer = x => x.reduce((a, c) => a * c);

// function findDifference(a, b) {
//   return Math.abs(reducer(a) - reducer(b));
// }


// ############### 32 problem##############
// Spaces Between Each Character
// Create a function that takes a string and returns a string with spaces in between all of the characters.

// Examples
// spaceMeOut("space") ➞ "s p a c e"

// spaceMeOut("far out") ➞ "f a r   o u t"

// spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"


// solution

// 1. function spaceMeOut(str) {
// 	return str.split('').join(' ')
// }
// 2. const spaceMeOut=str=>str.split('').join(' ')
// 3. function spaceMeOut(str) {
// 	return str.split('').map(el=>el+' ').join('').trim()
// }
// 4. const spaceMeOut=str=>str.split('').map(el=>el+' ').join('').trim()
// 5. const spaceMeOut = str => [...str].join(' ')
// 6. const spaceMeOut = s => [...s].join` `
// 7. function spaceMeOut(str) {
// 	var arr = Array.from(str).join(' ');
// 	return arr;
// }
// 8. function spaceMeOut(str) {
// 	return [...str].join(' ')
// }
// 9. const spaceMeOut=str=>Array.from(str).join(' ')


// ############# 33 problem##################
// Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
// getSumOfItems([2, 7, 4]) ➞ 13

// getSumOfItems([45, 3, 0]) ➞ 48

// getSumOfItems([-2, 84, 23]) ➞ 105
// solution
// 1. function getSumOfItems(arr) {
// 	return arr.reduce((el,acc)=>el+acc,0)
// }
// 2. const getSumOfItems=arr=>arr.reduce((el,acc)=>el+acc,0)
// 3. function getSumOfItems(arr){
//     let sum=0;
//     arr.forEach(element => {
//         sum+=element
//     });
//     return sum;
// }
// 4. function getSumOfItems(arr){
//     let sum=0
//       arr.map(el=>sum+=el)
//       return sum
// }
// 5. function getSumOfItems(arr){
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum
// }
// 6. const getSumOfItems = arr => eval(arr.join`+`)



// #################problem 34######################
// Rotate the Array by One 🔄
// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.

// Examples
// rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

// rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

// rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]


// solution
// 1. function rotateByOne(arr) {
// 	let x =arr.pop()
// 	arr.unshift(x)
// 	return arr
// }	
// 2. let rotateByOne = a => [a.pop(), ...a];
// 3 function rotateByOne(arr) {
// 	return arr.slice(-1).concat(arr.slice(0,-1))
// }
// 4. const rotateByOne = arr => [arr[arr.length - 1]].concat(arr.slice(0, -1));
// 5. const rotateByOne = a=>(a.unshift(a.pop()),a)



// ######################## 35 problem######################
// Get the File Name
// Create a function that returns the selected filename from a path. Include the extension in your answer.

// Examples
// getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

// getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

// getFilename("ffprobe.exe") ➞ "ffprobe.exe"



// /solution
// 1. function getFilename(path) {
// 	let lastEl=path.split('/')
// 	return lastEl[lastEl.length-1]
// }
// 2. const getFilename=path=>path.split('/').pop()
// 3. function getFilename(path){
//     return path.split('/').pop()
// }
// 4. const getFilename = p => p.split('/').slice(-1)[0]
// 5. function getFilename(path){
// 	return path.match(/[^/]+$/)[0]
// }
// 6. function getFilename(path){
// 	return path.split('/').reverse()[0]	
// }



// ################################ 36 #######################
// Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// Examples
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]

// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

// invertArray([]) ➞ []

// solution
// 1. function invertArray(arr) {
// 	return arr.map(el=>el!=0?(-1)*el:el)
// }
// 2. const invertArray=arr=>arr.map(el=>el!=0?(-1)*el:el)
// 3. function invertArray(arr) {
// 	return arr.map(el=>el!=0?-el:el)
// }
// 4. const invertArray=arr=>arr.map(el=>el!=0?-el:el)
// 5. let invertArray = a => a.map(b => -b || 0);  
// 6. function invertArray(arr){
//     return arr.map(x=>x?-x:0)
//   }



// #################37 problem######################
// Sum Greater Than Five
// Write a function that returns the sum of elements greater than 5, in the given array .

// Examples
// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77

// sumFive([1, 2, 3, 4]) ➞ 0

// sumFive([10, 12, 28, 47, 55, 100]) ➞ 252

// solution
// 1. function sumFive(arr) {
// 	return arr.filter(el=>el>5).reduce((el,acc)=>el+acc,0)
// }
// 2. const sumFive=arr=>arr.filter(el=>el>5).reduce((el,acc)=>el+acc,0)
// 3. function sumFive(arr){
//     let sum=0;
//     for(el of arr){
//         if(el>5){
//             sum+=el
//         }
//     }
//     return sum
// }
// 4. function sumFive(arr){
//     let sum=0;
//     arr.forEach(element => {
//         sum+=element
//     });
//     return sum
// }
// 5. function sumFive(arr){return arr.filter(el=>el>5).reduceRight((el,acc)=>el+acc,0)}
// 6. function sumFive(arr){return eval(arr.filter(el=>el>5).join(`+`))}
// 7. function sumFive(arr) {
// 	return arr.reduce((a, b) => b > 5 ? a + b : a, 0);
// }


// ############## 38 problem##########################
// Even or Odd?
// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).

// Examples
// evenOrOdd([0]) ➞ "even"

// evenOrOdd([1]) ➞ "odd"

// evenOrOdd([]) ➞ "even"

// evenOrOdd([0, 1, 5]) ➞ "even"

// solution

// 1. function evenOrOdd(arr) {
// 	return arr.reduce((el,acc)=>(el+acc),0)%2===0?'even':'odd'
// }
// 2. const evenOrOdd = arr =>
// arr.reduce((acc, cur) => acc + cur, 0) % 2 !== 0 ? 'odd' : 'even';
// 3. function evenOrOdd(arr) {
// 	const sum = arr.reduce((a, b) => a + b, 0);
// 	if( sum % 2 == 0 ){
// 		return "even"
// 	}
// 	else {
// 		return "odd"
// 	}
// }
// 4. function evenOrOdd(arr){
//     let sum=0;
//     arr.forEach(element => {
//         sum+=element
//     });
//     return sum%2==0?'even':'odd'
// }


// ################# 39 problem#######################
// Array From a Range of Numbers
// Create a function that returns an array of all the integers between two given numbers start and end.

// Examples
// rangeOfNum(2, 4) ➞ [3]

// rangeOfNum(5, 9) ➞ [6, 7, 8]

// rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10]
// Notes
// start will always be <= end.
// start and end are NOT included in the final array.
// If start == end, return an empty array.

// solution
// 1. function rangeOfNum(start, end) {
//     let result=[]
// 	for(let i=0; i<end; i++){
//         if(i>start){
//             result.push(i)
//         }
//     }
//     return result
// }
// 2. const rangeOfNum = (start, end) => Array.from({length: end - (start + 1)}, (_, i) => ++i + start)


// ################# 40 problem ##################

// Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta
// Examples
// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]

// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []

// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "wate


// solution
// 1. function skipTooMuchSugarDrinks(drinks) {
// 	return drinks.filter(el=>!(el=='cola'||el=='fanta'))
// }
// 2. const skipTooMuchSugarDrinks=drinks=>drinks.filter(el=>!(el=='cola'||el=='fanta'))
// 3. function skipTooMuchSugarDrinks(drinks){
//     let result=[]
//     for(el of drinks){
//         if(!(el=='cola'||el=='fanta')){
//             result.push(el)
//         }
//     }
//     return result
// }


// 4. function skipTooMuchSugarDrinks(drinks) {
// 	return drinks.filter(d => !['cola', 'fanta'].includes(d))
// }

// 5. function skipTooMuchSugarDrinks(drinks) {
// 	return drinks.filter(x => !/fanta|cola/.test(x))
// }