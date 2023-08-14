// Functions that can modify normal behavior of classes, properties and methods  

function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "New property";
        hello = "override";
    }
}

@classDecorator
export class Superclass {
    public myProperty: string = "ABC123";

    print() {
        console.log("Hola mundo")
    }
}

console.log(Superclass)

const myClass = new Superclass();
console.log("🚀 ~ file: 10-decorators.ts:13 ~ myClass:", myClass)
