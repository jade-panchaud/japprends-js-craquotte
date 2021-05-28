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

