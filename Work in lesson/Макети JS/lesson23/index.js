// let parent = document.querySelector(".parent")
// let child = document.querySelector(".child")
// let form = document.querySelector(".form")
const userList = document.getElementById('userList');

userList.addEventListener("click", deleteUser);

function deleteUser(event) 
{

    let userItem = event.target.closest("li")
    userItem.remove()
 
}

// form.addEventListener("submit", () =>
// {
//     alert("Ви клікнули по кнопці")
// }
// )

// parent.addEventListener("click", event =>
// {
//     event.stopPropagation() 
//     alert("Ви клікнули по батьку")      
    
// }
// )

// document.body.addEventListener("click", () =>
// {
//     alert("Ви клікнули по body")
// }
// )

let taskList = document.getElementById("taskList")
let addNewTask = document.getElementById("addTask")
let newTask = document.getElementById("newTask")

addNewTask.addEventListener("click", event =>
{
    event.preventDefault()
    if (newTask.value === "")
    {
        return
    }

    let task = document.createElement("li")
    let delTask = document.createElement("button")
    delTask.textContent = "delete"

    task.textContent = newTask.value
    taskList.appendChild(task)
    task.appendChild(delTask)
    newTask.value = ""

    delTask.addEventListener("click", () =>
    {
        task.style.display = "none"
    })
})


