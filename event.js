// {
//    addEventListener: (type, callbackFn){}
// }



const manoMygtukas = document.getElementById('mano-mygtukas');
console.log(manoMygtukas)
manoMygtukas.addEventListener('click', function(){
    console.log('paspaustas')
});


// const manoMygtukas3 = document.getElementById('mano-mygtukas');
// console.log(manoMygtukas3)

// let count1 = 0;
// const manoSkaicius = document.getElementById('mano-skaicius');
// manoSkaicius.innerText = count

// function skaiciuoti(event){
//     console.log(event)
//     count++
//     manoSkaicius.innerText = count
//     if(count ===3){
//         manoMygtukas1.removeEventListener('click', skaiciuoti) //neleidzia paspausti mygtuko daugiau nei trys kartai
//     }
// }  



//pliusuojam minusuojam. Spaudziant viena mygtuka skaicius ekrane dideja
// spaudziant kita mygtuka, skaicius ekrane mazeja

const manoMygtukas1 = document.getElementById('mano-mygtukas'); //deklaruojam pirma mygtuka
console.log(manoMygtukas1)

const manoMygtukas2 = document.getElementById('mano-mygtukas-minus'); //deklaruojam antra mygtuka
console.log(manoMygtukas1)

let count = 0; //deklaruojam pradini skaiciu

const manoSkaicius = document.getElementById('mano-skaicius'); //deklaruojam html elementa - skaiciu
manoSkaicius.innerText = count


function prideti(event){
    count++
    manoSkaicius.innerText = count //pakeiciamas elemento tekstas
 }    
manoMygtukas1.addEventListener('click', prideti) //pradedam funkcija paspaudus mygtuka

function atimti(){
    count--
    manoSkaicius.innerText = count //pakeiciamas elemento tekstas
}    
manoMygtukas2.addEventListener('click', atimti) //pradedam funkcija paspaudus mygtuka


//formos

const burgerBtn = document.getElementById('burger-btn')
const manoForma=document.getElementById('mano-forma');
console.log(manoForma)

burgerBtn.addEventListener('click', function(){
    manoForma.classList.toggle('show')  //jeigu elementas turi klase - prideda, jeigu neturi - atima
})

//submit perkrauna puslapi
manoForma.addEventListener('submit', function(event){
    event.preventDefault();         //stabdo veikima pagal nutylejima - puslapio perkrovimo siuo atveju 
    const formoDuomenys = new FormData(manoForma);
    const payload =  Object.fromEntries(formoDuomenys)    //payload, siunciamas srautas
    //console.log(Object.fromEntries(duomenys))
const vardasReiksme = payload.vardas;
const vardasDiv=document.getElementById('vardas-div');
// vardasDiv.classList.remove('error');
const pavardeDiv=document.getElementById('pavarde-div');

if(!vardasReiksme.trim()){
    alert('vardas yra tuscias')
    return; //nevykdyti funkcijos toliau
}
if(vardasReiksme.includes('a')){
    alert('a neturi buti')
    // vardasDiv.classList.add('error')
    return; //nevykdyti funkcijos toliau
}
//regex
if (!/^[A-Za-z]+$/.test(vardasReiksme) || !/^[A-Za-z]+$/.test(pavardeReiksme)) {
    alert('Leidziama ivesti tik raides')
    return;
}


    //kreipimasis i backenda
})

