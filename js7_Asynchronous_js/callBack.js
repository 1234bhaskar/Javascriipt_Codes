//callback function
//function which is passed into another function

function sum(a,b,c){
    const result =a+b;
    c(result);
}

function displaySum(result){
    const h1 =document.querySelector("h1");
    h1.innerText=result;
}

sum(20,30,displaySum);
sum(20,130,alert);

console.log("Next Code\n");
//next
const arr=[1,2,3,4,5,6];
function calculateMultipleTen(arr=[],callback){
    const ans=[];

    for(let i=0;i<arr.length;i++){
       const element = callback(arr[i]);
       ans.push(element);
    }
    console.log(ans);
}

// function multiply(a){
//     return a*10
// }

// function divide(a){
//     return a/10
// }

// calculateMultipleTen(arr,multiply);
// calculateMultipleTen(arr,divide);

//or
calculateMultipleTen(arr,(a)=>{return a*10});
calculateMultipleTen(arr,(a)=>(a/10)); //other one is the callback function
