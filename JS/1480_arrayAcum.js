/**
 * @param {number[]} nums
 * @return {number[]}
 */
nums = [1, 2, 3, 4]

var runningSum = function (nums) {
  let returnValue = [] // Se crea el arreglo llamado returnArray
  let addpreExitingValue = 0 // se inicializa la variable numTotal en 0 por ques es el que iniciara guardando                               los datos del arreglo.

  nums.forEach(n => { // itera elemento por elemento del arreglo. y la n es como una variable que                              sirve de puente por donde pasan todos los datos.
    addpreExitingValue += n // Suma y agrega el nuevo numero que tendra la variable numTotal
    returnValue.push(addpreExitingValue) //El numero que guarda el numTotal, sobreescribe el ultimo dato en                                           returnArray
  })
  return returnValue; // Devuelve el parameto.

};

console.log(runningSum(nums));

/* ********************************************************** */
// //Esta es otra forma de hacerlo 
// num = [1,2,3,4];

// const runningSum = (suma => contador => suma += contador)(0);

// // window.alert(num.map(runningSum))

// console.log(num.map(runningSum))

/* ************************************************************* */


// **************************PRACTICA*************************************

// /**
//  * @param {number[]}
//  * @return {number[]}
//  */
// nums = [1,2,3,4];

// var runningSum = function(nums) {
//     let respuesta = [];  //creamos un arreglo para definir donde se guardara la respuesta.
//     let acumulador = 0;  // con esta variable almacenamos el numero que vamos incrementando y agregando al arreglo respuesta.

//     nums.forEach(numero=>{  // recorre el arreglo nums, elemento por elemento y le damos un apuntador para recoger los elementos del arreglo
//         acumulador += numero;  // el elemento que se recibe en el momento del forEach se suma y se agrega al acumulador que vale 0 al comienzo y luego va cambiando segun el elemento que este en el indice del areglo nums.
//         respuesta.push(acumulador) // rrapidamente el numero que se encuentra en el acumulador y se agrega a la respuesta mediante la funcion push 
//     })

//     return respuesta; // aqui va lo que devuelve la funcion. sin embargo se puede mandar a llamar la variable nums
// };

// console.log(runningSum(nums))