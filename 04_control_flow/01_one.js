//if
// const temperature=41;
// if(temperature===41){
//     console.log("Less than 50");
// }
// else{
//     console.log("Temperature is greater than 50");
// }

// const score=200;
// if(score>100){
//     let power="fly";
//     console.log(`User Power:${power}`);
// }
// // console.log(`User Power: ${power}`);

const balance=1000;
// if(balance>500)
//   console.log("test1");console.log("test2");

// if(balance<500){
//     console.log("Less than 500");
// }
// else if(balance<750){
//     console.log("Less than 750");
// }
// else if(balance<900){
//     console.log("Less than 900");
// }
// else{
//      console.log("less than 1200");
// }

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;
if(userLoggedIn && debitCard){
    console.log("Allow to buy Course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}