function sayMyName(){
    console.log("S");
    console.log("O");
    console.log("U");
    console.log("V");
    console.log("I");
    console.log("K");
}
sayMyName();

function addTwoNumbers(number1,number2){
    // let result=number1+number2;
    // return result;
    return number1+number2;
}

const result=addTwoNumbers(3,5);
console.log(result);

function loginUserMessege(username="Sam"){
    if(!username){
        console.log("Please enter a user name");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessege("Souvik"));