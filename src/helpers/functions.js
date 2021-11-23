export const getTotal = (products) => {
    const suma = products.reduce( (prev, current) => prev + current.amount*current.price, 0);
    return suma;
}