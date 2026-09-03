function My_First_Function() { //Declaring a function 
    var str = "This is the button text!"; //Declaring a variable
    str += " This is the 2nd sentence!"; //Concatenating the string
    document.getElementById("Button_Text").innerHTML = str;
    //Tells the browser to update the HTML content based on the id
}