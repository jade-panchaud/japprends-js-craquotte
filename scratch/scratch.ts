main().catch(err => console.log(err));

async function main() {
    // getUsers().then(res => console.log(res)).catch(err => console.log(err));

    Promise.all([getUsers(), getUsers()]).then(result => console.log(result.flatMap(res => res))).catch(err => console.error(err))

    getUsers().then(usersP1 => {
        return getUsers().then(usersP2 => usersP1.concat(usersP2))
    }).then(users => console.log(users)).catch(err => console.error(err))

    const usersP1 = await getUsers();
    const usersP2 = await getUsers();
    console.log(usersP1.concat(usersP2));
}

function horreur1() {
    let group: string[] = [];

    getUsers().then(res => {
        group = group.concat(res)
    }).catch(err => console.log(err));
    getUsers().then(res => {
        group = group.concat(res)
    }).catch(err => console.log(err));

    console.log(group);
}

async function getUsers(): Promise<string[]> {
    return ["toto"]
}

async function getUsersBeta(): Promise<string[]> {
    if (Math.random() > 0.5) {
        return ["toto"]
    } else {
        return Promise.reject(new Error('Test error'))
    }
}