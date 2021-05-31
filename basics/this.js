//This in a method refers to the owner of the method
const user =
    {
        name: "Carotte",
        surname: "Tirelipimpon",
        birthYear: 1987,
        //So there, to the user object
        age: function (){
            return (2021 - this.birthYear)
        },
        user: function (){
            return this;
        }

    };

console.log("User age: " + user.age());
console.log("User: " + user.user());

console.log("This alone: " + this);

"use strict";
function myFunction() {
    return this;
}

console.log("This in strict function: " + myFunction());

function casualFunction(){
    return this;
}

const arrowFunction = () => this;

console.log("Casual function: " + casualFunction());
console.log("Arrow function: " + arrowFunction());