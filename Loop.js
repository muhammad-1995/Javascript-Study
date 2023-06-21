/* Loop */
const myArray = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < myArray.length; i++) {
  let collection = [];
  for (let j = 0; j < myArray.length; j++) {
    collection.push(myArray[j]);
  }
  console.log(collection);
}

console.log("_".repeat(80));

// Example
for (let i = 0; i < myArray.length; i++) {
  let empty = [];
  for (let j = 0; j < myArray.length; j++) {
    empty.push(`${myArray[i]} Take ${myArray[j]}`);
  }
  console.log(empty);
}

console.log("_".repeat(80));

// Example
let array = ["A", "A", "B", "C", "D", "A", "A", "E", "B"];
for (let i = 0; i < array.length; i++) {
  let newArray = [];

  for (let j = i; j < array.length; j++) {
    if (array[i] == array[j]) {
      newArray.push(array[i]);
    }
  }
  console.log(newArray);
}

/*
  ["A", "A", "B", "C", "D", "A", "A", "E"]
  ["A", "A", "A"];
  ["A", "A", "A"];
  ["B"];
  ["C"]
  ["A", "A", "A"];
  ["A", "A", "A"];
  ["E"]
*/
for (let i = 0; i <= 10; i++) {
  let arrays = [];
  for (let j = i; j <= 10; j++) {
    arrays.push(j);
  }
  console.log(arrays);
}

for (let i = 0; i <= 10; i++) {
  // 0
  let arrays = [];
  for (let j = i + 1; j <= 10; j++) {
    arrays.push(j);
  }
  console.log(arrays);
}

/*
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

let arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let start = 1;
let counter = 0;
let item;
for (let i = 0; i < arr.length; i++) {
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      counter++;
      if (counter > start) {
        // 4 > 1
        start = counter;
      }
    }
  }
  counter = 0;
}
console.log(start);

const $myData = ["A", "B", "B", "B", "A", "C", "A", "C", "C", "A", "A", "C"]; // A = 5 | B = 3 | c = 4
let $start = 1;
let $counter = 0;
let $Element;
let $newArray = [];

for (let i = 0; i < $myData.length; i++) {
  for (let j = i; j < $myData.length; j++) {
    if ($myData[i] === $myData[j]) {
      $newArray.push($myData[j]);
      $counter++;
      if ($counter > $start) {
        //  > 1
        $start = $counter;
      }
    }
  }
  // break;
}
console.log($newArray);
console.log($counter);

// Example
const $Repeat = [23, 56, 4, 78, 5, 63, 45, 210, 56];
let uniq;
for (let i = 0; i < $Repeat.length; i++) {
  let array_ = [];
  for (let j = 1; j < $Repeat.length; j++) {
    if ($Repeat[i] == $Repeat[j]) {
      array_.push($Repeat[j]);
    }
  }
  uniq = array_[0];
}
for (let i = 0; i < $Repeat.length; i++) {
  if ($Repeat[i] === uniq) {
    $Repeat.splice($Repeat.indexOf(uniq), 1);
  }
}
console.log($Repeat);

for (let i = 0; i < 8; i++) {
  let n = [];
  for (let j = i; j < 8; j++) {
    n.push(j);
  }
  console.log(n);
}

var bigNum = [2, 45, 3, 67, 34, 567, 34, 345, 123, 1];
let number = 0;
for (let i = 0; i < bigNum.length; i++) {
  if (bigNum[i] > number) {
    number = bigNum[i];
  }
}
console.log(number);

let myFunction = (one = "No") => one;
console.log(myFunction());
