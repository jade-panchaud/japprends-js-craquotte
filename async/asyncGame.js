//Method to have user and random number, return a promise
const enterNumber = function () {
    return new Promise((resolve, reject) => {
        const userNumber = Math.floor(Math.random() * 6 + 1);
        console.log(`Jet du joueur ${userNumber}`);
        const randomNumber = Math.floor(Math.random() * 6 + 1);

        //Control entry, throw an error if NaN
        if (isNaN(userNumber)) {
            reject(new Error("Not a number"));
        }

        //Resolve with parameters
        setTimeout(function(){
            const difference = userNumber - randomNumber;
            if (userNumber === randomNumber) {
                resolve({points: 2, randomNumber});
            } else if (difference === 1 || difference === -1) {
                resolve({points: 1, randomNumber});
            } else {
                resolve({points: 0, randomNumber});
            }
        }, 1000);
    });
};

//Function with promises (without async await syntax)
function diceGame() {
    enterNumber()
        .then((result) => {
            console.log(`Le jet de dès était ${result.randomNumber}, points rajoutés ${result.points}`);

            continueGame()
                .then((result) => {
                    if (result) {
                        diceGame();
                    } else {
                        console.log("End game");
                    }
                });
        })
        .catch((error) => {
            console.log(error);
        })
}

//Same function as diceGame, but with async await
async function diceGame2() {
    //Try to execute
    try {
        //Wait to consume promise from enterNumber
        const result = await enterNumber();
        console.log(`Le jet de dès était ${result.randomNumber}, points rajoutés ${result.points}`);

        //Wait to consume promise from enterNumber
        const keepGoing = await continueGame();
        if (keepGoing) {
            diceGame2();
        } else {
            console.log("End game");
        }

    }
    //Catch the error if there if one
    catch (error) {
        console.log(error);
    }
}

//Return a promise, to know if the game continue
function continueGame() {
    return new Promise((resolve) => {

        setTimeout(function(){
            console.log("Play again ?");
            const playAgain = Math.floor(Math.random() * 2 + 1) === 2;

            resolve(playAgain);
        }, 1000);
    });
}

diceGame2();