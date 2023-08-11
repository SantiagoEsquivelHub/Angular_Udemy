import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 100
    },
    {
        description: "iPad",
        price: 150
    },
];

const tax = 0.15;

const [total, newTax] = taxCalculation({
    tax,
    products: shoppingCart,
});

console.log("🚀 ~ file: 07-import-export.ts:20 ~ newTax:", newTax)
console.log("🚀 ~ file: 07-import-export.ts:20 ~ total:", total)
