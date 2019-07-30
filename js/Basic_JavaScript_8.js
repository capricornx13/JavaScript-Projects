var s1 = "Hello, ";
var s2 = "handsome!";
var sCat = s1.concat(s2);

function addStrings(){
    document.getElementById("p1").innerHTML = sCat;
}

function slice_Method(){
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;
}

function upper_Method(){
    var sentence = "Red Five standing by!";
    var upper = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = upper;
}

function search_Method(){
    var sentence = "All work and no play makes Johnny a dull boy.";
    var search = sentence.search("Johnny");
    document.getElementById("search").innerHTML = search;
}

function to_String_Method(){
    var x = s2.search("d");
    var stringX = x.toString();
    document.getElementById("toString").innerHTML = stringX;
}

function precision_Method(){
    x = 12345.6789
    y = x.toPrecision(5);
    document.getElementById("precision").innerHTML = y;
}

function fixed_Method(){
    var x = 29579203.29347;
    var y = x.toFixed(3);
    document.getElementById("fixed").innerHTML = y;
}

function value_Method(){
    x = s1.valueOf();
    document.getElementById("value").innerHTML = x;
}