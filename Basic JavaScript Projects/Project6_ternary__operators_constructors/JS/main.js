function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//Sets up a condition to check if the user is tall enough to ride a ride.

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}
//Sets up a condition to check if the user is old enough to vote.

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//Sets up a constructor function to create vehicle objects with properties for make, model, year, and color.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
//Creates three new vehicle objects using the Vehicle constructor function.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
//Sets up a function to display information about Erik's vehicle using the properties of the Erik object created with the Vehicle constructor function.

function Student(Status, Age, GPA) {
    this.Student_Status = Status;
    this.Student_Age = Age;
    this.Student_GPA = GPA;
}
//Sets up a constructor function to create student objects with properties for status, age, and GPA.
var John = new Student("Freshman", 19, 1.6);
var Mary = new Student("Sophomore", 23, 2.5);
var Mike = new Student("Junior", 29, 2.7);
var Sarah = new Student("Senior", 31, 3.2);
//Creates four new student objects using the Student constructor function.
function Education() {
    document.getElementById("New_and_This").innerHTML = "Mike is a " + Mike.Student_Status + " student who is " + Mike.Student_Age + " years old and has a GPA of " + Mike.Student_GPA;
}
//Sets up a function to display information about Mike's student status, age, and GPA using the properties of the Mike object created with the Student constructor function.

function Nesting() {
    document.getElementById("Nested_Function").innerHTML = Count();
    //Sets up a function to display the result of the Count function, which is nested within the Nesting function.

    function Count() {
        var Starting_point = 13
            //Gave an initial value to the Starting_point variable.
        function Minus_One() { Starting_point -= 2; }
        Minus_One();
        return Starting_point;
        //Sets up a nested function that subtracts 2 from the Starting_point variable and returns the updated value.
    }
}