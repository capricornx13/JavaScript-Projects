function myDictionary(){
    var character = {
        Race:"Dwarf",
        Class: "Cleric",
        Background: "Pirate",
        Alignment: "Chaotic Good",
        Religion: "The Drowned God"
    };
    delete character.Class;
    document.getElementById("Dictionary").innerHTML=character.Class;
}