//array
const myArr=[10,20,30,40,50];
const myHeros=["shaktiman","naagraj"];
const myArr2=new Array(1,2,3,4);//way of declearing array
// console.log(myArr[1]);

//Array Methods
// myArr.push(6)
// myArr.push(7)// by push method we can push a new element inside the array at the last index
// console.log(myArr);

// myArr.pop();// by pop method we can pop an element from the last index of the array
// console.log(myArr);

// myArr.unshift(9);// unshift method add a new element at the start index of an Array means it shifts all the elemnts.


// myArr.shift();// shift method deletes an element from the start index of an Array 
// console.log(myArr);
// console.log(myArr.includes(9)); //includes method checks if a particuler element is present or not inside the Array and returns the result in true or false

// console.log(myArr.indexOf(30)); //index of method checks the index of any partucular array element.

// const newArr=myArr.join(); //The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string.

// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A ", myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B ", myArr);

const myn2=myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);


