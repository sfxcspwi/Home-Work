let user =
{
    hobby: "football",
    premium: true,
}

const 
{
    hobby: userHobby,
    premium: userStatus
}= user

console.log(userHobby, userStatus)


let person = 
{
    firstname: "Станіслав",
    lastname: "Чугуївець",
    age: 16,
}

const
{
    firstname: personFirstName,
    lastname: personLastName,
    age: personAge
}= person;

console.log(personFirstName, personLastName, personAge)


const employees = 
{
  Mango: 10,
  Poly: 12,
  Ajax: 8,
  Kiwi: 7,
};

const 
{
    Mango: mangoTask,
    Poly: polyTask,
    Ajax: ajaxTask,
    Kiwi: kiwiTask
}=employees

console.log(mangoTask, polyTask, ajaxTask, kiwiTask)

const products = 
[
    { name: 'Apple', price: 50, quantity: 10 },
    { name: 'Banana', price: 30, quantity: 5 },
    { name: 'Cherry', price: 75, quantity: 20 }
];

const
[
   {name: name1, price: price1, quantity: quantity1 },
   {name: name2, price: price2, quantity: quantity2 },
   {name: name3, price: price3, quantity: quantity3 }
]=products

console.log
( 
    name1, price1, quantity1,
    name2, price2, quantity2,
    name3, price3, quantity3
)