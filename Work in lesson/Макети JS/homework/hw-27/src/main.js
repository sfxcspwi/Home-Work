import Handlebars from "handlebars";
import templateSource from "./template.hbs?raw";

let template = Handlebars.compile(templateSource);
let app = document.getElementById("app");
let currencyButtons = document.querySelectorAll(".currency-btn");

let rates = 
{
  USD: 1,
  EUR: 0.9,
  UAH: 40
};

let symbols = 
{
  USD: "$",
  EUR: "€",
  UAH: "₴"
};

const products = 
[
  { id: 1, name: "Laptop", price: 1500, description: "A high-performance laptop for all your needs." },
  { id: 2, name: "Smartphone", price: 700, description: "A modern smartphone with an excellent camera." },
  { id: 3, name: "Headphones", price: 200, description: "Noise-cancelling headphones for better focus." },
];


function renderProducts(selectedCurrency) 
{
  let items = {
    products: products.map(product => ({
      ...product,
      convertedPrice: Math.round(product.price * rates[selectedCurrency]),
      symbol: symbols[selectedCurrency]
    }))
  };
  app.innerHTML = template(items);
}


renderProducts("USD");


currencyButtons.forEach(btn => 
{
  btn.addEventListener("click", () => 
  {
    let currency = btn.dataset.currency;
    renderProducts(currency);
  });
});