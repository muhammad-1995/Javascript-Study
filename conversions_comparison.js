/*
  // Type Conversions String() | Number() | Boolean()
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
  // Comparison with null and undefined
  [] - 01. >
  [] - 02. <
  [] - 03. >=
  [] - 04. <=
  [] - 05. ==
  [] - 06. ===
*/

// Conversion String()
console.log(String("Hello"));
console.log(10); // 10 typeof Number
console.log(String(10)); // 10 typeof String
console.log(true); // true typeof boolean
console.log(String(true)); // true typeof String
console.log(false); // false typeof boolean
console.log(String(false)); // false typeof boolean
console.log(undefined); // undefined type of undefined
console.log(String(undefined)); // undefined type of String
console.log(null); // null typeof Object
console.log(String(null)); // null typeof String
console.log(NaN); // NaN typeof number
console.log(String(NaN)); // NaN typeof String
console.log(String(10 + 10)); // 20 typeof String
console.log(String(Number(null))); // 0 typeof String
console.log(String({ a: "A" })); // [object Object]
console.log(String([1, 2, 3, 4, 5, 6, 7, 8])); // 1,2,3,4,5,6,7,8
console.log(String(new Date())); // String

// Conversion Number()
console.log(Number(10)); // 10 typeof Number
console.log(Number("10")); // 10 Typeof Number
console.log(Number("A")); // NaN
console.log(Number("10 + 10")); // NaN
console.log(Number(true)); // 1 typeof Number
console.log(Number(false)); // 0 typeof Number
console.log(Number(10 + "10")); // 20 => Concatenation
console.log(Number(20 - "10")); // 20
console.log(Number("10" + "10")); // 1010
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number(String(null))); // NaN
console.log(Number("null")); // NaN
console.log(Number({ a: "A" })); // NaN
console.log(Number(["A", "B"])); // NaN
console.log(Number(new Date())); // 1686409055344
console.log(Number(" ")); // 0 typeof Number
console.log(Number("")); // 0 typeof Number
console.log(+""); // 0 typeof Number
console.log(+" "); // 0 typeof Number

// Conversion Boolean
console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(" ")); // true
console.log(Boolean("")); // false
console.log(Boolean(" ") - 2); // -1
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(+null + 1)); // true
console.log(Boolean({ a: "A" })); // true
console.log(Boolean([{ a: "A" }])); // true
console.log(Boolean(new Date())); // true

// Comparison with null and undefined
console.log(null); // null
console.log(typeof null); // object

console.log(0); // 0
console.log(typeof 0); // number

console.log(null == 0); // null value = null, 0 value = 0, The two values are different
console.log(null === 0); // null Datatype = object, 0 Datatype = number, The two values are different

console.log(null > 0); // > convert the value of null to 0, (0 > 0) false
console.log(null < 0); // < convert the value of null to 0, (0 < 0) false
console.log(null >= 0); // true
console.log(null <= 0); // true

console.log(undefined); // undefined
console.log(typeof undefined); // undefined

console.log(undefined == 0); // undefined value = undefined, 0 value = 0, The two values are different
console.log(undefined === 0); // undefined Datatype = undefined, 0 Datatype = number, The two values are different

console.log(undefined > 0); // > convert value of undefined to NaN (NaN > 0) false
console.log(undefined >= 0); // >= convert value of undefined to NaN (NaN > 0) false

console.log(null); // null
console.log(typeof null); // object

console.log(undefined); // undefined
console.log(typeof undefined); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // null Datatype = Object, udefined Datatype = undefined

console.log(null > undefined); // (0 > NaN) false
console.log(null < undefined); // (0 < NaN) false
console.log(null <= undefined); // (0 <= NaN) false
