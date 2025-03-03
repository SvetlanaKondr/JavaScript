
//uzduotis 1
let elementById = document.getElementById('example')
let elementsByClassName = document.getElementsByClassName('text')
let elementsByTagName = document.getElementsByTagName('h1')

elementById.style.backgroundColor = 'green'


for (let i = 0; i < elementsByTagName.length; i++) {
    elementsByTagName[i].style.height = '100px';
    elementsByTagName[i].style.width = '400px';
}

elementById.innerText = 'New text';

//uzduotis 2
let elementById1 = document.getElementById('vienas')
let elementById2 = document.getElementById('du')

console.log(elementById1, elementById2 )

let newElement = document.createElement('h1');
newElement.textContent = 'New Element';
example2.replaceChild(newElement, elementById1);

newElement.style.backgroundColor = 'orange';

newElement.classList.add('naujas-elementas'); //pakeisti elementa medyje

console.log(newElement, elementById2 )