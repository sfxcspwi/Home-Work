// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let suma = 0;

// const foo = function(numbers)
// {
//     for (n=0; n<numbers.length; n+=1)
//     {
//         suma += numbers[n];
//     }
    
//     return suma/numbers.length;
// }

// console.log(foo(numbers))

// let numbers = 3;

// const a = function(parnist)
// {
//     if (numbers % 2 === 0)
//     {
//         return true
//     }
//     return false;
// }

// console.log(a(numbers))

// let arr = [1, 2, 3, 4, 5, 6, 7, 20]
// let maxNumbers=0;

// const a = function(max)
// {
//     for (n=0; n<arr.length; n+=1)
//     {
//         if (arr[n]>maxNumbers)
//         {
//             maxNumbers = arr[n];
//         }

//     }
    
//     return maxNumbers
// }

// console.log(a(maxNumbers))

let grade="D";
let numbers = [100, 100, 81, 96]
const foo = function(numbers)
{
    let suma = 0;
    let average = 0;
    for (n=0; n<numbers.length; n+=1)
    {
        suma += numbers[n];
    }
 
    average = suma/numbers.length;

    if (average>91 && average<100)
    {
        grade="A";
    }
    else if (average>81 && average<90)
    {
        grade="B";
    }
    else if (average>71 && average<80)
    {
        grade="C";
    }
    else if (average<70)
    {
        grade="D";
    }

    return grade
}

console.log(foo(numbers));



let b = "";
const c = function(string)
{
    for(const symbol of string)
    {
        const lower = symbol.toLowerCase();
        const upper = symbol.toUpperCase();
        if(symbol===lower)
        {
            b+=upper;
        }
        else
        {
            b+=lower;
        }
    
    }

    return b 
}

console.log(c('qweRTY')); 
