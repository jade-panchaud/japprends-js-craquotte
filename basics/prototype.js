const prototypeObj = "".prototype;
const prototypeString = String.prototype;
console.log(prototypeObj)
console.log(prototypeString)

// Pollution de prototype: MAL ABSOLU
String.prototype.toLocaleLowerCase = function(){
    return "bite";
}

console.log("Test")
console.log("Test".toLocaleLowerCase());

// Attention aux librairie qu'on choisi
//  - Attention à la sécurité
//  - Faut que ce soit utile
//  - Maintenu
//  - CI + tests (regarder le pipeline)
