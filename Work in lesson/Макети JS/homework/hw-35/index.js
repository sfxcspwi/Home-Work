let input = document.getElementById("keyword")
let result = document.getElementById("result")

input.addEventListener("input", _.debounce(searchCountry, 500))

function searchCountry() 
{

    let countryName = input.value.trim()

    if (countryName === "") 
    {
        result.innerHTML = ""
        return
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => 
        {

            if(!response.ok) 
            {
                throw new Error("Країну не знайдено")
            }

            return response.json()
        })
        .then(data => {

            result.innerHTML = ""

            if (data.length > 10)
            {

                PNotify.alert({
                    text: "Зробіть запит більш конкретним"
                })

                return
            }

            if(data.length >= 2 && data.length <= 10) 
            {

                data.forEach(country => {

                    result.innerHTML += `
                        <p>${country.name.common}</p>
                    `
                })

                return
            }

            if(data.length === 1) 
            {

                let country = data[0]

                let languages = ""

                for (let key in country.languages) 
                {
                    languages += `<li>${country.languages[key]}</li>`
                }

                result.innerHTML = `
                    <h2>${country.name.common}</h2>

                    <p><b>Столиця:</b> ${country.capital[0]}</p>

                    <p><b>Населення:</b> ${country.population}</p>

                    <h3>Мови:</h3>
                    <ul>
                        ${languages}
                    </ul>

                    <img src="${country.flags.png}" width="250">
                `
            }
        })
        .catch(error => 
        {
            result.innerHTML = ""

            PNotify.alert
            ({
                text: error.message
            })
        })
}