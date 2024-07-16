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




// ########################problem 2##################
// Century Crisis
// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.

// Examples
// futurePeople(256, 2) ➞ 976

// futurePeople(3248, 6) ➞ 5408

// futurePeople(5240, 3) ➞ 6320


// solution
// 1. function futurePeople(population,n){
//     for (let i = 1; i <= 360; i++) {
//   population = population + n;
// }
// return population;
// }

// 2. const futurePeople = (p, n) => p + 360 * n;
// 3. function futurePeople(p,n){
// 	return (n*30*12) + p
// }
// 4. const futurePeople = (p,n) => p + (n * 30 * 12)


// ######problem 3##################
// To the Power of _____
// Create a function that takes a base number and an exponent number and returns the calculation.

// Examples
// calculateExponent(5, 5) ➞ 3125

// calculateExponent(10, 10) ➞ 10000000000

// calculateExponent(3, 3) ➞ 27
// Notes
// All test inputs will be positive integers
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.



// solution
// 1. function calculateExponent(num, exp) {
// return Math.pow(num,exp)	
// }
// 2. const calculateExponent=(num,exp)=>Math.pow(num,exp)
// 3. function calculateExponent(num,exp){
//     let result=1
//     for(let i=0; i<exp;i++){
//         result*=num
//     }
//     return result
// }
// 4. function calculateExponent(num, exp) {
// 	return num ** exp
// }


// ############### problem 4###################

// Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

// findIndex(["a", "g", "y", "d"], "d") ➞ 3

// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
// Notes
// Don't forget to return the result.
// If you are stuck, find help in the Resources tab.


// solution
// 1. function findIndex(arr, str) {
// 	return arr.indexOf(str)
// }
// 2. const findIndex=(arr,str)=>arr.indexOf(str)
// 3. function findIndex(arr,str){
//     return arr.findIndex((element)=>element==str)
// }
// 4. const findIndex=(arr,str)=> arr.findIndex((element)=>element==str)
// 5. function findIndex(arr,str){
//     return arr.lastIndexOf((element)=>element==str)
// }
// 6. const findIndex=(arr,str)=> arr.lastIndexOf((element)=>element==str)
// function findIndex(arr,str){
// 	let indexEl
// 	let x=arr.entries()
//   for([index,el] of x){
// 		if(el==str){
// 			return index
// 		}
// 	}
// 	return indexEl
// }


// problem %%%%%%%%%%%%%%%%%%% 5 %%%%%%%%%%%%%%%%%%%%%%%%%
// Find the Index (Part 1)
// Create a function that finds the index of a given item.

// Examples
// search([1, 5, 3], 5) ➞ 1

// search([9, 8, 3], 3) ➞ 2

// search([1, 2, 3], 4) ➞ -1
// Notes
// If the item is not present, return -1.

// 1. function search(arr, item) {
// 	return arr.indexOf(item)
// }
// 2. const search = (arr,item)=>arr.indexOf(item)

// 3. 
// function search (arr,item){
//     return arr.map((element,index)=>{
//         if(element==item){
//             return index
//         }
//         else{
//             return -1
//         }
//     })
// }


// 4.
// function search(arr, item) {
// 	for(var i = 0;i<arr.length;i++){
// 		if(arr[i] == item) return i;
// 	}
// 	return -1;
// }


// 5.
// function search(arr, item) {
// 	return arr.findIndex(arItem=>arItem==item);
// }




// $$$$$$$$$$$$$$$$$$$$$$$$$$$$ 6 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.

// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]

// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]

// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]
// Notes
// Check the Resources tab for help if needed.
// Remember Arrays & Null in JS are treated as object, hence the examples

// solution
// 1. function arrayValuesTypes(arr) {
// 	return arr.map(el=>typeof(el))
// }

// 2. const arrayValuesTypes = a => a.map(x => typeof x)

// 3. function arrayValuesTypes(arr) {
// 	let newArray = [];
// 	for(let i=0; i<arr.length; i++){
// 		newArray.push(typeof arr[i]);
// 	}
// 	return newArray;
// }
// 4.
// function arrayValuesTypes(arr) {
	
// 	const typeArr = [];
  
//   arr.forEach(function(element){
    
//     typeArr.push(typeof(element));
    
//   });
  
//   return typeArr;
	
// }


// ########################## 7##################################
// Recreating the String.length Property
// Create a function which returns the length of a string, WITHOUT using String.length property.

// Examples
// length("Hello World") ➞ 11

// length("Edabit") ➞ 6

// length("wash your hands!") ➞ 16
// Notes
// N/A

// solution
// 1. function length(s) {
// 	let result = 0
// 	let m = s.split('').forEach((el,index)=>result=index+1)
// 	return result
// }
// 2. function length(s) {
// 	return s.lastIndexOf('');
// }
// 3. function length(s) {
// 	let count = 0;
//   	for(let c of s){
// 		count++;
// 	}
//   	return count;
// }
// 4. const length = s => [...s].reduce(a => a+1, 0)
// 5. const length = s => s.lastIndexOf('')
