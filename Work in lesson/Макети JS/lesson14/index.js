// const friends = 
// [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false},
//   { name: 'Ajax', online: true },
// ];

// let findFriendByName = function(friends, friendsName)
// {
//    for (element of friends)
//    {
//         if (element.name === friendsName)
//         {
//             return element;
//         }

//         return("користувача не знайдено")
//    }
// }

// let getAllNames = function(friends)
// {
//     for (element of friends)
//     {
//         console.log(element.name);
//     }
// }

// let getOnlineFriend = function(friends)
// {
//     let online = [];
//     let onlineName = [];
//     for (element of friends)
//     {
//         if (element.online === true)
//         {
//             online.push(element)
//             onlineName.push(element.name)
//         }
//     }

//     return online, onlineName;
// }

// let getOfflineFriend = function(friends)
// {
//     let offline = [];
//     let offlineName = [];
//     for (element of friends)
//     {
//         if (element.online === false)
//         {
//             offline.push(element)
//             offlineName.push(element.name)
//         }
//     }

//     return offline, offlineName;
// }

// console.log(findFriendByName(friends, "Mango"))

// getAllNames(friends)

// console.log(getOnlineFriend(friends))
// console.log(getOfflineFriend(friends))

const products = 
[ 
  { name: 'Mango', price: 70, category: "fruits", stock: 10},
  { name: 'Kiwi',  price: 50, category: "fruits", stock: 12},
  { name: 'Potato',  price: 10, category: "vegetables", stock: 15},
  { name: 'Cabbage',  price: 60, category: "vegetables", stock: 16},
];

let total = function(products, choosedCategory)
{
    let suma = 0;
    for (element of products)
    {
        if (element.category === choosedCategory && element.stock > 0) 
        {
            suma+=element.price;
        }  
    }

    return suma;
}

console.log(total(products, "vegetables"))
console.log(total(products, "fruits"))

let user = 
{
    name: "Станіслав",
    age: 16,
    email: "staschuguivec@icloud.com",
    login: function ()
    {
        return `Вітаємо ${this.name}, ваш вік: ${this.age}, email: ${this.email}`
    }
}

let f = function(callback)
{
    return (callback);
}

console.log(f(user.login.bind(user))())

let person = 
{
    firstname: "Станіслав",
    lastname: "Чугуївець",
    age: 16,
    fullName: function ()
    {
        return `Повне ім'я: ${this.firstname} ${this.lastname}`
    },
    getObjectLength: function()
    {
        return Object.values(this).length;
    }
}

console.log(person.fullName())
console.log(person.getObjectLength())