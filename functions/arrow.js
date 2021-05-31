//In arrow function, don't need 'function'
// (and 'return' or {} in single statement
const arrowFunction = () => this;


const add = (a, b) => {
    let y = a + b;

    return y + b;
}