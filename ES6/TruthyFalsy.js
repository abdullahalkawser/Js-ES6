// Truthy Values:


// Non-empty Strings: Any string with at least one character is truthy.

// var str1 = "hiii";  
// if (str1) {
//     console.log("str1 is truthy"); 
// }
// else{
//     console.log("str1 is flaseyy"); 

// }

// Non-zero Numbers: Any number that is not zero (positive or negative) is truthy.
// var num1 = 10; 

// if (num1) {
//     console.log("str1 is truthy"); 
// }
// else{
//     console.log("str1 is flaseyy"); 

// }


// Objects: Any object (including arrays and functions) is truthy.

var obj1 = {};  
var obj2 = { name: "John", age: 30 };       // Non-empty object
var arr1 = [];  // Arrays: Even empty arrays are considered truthy.                             // Empty array
var arr2 = [1, 2, 3];                        // Non-empty array
var func1 = function() { return "Hello"; };  // Function

if (obj1) {
    console.log("str1 is truthy"); 
}
else{
    console.log("str1 is flaseyy"); 

}




// Truthy Expressions: Any expression that results in a truthy value, like true, is truthy.
var bool1 = true;                // Explicitly true
var bool2 = 5 > 3;               // Comparison (true)
var bool3 = "Hello";             // Non-empty string
var bool4 = {};                  // Non-empty object
var bool5 = [1, 2, 3];            // Non-empty array
var bool6 = function() { return true; };  // Function returning true

if (bool1) {
    console.log("bool1 is truthy"); // Output: bool1 is truthy
}

if (bool2) {
    console.log("bool2 is truthy"); // Output: bool2 is truthy
}

if (bool3) {
    console.log("bool3 is truthy"); // Output: bool3 is truthy
}

if (bool4) {
    console.log("bool4 is truthy"); // Output: bool4 is truthy
}

if (bool5) {
    console.log("bool5 is truthy"); // Output: bool5 is truthy
}

if (bool6()) {
    console.log("bool6 is truthy"); // Output: bool6 is truthy
}


// Falsy Values:
// Empty Strings: A string with no characters ('') is 

//falsy.
// Zero: The number zero (0) is falsy.
var num = 0;

if (num) {
    console.log("num is truthy"); // Not executed, since num is zero
} else {
    console.log("num is falsy"); // Output: num is falsy
}
// NaN: Not-a-Number (NaN) is falsy.
// null: The value null is falsy.
// undefined: The value undefined is falsy.
// false: The boolean value false is falsy.