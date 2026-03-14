import { success, error, info } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

let keyEl = document.getElementById("key");
let newGameBtn = document.getElementById("newGame");
let keys = ["a","b","c","d","e","f","g","h","i"];
let currentKeyIndex = 0;

function setRandomKey() 
{
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyEl.textContent = keys[currentKeyIndex];
}

setRandomKey();

document.addEventListener("keydown", function(event)
{
    let pressedKey = event.key.toLowerCase();
    let correctKey = keys[currentKeyIndex];

    if(pressedKey === correctKey) {
        success({ text: "Правильно" });
        setRandomKey();
    } 
    else 
    {
        error({ text: "Неправильна кнопка" });
    }
});

document.addEventListener("keypress", function(event)
{
    event.preventDefault();
});

newGameBtn.addEventListener("click", function()
{
    setRandomKey();
    info({ text: "Нова гра почалась" });
});

let chartData = {
  labels: Array.from({length:30}, (_, i) => (i+1).toString()),
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150,220,180,200,250,300,280,350,400,380,420,450,500,550,600,650,700,750,800,850,900,950,1000,1050,1100,1150,1200,1250,1300,1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 2,
      fill: false
    }
  ]
};

let ctx = document.getElementById("sales-chart");
let salesChart = new Chart(ctx, 
{
  type: "line",
  data: chartData,
  options: { responsive: true, scales: { y: { beginAtZero: true } } }
});