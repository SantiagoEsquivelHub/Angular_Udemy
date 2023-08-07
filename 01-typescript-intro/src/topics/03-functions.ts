
function addNumbers(a: number, b: number): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
    return firstNumber * base;
}

// const result: number = addNumbers(1, 2);
// const resultString: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(1);
// console.log({ result, resultString, multiplyResult })

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const veteran: Character = {
    name: 'Santiago',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)

    },
}

healCharacter(veteran, 50);
veteran.showHp();

export { };