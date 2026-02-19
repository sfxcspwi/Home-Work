// const players = 
// [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// const playersName = players.map(player => player.name)
// const playersPoint = players.map(player => player.points + player.points/10)
// const addPoint = (player, id, hours) => 
// {
//     return players.map (player => 
//         { 
//             if (player.id === id)
//             {
//                 return {
//                     ...players,
//                     timeplayed: player.timePlayed + hours
                    
//                 }
//             }
//         }   
// )

// }

// const onlinePlayer = players.filter(player => player.online === true)
// const offlinePlayer = players.filter(player => player.online === false)
// const hardPlayer = players.filter(player => player.timePlayed > 250)
// const findplayerId = function(players, playerId)
// {
//   return players.find(player => player.id === playerId);
// }

// const findplayerName = function(players, playerName)
// {
//   return players.find(player => player.name === playerName);
// }

// console.log(playersName)
// console.log(playersPoint)
// console.log(offlinePlayer)
// console.log(onlinePlayer)
// console.log(hardPlayer)
// console.log(addPoint(players, 'player-1', 1000))
// console.log(findplayerId(players, "player-1"))
// console.log(findplayerName(players, "Poly"))

// const oldPlayer = player => player.timePlayed>200
// console.log(players.every(oldPlayer))

// const onlinePlayers = player => player.online === true
// console.log(players.every(onlinePlayers))

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const parninumbers = numbers.filter(number => number % 2 === 0)
// console.log(parninumbers)

// const people = 
// [
//   { name: 'John', age: 32, occupation: 'programmer' },
//   { name: 'Jane', age: 26, occupation: 'teacher' },
//   { name: 'Mike', age: 42, occupation: 'engineer' },
//   { name: 'Emily', age: 17, occupation: 'designer' }
// ];

// const peopleOld = people.filter(people => people.age > 17)
// console.log(peopleOld)

// const array = [1, 27, 3, 44, 4, 5, 16, 6, 7];

// const filterRange = function(arr, a, b)
// {
//   return array.filter(element => element>=a || element<=b)
// }

// console.log(filterRange(array, 30, 3))

// const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
// const array2 = [5, 12, 3, 14, 4, 5, 6, 6, 7];

// const newArray = [];

// array1.forEach
// (item =>
//   {
//     if (!newArray.includes(item)) 
//     {
//       newArray.push(item);
//     }
//   }
// );

// array2.forEach
// (item => 
//   {
//     if (!newArray.includes(item)) 
//     {
//       newArray.push(item);
//     }
//   }
// );

// console.log(newArray);

const array2 = ['apple', 'banana', 'orange', 'banana', 'grape', 'apple', 'kiwi'];

const getFirstAndLastLetters = function(array2)
{
  return array2.map(string => string [0] + string [string .length-1])
}

console.log(getFirstAndLastLetters(array2))