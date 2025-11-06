// let bankAccount = 
// {
//     ownerName: "Stanislav",
//     accountNumber: 4441444244434444,
//     balance: 0,
//     deposit: function()
//     {
//       let amount = Number(prompt("Введіть суму грошей для депозиту"))
//       this.balance += amount
//       alert(`Ви поповнили рахунок на ${amount} грн. Залишок ${this.balance} грн `)
//     },  
//     withdraw: function()
//     {
//         let deamount = Number(prompt("Введіть суму грошей для зняття"))
//         if(deamount > this.balance)
//         {
//           alert("Недостатньо грошей на рахунку")
//         }
//         else
//         {
//             this.balance -= deamount
//             alert(`Ви зняли ${deamount} грн. Залишок на рахунку ${this.balance} грн`)
//         }

//     },  
//     getBalance: function()
//     {
//       console.log(this.balance)
//     }   
// }

// bankAccount.deposit();
// bankAccount.withdraw();
// bankAccount.getBalance();

// let weather =
// {
//     temperature: Number(prompt("Вкажіть температуру")),
//     humidity: 10,
//     windSpeed:5,
//     tempMeasuring: function()
//     {
//         if (this.temperature < 0)
//         {
//             alert('Температура менша за 0 градусів') 
//         }
//         else 
//         {
//            alert('Температура більша за 0 градусів') 
//         }
//     }
// }

// weather.tempMeasuring()

// let user =
// {
//     name: "Stanislav",
//     email: "example",
//     password: 123,
//     login: function(email, password)
//     {
//         let userEmail = prompt("Вкажіть логін")
//         let userPassword = Number(prompt("Вкажіть пароль"))
//         if ( this.email === userEmail  && this.password === userPassword )
//         {
//             alert("Вхід успішний")
//         }
//         else if ( this.email !== userEmail)
//         {
//             alert("Неправильний логін")
//         }
//         else
//         {
//             alert("Неправильний пароль")
//         }
//     }
// }

// user.login()


let movie =
{
    rating: 7,
    title: "Назва",
    director: "Продюсер",
    year: 2222,
    ratingMeasuring: function()
    {
        if (this.rating > 8)
        {
            alert('Рейтинг фільму вище за 8 зірок') 
        }
        else 
        {
           alert('Рейтинг фільму нижче за 8 зірок') 
        }
    }
}
movie.ratingMeasuring()

