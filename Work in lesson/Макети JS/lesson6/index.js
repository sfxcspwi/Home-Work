// let browser = prompt("Вкажіть свій браузер")
// 
// switch (browser) 
// {
//     case "Edge": 
//         console.log("You've got the Edge!");
//     break;    
//     
//     case "Chrome":
//     case "FireFox":
//     case "Opera":
//     case "Safari":
//         console.log("Ми підтримуємо і ці браузери");
//     break;
// 
//     default:
//         console.log("Не підтримуємо")
// }



// let a = Number(prompt("Вкажіть число"));
// 
// switch (a) 
// {
//     case 0: 
//         console.log(0);
//     break;    
//     
//     case 1:
//         console.log(1);
//     break;
// 
//     case 2:
//     case 3:
//         console.log("2,3");
//     break;
// 
//     default:
//         console.log("Не підтримуємо");
//     break;
// }



// let number = Number(prompt("Вкажіть число"));
// 
// switch (true) 
// {
//     case number>=55 && number<=99: 
//         console.log( "Число потрапляє в діапазон");
//     break;    
// 
//     case number<55 && number>99: 
//         console.log( "Число потрапляє в діапазон");
//     break; 
// 
//     case Number.isNaN(number): 
//         console.log( "Не число");
//     break; 
// 
//     default:
//         console.log("Число не потрапляє в діапазон");
//     break;
// }

// let ageMaksim = Number(prompt("Скільки тобі років?"));
// 
// switch (true) 
// {
//     case ageMaksim> 0 && ageMaksim <= 16: 
//         console.log( "Ти дитина");
//     break;    
// 
//     case ageMaksim>= 17 && ageMaksim <= 60: 
//         console.log( "Ти дорослий");
//     break; 
// 
//     case ageMaksim>= 61 && ageMaksim <= 100: 
//         console.log( "Ти пенсіонер");
//     break; 
//  
//     default:
//         console.log("Ого");
//     break;
// 
// }

let name = prompt("Введіть своє ім'я");
let surname = prompt("Введіть своє прізвище");

switch (true) 
{
    case name.length > 4 && surname.length > 5: 
        alert( name.length+surname.length);
    break;    

    default:
        console.log("Упс");
    break;

}