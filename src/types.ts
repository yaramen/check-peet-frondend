export type Category = {
    id: number,
    name: string,
    image: string,
    code: string
};

export type Product = {
    id: number,
    categoryId: number,
    name: string,
    code: string,
    protein: number,
    fat: number,
    carbohydrate: number,
    calories: number,
    image: string,
    description?: string,
    amount?: number
};