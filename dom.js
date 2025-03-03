// Accessing elements
const elementById = document.getElementById('example');
const elementsByClassName = document.getElementsByClassName('text');
const elementsByTagName = document.getElementsByTagName('p');
const elementByQuerySelector = document.querySelector('#example p');
const elementsByQuerySelectorAll = document.querySelectorAll('.text');

console.log(elementById);
console.log(elementsByClassName);
console.log(elementsByTagName);
console.log(elementByQuerySelector);
console.log(elementsByQuerySelectorAll);

// Changing innerHTML
const contentDiv = document.getElementById('content');
contentDiv.innerHTML = '<p>New Content</p>';

// Changing innerText and textContent
const textDiv = document.getElementById('text-content');
textDiv.innerText = 'New Text using innerText';
// textDiv.textContent = 'New Text using textContent';

// Changing style
const styledElement = document.getElementById('styled-element');
styledElement.style.backgroundColor = 'blue';
styledElement.style.width = '200px';
styledElement.style.height = '200px';

// Adding a new element
const container = document.getElementById('container');
const newElement = document.createElement('p');
newElement.textContent = 'I am a new paragraph!';
container.appendChild(newElement);

// Removing an element
const container = document.getElementById('container');
const removableElement = document.getElementById('removable');
container.removeChild(removableElement);

// Replacing an element
const container = document.getElementById('container');
const oldElement = document.getElementById('old-element');
const newElement = document.createElement('p');
newElement.textContent = 'New Element';
container.replaceChild(newElement, oldElement);