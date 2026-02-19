const arr = [1, 2, 3, 4, 5];

function callback(a, b)
{
    return a + b;
}

function sumArray(arr, callback) 
{
    let suma = 0;
   for(elemnt of arr)
   {
    suma = callback(suma, elemnt);
   }

   return suma;
}


console.log (sumArray(arr, callback));