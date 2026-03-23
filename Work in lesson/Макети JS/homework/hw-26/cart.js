export let cart = [];

export function addToCart(product) 
{
    cart.push(product);
}

export function getTotal() 
{
    return cart.reduce((sum, item) => sum + item.price, 0);
}

export function getCount() 
{
    return cart.length;
}