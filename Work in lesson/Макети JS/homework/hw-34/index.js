function delayedPromise(value, delay) 
{
    return new Promise((resolve) => 
    {
        setTimeout(() => 
        {
            resolve(value)
        }, delay)
    })
}

let promises = 
[
    delayedPromise("1", 1000),
    delayedPromise("2", 2000),
    delayedPromise("3", 1500),
    delayedPromise("4", 500),
    delayedPromise("5", 2500)
]

Promise.all(promises)
.then((results) => 
{
    console.log("виконано")
    console.log(results)
})
.catch((error) => 
{
    console.log("помилка", error)
})


function randomDelay(value) 
{
    return new Promise((resolve) => 
    {
        let delay = Math.floor(Math.random() * 4000) + 1000;

        setTimeout(() => 
        {
            resolve(`${value} затримка ${delay} мс`);
        }, delay)
    })
}

let promises2 = 
[
    randomDelay("проміс 1"),
    randomDelay("проміс 2"),
    randomDelay("проміс 3"),
    randomDelay("проміс 4"),
    randomDelay("проміс 5")
]

Promise.race(promises2)
.then((result) => 
{
    console.log("найшвидший проміс")
    console.log(result)
})
.catch((error) => 
{
    console.log("помилка", error)
})