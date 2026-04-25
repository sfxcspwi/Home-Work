// let inputMin = document.querySelector(".input__min")
// let inputSec = document.querySelector(".input__sec")
// let startBtn = document.querySelector(".start__timer")
// let timer = document.querySelector(".timer")
// let startStopwatch = document.querySelector(".startStopwatch")
// let stopStopwatch = document.querySelector(".stopStopwatch")
// let restartStopwatch = document.querySelector(".restartStopwatch")
// let secundomir = document.querySelector(".stopwatch")

// let sec = 0 
// let milisec = 0
// let min = 0
// let hours = 0
// let isRunning = false
// let stopwatch = null

// startStopwatch.addEventListener("click", ()=>{
//     if (!isRunning) {
//         isRunning = true

//         stopwatch = setInterval(() => {
//             milisec += 1

//             if (milisec === 100) 
//             {
//                 milisec = 0
//                 sec += 1
//             }

//             if (sec === 60) 
//             {
//                 sec = 0
//                 min += 1
//             }

//             if (min === 60) 
//             {
//                 min = 0
//                 hours += 1
//             }

//             function format(num) 
//             {
//                 if (num < 10) return "0" + num
//                 return num
//             }

//         secundomir.textContent = `${format(hours)}:${format(min)}:${format(sec)}:${format(milisec)}`

//         }, 10)
//     }
// })

// stopStopwatch.addEventListener("click", ()=>{
//     clearInterval(stopwatch)
//     isRunning = false
// })

// restartStopwatch.addEventListener("click", ()=>{
//     clearInterval(stopwatch)

//     sec = 0
//     milisec = 0
//     min = 0
//     hours = 0
//     isRunning = false

//     secundomir.textContent = `00:00:00:00`
// })

// startBtn.addEventListener("click", ()=>
// {
//     let minutes = Number(inputMin.value)
//     let seconds = Number(inputSec.value)

//     let totalSeconds = minutes*60 + seconds

//     let interval = setInterval(() => {
//         totalSeconds -=1

//         timer.textContent = `${totalSeconds} секунд`
        
//         if(totalSeconds === 0)
//         {
//             clearInterval(interval)
//             alert("Час вийшов")
//         }
//     }, 1000)
// })

// let startBtn = document.querySelector(".start");
// let timerEl = document.querySelector(".timer");

// let duration = 10000
// let current = duration

// let interval = null

// startBtn.addEventListener("click", () =>
// {
//     clearInterval(interval);

//     current = duration;
//     document.body.style.background = ""

//     interval = setInterval(() => 
//     {
//         current -= 10; 

//         if (current <= 0) 
//             {
//             current = 0
//             clearInterval(interval)
//         }

//         let seconds = Math.floor(current / 1000)
//         let ms = current % 1000

//         timerEl.textContent =
//             `${seconds}.${ms.toString().padStart(3, "0")}`

   
//         if (current <= 5000) 
//             {
//             document.body.style.background = "red"
//         }

//     }, 10);
// });

// let box = document.getElementById("box")

// let scale = 1
// let growing = true

// setInterval(() => {
//     if (growing) 
//     {
//         scale += 0.05;
//         if (scale >= 2) growing = false
//     } 
//     else 
//     {
//         scale -= 0.05;
//         if (scale <= 1) growing = true
//     }

//     box.style.transform = `scale(${scale})`
// }, 50)

// let startTimer = document.querySelector(".startTimer")
// let stopTimer = document.querySelector(".stopTimer")
// let restartTimer = document.querySelector(".restartTimer")
// let timerDisplay = document.querySelector(".timer")

// let hoursInput = document.querySelector(".hours")
// let minutesInput = document.querySelector(".minutes")
// let secondsInput = document.querySelector(".seconds")

// let totalSeconds = 0
// let isRunning = false
// let timer = null

// function format(num) 
// {
//     if (num < 10) return "0" + num
//     return num
// }

// startTimer.addEventListener("click", () => {
//     if (!isRunning) 
//     {
//         isRunning = true

//         let hours = +hoursInput.value || 0
//         let minutes = +minutesInput.value || 0
//         let seconds = +secondsInput.value || 0

//         totalSeconds = hours * 3600 + minutes * 60 + seconds

//         timer = setInterval(() => {

//             if (totalSeconds <= 0) {
//                 clearInterval(timer)
//                 isRunning = false
//                 timerDisplay.textContent = "Таймер завершено!"
//                 return
//             }

//             totalSeconds--

//             let h = Math.floor(totalSeconds / 3600)
//             let m = Math.floor((totalSeconds % 3600) / 60)
//             let s = totalSeconds % 60

//             timerDisplay.textContent =
//                 `${format(h)}:${format(m)}:${format(s)}`

//         }, 1000)
//     }
// })

// stopTimer.addEventListener("click", () =>
// {
//     clearInterval(timer)
//     isRunning = false
// })

// restartTimer.addEventListener("click", () => 
// {
//     clearInterval(timer)
//     isRunning = false
//     totalSeconds = 0
//     timerDisplay.textContent = "00:00:00"
// })


// function runTimers() 
// {
//     let count = 0

//     let interval = setInterval(() => 
//     {
//         count++

//         console.log(count)


//     if (count % 3 === 0) 
//     {
//       console.log("ping")
//     }


//     if (count % 5 === 0)
//     {
//       console.log("pong")
//     }


//     if (count === 15) 
//     {
//       clearInterval(interval)
//     }
//   }, 1000)
// }

// runTimers()

// let tasks = 
// [
//   "A:1",
//   "B:10",
//   "C:5"
// ]

// let parsed = tasks.map((item, index) => 
// {
//     let [name, priority] = item.split(":")

//     return {
//     name,
//     priority: Number(priority),
//     id: index
//     }
// })

// function processQueue() 
// {
//     if (parsed.length === 0) return

//     parsed.sort((a, b) => 
//     {
//         if(b.priority !== a.priority) 
//         {
//             return b.priority - a.priority
//         }
//         return a.id - b.id
//     })

//     let task = parsed.shift()

//     console.log(task.name)

//     setTimeout(
//         processQueue()
//     , 100);
// }

// processQueue()

let taskName = document.querySelector(".input__taskName")
let taskNum = document.querySelector(".input__taskNum")
let addBtn = document.querySelector(".addBtn")
let structureBtn = document.querySelector(".structureBtn")
let taskShow = document.querySelector(".taskShow")

let tasks = [];


addBtn.addEventListener("click", () => 
{
    let name = taskName.value
    let priority = Number(taskNum.value)

    tasks.push(`${name}:${priority}`)

    taskName.value = ""
    taskNum.value = ""
});


structureBtn.addEventListener("click", () => 
{

    let parsed = tasks.map((item, index) => 
    {
        let [name, priority] = item.split(":");

        return {
            name,
            priority: Number(priority),
            id: index
        }
    })

    let result = []

    while (parsed.length > 0) 
    {

        let bestIndex = 0;

        for (let i = 1; i < parsed.length; i++) 
        {
            if (
                parsed[i].priority > parsed[bestIndex].priority ||
                (
                    parsed[i].priority === parsed[bestIndex].priority &&
                    parsed[i].name < parsed[bestIndex].name
                )
            ) {
                bestIndex = i;
            }
        }

        result.push(parsed[bestIndex])
        parsed.splice(bestIndex, 1)
    }


    taskShow.innerHTML = ""

    result.forEach(task => {
        taskShow.innerHTML += `<div>${task.name} (${task.priority})</div>`
    });
});