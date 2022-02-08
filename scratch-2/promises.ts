main().catch(err => console.error(err))

async function main() {
    const input = [2, 4, 5, 8, 9];

    Promise.all(input.map(nbr => isEvenAsync(nbr).catch(() => false)))
        .then(result => console.log(result)).catch(err => console.error(err));

    const result: number[] = [];
    for (const nbr of input) {
        if (await isEvenAsync(nbr).catch(() => false)) {
            result.push(nbr)
        }
    }

    console.log(result)

}


function isEven(a: number): boolean {
    return a % 2 === 0;
}

function isEvenAsync(a: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        if (a % 2 === 0) resolve(true);
        else reject(new Error(`${a} is odd`));
    });
}

// Async enrobe dans une promesse
async function isEvenAsync2(a: number): Promise<boolean> {
    return a % 2 === 0;
}
