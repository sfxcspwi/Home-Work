// let box = document.querySelector("#box")
// document.addEventListener("click", event => 
// {
//     box.innerHTML = `clientX: ${event.clientX} 
//     <br> clientY: ${event.clientY}
//     <br> pageX: ${event.pageX}
//     <br> pageY: ${event.pageY}`
// })

const block = document.querySelector('.block');

document.addEventListener("mousemove", event => 
{
    let mouseX = event.pageX;
    let mouseY = event.pageY;

    let style = block.getBoundingClientRect();

    let blockX = style.left;
    let blockY = style.top;  
    
    let X = mouseX - blockX;
    let Y = mouseY - blockY;

    block.style.left = `${blockX + X}px`;
    block.style.top = `${blockY + Y}px`;
})

block.addEventListener("mouseover", event => 
{
    block.style.backgroundColor = "blue"
})

block.addEventListener("mouseout", event => 
{
    block.style.backgroundColor = "green"
})

document.addEventListener("mousemove", event => 
{
    let mouseX = event.pageX;
    let mouseY = event.pageY;
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.left = `${mouseX}px`;
    div.style.top = `${mouseY}px`;
    div.style.width = '10px';
    div.style.height = '10px';
    div.style.backgroundColor = "black";
    div.style.borderRadius = '50%'; 
    document.body.appendChild(div);
})