const input=document.getElementById('myInput')
const btn=document.getElementById('myBtn')
const delItem=document.getElementById('myBtn2')
const btnClick=()=>{
    localStorage.setItem("key1",JSON.stringify(
        {
            name:"bhaskar",
            age:12
        }));
}
btn.addEventListener("click",btnClick)
if(localStorage.getItem("key1")){
    alert(localStorage.getItem("key1"))
    console.log(JSON.parse(localStorage.getItem("key1")));

}

delItem.addEventListener("click",()=>{
    //console.log(localStorage.key(0));   //sessional storasge is a array of objects a[]=[{k0:"abc"}{k1:..}{}...]

    //localStorage.removeItem("key1")
    //console.log(localStorage.length);
    //localStorage.clear()
})