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