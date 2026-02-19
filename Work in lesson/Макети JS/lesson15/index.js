
// const user = 
// {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com'
// }

// const {name: nameUser, age: ageUser, email: emailUser} = user;

// console.log(nameUser, ageUser, emailUser)

// const car = {
//   make: 'Toyota',
//   model: 'Camry',
//   year: 2020,
//   features: ['power windows', 'rear camera', 'navigation'],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true
//   }
// }

// const 
// {
//     make: makeCar, 
//     model: modelCar, 
//     year: yearCar, 
//     features: [powerWindow, rearCamera, navigation], 
//     safety: {airbags, antilock_brakes: item2, stability_control}

// } = car;

// console.log
// ( 
//     makeCar, 
//     modelCar, 
//     yearCar, 
//     powerWindow, 
//     rearCamera, 
//     navigation, 
//     airbags, 
//     item2, 
//     stability_control
// )

// const movie = 
// {
//   title: 'The Shawshank Redemption',
//   director: {
//     name: 'Frank Darabont',
//     nationality: 'American'
//   },

//   actors: ['Tim Robbins', 'Morgan Freeman'],
//   release_year: 1994,
//   ratings: {
//     imdb: 9.3,
//     rotten_tomatoes: 90
//   }
// }

// const 
// {
//     title: titleMovie, 
//     director: { name, nationality}, 
//     actors: [actors1, actors2],
//     release_year: yearMovie,
//     ratings: { imdb, rotten_tomatoes}

// } = movie;

// console.log(titleMovie, name, nationality, actors1, actors2, yearMovie, imdb, rotten_tomatoes)

// const books = {
//   count: 3,
//   list: [
//     {
//       title: 'The Great Gatsby',
//       author: 'F. Scott Fitzgerald',
//       year: 1925
//     },
//     {
//       title: 'To Kill a Mockingbird',
//       author: 'Harper Lee',
//       year: 1960
//     },
//     {
//       title: '1984',
//       author: 'George Orwell',
//       year: 1949
//     }
//   ]
// }

// const 
// {
//     count: countBooks,
//     list: 
//     [ 
//         {title: title1, author: author1, year: year1}, 
//         {title: title2, author: author2, year: year2},
//         {title: title3, author: author3, year: year3}
//     ]

// } = books;

// console.log( countBooks, title1, author1, year1, title2, author2, year2, title3, author3, year3)

// const person =
// {
//     name: 'Nelli',
//     surname: 'Laroy',
//     age: 25
// };

// const {name: nameUser, surname: surnameUser, age: ageUser } = person;

// let personInfo = function(person)
// {
//     return `Мене звати ${nameUser} ${surnameUser} і мені ${ageUser} років`;
// }

// const student = 
// {
//     name: 'Bruce',
//     surname: 'Lee',
//     grades: [4, 5, 3]
// };

// let calculateAverageGrade = function(student)
// {
//     const {grades: [grade1, grade2, grade3]} = student;
//     let total = (grade1+grade2+grade3)/3
//     return total;
// }

// console.log(calculateAverageGrade(student));


// const items = 
// [
//     { name: 'Футболка', price: 250, quantity: 2 },
//     { name: 'Джинси', price: 800, quantity: 1 },
//     { name: 'Кросівки', price: 1200, quantity: 1 }
// ];

// const 
// [   
//     {name: name1, price: price1, quantity: quantity1}, 
//     {name: name2, price: price2, quantity: quantity2}, 
//     {name: name3, price: price3, quantity: quantity3}, 
// ]= items;

// let calculateTotalCost = function(items)
// {
//     let total = 0;
//     total = price1*quantity1 + price2*quantity2 + price3*quantity3
//     return total;
// }
// console.log(calculateTotalCost(items));

// const person = 
// {
//     name: 'John',
//     emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
// };

// let getFirstEmail = function(person)
// {
//     const {emails: [email1, email2, email3 ]} = person
//     return email1;
// }

// console.log(getFirstEmail(person));



// const data = 
// {
//     users: [
//       { name: 'John', age: 25 },
//       { name: 'Jane', age: 17 },
//       { name: 'Bob', age: 30 },
//       { name: 'Alice', age: 20 }
//     ]
// };

// let getAdultUsers = function(data)
// {
//     let 
//     { 

//         users:
//         [ 
//             {name: name1, age: age1},
//             {name: name2, age: age2},
//             {name: name3, age: age3},
//             {name: name4, age: age4}
//         ]

//     } = data

//     let adult = []

//     if (age1 >= 18)
//     {
//         adult.push(name1)
//     }

//     if (age2 >= 18)
//     {
//         adult.push(name2)
//     }

//     if (age3 >= 18)
//     {
//         adult.push(name3)
//     }

//     if (age4 >= 18)
//     {
//         adult.push(name4)
//     }

//     return adult;

// }

// console.log(getAdultUsers(data));

