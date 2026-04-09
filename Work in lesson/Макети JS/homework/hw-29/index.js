let userName = document.querySelector(".input__name")
let userEmail = document.querySelector(".input__email")
let userSurname = document.querySelector(".input__surname")
let userInfo = document.querySelector(".userInfo")
let userPhone = document.querySelector(".input__phone")
let clearForm = document.querySelector(".input__clear")

function updateUserInfo() 
{
    userInfo.textContent = `Ваше ім'я: ${userName.value}, Ваше прізвище: ${userSurname.value}, Ваш номер телефону: ${userPhone.value} Ваш Email: ${userEmail.value}, `
}

userPhone.addEventListener("input", () => 
{
    localStorage.setItem("userPhone", userPhone.value)
    updateUserInfo()
})

let savedPhone = localStorage.getItem("userPhone")
if(savedPhone) 
{
    userPhone.value = savedPhone
}


userName.addEventListener("input", () => 
{
    localStorage.setItem("userName", userName.value)
    updateUserInfo()
})

let savedName = localStorage.getItem("userName")
if(savedName) 
{
    userName.value = savedName
}


userEmail.addEventListener("input", () => 
{
    localStorage.setItem("userEmail", userEmail.value)
    updateUserInfo()
})

let savedEmail = localStorage.getItem("userEmail")
if(savedEmail) 
{
    userEmail.value = savedEmail
}


userSurname.addEventListener("input", () => 
{
    localStorage.setItem("userSurname", userSurname.value)
    updateUserInfo()
})

let savedSurname = localStorage.getItem("userSurname")
if(savedSurname) 
{
    userSurname.value = savedSurname
}


updateUserInfo()


clearForm.addEventListener("click", () => 
{
    localStorage.clear()
    userName.value = ""
    userEmail.value = ""
    userSurname.value = ""
    userPhone.value =""
    updateUserInfo()
})