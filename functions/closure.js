//Global variables can be private with closures
//In a web page, global variables = window object.

//Isn't working, don't inc because can't access parent scope
function addNotWorking(){
    let count = 0;

    return function (){
        count++;
        return count;
    }
}

//Use a self-invoking function
//Works because access the count in the parent
//scope (self-invoking)
//Closure = function having access to the parent scope,
//even if the parent function has closed.
const add = (function() {
    let count = 0;

    return function () {
        count++;
        return count;
    }
})();

console.log(add());
console.log(add());
console.log(add());

const calcul = (function() {
    let aCalcul = 0;

    return function () {
        aCalcul += 100;
        aCalcul *= aCalcul;
        return aCalcul;
    }
})();

console.log(calcul());