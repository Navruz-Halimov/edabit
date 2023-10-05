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