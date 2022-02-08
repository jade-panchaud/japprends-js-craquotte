
async function main(){

    // Pas d'erreur, prochaine instruction -> branche "then"
    const a = await isEvenAsync(2);

    // Erreur: levée d'exception
    const b = await isEvenAsync(3)

    // Erreur: levée d'exception
    try {
        const c = await isEvenAsync(3)
    } catch (err){
        console.error(err)
    }

    const d = await isEvenAsync(3).catch(err => err)
}

function isEvenAsync(a: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        if (a % 2 === 0) resolve(true);
        else reject(new Error(`${a} is odd`));
    });
}
