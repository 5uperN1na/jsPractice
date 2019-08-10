//Undefined

// Creating variables
var a;
var b = "Hello World!"

// Printing variable values
document.write(a + "<br>");
document.write(b);
document.write("<br>");

//Null
var a = "null";
document.write(a + "<br>"); // Print: null

var b = "Hello World!"
document.write(b + "<br>"); // Print: Hello World!

b = null;
document.write(b) // Print: null

//Object data type
var emptyObject = {};
var person = { "name": "Clark", "surname": "Kent", "age": "36" };

// For better reading
var car = {
    "modal": "BMW X3",
    "color": "white",
    "doors": 5
}

// Print variables values in browser's console
console.log(person);
console.log(car);

// Object Properties Names without Quotes
var car = {
    modal: "BMW X3",
    color: "white",
    doors: 5
}

// Print variable value in browser's console
console.log(car);

//Array
// Creating arrays
var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"];

// Printing array values
document.write("<br>");
document.write(colors[0] + "<br>");   // Output: Red
document.write(cities[2]);   // Output: New York

//Function Data Type

var greeting = function () {
    return "Hello World!";
}

// Check the type of greeting variable
document.write("<br>");
document.write(typeof greeting) // Output: function
document.write("<br>");
document.write(greeting());     // Output: Hello World!

//Function
function createGreeting(name) {
    return "Hello, " + name;
}
function displayGreeting(greetingFunction, userName) {
    return greetingFunction(userName);
}

var result = displayGreeting(createGreeting, "Peter");
document.write("<br>");
document.write(result); // Output: Hello, Peter
