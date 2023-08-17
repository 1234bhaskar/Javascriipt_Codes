//Set Default Parameters for Your Functions


const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());


//The console will display the strings Hello John and Hello Anonymous
//The default parameter kicks in when the argument is not specified (it is undefined).