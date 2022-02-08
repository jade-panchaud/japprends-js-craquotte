(async function () {

    console.log(await superIsEven2(1, 2, 3, 4));
    console.log(await superIsEven2(2, 2, 6, 4));
    // superIsEven2(1, 2, 3, 4);

    function superIsEven(a: number, b: number, c: number, d: number): Promise<boolean> {
        const isEvenA = isEvenAsync(a);
        const isEvenB = isEvenAsync(b);
        const isEvenC = isEvenAsync(c);
        const isEvenD = isEvenAsync(d);

        return Promise.all([isEvenA, isEvenB, isEvenC, isEvenD]).then(() => true).catch(() => false);
    };

    function superIsEven2(a: number, b: number, c: number, d: number): Promise<boolean> {
        return isEvenAsync(a)
            .then(() => isEvenAsync(b))
            .then(() => isEvenAsync(c))
            .then(() => isEvenAsync(d))
            .catch(() => false)
    };

    function isEvenAsync(a: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (a % 2 === 0) resolve(true);
            else reject(new Error(`${a} is odd`));
        });
    }


})().catch(err => console.error(err))