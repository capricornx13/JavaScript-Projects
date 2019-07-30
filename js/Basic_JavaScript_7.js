var x = 36;
var y = 24;
var z = x + y;

function myFunction(){
    var y = 24;
}

function addNums(){
    /*console.log("Inside addNUms")*/
    document.getElementById("p0").innerHTML = "36 plus 24 is: " + z +".<br>";
}

function meal(){
    var hour = new Date().getHours();
    /*console.log(hour);*/
    var eat = "empty";

    if (hour < 11){
        eat = "breakfast";
    }

    else if (hour >= 11 && hour < 13){
        eat = "lunch";
    }

    else {
        eat = "dinner";
    }

    document.getElementById("p1").innerHTML = "Your next meal will be: " + eat + ".";
}

function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if(Time > 12 == Time < 18){
        Reply = "It is the afternoon.";
    }
    else{
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}