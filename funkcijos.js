
// function pasisveikinti(){
//     alert('labas vakaras!')
// }

// //iškviesti
// pasisveikinti();

// function pasisveikinti1(vardas, pavarde, amzius){
//     // "labas vakaras" + vardas
//     alert(`labas vakaras, aš esu ${vardas} ${pavarde} mano amzius ${amzius}`)
// }

// //iškviesti
// pasisveikinti1('Svetlana', 'Kond', '18');
// pasisveikinti1('Svetlana1', 'Kond1', '20');


// function pasisveikinti2(vardas = 'Nezinomasis', pavarde='pavarde', amzius='0'){
//     // "labas vakaras" + vardas
//     alert(`labas vakaras, aš esu ${vardas} ${pavarde} mano amzius ${amzius}`)
// }

// //iškviesti
// pasisveikinti2();
// pasisveikinti2('Svetlana2', 'Kond2', '22');


// function pasisveikinti3(vardas, pavarde, amzius){
//     if(!vardas || !pavarde){
//         alert('Jus nezinomas')
//     }
// }

// //iškviesti
// pasisveikinti3();


//nenurodome funkcijos pavadinimo, kintamajam priskirta reiksme - funkcija
//anonymous function
const sudetiDuSkaicius = function(skaicius1=0, skaicius2=0){
    console.log(skaicius1+skaicius2)
    //grazinti reiksme
    return skaicius1 + skaicius2
}

//arrow function, 
const sudetiDuSkaicius2 = (skaicius1, skaicius2) => {
    return skaicius1 + skaicius2;
}
//supaprastinta arrow
const sudetiDuSkaicius3 = (skaicius1, skaicius2) => skaicius1 + skaicius2;


let suma2 = sudetiDuSkaicius2(2, 3);
console.log(suma2)

let suma = sudetiDuSkaicius();
console.log(suma)

if(suma>0){
    console.log('daugiau uz 0')}
else {console.log('nulis')
}

//IIFE - funkcijos iskvieciamos is karto, kai pasiledzia kodas
//ivykdomas viena karta
// ()()
(() => {
    console.log('is karto igyvendinama funkcija')
})();

//kintamoji nepasiekiama uz sio bloko ribu. izoliuojam nuo kitos bloko galies - globalaus objekto
// (() => {
//     const zmogus = {
//         vardas:'denisas'
//     };
//     console.log(zmogus.vardas)
// });

// console.log(zmogus.vardas)


// const sudetiDuSkaicius4 = function (skaicius1=0, skaicius2=0){
//     return skaicius1 + skaicius2;
// }
// const sudetiDuSkaicius4 = function (skaicius1=0, skaicius2=0){
//     return skaicius1 - skaicius2;
// }

function operatoriausFunkcija(operacija, skaicius1, skaicius2){
    return operacija(skaicius1+skaicius2)
}

console.log(operatoriausFunkcija(sudetiDuSkaicius, 3, 5))