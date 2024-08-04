//singleton

// object literals

const mySym=Symbol("key1");

const JsUser={
    name: "Souvik",
    "full name": "Souvik Maity",
    [mySym]: "myKey1",
    age: 18,
    location: "Hooghly",
    email: "souvik2003maity@gmail.com",
    isLoggedIn: false
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email= "souvik2002maity@gmail.com";
Object.freeze(JsUser);
JsUser.email="chatterjeeadrija011@gmail.com";
console.log(JsUser.email);

JsUser.greeting=function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo=function(){
    console.log(`Hello JS User , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

