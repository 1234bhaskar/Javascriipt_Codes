function arrTotal(arr){
let sum = 0;
for(i=0;i< arr.length;i++){
    sum+=arr[i];
}
return sum;
}
arr=[12,2,34,5]
console.log(arrTotal(arr));