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



// suo

class Dog {
    constructor(name, age, color, breed) {
        this.name = name;
        this.age = age;
        this.furColor = color;
        this.breed = breed;
    }

    makeSound() {
        console.log('Bark bark!!');
    }

    whatIsYourName(howManyTimes = 1) {
        for (let i = 0; i < howManyTimes; i++) {
            console.log(`Bark! My name is ${this.name}`);
        }
    }

    describe() {
        console.log(`I am a dog "${this.breed}" named ${this.name} with fur color ${this.furColor} and age ${this.age}.`);
    }
}

const rexas = new Dog('Rex', 2, 'brown', 'Lietuvos lenciuginis');
const sargis = new Dog('Sargis', 0, 'orange', 'Tax');
const margis = new Dog('Margis', 1, 'ginger', 'Colli');

rexas.whatIsYourName(3);
sargis.whatIsYourName();
margis.whatIsYourName(7);

rexas.describe();
sargis.describe();
margis.describe();