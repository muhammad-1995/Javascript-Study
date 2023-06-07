// Type Conversions
/*
    [] 1.Converting Strings to Numbers
    [] 2.Converting Numbers to Strings
    [] 3.Converting Dates to Numbers
    [] 4.Converting Numbers to Dates
    [] 5.Converting Booleans to Numbers
    [] 6.Converting Numbers to Booleans
*/

const stringVar = "Hello World! JS";
const numberVar = 1000;
const booleanVar = true;
const undefinedVar = undefined;
const nullVar = null;
const arrayVar = ["A", "B", 3, "C", 4, 5, "D"];
const objectVar = {
  name: "JS",
  type: "Programming",
};
const symbolVar = Symbol(9510);

// String()
console.log(String(stringVar)); // Hello World! JS
console.log(typeof String(stringVar)); // string
// String() => Number
console.log(numberVar); // 1000
console.log(typeof numberVar); // number
console.log(String(numberVar)); // 1000
console.log(typeof String(numberVar)); // string
// String() => Boolean Value
console.log(booleanVar); // true
console.log(typeof booleanVar); // boolean
console.log(String(booleanVar)); // true
console.log(typeof String(booleanVar)); // string
// String() => Undefined
console.log(undefinedVar); // undefined
console.log(typeof undefinedVar); // undefined
console.log(String(undefined)); // undefined
console.log(typeof String(undefined)); // string
// String() => Null
console.log(nullVar); // null
console.log(typeof nullVar); // object
console.log(String(nullVar)); // null
console.log(typeof String(nullVar)); // string
// String() => Array
console.log(arrayVar); // ['A', 'B', 3, 'C', 4, 5, 'D']
console.log(typeof arrayVar); // object
console.log(String(arrayVar)); // A,B,3,C,4,5,D
console.log(typeof String(arrayVar)); // string
// String() => Object
console.log(objectVar); // {name: 'JS', type: 'Programming'}
console.log(typeof objectVar); // Object
console.log(String(objectVar)); // [object Object]
// String() => Symbol
console.log(symbolVar); // Symbol(9510)
console.log(typeof symbolVar); // symbol
console.log(String(symbolVar)); // symbol(9510)
console.log(typeof String(symbolVar)); // string

// Number()
console.log(numberVar);
console.log(typeof numberVar);
// Number() => String
console.log(Number("JS"));
console.log(Number("100"));
console.log(Number("10.5"));
// Number() => Boolean
console.log(true); // true
console.log(typeof true); // boolean
console.log(Number(true)); // 1
console.log(typeof Number(true)); // number
console.log(Number("true")); // NaN
// Number() => Empty String
console.log(""); // ""
console.log(" "); // " "
console.log("".length); // 0
console.log(" ".length); // 1
console.log("  ".length); // 2
console.log(Number("")); // 0 Number() => convert Empty String To 0 Number
console.log(Number(" ")); // 0 Number() => convert Empty String To 0 Number
console.log(Number("  ")); // 0 Number() => convert Empty String To 0 Number
console.log(Number(" 2 ")); // 2
console.log(Number(" 3 ")); // 3
console.log(Number(" 3 " + 5)); // String + Number => NaN
console.log("3" + 5); // 35
console.log("3 + 5"); // 3 + 5
console.log(Number("3 + 5")); // NaN
console.log(Number("A + B")); // NaN
// Number() => undefined
console.log(Number(undefinedVar)); // NaN
// Number() => null
console.log(Number(null)); // 0
console.log(+null); // 0
// Number() => Object
console.log(Number(objectVar)); // NaN

// Boolean
// [0, "", false, undefined, Null, NaN] => All Value = false
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false

console.log(Boolean(" "));
console.log(Boolean(1));
console.log(Boolean("Hello"));
console.log(Boolean("10"));
console.log(Boolean(true));

/*
  https://javascript.info/type-conversions
  Summary
  The three most widely used type conversions are to string, to number, and to boolean.

  String Conversion – Occurs when we output something. Can be performed with String(value). The conversion to string is usually obvious for primitive values.

  Numeric Conversion – Occurs in math operations. Can be performed with Number(value).

  The conversion follows the rules:

  Value	Becomes…
  undefined	NaN
  null	0
  true / false	1 / 0
  string	The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.
  Boolean Conversion – Occurs in logical operations. Can be performed with Boolean(value).

  Follows the rules:

  Value	Becomes…
  0, null, undefined, NaN, ""	false
  any other value	true
*/
