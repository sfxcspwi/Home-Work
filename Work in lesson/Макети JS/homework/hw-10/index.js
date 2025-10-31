// const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];


// const countItems = function(array, condition)
// {
//     count = 0
//     for (elements of array)
//     {
//         if (condition(elements))
//         {
//             count+=1;
//         }
//     }
//     return count;
// }


// const isEven = num => num % 2 === 0;
// const isLarge = num => num > 10;
// const isShort = word => word.length <= 3;


// console.log('Парних чисел:', countItems(numbers, isEven));
// console.log('Чисел більше 10:', countItems(numbers, isLarge));
// console.log('Коротких слів:', countItems(words, isShort));



// const calculate = (a, b, operation) => operation(a, b);

// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) =>
//     {
//         if ( b === 0)
//         {
//             return ("Помилка")
//         }

//         return a/b;
//     } 
//     ;

// console.log(calculate(10, 5, add));      // Повинно показати 15
// console.log(calculate(10, 5, subtract)); // Повинно показати 5
// console.log(calculate(10, 5, multiply)); // Повинно показати 50
// console.log(calculate(10, 5, divide));   // Повинно показати 2
// console.log(calculate(10, 0, divide));   // Повинно показати помилку

const repeatMessage = function(times, messageCreator)
{
    for(n = 0; n < times; n+=1)
    {
        messageCreator(n)
    }
}

const helloMessage = (n) => console.log("Привіт");
const byeMessage = (n) => console.log("Пока");
repeatMessage(3, helloMessage);
repeatMessage(5, byeMessage);