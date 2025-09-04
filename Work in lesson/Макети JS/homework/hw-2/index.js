let celsius = 32;
let fahrenheit = celsius*9/5 + 32;
console.log( celsius, fahrenheit);

let daysInMonth = 31;
let hoursInMonth = daysInMonth*24;
let minutesInMonth = hoursInMonth*60;
console.log (daysInMonth, hoursInMonth, minutesInMonth);

let health = 10;
let energy = 10;
console.log ( health-3, energy-4);

let totalPrice = 1000;
let discount = totalPrice*0.1;
let newPrice = totalPrice-discount;
console.log(newPrice);

const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

const intString = "123";
let parsedInt = parseInt(intString);
console.log(parsedInt);

let number = 169;
let sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

const stringNumber = "256";
let convertedInt = parseInt(stringNumber);
const integer = 42;
let convertedString = integer.toString();
console.log(typeof convertedInt, convertedInt, typeof convertedString, convertedString);