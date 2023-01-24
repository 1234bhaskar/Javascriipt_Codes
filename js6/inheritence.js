// class Electronics{
//     #input;
//     #output;
//     #name;

//     constructor(input,output,name){
//         this.#input=input;
//         this.#output=output;
//         this.#name=name;
//     }

//     print(){
//         console.log(this.#name);
//         console.log(this.#input);
//         console.log(this.#output);
//     }
// }

// class Charger extends Electronics{
//     #plugType;
//     constructor(input,output,name,plugtype){
//         super(input,output,name);
//         this.#plugType=plugtype;
//     }
// }

// const hpCharger= new Charger(213,232,"Hp charger","European");
// const dellCharger= new Charger(1,2,"dell charger","European");
// const asusCharger= new Charger(3,4,"asus charger","European");
// const macCharger= new Charger(13,22,"mac charger","European");

// hpCharger.print();
// dellCharger.print();
// asusCharger.print();
// macCharger.print();

// class Harddisk extends Electronics{
//     #RPM;
//     constructor(input,output,name,rpm){
//         super(input,output,name)
//         this.#RPM=rpm;
//     }
//     get harddiskSpeed(){
//         console.log(this.#RPM);
//     }
// }
// const wdharddisk = new Harddisk(200,250,"WDhardDisk",7200)
// wdharddisk.print();
// wdharddisk.harddiskSpeed;

class Electronics{
    input;
    output;
    name;

    constructor(input,output,name){
        this.input=input;
        this.output=output;
        this.name=name;
    }

    print(){
        console.log(this.name);
        console.log(this.input);
        console.log(this.output);
    }
}

class User extends Electronics{

    constructor(input,output,name,rollNO){
        super(input,output,name)
        this.rollNO=rollNO;
    }
}
const info = new User(2000,1000,"BHaskar is Goat".toUpperCase(),12);

console.log(info);
console.log(info.input);