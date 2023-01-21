const a =Math.trunc(8.9821)
console.log(a);
const b=Math.sign(-123)
console.log(b);
const c=Math.pow(2,5)
console.log(c);
const d=Math.sqrt(9)
console.log(d);
//for absolute value ignoring the sign.
const e=Math.abs(-9)
console.log(e);
function absolute(a,b) {
return a-b
}
console.log(Math.abs(absolute(2,5)));
console.log(Math.abs(absolute(5,2)));

//Math.PIS
let x=Math.PI
console.log(x);
console.log(Math.sin((90*x)/180))

const  y= Math.max(1,23,4,56,75,0)
console.log(y);

const z=Math.random()*10;
console.log(z);
//values b/w 1-6 
const s=Math.floor(Math.random()*6 +1)
console.log(s);

const l=Math.log10(100)
console.log(l);



//dates
//const date=new Date();
//const date=new Date(2023,0,9) //0-january,1-february....
//const date=new Date(2023/0/9) //0-january,1-february....
//const date=new Date("Jan 9 2023 05:30:00")
const date=new Date()
// alert(date.getFullYear());
// alert(date.getHours());
// alert(date.getMinutes());
// alert(date.getDay());
// alert(date.getDate());
// alert(date.getMilliseconds());
