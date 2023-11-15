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
