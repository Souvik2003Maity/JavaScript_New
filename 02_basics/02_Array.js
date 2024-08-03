const marvel_heros=["thor", "Ironman", "Spiderman"];
const dc_heros=["Flash", "Superman", "Batman"];
marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][0]);

const allheros=marvel_heros.concat(dc_heros);
console.log(allheros);

const all_new_heros=[...marvel_heros,...dc_heros]; //spread operator
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("Souvik"));
console.log(Array.from("Souvik"));
console.log(Array.from({name:"Souvik"})); //interesting

let score1=100,score2=200,score3=300;
console.log(Array.of(score1,score2,score3));


