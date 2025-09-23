let a ="123";
let b = "321";

if (a.length>0, b.length>0 )
{
    console.log("Обидва поля заповнені");
}
else
{
    console.log("Не всі поля заповнені");
}



let numberOne = 6;
let numberTwo = 4;
let suma = numberOne + numberTwo;

if (suma>10 )
{
    console.log("Сума більша за 10");
}
else
{
    console.log("Сума менша або дорівнює 10");
}



let text = "JavaScript";

if (text.includes("JavaScript") )
{
    console.log("Текст містить слово JavaScript");
}
else
{
    console.log("Текст не містить слово JavaScript");
}



let number= 15;

if (number>10 && number<20 )
{
    console.log("Число входить в діапазон від 10 до 20");
}
else
{
    console.log( "Число не входить в діапазон від 10 до 20");
}



let name ="Stanislav";
let email = "staschuguivec@icloud.com";
let password = "123321";

if (name.length>=3 && email.includes("@") && email.indexOf ('.') > email.indexOf('@') && password.length>=6 )
{
    console.log("Перенаправлення на іншу сторінку");
}
else
{
    console.log("Помилка: неправильне заповнення");
}