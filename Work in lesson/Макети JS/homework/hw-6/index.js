// let number = 1;
// 
// while (number<11)
// {
//     console.log(number);
//     number+=1;
// }

// let min = 2;
// let max = 20;
// 
// for (i=min; i<max; i+=1)
// {
//     if(i % 2 === 0)
//     {
//         console.log(i)
//     }
// }

// for (i=0; i<100; i+=7)
// {
//     console.log(i)
// }

// let min = 0;
// let max = 20;
// 
// for (i=min; i<max; i+=1)
// {
//     console.log(i)
// 
//     if (i>=max)
//     {
//         break;
//     }
// 
// }

let min = 2;
let max = 20;

for (i=min; i<max; i+=1)
{
    if(i % 3 === 0)
    {
        continue;
    }

    console.log(i)

}