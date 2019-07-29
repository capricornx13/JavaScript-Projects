var x = 0/0;
var y = 36;
var z = "This is a string";
var b1 = 10 < 2;
var b2 = 10 > 2;
var b3 = 32 > 23;
var b4 = 4 > 98;

document.getElementById("p1").innerHTML=typeof(z);

document.getElementById("p2").innerHTML=x;

document.getElementById("p3").innerHTML=isNaN(z);

document.getElementById("p4").innerHTML=isNaN(y);

document.getElementById("p5").innerHTML=2E308;

document.getElementById("p6").innerHTML=-3E308;

document.getElementById("p7").innerHTML = b2;

document.getElementById("p8").innerHTML = b1;

console.log(2+2);

document.writeln("This is type coercion with string three and number six: 3" + 6);

console.log(b1);

document.writeln(30 == 30);

document.writeln(36 == 35);

document.writeln("hello");

document.writeln(36 === y);

document.writeln(y === z);

document.writeln("36" === y);

document.writeln(b1 === b2);

document.writeln(b2 && b3);

document.writeln(b1 && b2);

document.writeln(b1 || b2);

document.writeln(b1 || b4);

document.writeln(!b4);

document.writeln(!b2);