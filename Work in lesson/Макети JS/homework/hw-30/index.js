// let count = 0

// let intervalId = setInterval(() =>
// {
//     console.log("мавпа")

//     count++;

//     if (count >= 5) 
//     {
//         clearInterval(intervalId)
//     }
// }, 1000);

let block = document.querySelector(".block")

setInterval(() => 
{
   let r = Math.floor(Math.random() * 256)
   let g = Math.floor(Math.random() * 256)
   let b = Math.floor(Math.random() * 256)
   block.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}, 1000)

let clicker = document.querySelector(".clicker")
let number = document.querySelector(".number")

let score = 0
let timeLeft = 10

let gameStarted = false
let intervalId

clicker.addEventListener("click", () => 
{

    if (!gameStarted) 
    {
        gameStarted = true

        intervalId = setInterval(() => 
        {
            timeLeft--;

            console.log(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(intervalId);
                clicker.disabled = true;
                console.log("Час скінчився, ваші бали:", score);
            }
        }, 1000);
    }

    score++;
    number.textContent = score;
});


let input = document.querySelector(".timeInput")
let button = document.querySelector(".startBtn")

button.addEventListener("click", () => 
{
    let seconds = Number(input.value)

    if (isNaN(seconds) || seconds <= 0) 
    {
        console.log("Введи правильну кількість секунд")
        return
    }

    console.log("Таймер на", seconds, "секунд")

    setTimeout(() => 
    {
        console.log("Час вийшов!")
        alert("Час вийшов!")
    }, seconds * 1000)
})