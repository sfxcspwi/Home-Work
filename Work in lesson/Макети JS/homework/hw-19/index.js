const radios = document.querySelectorAll('input[name="color"]');

radios.forEach(radio => { radio.addEventListener('click', function() 
    {
     if (radio.checked) {
       document.body.style.backgroundColor = radio.value;
     }
   });
});

let nameInput = document.querySelector("#name-input")
let nameOutput = document.querySelector("#name-output")
nameInput.addEventListener("input", function(event)
{
    event.preventDefault();

    nameOutput.textContent = nameInput.value

});

const input = document.querySelector("#validation-input");

input.addEventListener('blur', function()
{

    const expectedLength = Number(input.dataset.length); 
    const actualLength = input.value.length;

    if (actualLength === expectedLength) 
    {
        input.classList.add("valid");
        input.classList.remove("invalid");
    } 
    else 
    {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
    
});