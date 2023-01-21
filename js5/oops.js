// const RomanReings={
//     weight:265,
//     height:185,
//     quote:()=>{
//         console.log("head of the table");
//     },
// };

//Factory function
/*const wweSuperstar=(a,b,quote)=>{
return {
    weight:a,
    height:b,
    quote:()=>{
        console.log(quote);
    },
}
}

const romanReigns = wweSuperstar(256,185,"Head of the table")
const sethRollence = wweSuperstar(200,160,"Newbie Boi")

console.log(romanReigns);
console.log(sethRollence);*/

//Constructor Function
/** Constructor functions technically are regular functions. There are two conventions though:
They are named with capital letter first.
They should be executed only with "new" operator. */

/**
 

function Star(weight,height){
    this.weight=weight
    this.height=height
}

const abc = new Star(265,185);
//console.log(abc.constructor);
console.log(abc);
abc.quote="this is a quote";
console.log(abc);

 */

//Imp --> Everything in JS is Object

// const abc = new Object({
//     a:2,
//     b:4
// })

// console.log(abc);
// console.log(abc.constructor);

const arr=new Array(1,4);
console.log(arr);
console.log(arr.constructor);
arr.boi="Sample Boi";
console.log(arr);

const newArray=[...arr,5,6]

console.log(newArray);

