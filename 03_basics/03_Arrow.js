const user={
    username: "Souvik",
    price: 999,

    welcomeMessege: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
// user.welcomeMessege();
// user.username= "Sam";
// user.welcomeMessege();

// console.log(this);

// function chai(){
//     let username="Souvik";
//     console.log(this.username);
// }
// chai();

// const chai=function(){
//     let user="souvik";
//     console.log(this.username);
// }
// chai();

// const chai= () => {
//     let username="souvik";
//     console.log(this);
// }
// chai();

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

// const addTwo=(num1,num2)=> (num1+num2);
const addTwo=(num1,num2)=> ({username:"souvik"});
console.log(addTwo(4,3));
