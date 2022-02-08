const usersRegistered = [
    {name: 'Bill', age: 27, pets: [{name: 'lulu', alias:[]}, {name: 'popo'}, ]},
    {name: 'Carole', age: 22, pets: []},
    {name: 'Billy', age: 12, pets: [{name: 'titi'}]},
    {name: 'Joe', age: 55, pets: [{name: 'toto'}]},
];

const usersWithApplication = [
    {name: 'Bill', age: 27},
    {name: 'Joe', age: 55},
];

const old = usersRegistered.filter(u => u.age > 20).map(u => u.name);
console.log(old);

// Interdit
// const old2 = users.filter(async u => {
//     throw new Error()
// }).map(u => u.name);
// console.log(old2);

const userRegisteredWithApp = usersRegistered.filter(u => usersWithApplication.filter(u2 => u2.name === u.name).length > 0);
const userRegisteredWithApp2 = usersRegistered.filter(u => usersWithApplication.find(u2 => u2.name === u.name));
console.log("userRegisteredWithApp");
console.log(userRegisteredWithApp);
console.log(userRegisteredWithApp2);

// Tous les noms des animaux
const pets = usersRegistered.flatMap(u => u.pets).map(p => p.name);
console.log(pets);

// Tous les alias des animaux
const petAlias = usersRegistered.flatMap(u => u.pets).flatMap(p => p.alias);
console.log(pets);

const average = usersRegistered.reduce((a, b) => a + b.age, 0) / usersRegistered.length;
console.log(average)