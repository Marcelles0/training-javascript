// var numbers =[4, 2, 5, 1, 3, 7, 7, 9, -1];
// let counter = 0;
// /*
// numbers.sort(function (a, b) {
//   counter++;
//   console.log("a:", a);
//   console.log("b:", b);
//   console.log(a-b);
//   return a-b
// });
// */
// numbers.sort((a,b)=>b-a);
// console.log(numbers);
// console.log(counter);

/*
let numbers = [3, 9, 8, 1, 4];
for (let i = 0; i < numbers.length - 2; i++) {
  for (let j = 0; j < numbers.length - 1; j++) {
    if(numbers[j]>numbers[j+1]){
      aux = numbers[j];
      numbers[j] = numbers[j+1];
      numbers[j+1] = aux;
    }
  }
}
console.log(numbers);*/

/*
// Iterating arrays
// The for/of loop works with iterable objects (arrays, strings,...)
let numbers = [1, 4, 6, 8],
sum = 0;
for (let num of numbers) {
sum += num;
}
console.log(sum); // => 19
// Iterating objects keys
// The for/in loop
let hero = {
  character: "Iron Man",
  name: "Tony Stark",
  };
  for (let key in hero) {
  console.log(hero[key]); // Print the value of each property
  }*/

/*
// Array iteration methods
// The forEach() method
// Iterates an array from the beginning to the end
["Aragorn", "Gandalf", "Nazgul"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
  });
  [..."Soberano de Angmar en tiempos pasados"].forEach((letter) => {
  console.log(letter);
  });*/

/*
// The map() method
// returns a new array containing the values returned by the function
let numbers = [1, 2, 3];
let result = numbers.map((item, index, array) => item * 2);
console.log(result); // [2, 4, 6]

// The filter() method
// returns a sub-array.The function should be predicate (returns true or false).
let numbers = [15, 10, 5, 0, -5, -10];
let result = numbers.filter(x => x < 5)
console.log(result); // => [0, -5, -10]; values less than 5
*/

/*
// The every() and some() methods
// both return true or false, and their function must be predicate
// every requires a condition for all elements, some for some of them
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.every((item, index, array) => item > 2)); // false
console.log(numbers.some((item, index, array) => item > 2)); // true

// The reduce() and reduceRight() methods
// Both iterate over all the array elements to reduce the array
// to a final element, that will be returned
// The difference is that reduceRight start at the last element
let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce((accum, item, index, array) => accum + item, 0);
console.log(result); // 15
result = numbers.reduceRight((accum, item, index, array) => accum + item, 0);
console.log(result); // 15
*/

// Nested arrays

let calendar = new Array(5); // 5 rows of the calendar
for (let i = 0; i < calendar.length; i++) {
    calendar[i] = new Array(7); // Each row has 7 columns
}
// console.log(calendar);

// Initialize the array

for (let row = 0, day = 1; row < calendar.length; row++) {
    for (let col = 0; col < calendar[row].length; col++) {
        if (day < 31) {
            calendar[row][col] = day++;
        } else {
            calendar[row][col] = day;
            day = 1;
        }
    }
}
console.log(calendar);

//-----------------------------------------------------------------------
