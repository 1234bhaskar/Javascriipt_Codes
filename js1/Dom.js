const centre=document.body;
centre.style.width="50%"
centre.style.margin="auto"

// console.log(document.body);
// console.log(document.documentURI);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.childNodes);
// console.log(document.body.children);

// const thisOne=document.getElementsByClassName('okay')

// console.log(thisOne);
// console.log(thisOne[1]);

// const thisOne=document.getElementsByName('email')
// console.log(thisOne);

// const thisOne = document.getElementsByTagName("span");

// //thisOne.innerText=again;

// console.log(thisOne[0]);

/*changing Html using javascript*/
// const thisOne = document.getElementsByTagName("span");
// //thisOne[0].textContent="NewOne"
// //thisOne[0].innerText="NewTwo"
// thisOne[0].innerHTML='<span class="myclass">Nice</span>'

// console.log(thisOne[0]);

/*changing styles using javascript*/

/*
const thisOne = document.getElementsByTagName("span");
thisOne[0].style.color="white"
thisOne[0].style.backgroundColor="blue"
thisOne[0].style.font="100 1.5rem 'Roboto'"

console.log(thisOne[0]);
*/

const myBtn =document.getElementById('mybtn1')
myBtn.style.backgroundColor="blue";
myBtn.style.color="white";
myBtn.style.font="80";
myBtn.style.margin="2px 4px";




//Query Selector
/*
const thisOne = document.querySelector(".okay");
myBtn.innerText="none";
*/

// console.log(myBtn.getAttribute("id"));
// console.log(myBtn.getAttribute("class"));

// setAttribute
//myBtn.setAttribute("id","thisIdBtn")

//createElement/append/prepend
/*
const h2 =document.createElement("h2")
const h3 =document.createElement("h3")
h3.style.color="blue";
h2.innerText="hi"
h3.innerText="Hello"

document.body.append(h2)

document.body.prepend(h3)
*/

const myBtn2=document.querySelectorAll("button");
myBtn.onclick = hi;
myBtn2[1].onclick = delHi;


function hi(){

    const h2 =document.createElement("h1")
    h2.innerText="hi"
    h2.color="red"
    document.body.append(h2)
}

function delHi(){
    const h2 = document.querySelector("h1")
       h2.remove();
}