const musicLibrary = {
    count: 2,
    artists: [
      {
        name: 'The Beatles',
        albums: [
          {
            title: 'Sgt. Pepper\'s Lonely Hearts Club Band',
            year: 1967,
            tracks: [
              { title: 'With a Little Help from My Friends', duration: '2:44' },
              { title: 'Lucy in the Sky with Diamonds', duration: '3:28' },
              { title: 'A Day in the Life', duration: '5:33' }
            ]
          },
          {
            title: 'Abbey Road',
            year: 1969,
            tracks: [
              { title: 'Come Together', duration: '4:19' },
              { title: 'Something', duration: '3:01' },
              { title: 'Here Comes the Sun', duration: '3:06' }
            ]
          }
        ]
      },
      {
        name: 'Pink Floyd',
        albums: [
        {
            title: 'The Wall',
            year: 1979,
            tracks: [
              { title: 'Another Brick in the Wall, Part 2', duration: '3:59' },
              { title: 'Comfortably Numb', duration: '6:23' },
              { title: 'Hey You', duration: '4:40' }
            ]
          },
          {
            title: 'Dark Side of the Moon',year: 1973,
            tracks: [
              { title: 'Speak to Me/Breathe', duration: '3:58' },
              { title: 'Time', duration: '7:06' },
              { title: 'Money', duration: '6:22' }
            ]
          }
        ]
      }        
    ]
}

const 
{
    count: countmusicLibrary,
    artists:
    [
        {
            name: artistName1,
            albums:
            [
                {
                    title: titleName1,
                    year: albumYear1,
                    tracks: 
                    [
                        {title: titleAlbum1, duration: albumDuration1},
                        {title: titleAlbum2, duration: albumDuration2},
                        {title: titleAlbum3, duration: albumDuration3}
                    ]
                },

                {
                    title: titleName2,
                    year: albumYear2,
                    tracks: 
                    [
                        {title: titleAlbum4, duration: albumDuration4},
                        {title: titleAlbum5, duration: albumDuration5},
                        {title: titleAlbum6, duration: albumDuration6}
                    ]
                }
            ]
        },

        {
            name: artistName2,
            albums:
            [
                {
                    title: titleName3,
                    year: albumYear3,
                    tracks: 
                    [
                        {title: titleAlbum7, duration: albumDuration7},
                        {title: titleAlbum8, duration: albumDuration8},
                        {title: titleAlbum9, duration: albumDuration9}
                    ]
                },

                {
                    title: titleName4,
                    year: albumYear4,
                    tracks: 
                    [
                        {title: titleAlbum10, duration: albumDuration10},
                        {title: titleAlbum11, duration: albumDuration11},
                        {title: titleAlbum12, duration: albumDuration12}
                    ]
                }
            ]
        },


    ]
} = musicLibrary;

console.log
(
    countmusicLibrary, 
    artistName1, titleName1, albumYear1, titleAlbum1, albumDuration1, titleAlbum2, albumDuration2, titleAlbum3, albumDuration3, titleName2, albumYear2, titleAlbum4, albumDuration4, titleAlbum5, albumDuration5, titleAlbum6, albumDuration6,
    artistName2, titleName3, albumYear3, titleAlbum7, albumDuration7, titleAlbum8, albumDuration8, titleAlbum9, albumDuration9, titleName4, albumYear4, titleAlbum10, albumDuration10, titleAlbum11, albumDuration11, titleAlbum12, albumDuration12,
)

const playlist = 
[
  { title: 'Song 1', duration: 210 },
  { title: 'Song 2', duration: 180 },
  { title: 'Song 3', duration: 240 }
];

const 
[
    {title: songTitleFirst},
    {duration: songDurationSecond},
    ...restTracks
] = playlist;

console.log(songTitleFirst, songDurationSecond)
console.log(restTracks)

const apiResponse = 
{
    ok: true,
    user: 
    {
      id: 1001,
      profile: 
      {
        name: 'Daria',
        settings: 
        {
            theme: 'dark',
            notifications: 
            {
                email: true,
                sms: false,
            }
        }
      }
    }
};

const 
{
    user:
    {
        profile:
        {
            name: nameUser,
            settings:
            {
                theme: settingsTheme,
                notifications: 
                {
                    sms: smsUser,
                    online = false
                }
            }
        }
    }
} = apiResponse

console.log(nameUser, settingsTheme, smsUser, online)

const product = 
{
  title: 'Phone',
  price: 12000,

  rating: 
  {
    stars: 4.7,
    reviewers: 1531
  },

  stock: 
  {
    available: true,
    warehouse: { city: 'Lviv', shelf: 'B3' }
  }
};

const 
{
    title: productTitle,
    price: productPrice,

    rating:
    {
        stars: productStars
    },

    stock:
    {
        warehouse:
        {
            city: productCity
        }
    }
} = product;


let renderCard = function(product)
{
    return `
    ${productTitle} - ${productPrice}
    Rating: ${productStars} ★
    Warehouse: ${productCity}
    `
}

console.log(renderCard(product))


const books = 
[
  {
    title: '1984',
    author: { first: 'George', last: 'Orwell' },
    tags: ['dystopia', 'classic', 'politics']
  },
  {
    title: 'The Hobbit',
    author: { first: 'J.R.R.', last: 'Tolkien' },
    tags: ['fantasy', 'adventure']
  }
];

const [firstBook, ...restBooks] = books;

const 
{ 
    title:bookTitle,
    author: 
    { 
        last: writer 
    },
    tags: [mainTag, secondTag]
}= restBooks[0];

console.log(bookTitle, writer, mainTag)
console.log(restBooks)