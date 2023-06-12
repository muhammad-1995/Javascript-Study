// Logical operators
/*
    01. OR ||
    02. AND &&
    03. Not !
    04. Nullish Coalescing
*/

// In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log("" || "A"); // "A"

console.log(0 || 1); // 1
console.log(1 || 0); // 1
console.log(2 || 3); // 2
console.log(3 || 2); // 3

console.log(1 || true); // 1
console.log(3 || true); // 3
console.log(true || 1); // true
console.log(true || 3); // true

console.log(true || true || true); // true
console.log(1 || 2 || 3); // 1
console.log(3 || 2 || 1); // 3

console.log(false || false || true); // true
console.log(0 || 0 || 1); // 1
console.log(false || false || true || true); // true
console.log(0 || 0 || 1 || 2); // true

/*
OR "||" finds the first truthy value
The logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.

The extended algorithm works as follows.

Given multiple OR’ed values:

result = value1 || value2 || value3;
The OR || operator does the following:

Evaluates operands from left to right.
For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand.
A value is returned in its original form, without the conversion.

In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.
*/

console.log(false || false || false); // all Falsy value => return Last Value
console.log(null || undefined); // all Falsy value => return Last Value
console.log(null || undefined || null); // all Falsy value => return Last Value

console.log(1 || 0); // 1 (1 is truthy)
console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)
console.log(undefined || null || 0); // 0 (all falsy, returns the last value)

// 02. AND &&
// finds the first falsy value

/*
The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.
*/

console.log(true && true && true); // true
console.log(true && true && false); // false
console.log(1 && 2); // false
console.log(3 && 2); // false

console.log(1 || 2); // Return The First Truthy Value
console.log(1 && 2); // Return The falst Falsy Value

console.log(true || 1); // true
console.log(false && true); // false
console.log(null && undefined); // null
console.log(null && false); // null

console.log((false || true) && true && false); // (true && false)

// Not !
console.log("");
console.log(!""); // true
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!1); // false
console.log(!5); // false
console.log(!!true); // true
console.log(!null);
console.log(!undefined);

// Task
console.log(null || 2 || undefined); // 2
console.log(null || (2 && 3) || 4); // 3

// More Example
let price;
console.log(`The Price is ${price || "Free"}`); // The Price is Free
console.log(`The Price is ${price && "Free"}`); // The Price is undefined

// Nullish ??
// The nullish coalescing operator is written as two question marks ??.

console.log((null && undefined) ?? "Hi"); // Hi
