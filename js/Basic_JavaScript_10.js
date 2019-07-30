function Call_Loop(){
    var counter = 0;
    var string = "";
    var limit = "Jon Ward";

    while (counter < limit.length){
        string = string.concat(counter.toString()) + "<br>";
        counter ++;
    }

    document.getElementById("Loop").innerHTML = string;

}

function for_Loop(){
    var instruments = ["guitar", "horn", "tuba", "piano"];
    var x = "";

    for (i = 0; i < instruments.length; i++){
        x += instruments[i] + "<br>";
        document.getElementById("List_of_Instruments").innerHTML = x;
    }
}

function array_Function(){
    var char = [];
    var list = "";

    function buildArray(){
        char[0] = "Cleric";
        char[1] = "Fighter";
        char[2] = "Wizard";
        char[3] = "Rouge";
        char[4] = "Paladin";
    }

    buildArray();

    for (i = 0; i < char.length; i++){
        list += char[i] + "<br>";
    }

    document.getElementById("Array").innerHTML = list;
}

const player = {race:"Half-Elf", class:"Bard", level:"2", alignment: "Chaotic Good"}

function constant_function(){
    var string = "The player's race is: " + player.race + "<br>";
    player.alignment = "Neutral Good"
    player.background = "Folk Hero"
    string += "The player's alignment is: " + player.alignment + "<br>The player's background is: " + player.background;

    document.getElementById("Constant").innerHTML = string;
}

function let_function(){
    var x = 36;
    var string = x + "<br>";
    {
        let x = 63;
        string += x + "<br>";
    }
    string += x;

    document.getElementById("let").innerHTML = string;
}

function myReturn(){
    var x = 36;
    var y = 30;
    var z = 4;

    function addItUp(a, b, c){
        return a + b - c;
    }

    document.getElementById("return").innerHTML = addItUp(x, y, z);
}

function roll(){
    let player = {
        race:"Half-Elf",
        class:"Paladin",
        level:"3",
        alignment:"Lawful Good",
        rollOff: function(){
            var x;
            do{
                x = Math.random() * 100 / 5;
            }
            while (x < 1);
            return "Your " + player.race + " " + player.class + " rolled a: " + Math.round(x);    
        }
    };
    document.getElementById("object").innerHTML = player.rollOff();
}

function myBreak(){
    var string = "";
    for (i = 0; i < 10; i++){
        if (i == 3){
            continue;
        }
        else if (i == 8){
            break;
        }
        else{
            string += "i currently has the value of: " + i + "<br>";
        }
    }

    document.getElementById("break").innerHTML = string;
}