class Food {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    static show(food){
        return food.name + ", quantity: " + food.quantity;
    }
}

//Fruits inherits methods from Food class
class Fruits extends Food {
    constructor(name, quantity, color) {
        super(name, quantity);
        this.color = color;
    }

    details(food){
        return Food.show(food) + " and his color is " + this.color;
    }
}

const banane = new Fruits("banane", 5, "yellow");
console.log(Food.show(banane));
console.log(banane.details(banane));