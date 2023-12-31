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



// ################## problem 5 ######################
// How Many D's Are There?
// Create a function that counts how many D's are in a sentence.

// Examples
// countDs("My friend Dylan got distracted in school.") ➞ 4

// countDs("Debris was scattered all over the yard.") ➞ 3

// countDs("The rodents hibernated in their den.") ➞ 3
// Notes
// Your function must be case-insensitive.
// Remember to return the result.
// Check the Resources for help.

// solution
// 1. function countDs(sentence) {
// 	return sentence.match(/d/gi).length
// }
// 2. const countDs=sentence=>sentence.match(/d/gi).length
// 3 function countDs(sentence){
//     return  [...sentence].filter(el=>el=='d'|| el=='D').length
//   }

//   4. const countDs=sentence=>[...sentence].filter(el=>el=='d'|| el=='D').length
// 5. function countDs(sentence){
    //     return  [...sentence].map(el=>el=='d'|| el=='D').length
    //   }

// 6.   4. const countDs=sentence=>[...sentence].map(el=>el=='d'|| el=='D').length

// 7. function countDs(sentence){
//     const regex=new RegExp('d','gi')
//     return sentence.match(regex).length
// }
// 8. function countDs(sentence) {
// 	arr = sentence.toLowerCase().split('').filter(x => x == 'd');
// 	return arr.length;
// }
// 9. function countDs(sentence) {
// 	var num = 0
// 	for (let i = 0; i < sentence.length; i++) {
// 		if (sentence[i] === "d" || sentence[i] === "D") {
// 			num++
// 		}
// 	}
// 	return num
// }


// ################### problem 5########################
// RegEx: Character Classes VIII ⁠- \D
// You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

// Here are a list of the characters classes in JavaScript:

// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// There is a hidden message in this string:

// const str = "242Edabit23 45can344 3be3 254324addictive!"
// Write the regular expression that reveals the hidden message. You have to remove all of the numbers to reveal the message. Use the character class \D in your expression.

// Notes
// Check the Resources tab for details on character classes if you're stuck.
// const REGEXP = /\D */g


// ###############problem 6 ################
// Raucous Applause
// After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

// An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

// Given a string of what the overlapping claps sounded like, return how many claps were made in total.

// Examples
// countClaps("ClaClaClaClap!") ➞ 4

// countClaps("ClClClaClaClaClap!") ➞ 6

// countClaps("CCClaClClap!Clap!ClClClap!") ➞ 9

// solution
// 1. function countClaps(str) {
// 	return str.match(/C/gi).length
// }

// 2. const countClaps=str=>str.match(/C/gi).length

// 3. function countClaps(str){
//     return [...str].filter(element=>element=='C'|| element=='c').length
// }
//  4. const countClaps=str=>[...str].filter(element=>element=='C'|| element=='c').length
 
//  5. function countClaps(txt) {
// 	return txt.split("C").length-1
// }
// 6. const countClaps=str=>txt.split("C").length-1
// 7. function countClaps(str){
//     return str.split('').filter(element=>element=='C'|| element=='c').length
// }
// 8. const countClaps=str=>str.split('').filter(element=>element=='C'|| element=='c').length
// 9. function countClaps(str) {
//     let countOfClaps = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) === 'C')
//             countOfClaps++
//     }
//     return countOfClaps
// }
// 10. function countClaps(str){
//    return str.split('').filter(el=>el.includes('C')).length
// }
// 11. const countClaps=str=>str.split('').filter(el=>el.includes('C')).length



// ############# problem 7 #######################
// Get the File Name
// Create a function that returns the selected filename from a path. Include the extension in your answer.

// Examples
// getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"

// getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"

// getFilename("ffprobe.exe") ➞ "ffprobe.exe"

// solution
// 1. function getFilename(path) {
// 	let splited=path.split('/')
// 	return splited[splited.length-1]
// }
// 2. function getFilename(path){
//     return path.split('/').pop()
// }
// 3. function getFilename(path){
// 	return path.match(/[^/]+$/)[0]
// }
// 4. const getFilename=path=>path.match(/[^/]+$/)[0]
// 5. const getFilename = p => p.split('/').slice(-1)[0]
// 6. function getFilename(path) {
// 	return path.match(/[^/]\w+\.\w+$/g).join('')
// }
// 7. function getFilename(path){
// 	return path.split('/').reverse()[0]
// }
// 8. function getFilename(path) {
// 	return path.match(/\w+.\w+$/gi)[0]
// }