//1
const tekstas = document.getElementById('text') //deklaruojam keičiama teksta
const btn = document.getElementById('actionButton') //deklaruojam mygtuka
//2
const container = document.getElementById('parentDiv')
const elemOld = document.getElementById('childText')
const elemNew = document.createElement('span')
elemNew.textContent = 'Child text'
//3
const boxStyle = document.getElementById('box')
//4
const statusas = document.getElementById('status')


btn.addEventListener('click', function uzduotys(){
    tekstas.innerText='New text' //1
    container.replaceChild(elemNew, elemOld) //2
    boxStyle.style.backgroundColor = 'green' //3


    if(tekstas.innerText ==='New text' 
        && boxStyle.style.backgroundColor === 'green'
        && elemNew.tagName === 'SPAN'){
        alert('viskas ok')
        statusas.innerText = 'Complette'
        statusas.style.color = 'green'
        return; //nevykdyti funkcijos toliau
    } else {
        alert('operacija nepavyko')
    }

});



