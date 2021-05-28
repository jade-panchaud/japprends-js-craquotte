//Create an array
let array = ["coucou", "hiboux", "choux"];
console.log(array);

//Array of objects
const fruitArray = [
    { fruit: "pasteque", nombre: 3 },
    { fruit: "mandarine", nombre: 3 }
]
console.log("Liste de fruits ");
console.log(fruitArray);
//Delete an item (first item is now undefined)
delete fruitArray[0];
console.log(fruitArray);

//Add an object into array
array = [];
const object = {name: "moi", age: 12}
array.push(object);
array.push(object);
console.log("Liste objets moi ");
console.log(array);
console.log("Name du premier objet ")
console.log(array[0].name)

//Pop : removes the last element
//Shifting : removes the first element
array.pop();
console.log("Liste après avoir pop ");
console.log(array);

//Execute a function on each value
fruitArray.forEach(addNumber)
function addNumber(value){
    console.log("Ajout 10 " + value.fruit + " " + (value.nombre + 10));
}
