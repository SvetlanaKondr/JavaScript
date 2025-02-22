//komanda paleidzia js tik po to, kai uzkrautas visas html
//  document.addEventListener("DOMContentLoaded", () => {
console.log("Svetlana");

//1 uzduotis
let str="Svetlana";
let num = 100;
let bool = false;

//2 uzduotis
let amzius= 20;
let gyv_dienos=15;
let gyvent=true;

//3 uzduotis
let age=45;
let kmi=28;
let smoke=true;

// 1 uzduotis
console.log(str);
console.log(num);
console.log(bool);

//2 uzduotis
if (amzius >= 18 && gyvent === true && gyv_dienos >= 30) {console.log("Balsavimui tinka");}
else {console.log("Netinkamas balsavimui");}

//3 uzduotis
if (age < 30 && kmi < 25 && !smoke) {console.log("Maža rizika");}
else if ((age >= 30 && age <= 50) && (kmi > 25 && kmi < 30) && !smoke) {console.log("Vidutinė rizika");}
else if ((age > 50 || kmi >= 30 || smoke) && !(age > 50 && kmi >= 30 && smoke)) {console.log("Didelė rizika");} //negali buti visi trys kartu, visi trys kartu - labai didele rizika
else if (age > 50 && kmi >= 30 && smoke) {console.log("Labai didelė rizika");}
else {console.log("Neapibrėžta rizika");}

// });