class User {
    //This hasn't have a value inside a constructor. It will be the
    //object created.
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    fullName(){
        return this.name + " " + this.surname;
    }

}

const someone = new User("Tirelipimpon", "Carlos");
console.log(someone.name);
console.log(someone.fullName());

function Myclass () {

}

Myclass.prototype.test = function(){

}