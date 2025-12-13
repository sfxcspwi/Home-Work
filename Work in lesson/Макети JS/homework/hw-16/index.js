class User
{
  constructor({name, age, followers})
  {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo()
  {
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
  }

}

const mango = new User
({
 name: 'Mango',
 age: 2,
 followers: 20,
});

console.log(mango.getInfo())

const poly = new User
({
 name: 'Poly',
 age: 3,
 followers: 17,
});

console.log(poly.getInfo())



class Storage 
{
    constructor(items)
    {
        this.items=items
    }

    getItems()
    {
        return this.items;
    }

    addItem(item)
    {
        this.items.push(item)
    }

    removeItem(item) 
    {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    }
    
}

const storage = new Storage
([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();

console.table(items); 

storage.addItem('Дроїд');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items); 



class StringBuilder
{
    constructor(inputValue)
    {
        this._value = inputValue
    }

    get value()
    {
        return this._value
    }

    append(str)
    {
        this._value += str
    }

    prepend(str)
    {
       this._value = str += this._value
    }

    pad(str)
    {
        this._value = str + this.value + str
    }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); 

builder.prepend('^');
console.log(builder.value); 

builder.pad('=');
console.log(builder.value); 