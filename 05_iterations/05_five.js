const coding=["js", "cpp", "py", "java", 'ruby'];
coding.forEach( function (item){
    // console.log(item);
})

coding.forEach( (val)=>{
    // console.log(val);
})


function printme(item){
    // console.log(item);
}

coding.forEach(printme);

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCoding=[
    {
        languageName:"JavaScript",
        languageFileName:"Js"
    },
    {
        languageName:"Java",
        languageFileName:"Java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
})