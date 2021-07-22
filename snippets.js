// Arrow function
const sum = (num1, num2) => num1 + num2;
console.log(sum(2, 6));
// prints 8

// Default parameters
function print(firstParameter = 5) {
  console.log(firstParameter);
}
console.log(print());
// prints 5
console.log(print(29));
// prints 29

// Let Scope
let scopeLet = 3;
if (true) {
  let scopeLet = 5;
  console.log(scopeLet);
  // prints 5
}
console.log(scopeLet);
// prints 3

// Const can be assigned only once
// can be assigned only once
const num3 = 55;
num3 = 44;
// throws TypeError: Assignment to constant variable

// Multiline string
console.log(`
This is a
multiline string
`);
//prints
//This is a
//multiline string

// Template strings
const stranger = 'Stranger';
const message = `Hello ${world}`;
console.log(message);
// prints "Hello Stranger"


// Exponent operator
console.log(2 ** 8); // Same as: Math.pow(2, 8)
//prints 256

// Spread operator
const obj1 = [1, 2];
const obj2 = [3, 4];
const object1with2 = [...a, ...b];
console.log(object1with2);
//prints [1, 2, 3, 4]

// String includes()
console.log('apple'.includes('pl'));
// prints true
console.log('apple'.includes('tt'));
// prints false

// String startsWith()
console.log('apple'.startsWith('ap'));
//prints true
console.log('apple'.startsWith('bb'));
//prints false

// String repeat()
console.log('dc'.repeat(3));
//prints "dcdcdc"

// Destructuring array
let [num4, num5] = [3, 7];
console.log(num4);
//prints 3
console.log(num5);
//prints 7

// Destructuring object
let obj3 = {
  prop1: 55,
  prop2: 44
};
let { prop1, prop2 } = obj3;
console.log(prop1);
//prints 55
console.log(prop2);
//prints 44

// Object property assignment
const prop3 = 2;
const prop4 = 5;
const obj4 = { a, b };
// Before es6:
// obj = { a: a, b: b }
console.log(obj4);
// prints { a: 2, b: 5 }

// Object function assignment
const obj5 = {
  a: 5,
  b() {
    console.log('b')
  }
}
obj5.b();
// prints b

// Object.assign()
const obj6 = { a: 1 };
const obj7 = { b: 2 }
const obj8 = Object.assign({}, obj6, obj7)
console.log(obj8);
// { a: 1, b: 2 }

// Object.entries()
const obj9 = {
  firstName: 'FirstName',
  lastName: 'LastName',
  age: 24,
  country: 'India',
};
const entries = Object.entries(obj);
// returns an array of [key, value] pairs of the object passed
console.log(entries);
// prints
//[
//['firstName', 'FirstName'],
//['lastName', 'LastName'],
//['age', 24],
//['country', 'India']
//];

// Promises with finally
new Promise((resolve, reject) => {
  console.log('Start');
  resolve();
})
  .then((result) => {
    throw new Error('Something went wrong');
    console.log('Do this');
  })
  .catch((error) => {
    console.log('Do that');
  })
  .finally(() => {
    console.log('The handler is called when the promise is fulflled or rejected.');
  });

// Destructuring Nested Objects
const Person = {
  fullName: "Harry Potter",
  age: 29,
  sex: "male",
  materialStatus: "single",
  address: {
    country: "USA",
    state: "Nevada",
    city: "Carson City",
    pinCode: "500014",
  },
};
const { address: { state, pinCode }, fullName } = Person;
console.log(fullName, state, pinCode);
// Harry Potter Nevada 500014
console.log(city);
//throws ReferenceError: city is not defined


// Spread operator great for modifying objects without side effects/affecting the original
const a = {
  firstName: "FirstName",
  lastNameA: "LastNameA",
}
const b = {
  ...a,
  lastNameB: "LastNameB",
  canSing: true,
}
console.log(a)
//prints {firstName: "FirstName", lastNameA: "LastNameA"}
console.log(b)
//prints {firstName: "FirstName", lastNameB: "LastNameB", canSing: true}


// Transform and filter an Array at the same time
// We can transform an filter and array using the map() and the filter() method in two steps:

let anArrray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let anArrayFiltered = anArrray
    .filter((n) => n >= 5)
    .map((n) => n * 2);
//[10, 12, 14, 16, 18, 20]
// In one step with flatmap()

let anArrayFiltered2 = anArrray.flatMap((n) => n >= 5 ? [n * 2] : []);


// Create an Array from an Object
// We can use Object.keys() and map() to do this simply

const convertObjectToArray = (anObject) => {
    Object.keys(anObject).map((key) => { [e, obj[e]] });
}


// Create a generic function

function calculator(operation, ...numbers) {
    return operation(...numbers);
}
function add(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
function subtract(...numbers) {
    return numbers.reduce((total, num) => total - num, 0);
}
function multiply(...numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}
console.log(calculator(add, 1, 2, 3, 4, 5)); //15
console.log(calculator(subtract, 10, 2, 1)); //-13
console.log(calculator(multiply, 2, 2, 2, 2)); //16


// Creates functions dinamically
// Create functions dynamically is a useful mechanism to generate functions dynamically based on a string.The first parameter is a comma - separated list of arguments, and the last parameter is the code for the function body:
const multiply = new Function("...numbers", " return numbers.reduce( (a,b) => a * b, 1)");
console.log(multiply(1, 2, 3, 4));

// Remove duplicates elements in an Array in one step

const removeDuplicateswFromArray = anArray => [...new Set(anArray)];

// Every and Some
// The(ES11) Array.every() method in JavaScript is used to check whether all the array elements satisfy the given condition.The Array.some() method in JavaScript, instead, is used to check whether at least one of the array elements satisfies the given condition.
const myArray = [10, 20, 30, 9, 50]
console.log(myArray.every(e => e > 10)); //false
console.log(myArray.every(e => e > 9)); //false
console.log(myArray.some(e => e > 10)); //true


// Swap variables
let var1 = 'world!';
let var2 = 'Hello';
[var1, var2] = [var2, var1];
console.log(var1, var2);



// Shorthand with the && operator
if (execute) {
    foo();
}
execute && foo();


// Set mandatory parameters

const hello = (name = mandatory()) => { return console.log(`Hello: ${name}!`) };
hello("Diego");
hello(); //Uncaught Error: Error! You have to pass this parameter!


//Obtain max or min value of an array
Math.max(...values) // 5
Math.min(...values) // 1


//Delete first element
anArrray.shift();

//Calcular diferencia entre diagonals
// const Matrix1 = []
// Matrix1[0] = [1, 2, 3]
// Matrix1[1] = [4, 5, 6]
// Matrix1[2] = [7, 8, 9]

let matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
function diagonalDifference(matrix) {
    let diagonal1 = 0, diagonal2 = 0;

    for (let row = 0; row < matrix.length; row++) {
        diagonal1 += matrix[row][row];
        diagonal2 += matrix[row][matrix.length - row - 1];
    }

    return Math.abs((diagonal1 - diagonal2));
}


