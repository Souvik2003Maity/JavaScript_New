const name="Souvik";
const repoCount=10;
console.log(name+repoCount+"values");//Older Syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Modern Systax
const gameName=new String("Souvik-sm-com"); //another way of declearing string using String Object

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("k"));
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));