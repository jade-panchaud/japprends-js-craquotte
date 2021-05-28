//Create a promise
let promise = new Promise((resolve, reject) => {
    const result = 3*5;

    //Can be only one result or error
    if(result === 12) {
        resolve("OK");
    } else {
        reject("Isn't the result");
    }
});

//Consume the promise with the success or the error
promise.then(
    function (result){
        console.log(result);
    },

    function (error){
        console.log(error);
    }
);

//Create a promise with only a success
let promiseSuccess = new Promise(function (success) {
    success("OK success only");
});

//Consume the promise with the success or the error
promiseSuccess.then(function (result){
    console.log(result);
});

