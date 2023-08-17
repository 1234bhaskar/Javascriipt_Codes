const user = {
  username: "hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.username = "bhaskar";
user.welcomeMessage();

console.log(this);

function abc() {
  let username = "badmash";
  console.log(this.username);
}

abc();

const chai = () => {
  let username = "bhaskar";
  console.log(this.username);
};

chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));
