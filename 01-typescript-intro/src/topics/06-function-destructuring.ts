export interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}


export const taxCalculation = ({ products, tax }: TaxCalculationOptions): number[] => {
    let total = 0;

    products.map(({ price }) => total += price)

    return [total, total * tax]
}


const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

const [total, newTax] = taxCalculation({
    tax,
    products: shoppingCart
})
console.log("🚀 ~ file: 06-function-destructuring.ts:38 ~ total:", total)
console.log("🚀 ~ file: 06-function-destructuring.ts:38 ~ newTax:", newTax)

