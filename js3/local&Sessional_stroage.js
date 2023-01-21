/*
=> The sessionStorage exists only within the current browser tab.
Another tab with the same page will have a different storage.
But it is shared between iframes in the same tab (assuming they come from the same origin).
The data survives page refresh, but not closing/opening the tab. */

const input=document.getElementById('myInput')
const btn=document.getElementById('myBtn')
const delItem=document.getElementById('myBtn2')

// btn.addEventListener("click",(e)=>{
    // console.log(input.value)
    // })
    
    const btnClick=()=>{
        sessionStorage.setItem("key1",input.value);
    }
    btn.addEventListener("click",btnClick)

// alert(
//     sessionStorage.getItem("key1")
// )
if(sessionStorage.getItem("key1")){
    alert(sessionStorage.getItem("key1"))
}

/*…But if you open the same page in another tab, and try again there, the code above returns null, meaning “nothing found”.
That’s exactly because sessionStorage is bound not only to the origin, but also to the browser tab. For that reason, sessionStorage is used sparingly.*/


delItem.addEventListener("click",()=>{
    //console.log(sessionStorage.key(0));   //sessional storasge is a array of objects a[]=[{k0:"abc"}{k1:..}{}...]

    //sessionStorage.removeItem("key1")
    //console.log(sessionStorage.length);
    sessionStorage.clear()
})
