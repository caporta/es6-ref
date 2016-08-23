'use strict';

class Person {
    dance() {
        const dances = [
            'waltz',
            'tango',
            'mambo',
            'foxtrot'
        ];
        console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
    }
    constructor({ name, age, eyeColor='brown' } = {}) {
        this.name = name;
        this.age = age;
        this.eyeColor = eyeColor;
    }
}

class Student extends Person {
    dance(traditional) {
        if (traditional) {
            super.dance();
            return;
        }
        const dances = [
            'lyrical',
            'tap',
            'ballet',
            'jazz',
            'hip hop',
        ];
        console.log(`${this.name} is doing the ${dances[Math.floor(Math.random() * dances.length)]}!`);
    }
    constructor({ name, age, interestLevel=5 } = {}) {
        super({ name, age });
        this.interestLevel = interestLevel;
        this.grades = new Map();
    }
}

let stevenJ = new Student({ name: 'Steven', age: 22, interestLevel: 3 });
stevenJ.dance();
console.log(stevenJ.interestLevel);

let sarah = new Student({ name: 'Sarah', age: 21, interestLevel: 10 });
sarah.dance(true);
console.log(sarah.interestLevel);
