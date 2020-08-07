"use strict";

// VISKAS OBJEKTISKAI - OOP
// class -> object
// receptas -> patiekalas

/*
- gyvunai
----- zinduoliai
-------- suo
-------- kate
----- zuvys
-------- auksine zuvele
*/

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

class Mammal extends Animal {
    constructor(name, color, legs) {
        super(name, color);
        this.legsCount = legs;
    }

    makeSound() {
        console.log(`${this.name} says: Bark bark!`);
    }
}

class Fish extends Animal {
    constructor(name, color, fins) {
        super(name, color);
        this.finsCount = fins;
    }
}

class Dog extends Mammal {
    constructor(name, color, legs) {
        super(name, color, legs);
    }
}

class Cat extends Mammal {
    constructor(name, color, legs) {
        super(name, color, legs);
    }

    makeSound() {
        console.log(`${this.name} says: Meow meow!`);
    }
}

const rexas = new Dog('Rexas', 'brown', 4);
const rainis = new Cat('Rainis', 'ginger', 4);
const nemo = new Fish('Nemo', 'shiny', 7);

console.log(rexas);
console.log(rainis);
console.log(nemo);

rexas.makeSound();
rainis.makeSound();
nemo.sayName();