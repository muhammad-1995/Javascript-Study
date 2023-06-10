// Comparison with null and undefined

console.log(undefined); // undefined
console.log(typeof undefined); // undefined

console.log(null); // null;
console.log(typeof null); // object

console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

/*
  ==
  ===
  When comparing undefined with null in terms of the top 
  In that case, the two values become the same.
  But the difference between them remains in the type of data not in value 
*/
console.log(undefined == null); //  true    => Same Value
console.log(undefined === null); // falst   => The same value but the difference is in the type of data

/*
  <> <=> =
  As for other comparisons, 
  Becomes null = 0
  and become undefined = NaN
*/
console.log(undefined > null); // (NaN > 0) => false || (Number(undefined) > Number(null))
console.log(null >= undefined); // (0 >= NaN) => false || (Number(null) >= Number(undefined))

/*
  0
*/
console.log(null == 0); // false
console.log(null >= 0); // true (0 >= 0) => true || (Number(null) >= 0) => Number(null) = 0
console.log(null <= 0); // true (0 <= 0) => true || (Number(null) <= 0) => Number(null) = 0
console.log(undefined > 0); // false (NaN > 0)

// More Example
console.log(5 > 4); // true
console.log("apple" > "pineapple"); // false
console.log("2" > "12"); // ftrue
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(null == "\n0\n"); // false
console.log(null === +"\n0\n"); // false
