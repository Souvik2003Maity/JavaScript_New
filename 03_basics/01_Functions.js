function sayMyName(){
    console.log("S");
    console.log("O");
    console.log("U");
    console.log("V");
    console.log("I");
    console.log("K");
}
// sayMyName();

function addTwoNumbers(number1,number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
}

const result=addTwoNumbers(3,5);
// console.log(result);

function loginUserMessege(username="Sam"){
    if(!username){
        console.log("Please enter a user name");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessege("Souvik"));

function calculateCartPrice(val1,val2,...num1){
     return num1;
}

// console.log(calculateCartPrice(400,500,600,700));

const user={
    username: "Souvik",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);

const myNewArray=[200,400,100,600];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));