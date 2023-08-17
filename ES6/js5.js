//Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

/** 
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
*/

//can also be written as

//const { name, age } = user;



//Use Destructuring Assignment to Assign Variables from Objects

//Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value

const user = { name: 'John Doe', age: 34 };
//Here's how you can give new variable names in the assignment:

const { name: userName, age: userAge } = user;

//You may read it as "get the value of user.name and assign it to a new variable named userName" and so on. The value of userName would be the string John Doe, and the value of userAge would be the number 34.





//Use Destructuring Assignment to Assign Variables from Nested Objects
/**
  const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: { age, email }} = user;
And here's how you can assign an object properties' values to variables with different names:

const { johnDoe: { age: userAge, email: userEmail }} = user;
 */





//Use Destructuring Assignment to Assign Variables from Arrays
//One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.
/**
 * 
 * const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);
The console will display the values of a and b as 1, 2.

//while destructuring.
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
The console will display the values of a, b, and c as 1, 2, 5.


*/
