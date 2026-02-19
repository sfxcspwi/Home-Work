// let a = 186;
// let me = 
// {
//     name: "stanislav",
//     age: 16,
//     grade: 11,
//     height: a,
//     word: function(string)
//     {
//         return "Привіт";
//     }
// };

// console.log( me.name, me.age, me.height, me.word() )
// console.log(me['name'], me['age'])

// delete me.grade
// console.log (me)

// me.name = "stas";
// console.log(me['name'])


// let myArray = 
// {
//     name: "stanislav",
//     age: 16,
//     city: "Poltava",
//     occupation: "none"

// };

// myArray.city = "Dykanka"
// console.log(myArray);

// let person = 
// {
//     name: "stanislav",
//     age: 16,
//     gender: "man",
//     word: function(string)
//    {
//        return alert(person.name + ', ' + person.age + ', ' + person.gender)
//    }
// }

// console.log(person.word())

// let book = 
// {
//     title: "Mavpa",
//     author: "me",
//     year: "2009",
//     genre: "comic",
// }
// book.title = "Mpnkey"
// console.log(book)

// let car =
// {
//     brand: "BMW",
//     model: "M3",
//     year: 2025,
//     color: "Black"
// }

// console.log(car)

// let restaurant =
// {
//     name: "sfxcspwi",
//     cuisine: "Italian",
//     address: "Unknown",
//     rating: 5
// }

// restaurant.address = "known"
// restaurant.rating = 6

// console.log(restaurant)

// let apple = { name: '🍎', price: 50 }
// let grape = { name: '🍇', price: 70 }
// let lemon = { name: '🍋', price: 60 }
// let strawberry = { name: '🍓', price: 110 }

// const cart = 
// {
//   items: [],

//   getItems() 
//   {
//     return cart.items;
//   },

//   add(product) 
//   {
//     let a = prompt("Які товари куплено?")
//     cart.items.push(a)
//   },

//   remove(productName) {},
//   clear() 
//   {
// cart.items = [];
//   },
//   countTotalPrice() {},
//   increaseQuantity(productName) {},
//   decreaseQuantity(productName) {},
// };

// console.log(cart.add(), cart.getItems(), cart.clear())

// let a = 
// {
//   name: "Object",
//   age: 16,
//   height:100,
  
//   hello: function()
//   {
//     console.log(this.name, this.age, this.height)
//   }
// }

// a.hello()



// let products = 
// [
//   { name: '🍎', price: 50 },
//   { name: '🍌', price: 30 },
//   { name: '🍇', price: 70 }
// ];

// let getTotalPrice = function(products)
// {
//   let suma = 0;
//   for (element of products)
//   {
//     suma += element.price
//   }

//   return suma;
// }

// console.log(getTotalPrice(products));

// let getmoreexpproducе = function(products)
// {
//   let expproducts = 0;
//   for( element of products)
//   {
//     if(element.price > expproducts)
//     {
//       expproducts = element.price 
//     }
//   }

//   return expproducts;
// }

// console.log(getmoreexpproducе(products));


// let bankAccount = 
// {
//   balance: 0,
//   deposit: function()
//   {
//     let amount = Number(prompt("Введіть суму грошей для депозиту"))
//     this.balance += amount
//     return this.balance;
//   },

//   withdraw: function()
//   {
//     let deamount = Number(prompt("Введіть суму грошей для зняття"))
//     this.balance -= deamount
//     return this.balance;
//   },

//   getBalance: function()
//   {
//     console.log(this.balance)
//   }

// }

// bankAccount.deposit();
// bankAccount.withdraw();
// bankAccount.getBalance();

let library = 
{
  books: [],
  addBooks: function(books)
  {
    this.books.push(books);
    return books;
  },

  getAvailableBooks: function(books)
  {
    for (element of this.books)
    {
      if (element.isAvailable === true)
      {
        return element;
      }
    }
  },

  borrowBook: function(title)
  {
    for (element of this.books)
    {
      if (element.isAvailable && element.title === title)
      {
        element.isAvailable = false
        return "Книжку успішно заброньовано";
      }
    }
    return "Невдача"
  }
}

library.addBooks({ title: 'Місто', author: 'Валер’ян Підмогильний', isAvailable: true })
library.addBooks({ title: 'Не Місто', author: 'Валер’ян Підмогильний', isAvailable: false })
console.log(library.books)
console.log(library.getAvailableBooks())
console.log(library.borrowBook('Місто'));
console.log(library.borrowBook('Не Місто'));
