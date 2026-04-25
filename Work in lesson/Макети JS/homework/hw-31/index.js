let startTimer = document.querySelector(".startTimer")
let stopTimer = document.querySelector(".stopTimer")
let restartTimer = document.querySelector(".restartTimer")
let timerDisplay = document.querySelector(".timer")
let hoursInput = document.querySelector(".hours")
let minutesInput = document.querySelector(".minutes")
let secondsInput = document.querySelector(".seconds")

let totalSeconds = 0
let isRunning = false
let timer = null
let halfTime = 0

function format(num) 
{
    if (num < 10) 
    {
        return "0" + num
    } 
    else 
    {
        return num
    }
}

function updateDisplay() 
{
    let h = Math.floor(totalSeconds / 3600)
    let m = Math.floor((totalSeconds % 3600) / 60)
    let s = totalSeconds % 60

    timerDisplay.textContent =
        format(h) + ":" + format(m) + ":" + format(s)
}

startTimer.addEventListener("click", () => 
{
    if (!isRunning) 
    {
        isRunning = true

        if (totalSeconds === 0) 
        {
            let hours = +hoursInput.value || 0
            let minutes = +minutesInput.value || 0
            let seconds = +secondsInput.value || 0
            totalSeconds = hours * 3600 + minutes * 60 + seconds

            halfTime = Math.floor(totalSeconds / 2)
        }

        updateDisplay()

        timer = setInterval(() => 
        {
            if(totalSeconds <= 0) 
            {
                clearInterval(timer)
                isRunning = false
                timerDisplay.textContent = "Час вийшов"
                return
            }

            if(totalSeconds === halfTime) 
            {
                alert("Залишилась половина часу")
            }

            totalSeconds--
            updateDisplay()
        }, 1000)
    }
})

stopTimer.addEventListener("click", () => 
{
    clearInterval(timer)
    isRunning = false
})

restartTimer.addEventListener("click", () => 
{
    clearInterval(timer)
    isRunning = false
    totalSeconds = 0
    timerDisplay.textContent = "00:00:00"
})


let startBtn2 = document.querySelector(".startBtn2")
let restartBtn2 = document.querySelector(".restartBtn2")
let timerDisplay2 = document.querySelector(".timer2")

let totalMs2 = 30000
let timer2 = null
let isRunning2 = false

function format(num) 
{
    if (num < 10) return "0" + num
    return num
}

function updateDisplay2() 
{
    let seconds = Math.floor(totalMs2 / 1000)
    let ms = Math.floor((totalMs2 % 1000) / 10)

    timerDisplay2.textContent =
        format(seconds) + ":" + format(ms)
}

startBtn2.addEventListener("click", () => 
{
    if (isRunning2) return

    isRunning2 = true
    startBtn2.disabled = true

    totalMs2 = 30000
    updateDisplay2()

    timer2 = setInterval(() => 
    {

        totalMs2 -= 10


        if (totalMs2 <= 10000) 
        {
            timerDisplay2.style.color = "red"
        }

        if (totalMs2 <= 0) 
        {
            clearInterval(timer2)
            isRunning2 = false
            timerDisplay2.textContent = "0:00"

            startBtn2.disabled = false
            return
        }

        updateDisplay2()

    }, 10)
})

restartBtn2.addEventListener("click", () => 
{
    clearInterval(timer2)
    isRunning2 = false

    totalMs2 = 30000
    timerDisplay2.textContent = "30:00"

    timerDisplay2.style.color = "black"
    timerDisplay2.style.transform = "scale(1)"

    startBtn2.disabled = false
})