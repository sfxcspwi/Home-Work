// let array = ['Mango', 'Poly', 'Ajax'];
// let array2 = ['Mango', 'Poly', 'Ajax', 1, 2 ,3];
// const a = function(array)
// {
//     for (n=0; n<array.length; n+=1)
//     {
//         console.log(`${n+1} - ${array[n]}`)
//     }
// }
// a(array);

// let message = "Привіт! Як справи?"
// let pricePerWord = 10;
// let calculateEngravingPrice;
// const a = function(message, pricePerWord)
// {
//     let word = message.split(" ")
//     calculateEngravingPrice = word.length*pricePerWord;
//     return calculateEngravingPrice
// }
// console.log(a(message, pricePerWord))

// let message = "Привіт! Як справи?";
// let longestword = "";
// let word = "";
// const a = function(message)
// {
//     word = message.split(" ")
//     for (n=0; n<word.length; n+=1)
//     {
//         if (word[n].length > longestword.length)
//         {
//             longestword = word[n]
//         }
//     }
    

//     return longestword;
// }

// console.log(a(message))

// let message = "Привіт! Як справи?";
// const a = function(message)
// {
//     if (message.length <= 40)
//     {
//         return message;
//     }
//     else if(message.length > 40)
//     {
//         return message.slice(0,40) + "...";
//     }

//     return message
// }

// console.log(a(message))

// let message = "Привіт! Як справи? sale ";

// const a = function(message)
// {
//    return message.includes("spam") || message.includes("sale");
// }

// console.log(a(message))

let numbers = [];
let input;
let suma = 0;
const foo = function(numbers, suma)
{ 
    
    while(true)
    {
        input = prompt("Введіть число");

        if(input === null)
        {
            break;
        }

        if(input === "")
        {
            break;
        }

        input=Number(input)

        if(isNaN(input))
        {
            break;
        }

        numbers.push(input)
    }

    for (n=0; n<numbers.length; n+=1)
    {
        suma += numbers[n];
    }
    return numbers, suma;
}

console.log(foo(numbers,suma))