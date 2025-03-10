const btn_1 = document.getElementById('btn1')
const btn_2 = document.getElementById('btn2')

btn_1.addEventListener('click', function(){
    alert(`paspaustas mygtukas: ${btn1.id}`);
});

btn_2.addEventListener('click', function(){
    alert(`paspaustas mygtukas: ${btn2.id}`);
});

//2

const isv = document.getElementById('isvest');
const ivestLauk = document.getElementById('ivestLauk')

ivestLauk.addEventListener('keydown', function(event) {
        console.log('Paspaustas klavišas: ' + event.key);
        isv.innerText = 'You pressed the key: ' + event.key;
        if (event.key === 'Enter') {
            ivestLauk.value = '';
            console.log('Enter key was pressed, input cleared');
        }
    });

//3

const forma = document.getElementById('forma')

forma.addEventListener('submit', function(event){
    event.preventDefault();

    const inp1 = document.getElementById('inp1');
    const inp2 = document.getElementById('inp2');
    const inp3 = document.getElementById('inp3');
    const inpCont = document.getElementById('inpCont')
    


let message = '';
let valid = true
console.log(message)

if (inp1.value.trim() === '') {
    const errorMessageElement=document.createElement('p')
    message += 'Užpildykite lauką inp1\n'
    valid = false;
    console.log(message)
    errorMessageElement.innerText=message //is 46 imesti visa teksta
    inpCont.appendChild(errorMessageElement)
    // return;
}


if (inp2.value.trim() === '') {
    message += 'Užpildykite lauką inp2\n'
    valid = false;
    // return;
}
if (!inp2.value.includes('@')) {
    message += 'Užpildykite lauką inp2\n'
    valid = false;
    // return;
}


if (inp3.value.trim() === '') {
    message += 'Užpildykite lauką inp3\n'
    valid = false;
    // return;
}
if(inp3.value < 18 || inp3.value > 99){
    alert('Netinkamas amzius')
    return; //nevykdyti funkcijos toliau
}

});

