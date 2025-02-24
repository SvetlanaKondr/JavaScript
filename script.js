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

let masyvas = [1,2,3,4];
let masyvas2 = [1,2,3];
console.log(masyvas===masyvas2); //4
console.log(masyvas.length); //4
console.log(masyvas[0]);
console.log(masyvas[1]);
console.log(masyvas[4]); //undefined
masyvas.push("Svetlana"); //[1,2,3,4, "Svetlana"];
console.log(masyvas.length); //5


let zmogus = {
    vardas:'SvetlanaS',
    pavarde: 'Kond',
    amzius:40,
    'pilnas vardas': 'Svetlana Kond'
};
console.log(zmogus);
console.log(zmogus.vardas);
console.log(zmogus['pavarde']);
console.log(zmogus['pilnas vardas']);

zmogus.asPilnametis=true; //pridėti ypatybę prie objekto

if(false){
    console.log('Žmogus yra pilnametis');
}else {
    console.log('Žmogus yra nepilnametis');
}


if(zmogus.amzius === 18 ){
    console.log('Žmogus yra pilnametis');
}else if(zmogus.amzius < 18 ){
    console.log('Džiaukis kol gali');
}else{
    console.log('Tu jau susugęs')
}

if(1>2||2<3){console.log('tiesa')}
else{console.log('Netiesa')};

if(1>2 && 2<3){console.log('Tiesa')}
else{console.log('Netiesa')};

if(!(2===2)){console.log('Tiesa')}
else{console.log('Netiesa')};

if(!(zmogus.vardas === 'Svetlana')){console.log('Tiesa')}
else{console.log('Netiesa')};

let cart = [
    {preke: 'sepetukas'}
]

//patikriname, ar krepselis nera tuscias
if(!cart.length) {console.log('Tavo pirkiniu krepselis tuscias')}
else {console.log(cart)}




// });