console.log('Hello');

// 'var' interdit
// let et const à la place et de préférence const

//object can be created without a class template
const users = [
    {username: 'Paul', password: 'test'},
    {username: 'Jules', passw0rd: 'test'},
]

let person = {fname: "John", lname: "Doe", age: 25};
let x;
for (x in person) {
    console.log(person[x] + " ");
}

console.log(users);

function add(a, b) {
    return a + b;
}

console.log(add(4, 5));

function myInterval(func, nbr) {
    for (let i = 0; i < nbr; i++) {
        func();
    }
}

myInterval(function () {
    console.log('my interval')
}, 10);

let i = 0;

const interval = setInterval(function () {
    i++;
    console.log(add(2, i));
    if(i > 5){
        clearInterval(interval) // Setinterval = clearInterval obligatoire
    }
}, 1000)

setTimeout(function () {
    console.log('Mon i 3 sec apres ', i)
}, 3000)

console.log('Mon i ', i);


//-------------------- JSON ------------------
const json = {
    "users": [
        {"name": "me", "age": 10},
        {"name": "you", "age": 20}
    ]
};
console.log(json);

const jsonStringify = JSON.stringify(json);
console.log(jsonStringify);

const jsonParse = JSON.parse(jsonStringify);
console.log(jsonParse);