let a = document.querySelector("#btn")
let b = document.querySelector("#text")
a.textContent = b.textContent

let c = document.querySelector("img")
c.src = "wave.jpg"

let link = document.querySelector("a")
let img = document.querySelectorAll("img")

link.href = "https://www.youtube.com/"
img[1].alt = "Неавтомобіль"

let list = document.querySelector("ul li")
list.firstChild.textContent = "Не текст"