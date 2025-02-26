
//uzduotis 1
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

console.log(fruits);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
};

//uzduotis 2
const numbers = [1, 3, 7, 8, 2, 10, 4, 5, 6, 9];

let sum = 0;
for (let x = 0; x < numbers.length; x++){
    if (numbers[x] > 5){
        sum += numbers[x];
    }
}

console.log("Bendra suma skaičių, didesnių nei 5:", sum);

//uzduotis 3
const people = [ 
	{ name: 'Alice', age: 25, validResidence: true },
	{ name: 'Bob', age: 17, validResidence: true },
	{ name: 'Charlie', age: 30, validResidence: false },
	{ name: 'John', age: 13, validResidence: true },
	{ name: 'Amy', age: 24, validResidence: true }
];

const canVote = [];
const cantVote = [];

for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18 && people[i].validResidence) {
        canVote.push(people[i]); // Pridedame į balsuoti galinčių sąrašą
    } else {
        cantVote.push(people[i]); // Pridedame į balsuoti negalinčių sąrašą
    }
}

//Atspausdiname tuos, kurie gali balsuoti
console.log("Gali balsuoti:");
for (let i = 0; i < canVote.length; i++) {
    console.log(canVote[i].name);
}

//Atspausdiname tuos, kurie negali balsuoti
console.log("Negali balsuoti:");
for (let i = 0; i < cantVote.length; i++) {
    console.log(cantVote[i].name);
}
