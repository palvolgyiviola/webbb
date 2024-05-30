  
console.log('Hello world')
console.log(1);console.log(2)


let a =1;//nem kell megadni hogy szam
//var b =2;nem hasznaljuk
const c =3;//constans nem lehet erteket adni const c =4 nincs ilyen
console.log(1=='1');
console.log(1==='1');



function greetings(name) {
    console.log(`Hello, ${name}!`); // altgr + 7 -> backtick
}

greetings('John');


const cim = document.querySelector('h1')
const input=document.querySelector('input#nev')
const button=document.querySelector('button')
console.log(cim, input, button)

button.addEventListener('click', OnClick)
function OnClick(){
    cim.innerHTML = `Hello, ${input.value}!`;
}
