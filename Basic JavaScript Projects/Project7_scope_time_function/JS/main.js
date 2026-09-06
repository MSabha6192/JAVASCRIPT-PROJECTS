var x = 21;

function Global_1() {
    document.getElementById("Global_1").innerHTML = x + 19 + "<br>";
}

function Global_2() {
    document.getElementById("Global_2").innerHTML = x - 7 + "<br>";
}
Global_1();
Global_2();
//Variable declared outside of a function so both functions will produce a result.

function Local_1() {
    var y = 18;
    document.getElementById("Local_1").innerHTML = 4 * y + "<br>";
}

function Local_2() {
    console.log(y);
    document.getElementById("Local_2").innerHTML = y / 3 + "<br>";
}
Local_1();
Local_2();
//Variable declared inside of a function so only the first function will produce a result.

function Undefined() {
    console.log(z);
}
//Does not appear on the browser. Appears in the console as undefined

function Time() {
    if (new Date().getHours() < 18) {
        document.getElementById("Time").innerHTML = "How are you today?" + "<br>";
    }
}
//Displays "How are you today?" if the time is before 6 pm
function If() {
    x = 10;
    if (x < 20)
        document.getElementById("Statement").innerHTML = "The statement is true!";
}
//Displays "The statement is true!" since the variable is less than 20

function Year_Function() {
    var Year = document.getElementById("year").value;
    if (Year <= 1992) {
        Comparison = "You are older than me!";
    } else {
        Comparison = "You are younger than me!";
    }
    document.getElementById("When_were_you_born?").innerHTML = Comparison;
}
//Based on the year entered, it will display if the user is older or younger than me

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
//Displays a message based on the time of day