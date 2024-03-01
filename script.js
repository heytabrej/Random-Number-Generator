
const min = 20;
const max = 656;

const button = document.getElementById('button');
const label = document.getElementById('label');

button.onclick = function(){

let random = Math.floor(Math.random()*max) + min;
label.textContent = random;

console.log(random);
}