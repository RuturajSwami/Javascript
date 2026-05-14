
let a = 9;
let b = 9;
let c;

console.log("c =", a + b); // operand a,b   // operator +


// Arithmetic Operators
console.log('a + b', a + b)

console.log('a - b', a - b)

console.log('a / b', a / b)

console.log('a*b', a * b)

//unary operators 
a = a + 1
console.log(a)

console.log("postincrement:", a++) // Frist it will print the value then it will increment value.
console.log(a)
console.log("preincrement:", ++a) // Frist it will increment the value then it will print value.


// Assignment Operators

let r = 10;

r += 5
console.log("r += 5 :", r)

r -= 13
console.log("r -= 13 :", r)

r *= 24
console.log("r *= 24 :", r)

r /= 2
console.log("r /= 2 :", r)

r %= 4
console.log("r %= 4 :", r)
r = 50;
r **= 2
console.log("r **= 2 :", r)



// Comparison Operators

let x = 7;
let y = 7;
let z = "7";

console.log("x == y :", x == y)
console.log("x != y :", x != y)
console.log("x == z :", x == z)  // checks only value means 5 & "5" both are equal here.

console.log("x === z :", x === z)
// checks value and datatype
console.log("x !== z :", x !== z)

console.log("x > y :", x > y)
console.log("x >= y :", x >= y)

console.log("x < y :", x < y)
console.log("x <= y :", x <= y)



// Logical Operators
// 1 AND, 2 OR, 3 NOT


let marks = 28;
let pass = true;

console.log("AND Operator:", (marks >= 18) && (pass == true))

let isPalindrome = false;
let input = 8;

console.log("OR Operator:", (isPalindrome == true) || (input < 10))

let Fail = false;

console.log("NOT Operator:", !(Fail == true))

// Conditional Statements

let life = "good";
if (life == "good") {
    color = "red";
    console.log(color)
}

// if else
if (life == "bad") {
    color = "black";
    console.log(color)
}
else {
    color = "white";
    console.log(color)
}

life = "cool";
// else if
if (life == "good") {
    color = "black";
    console.log(color)
}
else if (life == "bad") {
    color = "white";
    console.log(color)
}
else {
    color = "gray";
    console.log(color)
}