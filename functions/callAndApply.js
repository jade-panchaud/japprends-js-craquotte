//---------------   CALL    ------------------------
//Can use a method from another object.
//Call method can also have arguments

const timeLine =
    {
        birthYear: 1987,
        age: function (currentYear, deathYear){
            return (currentYear - this.birthYear + deathYear)
        },
    };

const user =
    {
        name: "Carotte",
        surname: "Tirelipimpon",
        birthYear: 1900,
        fullName: function (){
            return this.name + " " + this.surname;
        },
    };

//Call the method from timeLine object, and used it
//for the user object.
console.log(timeLine.age.call(user, 2021, 2080));

//---------------   APPLY    -----------------------
//Can write a method that can be used on different objects
//Take an array or a tab for many arguments
console.log(timeLine.age.apply(user, [2021, 2080]));

console.log(Math.max.apply(null, [100, 52, 2]));