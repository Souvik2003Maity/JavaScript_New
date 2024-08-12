var c=300;
let a=300;
if(true){
    let a=10;
    let b=20;
    let c=400;
    // console.log(`Inner: ${a}`);
    // console.log(c);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="souvik";
    function two(){
        const website="facebook";
        console.log(username);
    }
    console.log(website);
    two();
}
one();

if(true){
    const username="souvik";
    if(username==="souvik"){
        const website="facebook"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

console.log(addone(5));
function addone(num){
    return num+1;
}

addTwo(5);
const addTwo=function(num){
    return num+2;
}
