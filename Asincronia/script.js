//Example from: https://lenguajejs.com/javascript/asincronia/que-es/
/**
 * Tenemos un array numbers, en el cuál insertaremos números. 
 * Insertaremos la cantidad de números que figura en iterations. 
 * En cada iteración se insertará un number, que habrá sido generado con una simulación del 
 * lanzamiento de un dado (un número aleatorio del 1 al 6). 
 * En el caso de obtener un 6, paramos y rompemos el bucle:
 * 
 */

//const { list } = require("tar");

const iterations = 10;
const numbers = [];

for (let i = 0; i < iterations; i++) {
  const number = 1 + Math.floor(Math.random() * 6);
  numbers.push(number);
  if (number === 6) {
    console.log("ERROR");
    break;
  }
}

console.log(numbers);


//Recorrer array
const letters = ['A', 'B', 'C', 'D'];
for(let i = 0; i < letters.length ; i++){
    console.log('i = ', i, 'letter = ', letters[i]);
}

console.log("Callback function");
function action(element, index){
    console.log('i = ', index, 'letter = ', element);
}
console.log(letters);
letters.forEach(action);

//Another way 
letters.forEach((element, index)=>{
    console.log('i = ', index, 'letter = ', element);
});

//Set Time Out

setTimeout(() => {
    console.log("Funcion que tarda 5 segundos en ejecutarse");
}, 5000);