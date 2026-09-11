var A = "My name is ";
var B = "Mohammed Sabha!";
document.write(A.concat(B));
// The concat() method concatenates the two strings together
var Sentence = "This is a text that I am working on!";
var Section = Sentence.slice(24, 32);
document.write("<br>" + Section);
//The slice() method extracts a section of a string. In this case "working"

function Uppercase() {
    var Scream = "Sorry for screaming!";
    document.getElementById("Uppercase").innerHTML = Scream.toUpperCase();
}
//.toUpperCase() method converts the string to uppercase letters.

function Search() {
    var Text = "I am working on a project today!";
    document.getElementById("Search").innerHTML = Text.search("project");
}
//.search() method searches for a specified value in a string and returns the position of the match. In this case, it will return the position of the word "project" in the string.

var Age = 34;
document.write("<br>" + Age.toString());
//.toString() method converts a number to a string.

function Round() {
    var Value = 2.718281828459045;
    document.getElementById("Round").innerHTML = Value.toPrecision(7);
    document.getElementById("Round").innerHTML += "<br>" + Value.toFixed(7);
    document.getElementById("Round").innerHTML += "<br>" + Value.valueOf();
}
//.toPrecision() method formats a number to a specified length.
//.toFixed() method formats a number to a specified number of decimal places.
//.valueOf() returns the original value of the number. It is displayed as a number, not a string.