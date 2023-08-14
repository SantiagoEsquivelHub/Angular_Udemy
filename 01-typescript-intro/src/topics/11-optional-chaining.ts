export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: "Santiago",
};

const passenger2: Passenger = {
    name: "Carlos",
    children: ["Natalia", "Elizabeth"],
};

const printChildren = ({ name, children }: Passenger) => {
    // const howManyChildren = children!.length; not null assertion operator
    const howManyChildren = children?.length || 0;
    console.log("🚀 ~ file: 11-optional-chaining.ts:18 ~ printChildren ~ howManyChildren:", name, howManyChildren)
}


