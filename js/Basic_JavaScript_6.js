function vote_Function(){
    var age, can_Vote;
    age = document.getElementById("Age").value;
    can_Vote = (age < 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = can_Vote;
}

function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Character(Race, Class, Alignment, Level){
    this.Character_Race = Race;
    this.Character_Class = Class;
    this.Character_Alignment = Alignment;
    this.Character_Level = Level;
}

var Artui = new Character("Dwarf", "Cleric", "Chaotic Good", 2);

function myCharacter(){
    document.getElementById("New_and_This").innerHTML = "Artui is a " + Artui.Character_Race + ", and is a level " + Artui.Character_Level + " " + Artui.Character_Class + ".";
}

function nested(){
    function roll(){
        var r = Math.random() * 100;
        return r; 
    }
    document.getElementById("Nested_Function").innerHTML = "A random number was generated. It was: " + roll() +".";
}