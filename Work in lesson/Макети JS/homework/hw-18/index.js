const categories = document.querySelectorAll('#categories .item');
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('li').length;  
    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${itemsCount}`);
});

const ingredients = 
[
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ul = document.querySelector('#ingredients');

const itemsingredients = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});

ul.append(...itemsingredients);

const images = 
[
    {
        url:
         'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url:
         'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url:
         'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const imgBox = document.querySelector('#ingredients');

const items = images.map(element => {
    const item = document.createElement('li');
    const img = document.createElement('img');  
    img.src = element.url;
    img.alt = element.alt;  
    item.appendChild(img);
    return item;
});

imgBox.append(...items);