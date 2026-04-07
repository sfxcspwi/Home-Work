import Handlebars from "handlebars";
import templateSource from "./template.hbs?raw"; 
import { products } from "./data.js";


let bookmarks = [];
let bookmarkList = document.getElementById("bookmarkList");
let addBookmarkBtn = document.getElementById("addBookmarkBtn");
let bookmarkInput = document.getElementById("bookmarkInput");

function renderBookmarks() 
{
  bookmarkList.innerHTML = "";
  bookmarks.forEach((url, index) => 
    {
    let li = document.createElement("li");

    let link = document.createElement("a");
    link.href = url;
    link.textContent = url;
    link.target = "_blank";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.addEventListener("click", () => 
    {
      bookmarks.splice(index, 1);
      renderBookmarks();
    });

    li.appendChild(link);
    li.appendChild(deleteBtn);
    bookmarkList.appendChild(li);
  });
}

addBookmarkBtn.addEventListener("click", () => 
{
  let url = bookmarkInput.value.trim();
  if (!url) return alert("Заповніть поле");
  if (!url.startsWith("http")) url = "https://" + url;

  bookmarks.push(url);
  bookmarkInput.value = "";
  renderBookmarks();
});

renderBookmarks();


let saveBtn = document.getElementById("saveBtn");
let username = document.getElementById("username");
let password = document.getElementById("password");
let currentUser = null;

saveBtn.addEventListener("click", () => 
{
  if (!username.value || !password.value) return alert("Заповніть всі поля");

  currentUser = {
    username: username.value,
    password: password.value,
  };

  alert("Збережено!");
  username.value = "";
  password.value = "";
});


let app = document.getElementById("app");
let searchInput = document.getElementById("searchInput");
let template = Handlebars.compile(templateSource);

function renderProducts(list) 
{
  if (list.length === 0) 
  {
    app.innerHTML = "<p>Нічого не знайдено</p>";
    return;
  }
  app.innerHTML = template({ products: list });
}

searchInput.addEventListener("input", () => 
{
  let value = searchInput.value.toLowerCase();
  let filtered = products.filter((product) =>
    product.name.toLowerCase().includes(value)
  );
  renderProducts(filtered);
});


renderProducts(products);