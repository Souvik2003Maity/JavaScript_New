const myObject={
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
    swift:"Swift"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming=["js", "cpp", "rb", "swift", "java", "py"];
for (const key in programming) {
    console.log(programming[key]);
}

const map=new Map();
map.set('IN',"India");
map.set('USA',"United States Of America");
map.set('FR',"France");
map.set('IN',"India");

for (const key in map) {
   console.log(key);
}