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

//OTHER PROMISE EXAMPLE
function hungry(isHungry) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (isHungry) {
                resolve("Je vais manger");
            } else {
                reject("Je ne vais pas manger")
            }
        }, 1000);
    });
}

isHungry = true;
//Now consume the promise. Catch error if necessary and do something
//after all (even if it's an error)
hungry(isHungry).then(function (result) {
        console.log(result);
    }
).catch(function (error) {
        console.log(error);
    }
).finally(function () {
        console.log("Je vais me coucher");
    }
)


