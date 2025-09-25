// let drink = prompt("Виберіть напій: кава, чай, сік");
// 
// switch (drink.toUpperCase()) 
// {
//     case ("ЧАЙ"): 
//         console.log("Ви вибрали чай");
//     break;    
//     
//     case ("КАВА"):
//         console.log("Ви вибрали каву");
//     break;
// 
//     case ("СІК"):
//         console.log("Ви вибрали сік");
//     break;
// 
//     default:
//         console.log("Немає в асортименті");
//     break;
// }

// let day = prompt("Вкажіть назву дня");
// 
// switch (day.toUpperCase()) 
// {
//     case ("ПОНЕДІЛОК"):
//     case ("ВІВТОРОК"): 
//     case ("СЕРЕДА"): 
//     case ("ЧЕТВЕР"): 
//     case ("П'ЯТНИЦЯ"):  
//         console.log("Ви вказали будній день");
//     break;    
// 
//     case ("СУБОТА"):
//     case ("НЕДІЛЯ"):
//         console.log("Ви вказали вихідний день");
//     break;
// 
//     default:
//         console.log("Немає такого дня");
//     break;
// }



// let pora = Number(prompt("Вкажіть номер місяця"));
// 
// switch (Number(pora)) 
// {
//     case (12): 
//     case (1): 
//     case (2): 
//         console.log("Зима");
//     break;    
//     
//     case (3): 
//     case (4): 
//     case (5):  
//         console.log("Весна");
//     break;
// 
//     case (6): 
//     case (7): 
//     case (8): 
//         console.log("Літо");
//     break;
// 
//     case (9): 
//     case (10): 
//     case (11): 
//         console.log("Осінь");
//     break;
// 
//     default:
//         console.log("Немає місяця з таким номером");
//     break;
// }

// let colors = prompt("Вкажіть колір: червоний, зелений, жовтий");
// 
// switch (colors.toUpperCase()) 
// { 
//     case ("ЧЕРВОНИЙ"):  
//         console.log("СТІЙ!");
//     break;    
//  
//     case ("ЗЕЛЕНИЙ"):
//         console.log("Йди!");
//     break;
// 
//     case ("ЖОВТИЙ"):
//         console.log("Чекай!");
//     break;
//  
//     default:
//         console.log("Немає такого кольору");
//     break;
// }

// let a = Number(prompt("Вкажіть перше число"));
// let b = Number(prompt("Вкажіть друге число"));
// let operator = prompt("Виберіть дію з числами +, -, *, /, %, **");
// 
// switch (operator) 
// {
//     case ("+"): 
//         console.log(a+b);
//     break;    
//     
//     case ("-"): 
//         console.log(a-b);
//     break;
// 
//     case ("*"): 
//         console.log(a*b);
//     break;
// 
//     case ("/"): 
//         console.log(a/b);
//         if (b===0)
//         console.log("Помилка")
//     break;
// 
//     case ("%"): 
//         console.log((a/100)*b);
//     break;
// 
//     case ("**"): 
//         console.log(a**b);
//     break;
// 
//     default:
//         console.log("NaN");
//     break;
// }