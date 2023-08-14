
export const whatsMyType = <T>(argument: T): T => {

    return argument;
}

const amIString = whatsMyType<string>("Hola mundo");
const amINumber = whatsMyType<number>(1234);
const amIArray = whatsMyType<number[]>([1, 2, 3]);


console.log(amIString.split(" "))
console.log(amINumber.toFixed())
console.log(amIArray.join("-"))

export { };