let slider = document.querySelector(".slider__input")
let img = document.querySelector(".slider__image")
let box = document.getElementById("box")

slider.addEventListener("input", _.throttle(()=>{
    img.style.width = `${slider.value*5}%`
}, 20))


window.addEventListener("mousemove", _.throttle((event)=>{
    const x = event.offsetX
    const y = event.offsetY

    box.style.left = x + "px";
    box.style.top = y + "px";
}, 100))