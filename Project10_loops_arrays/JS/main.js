function Call_Loop() {
    var Digit = "";
    var X = 40;
    while (X > 25) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
//Starts with X=40. It decreases by 1 until it achieves 26

let text = "This is a fun assignment!";
let length = text.length;
document.getElementById("Length_of_String").innerHTML = length;
//Gives the length of the text

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;

function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Subjects = [];
    Subjects[0] = "Computer Science";
    Subjects[1] = "Mathematics";
    Subjects[2] = "Physics";
    Subjects[3] = "English";
    Subjects[4] = "Spanish";
    document.getElementById("Array").innerHTML = "One of the subjects you can take in college is " + Subjects[1] + ".";
}
//Created an array to display different type of subjects

function constant_function() {
    const Japan = { People: "Japanese", City: "Tokyo", Religion: "Shintoism", Writing: "Katakana", House_of_Worship: "Shrine" };
    document.getElementById("Constant").innerHTML = "The " + Japan.People + " practice a religion called " + Japan.Religion + "."
        //Created a constant in which the information supplied will stay fixed
    document.getElementById("Constant_Change").innerHTML = "I have replaced Hiragana " + " to " + Japan.Writing + " and added the place of worship called " + Japan.House_of_Worship + "."
        //Replaced the writing element and added a house of worship
}

let x = 20;
sum = x + 10;
document.getElementById("Let").innerHTML = "The sum is " + sum + "."
    //Used the let keyword 

var X = multiply(7, 8)

function multiply(a, b) {
    return a * b;
}
document.getElementById("Return").innerHTML = "The product is " + X + "."
    //Assigned a variable and then declared a function to return the product

let library = {
    model: "Building",
    year: "2020",
    technology: "Computers",
    books: "Non-fiction",
    staff: "librarians",
    description: function Info() {
        return "The library was open in " + this.year + " and has a lot of " + this.staff + ".";
    }
};
document.getElementById("Object").innerHTML = library.description();
// Created a library object with properties and a description method

let comment = "";
for (let x = 0; x < 25; x++) {
    if (x === 16) { break; }
    comment += "The number is " + x + "<br>";
}
document.getElementById("Break").innerHTML = comment;
//Generates numbers from 0 to 15

let value = "";
for (let x = 1; x < 16; x++) {
    if (x === 6) { continue; }
    value += "The number is " + x * 5 + "<br>";
}
document.getElementById("Continue").innerHTML = value;
//Skips the number since it is being to skip when x=6