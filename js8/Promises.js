/** 
const a= new Promise((resolve,reject)=>{
//resolve("Promise Fullfilled")
reject("Promise Rejected")
});

a.then((parameter)=>{
    console.log(parameter);
},(parameter)=>{
     console.log(parameter);
 }
)
//a.then(for resolve),(for reject)
*/

/**
const a= new Promise((resolve,reject)=>{
    let success=false;
    if(success)
    resolve("Promise Fullfilled")
    else{reject("Promise Rejected")}
    });
    
    a.then((parameter)=>{
        console.log(parameter);
    }).catch((error)=>{
         console.log(error);
     }
    )

     */
    
    let arr=[];
    const fetchData=(arr=[])=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{

                arr.push({name:"Bhaskar"})
                if(arr.length>0){
                    resolve("Parameter sent")
                }else{
                    reject("Error in Something")
                }
            },2000)
        })    

    }

    fetchData().then((message)=>console.log(message))
    .catch((message)=>console.log(message)).finally(()=>console.log("will work in Either cases"))