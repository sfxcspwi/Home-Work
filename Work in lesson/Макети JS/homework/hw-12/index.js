// let user =
// {
//     hobby: "football",
//     premium: true,
//     info: function()
//     {
//         for (key of Object.keys(user))
//         {
//             console.log(`${key}: ${user[key]}`);
//         }
//     }
// }

// user.mood = "happy"
// user.hobby = "skydiving"
// user.premium = false
// console.log(user)
// user.info()

// let person = 
// {
//     firstname: "Станіслав",
//     lastname: "Чугуївець",
//     age: 16,

//     getObjectLength: function()
//     {
//         return Object.values(this).length;
//     }
// }

// console.log(person.getObjectLength())

// const employees = 
// {
//   Mango: 10,
//   Poly: 12,
//   Ajax: 8,
//   Kiwi: 7,
//   findBestEmployee: function()
//   {
//     let bestName = null;
//     let maxTasks = 0;

//     for (element of Object.keys(this))
//     {
//         if (this[element]>maxTasks)
//         {
//             bestName = element;
//             maxTasks = employees[element]
//         }
//     }
//       return bestName;
//   }
// };

// console.log(employees.findBestEmployee())

// const employees = 
// {
//   Mango: 100,
//   Poly: 200,
//   Ajax: 300,
//   Kiwi: 400,
// }

// let countTotalSalary = function(employees)
// {  
//     let total = 0;
//     for (element in employees)
//     {
//         total+=employees[element];
//     }

//     return total;
// }

// console.log(countTotalSalary(employees))

// const products = 
// [
//     { name: 'Apple', price: 50, quantity: 10 },
//     { name: 'Banana', price: 30, quantity: 5 },
//     { name: 'Cherry', price: 75, quantity: 20 }
// ];

// let getAllPropValues = function(arr, prop)
// {
//     let values = [];

//     for (element of arr)
//     {
//         if (prop in element)
//         {
//             values.push(element[prop])
//         }
//     }
//     return values;
// }

// console.log(getAllPropValues(products, 'name'));
// console.log(getAllPropValues(products, 'price'));
// console.log(getAllPropValues(products, 'quantity'));

const allProducts = 
[
    { name: 'Apple', price: 50, quantity: 10 },
    { name: 'Banana', price: 30, quantity: 5 },
    { name: 'Cherry', price: 75, quantity: 20 }
];

let calculateTotalPrice = function(allProdcuts, productName)
{
    let total = 0 
    
    for (element of allProdcuts)
    {
        if (element.name === productName)
        {
            total = element.price*element.quantity
        }
    }

    return total;
    
}

console.log(calculateTotalPrice(allProducts, "Apple"))
console.log(calculateTotalPrice(allProducts, "Banana"))
console.log(calculateTotalPrice(allProducts, "Cherry"))