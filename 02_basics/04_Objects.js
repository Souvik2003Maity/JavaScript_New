// const tinderUser=new Object(); //singleton Object
const tinderUser={}; //non singleton Object
tinderUser.id="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);

const regularUser={
    email: "some@gmail.com",
    fullname:{
        userFullname:{
            firstname: "Souvik",
            lastname: "Maity"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1={
    1: "a",
    2: "b"
}
const obj2={
    3: "a",
    4: "b"
}
const obj3={
    5: "a",
    6: "b"
}

// const obj4={obj1,obj2};
// const obj4=Object.assign({},obj1,obj2,obj3);
const obj4={...obj1,...obj2,...obj3} //Spread Operator
// console.log(obj4);

const users=[
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:2,
        email: "g@gmail.com"
    },
    {
        id:3,
        email: "K@gmail.com"
    }
]

// console.log(users[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh Sir"
}

const {courseInstructor:instructor}=course;// Object de-structure

console.log(instructor);