const purchases = 
[
  { name: 'apple', qty: 2, price: 10 },
  { name: 'banana', qty: 5, price: 7 },
  { name: 'tomato', qty: 3, price: 12 }
];

const sortedByPrice = purchases.sort((a, b) => b.qty*b.price - a.qty*a.price);

console.log(sortedByPrice)

class Human 
{
  constructor(eyeColor, skinColor, hairColor, height, weight)
  {
      this.eyeColor = eyeColor;
      this.skinColor = skinColor;
      this.hairColor = hairColor;
      this.height = height;
      this.weight = weight;
  }
}


class Person
{
  constructor(firstName, lastName)
  {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName()
  {
    return this.firstName + ` ` + this.lastName
  }

}

const person1 = new Person('John','Doe');

console.log(person1.getFullName()); 


class Rectangle
{
  constructor(width, height)
  {
    this.width = width;
    this.height = height;
  }

  getArea()
  {
    return this.width*this.height
  }

}

const rectangle1 = new Rectangle(10, 5);
console.log(rectangle1.getArea());


class Calculator
{
  add(a, b)
  {
    return a + b
  }
  subtract(a, b) 
  {
    return a - b
  }
  multiply(a, b)
  {
    return a * b
  }
  divide(a, b)
  {
    if (b === 0 )
    {
      return "На нуль ділити не можна"
    }

    return a / b
  }

}

const calculator = new Calculator();

console.log(calculator.add(2, 3));
console.log(calculator.subtract(5, 2)); 
console.log(calculator.multiply(2, 4)); 
console.log(calculator.divide(10, 2)); 
console.log(calculator.divide(10, 0)); 

class Animal
{
  constructor(name)
  {
    this.name = name;
  }
}

class Dog extends Animal
{
  constructor(name, poroda)
  {
    super(name)
    this.poroda = poroda
  }
}

const myDog = new Dog('Buddy', 'Labrador Retriever');
console.log(myDog);