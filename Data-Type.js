// Data types
/*
    [] - 01. String
    [] - 02. Number
    [] - 03. Bigint
    [] - 04. Boolean
    [] - 05. Undefined
    [] - 06. Null
    [] - 07. Symbol
    [] - 08. Array
    [] - 09. Object
    [] - 10. Date
*/

// 1. String
const string = "Hello World! Javascript";
console.log(string); // Hello World! Javascript
console.log(typeof string); // sring

// 2.Number
const number = 2023;
console.log(number); // 2023
console.log(typeof number); // number

// 3.BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
console.log(typeof bigInt); // bigint

// 4.Boolean
const booleanTrue = true;
console.log(booleanTrue); // true
console.log(typeof booleanTrue); // boolean

const booleanFalse = false;
console.log(booleanFalse); // false
console.log(typeof booleanFalse); // boolean

// 5.Undefined
const undefinedType = undefined;
console.log(undefinedType); // undefined
console.log(typeof undefinedType); // undefined

let und;
console.log(und); // undefined

// 6.Null
const nullType = null;
console.log(nullType); // null
console.log(typeof nullType); // object

console.log(1 + 1 === 2 ? true : null); // true
console.log(1 + 1 === 5 ? true : null); // null

// 7.Symbol
console.log(Symbol()); // Symbol()
console.log(typeof Symbol()); // symbol

const symbolType = Symbol(100200);
console.log(symbolType); // symbol
console.log(typeof symbolType); // Symbol(100200)

// 8.Array
const arrayType = [];
console.log(arrayType); // []
console.log(typeof arrayType); // object

// 9.Object
const objectType = {};
console.log(objectType); // {}
console.log(typeof objectType); // object

// 10.Date
const dateType = new Date();
console.log(dateType); // => Prints the current date
console.log(typeof dateType); // object

// Summary
console.log(typeof "Hello"); // string
console.log(typeof 102030); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof new Date()); // object
