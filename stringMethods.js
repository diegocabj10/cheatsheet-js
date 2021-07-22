//chartAt()
let txt = "Hello world";
console.log(txt.charAt(0));
//prints H

//charCodeAt()
console.log(txt.charCodeAt(0));
//prints 72

//concat()
let txt1 = "Hello";
let txt2 = "World";
console.log(txt1.concat(txt2));
//prints HelloWorld

//includes()
let txt3 = "I'm a developer";
console.log(txt3.includes("developer"));
//prints true

//indexOf()
let txt4 = "Lets find where it occurs";
console.log(txt4.indexOf("find"));
//prints 5

//lastIndexOf()
let txt5 = "Lets find where it occurs";
console.log(txt5.lastIndexOf("r"));
//prints 23

//match()
let txt6 = "lopersum lopersum lopersum lopersum";
console.log(txt6.match(/sum/g));
//prints [ 'sum', 'sum', 'sum', 'sum' ]

//replace()
let txt7 = "Hello World!"
console.log(txt7.replace("World", "Dev"));
//prints Hello Dev!

//search()
console.log(txt7.search("World"));
//prints 6

//slice(start, end)
console.log(txt7.slice(0, 5));
//prints Hello

//split
let numbers = "1,2,3,4,5"
console.log(numbers.split(","));
//prints [ '1', '2', '3', '4', '5' ]

//substr(start,length)
let txt8 = "Javascript";
console.log(txt8.substr(4, 6));
//prints script

//substring(start, end)
console.log(txt7.substring(1, 4));
//prints ell

//trim()
let txt9 = "     Hello World!        ";
console.log(txt9.trim());
//prints Hello World!

//toLowerCase()
console.log(txt7.toLowerCase());
//prints hello world!

//toString()
let num1 = 29;
console.log(num1.toString());
//prints 29

//toUpperCase()
console.log(txt7.toUpperCase());
//prints HELLO WORLD!

//valueOf
const word = new String('test');
console.log(typeof word);
//prints object
console.log(word.valueOf());
//prints test
console.log(typeof word.valueOf());
//prints string


