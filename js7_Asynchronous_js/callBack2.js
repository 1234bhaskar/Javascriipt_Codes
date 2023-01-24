const gamesList=[];
const game={};

const fetchData=(callback)=>{
    setTimeout(
        (callback)=>{
        gamesList.push(
            {
                name:"game 1",
                id:"abcd"
            },
            {
                name:"game 2",
                id:"hjadb"
            },
            {
                name:"game 3",
                id:"zmxczmx"
            }
        );
        console.log(gamesList);

        callback();

    },4000,
    callback
     )
}
//console.log(gamesList);

// fetchData();
//console.log(gamesList);


const displayGame=()=>{
     setTimeout(()=>{
     for(let i=0;i<gamesList.length;i++){
        const p = document.createElement("p");
        p.innerText=gamesList[i].name;
        document.body.append(p);
     }
       console.log("Consoling After Displaying");
     },1000);
}

fetchData(displayGame);
