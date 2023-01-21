const head =document.getElementById("header")
const box1 =document.getElementById("box1")
const btn = document.getElementById("btn")
const input =document.querySelector("input")

btn.addEventListener("click", () => {
    console.log("Clicked");
    head.style.backgroundColor = "green"
})


btn.addEventListener("contextmenu", (e) => {
    //"contextmunu" is used for right click
    e.preventDefault();
    head.style.backgroundColor = "purple"
})

btn.addEventListener("click", () => {
    box1.classList.add("box2")
    btn.style.padding = "2px"
})

//window - used for the whole page
//eg
// addEventListener("click",(e)=>{
//     console.log(e.clientX);
//     console.log(e.clientY);
// })
box1.addEventListener("dblclick", () => {
    console.log("clicked box");
    document.body.style.backgroundColor = "black"
})

input.addEventListener("change", (e) => {
    console.log(e.target.value);
})