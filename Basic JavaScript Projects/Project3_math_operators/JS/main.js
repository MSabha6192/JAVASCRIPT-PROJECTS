function MathOperations() { //Created a function that identified in the html file 
    var addition = 9 + 10; //Defined a variable to add 2 numbers
    document.getElementById("Math").innerHTML = "9+10=" + addition;
    var subtraction = 15 - 7; //Defined a variable to subtract 2 numbers
    document.getElementById("Math").innerHTML += "<br>15-7=" + subtraction;
    var multiplication = 7 * 4; //Defined a variable to multiply 2 numbers
    document.getElementById("Math").innerHTML += "<br>7*4=" + multiplication;
    var division = 100 / 20; //Defined a variable to divide 2 numbers
    document.getElementById("Math").innerHTML += "<br>100/20=" + division;
    var all = (3 + 9) * 4 / 2 - 7; //Defined a variabe to do various operations
    document.getElementById("Math").innerHTML += "<br>(3+9)*4/2-7=" + all;
    var modulo = 73 % 7; //Defined a variable to find the remainder
    document.getElementById("Math").innerHTML += "<br>When you divide 73 by 7 you have a remainder of: " + modulo;
    var opposite = 12; //Defined a variable to get the opposite number
    document.getElementById("Math").innerHTML += "<br>" + -opposite;
    var increase = 5;
    increase++; //Defined a variable to increase the increment by one
    document.getElementById("Math").innerHTML += "<br>" + increase;
    var decrease = 10; //Defined a variable to decrease the variable by one
    document.getElementById("Math").innerHTML += "<br>" + decrease;
    window.alert(Math.random()); //Generates a random number as a pop up window
    //document.getElementById is used to display the result on the webpage
    var rounding = 4.2;
    document.getElementById("Math").innerHTML += "<br>" + Math.round(rounding);
    //Defined a variable to round to the nearest integer
}