let gallery = document.querySelector(".gallery");
let scrollAmount = 320;

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") {
    gallery.scrollLeft += scrollAmount;
  }
  if (event.key === "ArrowLeft") {
    gallery.scrollLeft -= scrollAmount;
  }
})

let input = document.querySelector("input")
let renderBtn = document.querySelector('[data-action="render"]')
let destroyBtn = document.querySelector('[data-action="destroy"]')
let boxes = document.querySelector("#boxes")

renderBtn.addEventListener("click", event =>
{
    let amount = input.value
    let boxsize = 30;

    for (n=0; n<=amount; n+=1)
    {
        let box = document.createElement("div")
        box.style.width = boxsize + "px"
        box.style.height = boxsize + "px"
        boxes.appendChild(box);
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        boxsize += 10;
    }
})

destroyBtn.addEventListener("click", event =>
{
    boxes.innerHTML = "";
})