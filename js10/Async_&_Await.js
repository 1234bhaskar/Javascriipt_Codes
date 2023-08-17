const h1=document.querySelector("h1");
const url="https://catfact.ninja/fact";
/** 
const fetchData= async ()=>{
     const response = await fetch(url);
     const data =await response.json();
     //console.log(data);
     h1.innerText=data.fact;
}

fetchData();
*/


/** 
console.log("a");
const fetchData= async ()=>{
    console.log("f1");
    const response = await fetch(url);
    console.log("f3");
    const data =await response.json();
    console.log("f4");
    //console.log(data);
    h1.innerText=data.fact;
    console.log("f5");
}

fetchData();

console.log("abc");
console.log("abc");
console.log("abc");
console.log("abc");
console.log("abc");
console.log("abc");
*/



/*
Async functions
*the async keyword is placed before a function
*async function f() {
  return 1;
}

*The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1

*/


/**
 * Await
 * The keyword await makes JavaScript wait until that promise settles and returns its result
 * 
 * async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();
 */
//Error Handling
//try...catch

/** 
const fetchData=async()=>{
    try{
        throw new Error("Mera error");
        const response = await fetch(url);
        const data =await response.json();
        h1.innerText=data.fact;
        
    } catch(error){
        console.log(error);
        console.log(error.message);
        console.log(error.name);
     }
    // finally{
    //     console.log("Final One");
    // }
}

fetchData();

*/

const e= new Error("hedghog");
e.name="nitin"
 console.log(e.name);