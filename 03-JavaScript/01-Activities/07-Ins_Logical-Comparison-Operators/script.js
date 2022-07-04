var a = 100;
var b = 10;
var c = "10";

// Arithmetic operators combine with numbers to form an expression that returns a single number
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);

console.log("_______________________________________________________");

// Modulus returns the remainder between two numbers.  
console.log(a % b);

console.log("_______________________________________________________");

// Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false
// Compares equality
console.log("Comparison")
console.log(b == c);
console.log(b != c);

console.log("_______________________________________________________");

// Compares equality and type (strict equality)
console.log(b === c);
console.log(b !== c);

console.log("_______________________________________________________");

// Greater than or less than
console.log("< >")
console.log(a > b);
console.log(a < b);

console.log("_______________________________________________________");

// Greater than or equal to and less than or equal to
console.log(a <= b);
console.log(a >= b);

console.log("_______________________________________________________");

// Logical operators take in two or more expressions and return true or false 

var expression1 = (b == c);
var expression2 = (a > b);



// Evaluates to true if expression1 AND expression2 are both true, otherwise false
console.log("1")
console.log(expression1 && expression2);

console.log("_______________________________________________________");

// Evaluates to true if expression1 OR expression2 is true, otherwise false

console.log(expression1 || expression2);

console.log("_______________________________________________________");

// Logical Not (!) turns an expression that evaluates to true to false and vice versa
// Returns true

console.log(expression2);

console.log("_______________________________________________________");     

// Returns false
console.log(!expression2);
