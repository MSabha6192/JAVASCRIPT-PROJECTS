var Result = 17;
var MyString = "19";
var NotANumber = 0 / 0;
var False = 25;
var True = "Hello!";
var Inequality = 22 > 17;
var FalseStatement = 3 > 10;

function BigNumber() {
    var HugeNumber = 9.87E654;
    var SmallNumber = -3.21E987;
    document.getElementById("Infinity").innerHTML = HugeNumber + "<br>" + SmallNumber;
    //Displays infinity and negative respectively since it is larger than 3E308
}
document.write("The data type is: " + typeof Result + "<br>");
//Displays the word "number"
document.write("Adding a string and a number resulted in: " + MyString + Result + "<br>");
//Combines the string and the number as one
document.write("The result is " + NotANumber + "<br>");
//Displays NotANumber as NaN
document.write("The result is " + isNaN(False) + "<br>");
//Displays False since "25" is a number
document.write("The result is " + isNaN(True) + "<br>");
//Displays True since "Hello!" is not a number
document.write("The inequality is " + Inequality + "<br>");
//Displays the result comparing 2 numbers
document.write("The inequality is " + FalseStatement + "<br>");
//Displays the result comparing 2 numbers
console.log(3 + 9);
//Displays 12 in the DevTools by opening console
console.log(36 - 21 > 100 - 40);
//Displays false in the DevTools by opening console
document.write("Both sides are " + (9 + 10 == 8 + 11) + "<br>");
//Displays true since both sides are equivlaent
document.write("Both sides are " + (7 - 5 == 9 + 3) + "<br>");
var A = 4;
var B = 4;
var C = "2000"
var D = 2000
var E = "Goodbye"
var F = "Hello"
var Birthday = "January 23rd, 1945";
document.write("Data type and value are " + (A === B) + "<br>");
//Showed both data type and value are true
document.write("Both data type and value are " + (A === Birthday) + "<br>");
//Showed both data types and value are false
document.write("Different data type but same value results in: " + (C === D) + "<br>");
//Showed different data type but same value resulted in false
document.write("Different value but same data type resulted in: " + (E === F) + "<br>");
//Showed different value but same data type resulted in false

var AND1 = 8 < 10 && 7 > 5
document.write("The result is " + AND1 + "<br>");
//Show the statement is true since both were true
var AND2 = 3 > 7 && 5 < 6
document.write("The result is " + AND2 + "<br>");
//Show the statement is false since one was false
var OR1 = 8 < 3 || 7 > 4
document.write("The result is " + OR1 + "<br>");
//Showed the statement is true since one was true
var OR2 = 5 > 9 || 3 < -2
document.write("The result is " + OR2 + "<br>");
//Show the statement is false since both were false

function Opposite() {
    document.getElementById("NotOperator").innerHTML = !(5 < 11) + "<br>" + !(10 > 15);
    //The original statement is true, the ! turns it into false
    //For the second half, the original statement is false, the ! turns it into true 
}