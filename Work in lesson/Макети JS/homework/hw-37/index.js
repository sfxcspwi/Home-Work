let getBtn = document.querySelector("#get-students-btn")
let form = document.querySelector("#add-student-form")
let tbody = document.querySelector("#students-table tbody")

async function getStudents() 
{
  try 
  {
    let res = await fetch("http://localhost:3001/students")
    let data = await res.json()

    renderStudents(data)
  }

  catch (err) 
  {
    console.log(err)
  }
}


function renderStudents(students) 
{
    tbody.innerHTML = ""

    students.forEach(student =>
    {

        tbody.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.skills.join(", ")}</td>
            <td>${student.email}</td>
            <td>${student.isEnrolled ? "Так" : "Ні"}</td>
            <td>
            <button onclick="updateStudent(${student.id})">
                Оновити
            </button>

            <button onclick="deleteStudent(${student.id})">
                Видалити
            </button>
            </td>
        </tr>
        `
    })
}


async function addStudent(e) {
    e.preventDefault()

    let student = 
    {
      name: document.querySelector("#name").value,
      age: Number(document.querySelector("#age").value),
      course: document.querySelector("#course").value,
      skills: document
        .querySelector("#skills")
        .value
        .split(","),
      email: document.querySelector("#email").value,
      isEnrolled: document.querySelector("#isEnrolled").checked
    }

    try 
    {
    let res = await fetch("http://localhost:3001/students", 
    {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "Content-Type": "application/json"
      }
    })

    let data = await res.json()

    console.log(data)

    form.reset()

    getStudents()
  }
    catch (err) 
    {
        console.log(err)
    }
}


async function updateStudent(id) {

    let newAge = prompt("Введіть новий вік:")

    if (!newAge) return 
    
    let update = 
    {
      age: Number(newAge)
    }   

    try 
    {
      let res = await fetch(
        `http://localhost:3001/students/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify(update),
          headers: {
            "Content-Type": "application/json"
          }
        }
      ) 
      let data = await res.json()   
      console.log(data) 
      getStudents()
    }

    catch (err) 
    {
      console.log(err)
    }
}


async function deleteStudent(id) 
{
    try 
    {
      await fetch(
        `http://localhost:3001/students/${id}`,
        {
          method: "DELETE"
        }
      ) 
      console.log("видалено")    
      getStudents()
    }

    catch (err) 
    {
      console.log(err)
    }
}


getBtn.addEventListener("click", getStudents)
form.addEventListener("submit", addStudent)