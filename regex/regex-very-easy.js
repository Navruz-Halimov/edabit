// ################### problem 1#####################
// Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// Examples
// isLastCharacterN("Aiden") ➞ true

// isLastCharacterN("Piet") ➞ false

// isLastCharacterN("Bert") ➞ false

// isLastCharacterN("Dean") ➞ true

// solution
// 1. function isLastCharacterN(word) {
// 	return word.endsWith('n')
// }
// 2. const isLastCharacterN=word=>word.endsWith('n')
// 3. function isLastCharacterN(word) {
// 	return [...word].pop() == "n"
// }
// 4. function isLastCharacterN(word) {
// 	return /n$/.test(word);
// }
// 5. function isLastCharacterN(word) {
// 	return word.substr(-1) == "n";
// }
// 6. function isLastCharacterN(word) {
// 	let a = word.split('').pop();
// 	return a === 'n' ? true : false;
// }
// 7. const isLastCharacterN = word => /n$/.test(word)



// ######################## problem 2###############################
// Count the Syllables
// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

// Examples
// countSyllables("Hehehehehehe") ➞ 6

// countSyllables("bobobobobobobobo") ➞ 8

// countSyllables("NANANA") ➞ 3

// solution
// 1. function countSyllables(str) {
// 	return str.length/2
// }
// 2. const countSyllables = str=>str.length/2
// 3. function countSyllables(str) {
// 	return [...str].length/2
// }
// 4. const countSyllables = s =>s.match(/.{1,2}/g).length;
// 5. const countSyllables = str => str.match(/[aeiou]/gi).length




// ##################### problem 3 #############################
// Amazing Edabit!
// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

// Examples
// amazingEdabit("edabit is amazing.") ➞ "edabit is amazing."

// amazingEdabit("Mubashir is amazing.") ➞ "Mubashir is not amazing."

// amazingEdabit("Infinity is amazing.") ➞ "Infinity is not amazing."


// solution
// 1. function amazingEdabit(str) {
//     const regex = /amazing/gi;
// 	if(str.includes('edabit')){
//         return str
//     }
//     else{
//         return str.replace(regex,'not amazing')
//     }
// }
// 2. const amazingEdabit=str=>str.includes('edabit')?str:str.replace('amazing','not amazing')
// 3. const amazingEdabit=s=>/edabit/.test(s) ? s : s.replace("is","is not")
// 4. function amazingEdabit(str){
//    return /edabit/.match(s) ? s : s.replace("is","is not")
// }


// ################### problem 4#######################
// Two Regular Expression Methods
// There are three methods (we exclude compile) that you can use with regular expression literals. Use these two methods to fix the code. One method returns a boolean if there is a match. The other method returns an iterator from a search.

// Notes
// Do not use the same method twice.
// Do not use String methods that accept regular expresssions as arguments.

//  solution
// function twoMethods() {
// 	// find and equals are not regular expression methods.  Replace them. 
// 	let methodOne = /hello/.exec("hello")[0] === "hello" 
// 	let methodTwo = /hello/.test("hello") // returns a boolean
// 	return methodOne && methodTwo
// }