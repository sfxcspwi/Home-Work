// let number = Math.floor(Math.random() * 5) + 1;
// 
// if (number === 1)
// {
//     console.log("Ваше число 1")
// }
// else if (number === 2)
// {
//     console.log("Ваше число 2")
// }
// else if (number === 3)
// {
//     console.log("Ваше число 3")
// }
// else if (number === 4)
// {
//     console.log("Ваше число 4")
// }
// else if (number === 5)
// {
//     console.log("Ваше число 5")
// }

// let lang = "Fr";
// 
// switch (lang) 
// {
//     case "Ua": 
//         console.log("Україна");
//     break;    
//     
//     case "Fr":
//         console.log("Франція");
//     break;
// 
//     case "En":
//         console.log("Велика Британія");
//     break;
// 
//     default:
//         console.log("Інша мова");
//     break;
// }

// let option = prompt("Як спосіб доставки?");
// 
// switch (option.toUpperCase()) 
// {
//     case ("САМОВИВІЗ"): 
//         console.log("Ви зможете забрати товар завтра з 12:00 в нашому офісі");
//     break;    
//     
//     case ("КУР'ЄР"):
//         console.log("Кур'єр доставить замовлення завтра з 9:00 до 18:00");
//     break;
// 
//     case ("ПОШТА"):
//         console.log("Посилка буде відправлена сьогодні");
//     break;
// 
//     default:
//         console.log("Вам передзвонить менеджер ");
//     break;
// }

// let stars = Number(prompt("Скільки зірок в отеля?"));
// 
// switch (Number(stars)) 
// {
//     case (1): 
//         console.log("Ціна за номер 20$");
//     break;    
//     
//     case (2): 
//         console.log("Ціна за номер 30$");
//     break;
// 
//     case (3): 
//         console.log("Ціна за номер 50$");
//     break;
// 
//     case (4): 
//         console.log("Ціна за номер 70$");
//     break;
// 
//      case (5): 
//         console.log("Ціна за номер 120$");
//     break;
// 
//     default:
//         console.log("Такої кількості зірок немає");
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

let valuta = prompt("Вкажіть валюту USD, EUR, GBP, UAH");
let kilkist = Number(prompt("Скільки?"));

switch (valuta) 
{
    case ("USD"): 
        console.log(`${kilkist*41} грн`);
    break;    
    
    case ("EUR"):  
        console.log(`${kilkist*43} грн`);
    break;

    case ("EUR"): 
        console.log(`${kilkist*43} грн`);
    break;

    case ("GBP"): 
        console.log(`${kilkist*49} грн`);
    break;

    case ("UAH"): 
        console.log(`${kilkist} грн`);
    break;

    default:
        console.log("Немає такої валюти");
    break;
}

