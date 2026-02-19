const players = 
[
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const sortedByTime = players.sort((a, b) => b.timePlayed - a.timePlayed);

console.log(sortedByTime);

const arr = 
[
    { name: 'John', age: 32 },
    { name: 'Jane', age: 26 },
    { name: 'Mike', age: 42 },
    { name: 'Emily', age: 29 }
];

const sortedByName = arr.sort((a, b)=>
{
    return a.name.localeCompare(b.name)
})

console.log(sortedByName)

const products = 
[
    { name: 'Product 1', price: 100, quantity: 5 },
    { name: 'Product 2', price: 50, quantity: 10 },
    { name: 'Product 3', price: 200, quantity: 2 },
    { name: 'Product 4', price: 50, quantity: 5 }
];

const sortedByPrice = products.sort(
  (a, b) => {
    const c = b.price - a.price;

    if (c === 0) 
    {
      return a.quantity - b.quantity;
    }

    return c;
  }
);

console.log(sortedByPrice)

const items = 
[
    { name: 'Item A', popularity: 5 },
    { name: 'Item C', popularity: 2 },
    { name: 'Item D', popularity: 3 },
    { name: 'Item B', popularity: 5 }
];

const sortedByPopularity = items.sort(
  (a, b) => {
    const c = b.popularity - a.popularity;

    if (c === 0) 
    {
      return a.name.localeCompare(b.name);
    }

    return c;
  }
);

console.log(sortedByPopularity)