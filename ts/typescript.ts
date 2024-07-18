// let check:string
// Boolean
// The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.
// let isChecked :boolean

// Number
// As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

// let age:number

// String
// Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
// let navruz:string


// let car:object
// Array
// TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:
// let list:number[] = [1,2,3]
// let listA:Array<number>=[1,2,3]
// let listB:Array<string> = ['1','2']

// Tuple
// Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

// let x: [string, number]
// // Initialize it
// x = ["hello", 10] // OK


// Enum
// A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.

// enum Color {
//     Red = 1,
//     Green,
//     Blue,
//   }
//   let colorName: string = Color[2];
   
//   // Displays 'Green'
//   console.log(colorName);

// interface User {
//     name: string;
//     id: number;
//   }
//   const user: User = {
//     name: "Hayes",
// //   Object literal may only specify known properties, and 'username' does not exist in type 'User'.
//     id: 0,
//   };

//   const names: string[] = []
//   names.push("Dylan")



//   // define our tuple
// let ourTuple: [number, boolean, string];

// // initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];
// const graph: [number, number] = [55.2, 41.3];
// const [x, y] = graph;

// const car: 
// { type: string,
//   model: string,
//   year: number
// } 
// = {
//     type: "Toyota",
//     model: "Corolla",
//     year: 2009
//   };



//   An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.



// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
//   }
//   // logs 404
//   console.log(StatusCodes.NotFound);
//   // logs 200
//   console.log(StatusCodes.Success);


// interface Rectangle {
//     height: number,
//     width: number
//   }
  
//   const rectangle: Rectangle = {
//     height: 20,
//     width: 10
//   };

// interface Rectangle {
//     height: number,
//     width: number
//   }
  
//   interface ColoredRectangle extends Rectangle {
//     color: string
//   }
  
//   const coloredRectangle: ColoredRectangle = {
//     height: 20,
//     width: 10,
//     color: "red"
//   };



// Union types are used when a value can be more than a single type.

// Such as when a property would be string or number.

// Using the | we are saying our parameter is a string or number:

// Function parameters are typed with a similar syntax as variable declarations.

// Example
// function multiply(a: number, b: number) {
//   return a * b;
// }


// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.

// Example
// // the `?` operator here marks parameter `c` as optional
// function add(a: number, b: number, c?: number) {
//   return a + b + (c || 0);
// }



// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

// Generics makes it easier to write reusable code.

// Functions
// Generics with functions help make more generalized methods which more accurately represent the types used and returned.

// ExampleGet your own TypeScript Server
// function createPair<S, T>(v1: S, v2: T): [S, T] {
//   return [v1, v2];
// }
// console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

