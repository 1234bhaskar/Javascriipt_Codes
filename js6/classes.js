//basics
/** 
  class Myclass{

    constructor(val1,val2){
        this.a=val1;
        this.b=val2;
        
    }

}
const obj1=new Myclass(20,30);
console.log(obj1);
console.log(obj1.a);
console.log(obj1.b);
*/

//private
/** 
class Myclass{

    #a=30;
    #b=40;
    constructor(val1,val2){
        this.#a=val1;
        this.#b=val2;
    }
    print(){
        console.log("I am Printing",this.#b);
    }

}
const obj1=new Myclass(50,60)
obj1.print();
console.log(obj1);
*/

// Getter function & Setter function
class Myclass{

    #a=30;
    #b=40;
    constructor(val1,val2){
        this.#a=val1;
        this.#b=val2;
    }
    // getData(){
    //     return this.#a;
    // }

    get getData(){
             return this.#a;
        }
    
    set setA(a){
         this.#a=a;
    }    

    print(){
        console.log("I am Printing",this.#b);
    }


}
const obj1 = new Myclass(69,96);
console.log(obj1);
//console.log(obj1.getData());
console.log(obj1.getData);
obj1.setA=86;
console.log(obj1.getData);