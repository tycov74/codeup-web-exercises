console.log("Inside Logging")
"use strict";

// Getting The Basics Down

/* Starting a code will begin in 1 of 3 ways:

    var - which is variable. this coding may require you to
    change the name called. Example:

 */

var userName = "Mr. Covington"
userName = "Tye Covington"
console.log(userName)
userName = "Mr T. E. Covington";
console.log(userName)

/*
    function -

 */
// write a function, returnTwo, that returns the number 2.
function returnTwo() {
    return 2;
}
console.log(returnTwo());

// returnPlusTwo
function returnPlusTwo(input) {
    return input + 2;
}
console.log(returnPlusTwo(4));

// function isMoreThan10
// takes in a num
// returns true if more than 10
// false otherwise

/*function isMoreThan10(num) {
    return (num) > 10

}
console.log(isMoreThan10(10), false)
console.log(isMoreThan10(38), true)
console.log(isMoreThan10(-10), false)
*/


//Make a function named isOdd(number)
function isOdd(num) {
    return num % 2 !== 0;
}
console.log(isOdd(4), false);
console.log(isOdd(0), false);
console.log(isOdd(11), true);
console.log(isOdd(-3), true);

// isEven(number)
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(-5), false);
console.log(isEven(8), true);
console.log(isEven(-36), true);
console.log(isEven(3.14), false);

// identity(input)
function identity(input) {
    return input;
}
console.log(identity("Hello, World"));