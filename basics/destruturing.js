const [a, b, ...c] = [1,2,3,4,5,6,7,8,9,10];

console.log(a);
console.log(c);

({x, y, ...z} = {x: 1, y: 2, e: 3, z: 4});

console.log(x);
console.log(z);

let j, h;

[j = 5, h = 7] = [1];
console.log(j); // 1
console.log(h); // 7