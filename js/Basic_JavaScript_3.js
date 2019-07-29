var x = 30+6;
var y = 30-6;
var z = 30*6;
var a = 30/6;
var b = ((30 + 6)-6)*6/6;
var c = x%y;
var d = -x;
var r = Math.round(Math.random()*100/5);

function myAddition(){
    document.getElementById("Math1").innerHTML="30 + 6 = "+x;
}

function mySubtraction(){
    document.getElementById("Math2").innerHTML="30 - 6 = "+y;
}

function myMultiply(){
    document.getElementById("Math3").innerHTML="30 * 6 = "+z;
}

function myDivide(){
    document.getElementById("Math4").innerHTML="30 / 6 = "+a;
}

function myOperations(){
    document.getElementById("Math5").innerHTML="30 plus 6, minus 6, times 6, and divided by 6 equals "+b+"!";
}

function myMod(){
    document.getElementById("Math6").innerHTML="The remainder of the first answer divided by the second answer is "+c+".";
}

function myNeg(){
    document.getElementById("Math7").innerHTML="The negation of the first answer would be "+d+".";
}

function myInc(){
    y++;
    document.getElementById("Math8").innerHTML="The increment of the second answer is "+y+".";
}

function myDec(){
    z--;
    document.getElementById("Math9").innerHTML="The decrement of the third answer is "+z+".";
}

function myRandom(){
    document.getElementById("Math10").innerHTML="The number randomly selected between 0 and 20 is..."+r;
}

function myMath(){
    document.getElementById("Math11").innerHTML="I applied the Math.sqrt to the first answer. This finds the square root of the number and here is my result: "+Math.sqrt(x);
}