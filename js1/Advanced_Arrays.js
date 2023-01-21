//Arrow function
/*
const myFunc=(a,b)=>{
console.log(a+b);
}
myFunc(1,3)
*/

//Advance Arrays
//const arr=[2,3,4,5,6,8,10];
/*
arr.find((value,index)=>{
    if(value>4){
        console.log(value);
    }
})
*/

/*
const result = arr.filter((value,index)=>{
   if(value>4)
   return (value)
})
*/

/*const result = arr.every((value,index)=>{
    return value>4;
})
console.log(result);*/
/*
const result = arr.some((value,index)=>{
    return value>4;
})
*/

/* for-of-loop
for(let i of arr){
    i +=1;
    console.log(i);
};
*/

/*foreach-loop 
let sum=0;
arr.forEach((value,index)=> {
    sum+=value;   
    console.log(value);
});
*/

/*
//let sum=0;
const result =arr.map((value,index)=>{
    return value+=20;   //[22,23,....]
});
console.log(result);
*/
// const result =arr.reduce((previousValue,value,
//     index)=>{
//         return previousValue + value;
//     })
//     //returns the sum of all elements in array
// console.log(result);

/** Spread Operator */

const arr=[1,2,3,4,56,5];
console.log(arr);
console.log(...arr,36,70);