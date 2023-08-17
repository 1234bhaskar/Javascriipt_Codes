const h1=document.querySelector("h1");
const url="https://catfact.ninja/fact";

//console.log("a");
/** 
const fetchData=()=>{
    fetch(url).then((response)=>{
        console.log("then1");
        return response.json();
    })
    .then((data)=>{

        console.log("then2");
        console.log(data);
    })
}
*/

//OR

/** 
const fetchData=()=>{
    fetch(url).then((response)=>response.json())
    .then((data)=>console.log(data))
    .catch((e)=>console.log(e))
    .finally(()=>console.log("All done"))
}

fetchData();
*/

//console.log("z");

const fetchData=()=>{
    fetch(url).then((response)=>response.json())
    .then((data)=>(h1.innerText=data.fact))
    .catch((e)=>console.log(e))
    .finally(()=>console.log("All done"))
}

fetchData();