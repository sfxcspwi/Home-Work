// let a = document.querySelector(".link")
// console.log(a)

// a.style.color = "red"

// let b = document.querySelector(".text")
// console.log(b)

// b.textContent = "Привіт"

// console.log(a.classList.contains("link"))

// a.classList.remove("link")
// b.classList.add("decorate")
// b.classList.replace("decorate", "link")
// a.classList.toggle("link")

// let c = document.querySelector(".site-nav")
// c.style.backgroundColor = "yellow"
// let d = document.querySelector("a")
// d.classList.add("site-nav__link")

// let e = document.querySelector("a[href='https://']")
// e.style.fontSize = "50px"

let w = document.querySelectorAll("ul a")
w[0].classList.add("first__link")
w[w.length - 1 ].classList.add("last__link")

w.forEach(element => 
{

    let atribute = element.getAttribute('href')

    if(!atribute) return
    
    if( atribute.startsWith("http://") || atribute.startsWith("ftp://"))
    {
        element.style.color = "orange"
    }

} )


let s = document.querySelector("h1")
s.textContent = "Заголовок"
s.classList.add("title")
s.classList.replace("title", "title__secondary")

let link = document.querySelector("a")
console.log(link.classList.contains("link"))