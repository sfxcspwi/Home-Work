import { addToCart, getTotal, getCount } from "./cart.js";
import { applyDiscount } from "./discount.js";

export function renderProducts(products) 
{
    const list = document.getElementById("product-list");

    products.forEach(product => 
    {
        const li = document.createElement("li");
        li.textContent = `${product.name} - ${product.price} грн`;
            
        const btn = document.createElement("button");
        btn.textContent = "Купити";
            
        btn.addEventListener("click", () => {
          addToCart(product);
          updateUI();
        });
        
        li.appendChild(btn);
        list.appendChild(li);
    });
}

export function updateUI() 
{
    const totalEl = document.getElementById("total");
    const countEl = document.getElementById("count");   

    const total = getTotal();
    const discounted = applyDiscount(total);    

    totalEl.textContent = `Сума: ${discounted} грн`;
    countEl.textContent = `Кількість товарів: ${getCount()}`;
}