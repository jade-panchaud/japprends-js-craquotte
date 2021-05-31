//Don't check function parameter values, number of
// arguments or data types

//All functions are a method of an object (if it isn't in a js object
//it's a function of the global object)

//Can define default parameters
function test(a, b = 2){
    return a + b;
}
console.log(test(2));

//Can have arguments object
function argumentsFunction(){
    let sum = 0;

    for(let i = 0; i < arguments.length; i ++){
        sum += arguments[i];
    }

    return sum;
}
console.log(argumentsFunction(1,2,3));

//Arguments are passed by value : means that changed on arguments
//aren't effective outside the function.

//At the opposite, object are passed by reference : means that changed
//on the object changed the original value