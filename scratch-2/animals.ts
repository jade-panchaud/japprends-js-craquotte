export class Animal {
    constructor(private name: string) {
    }

    public walk() {
        // Marche
        const walk = () => {
            console.log(`Je walk, je ${this.name}`)
        }
        // Marche pas
        const _self = this;
        const walk2 = function () {
            console.log(`Je walk, je ${_self.name}`)
        }
        return walk();
    }
}

const a = new Animal("pingouan")
const b = new Animal("zobre")

setInterval(function () {
    a.walk()
}, 1000);
setInterval(() => b.walk(), 1000)

setInterval(a.walk, 1000)
setInterval(b.walk, 1000)


// const aWalk = a.walk.bind({name: 'pouet'});
// const aWalk = a.walk;
// aWalk();

const normalFunction = function () {
    this.a = 'b';
    console.log(this.a);
}

function normalFunction2(){

}

const arrowFunction = () => {

}
