function College_Dictionary() { //Created a function
    var College = {
        Faculty: "Professors",
        Degree: "Bachelors",
        Subject: "STEM",
        Age: "18-22",
        Commute: "Car",
    };
    //Created a variable (above) in which contains different properties
    delete College.Commute;
    //Deletes the key "commute"
    document.getElementById("Dictionary").innerHTML = College.Subject;
    //Indicate to give an output of "STEM" after clicking on "Click Me!" 
    document.getElementById("Dictionary").innerHTML += "<br>" +
        College.Commute;
    //Results in undefined since commute was removed from the dictionary
}