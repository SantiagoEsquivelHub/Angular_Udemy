
export class Person {
    // public name: string;
    // public address: string;

    constructor(
        public name: string,
        public lastname: string,
        private address: string = "new York",
    ) {
    }
}

// export class Hero extends Person{

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super(realName, "New York")
//     }
// }

export class Hero {


    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        // this.person = new Person(realName)
    }
}

const santiago = new Person("Santiago", "Sánchez", "Colombia");
console.log("🚀 ~ file: 08-classes.ts:14 ~ santiago:", santiago)

const ironman = new Hero("Ironman", 45, "Tony", santiago);
console.log("🚀 ~ file: 08-classes.ts:13 ~ ironman:", ironman)