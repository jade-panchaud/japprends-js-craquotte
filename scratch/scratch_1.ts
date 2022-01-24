
class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public walk() {
        console.log("Je walk mon name est " + this.getName());
    }

    public getName() {
        return this.name;
    }
}

function main(){
    const user = new User('paul');
    user.walk();

    // Marche pas
    setInterval(user.walk, 1000);
    // Marche
    setInterval(() => user.walk(), 1000);
}

main();