// const result = _.add(2, 3)
// console.log(result)

// window.addEventListener("scroll", _.throttle(()=>
// {
//     console.log("Привіт")
// },  300))

// window.addEventListener("scroll", _.debounce(()=>
// {
//     console.log("Привіт")
// },  300))

let inputPrimary = document.querySelector(".input__primary")

inputPrimary.addEventListener("input", _.throttle(()=>
{
    console.log(inputPrimary.value)
},  500))

let inputSecondary = document.querySelector(".input__secondary")

inputSecondary.addEventListener("input", _.debounce(()=>
{
    console.log(inputSecondary.value)
},  500))


// window.addEventListener("mousemove", _.debounce(()=>
// {
//     console.log("стоп")
// },  100))


let userName = document.querySelector(".user__name")

userName.addEventListener("change",()=>
{
    if (!userName.value === "")
    {
        return;
    }

    alert(`Вітаємо! ${userName.value}`)
})

let point = document.getElementById("point")
let graph = document.getElementById("graph")
let coord = document.getElementById("coord")

graph.addEventListener("mousemove", _.throttle((event)=>
{
    const x = event.offsetX
    const y = event.offsetY
    
    point.setAttribute("cx", x)
    point.setAttribute("cy", y)

    coord.textContent = `x: ${Math.round(x)}, y: ${Math.round(y)}`
}, 50))

function fetchData(query) 
{
    console.log("Запит на сервер:", query);
}

let inputServer = document.querySelector(".input__server")

inputServer.addEventListener("input", _.throttle(()=> 
{
    console.log("Запит на сервер: Loading...");
}, 30))

inputServer.addEventListener("change", _.throttle(()=> 
{
    if (!inputServer.value === "")
    {
        return;
    }

    console.log(`Запит на сервер: ${inputServer.value}`);
}))


window.addEventListener("resize", _.throttle(()=>
{
    console.log(window.innerWidth);

}, 300));

let btn = document.querySelector(".btn")

btn.addEventListener("click", _.debounce(()=>
{
    console.log("Надіслано")
}, 1500, {leading: true, trailing: false}))

window.addEventListener("scroll", _.debounce(()=>
{
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight; 
    const percent = Math.round((scrollTop / documentHeight) * 100);
    console.log(`${percent}%`)
}, 200))