// //ciklai

// let bilietai=[1,2,3,4,5,6,7]

// for (let i=0; bilietai.length > i; i++){
//     console.log(bilietai[i])
// }

// console.log(bilietai.length);


// let vardai = ['a', 'b', 'c'];
// console.log(vardai[0])
// console.log(vardai[1])
// console.log(vardai[2])
// console.log(vardai[3]) //undefined

// for(let i=0; i< 4; i++)
//     {console.log(vardai[i])}

// for(let i=0; i<vardai.length; i++)
//     {console.log(vardai[i])}

// //iteruoti array. vardas - funkcijoj sukurtas kintamasis
// vardai.forEach((vardas)=>{
//     console.log(vardas)
// })


//dokumentu elementai
let heading1tags = document.getElementsByTagName('h1');
console.log(heading1tags);


for (let i=0; i < heading1tags.length; i++){
    // console.log(heading1tags[i])
    //pakeitem elemento tekstini turini
    // heading1tags[i].innerText = i;
    if(i===0){
        heading1tags[i].innerText = i; //talpinam teksta i pasirinkta elementa
        heading1tags[i].style.backgroundColor = 'yellow'
    } 
    if(i===1){
        heading1tags[i].innerHTML = '<span>'+i+'</span>'; //talpinam nauja html i truscia html elementa
        heading1tags[i].innerHTML = `<span>${i}</span>`
    } 
}

let apieManeParagrafas = document.getElementById('apie-mane');
// console.log(apieManeParagrafas);
apieManeParagrafas.innerText = 'tekstas apie mane';

let divElementas = document.createElement('div'); //sukuriame reikalinga elementa

divElementas.innerText = 'Svetlanos div elementas';
divElementas.classList.add('svetlanos-divas'); //medyje sis elementas kol kas nepatalpintas

console.log(divElementas); 

document.body.appendChild(divElementas); //atsiranda html medyje paciam parental elemento gale
