let inputArea = document.querySelector(".input")
let textArea = document.querySelector(".text")

inputArea.addEventListener("input", function () 
{
    textArea.textContent = inputArea.value;
}
);

const form = document.querySelector("#form");
let inputName = document.querySelector(".inputName")
let inputLogin = document.querySelector(".inputLogin")


form.addEventListener("submit", function(event)
{
    event.preventDefault();
  
    const login = inputName.value
    const password = inputLogin.value

    if(login === "" || password === "") 
    {
      return alert("Введіть дані")
    }

    alert("Успішно")
});

let btn = document.querySelector(".btn__msg")
btn.addEventListener("click", function(event)
{
    event.preventDefault();
    alert("Hello world!")
})

let btnSecond = document.querySelector(".btn__name")
let textName = document.querySelector(".textName")

btnSecond.addEventListener("click", function(event)
{
    event.preventDefault();
    alert(textName.value)
})

let change = document.querySelector(".btn__change")
change.addEventListener("click", function(event)
{
    event.preventDefault();
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    change.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
})

let showHide = document.querySelector(".btn__show")
let img = document.querySelector(".img")
showHide.addEventListener("click", function(event)
{
    event.preventDefault();
    if (img.style.opacity == 0) 
    {
        img.style.opacity = 1; 
    } 
    else 
    {
        img.style.opacity = 0; 
    }
})