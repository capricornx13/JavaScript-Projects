function myFunction(x){
    var animalNoise;
    var animal = x.getAttribute("data-animal");

    switch(animal){
        case "Duck":
            animalNoise = "Quack!";
            break;
        case "Chicken":
            animalNoise = "Cluck, cluck!";
            break;
        case "Dog":
            animalNoise = "Bow Wow!";
            break;
        case "Cat":
            animalNoise = "Meow!";
            break;
        default:
            animalNoise = "Pick one."
    }

    document.getElementById("sound").innerHTML = animalNoise;
}