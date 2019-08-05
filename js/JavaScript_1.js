var Colors;

function Color_Function(){
    var Color_Output;
    Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    
    switch(Colors){
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function changeText(){
    var xArray = document.getElementsByClassName("change");

    xArray[0].innerHTML = "This text HAS changed";
}

function draw(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var backGround = canvas.getContext("2d");

    //create gradient
    var grd = backGround.createLinearGradient(0, 0, 300, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    //fill background
    backGround.fillStyle = grd;
    backGround.fillRect(0, 0, 500, 250);

    //fill rect
    ctx.fillStyle = Colors;
    ctx.fillRect(0, 0, 150, 75);

    //create text
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Hello", 75/2, 50);
}