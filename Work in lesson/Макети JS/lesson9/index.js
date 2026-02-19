// const a = [1, 2, 3, 4, 5];

// a[2] = 100;
// console.log(a);

// a[5] = 6;
// console.log(a.length);

// for (n=0; n<a.length; n+=1)
// {
//     console.log(a[n])
// }

// for (const element of a)
// {
//     console.log(element)
// }

// const Arr1 = [1, 5, "4", "hello"];
// const Arr2 = [ true, 2, {}, ["a"], 222];
// console.log(Arr1[1] + Arr2[1]);

// const masiv = ["Ivan", "Petro", "Vasil"];
// masiv[2]="neVasil";
// console.log(masiv[0], masiv);

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (n=0; n<cart.length; n+=1)
// {
//     console.log(cart[n])
// }

// for (const element of cart)
// {
//     console.log(element)
//     total+=element;
// }
// console.log(total)

// const Arr1 = [ 1, 2, 3, 4, 5];
// Arr1[5]=21;
// Arr1.push=22;
// console.log (Arr1);

// const Arr2 = [ 1, 2, "3", true, false]
// for (const element of Arr2)
// {
//     console.log(element, typeof element)
// }

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (n=0; n<numbers.length; n+=1)
// {
//     if (numbers[n] % 2 === 0 )
//     {
//         total += numbers[n]; 
//     }
// }

// console.log(total)

// let login = prompt("Введіть логін");
// const Arr = [ "stas", "ivan", "vasil"]

// for (const element of Arr)
// {
//     if ( login === element)
//     {
//         console.log("Користувача знайдено")
//         break;
//     }
//     else
//     {
//         console.log("Не знайдено")
//         break;
//     }
    
// }

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// let smallestNumber = numbers[0];


// for (n=0; n<numbers.length; n+=1)
// {
//     if (numbers[n] < smallestNumber)
//     {
//         smallestNumber = numbers[n];
//     }
// }
// console.log(smallestNumber)


const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let suma1 = 0;
let suma2 = 0;

for (n=0; n<array1.length; n+=1)
{
    suma1+=array1[n];
}

for (i=0; i<array2.length; i+=1)
{
    suma2+=array2[i];
}

let sumaAll= suma1 + suma2;

console.log(`Сума значень першого масиву ${suma1}`)
console.log(`Сума значень другого масиву ${suma2}`)
console.log(`Загальна сума двох масивів ${sumaAll}`)