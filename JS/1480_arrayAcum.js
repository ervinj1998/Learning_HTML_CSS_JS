/**
 * @param {number[]} nums
 * @return {number[]}
 */
nums = [1,2,3,4]

var runningSum = function(nums) {
    let returnValue = []    // Se crea el arreglo llamado returnArray
    let addpreExitingValue = 0    // se inicializa la variable numTotal en 0 por ques es el que iniciara guardando                               los datos del arreglo.
 
    nums.forEach(n => {     // itera elemento por elemento del arreglo. y la n es como una variable que                              sirve de puente por donde pasan todos los datos.
        addpreExitingValue += n       // Suma y agrega el nuevo numero que tendra la variable numTotal
        returnValue.push(addpreExitingValue)  //El numero que guarda el numTotal, sobreescribe el ultimo dato en                                           returnArray
    })
    return returnValue; // Devuelve el parameto.
 
 };

console.log(runningSum(nums))

/* ********************************************************** */
  // //Esta es otra forma de hacerlo 
// num = [1,2,3,4];

// const runningSum = (suma => contador => suma += contador)(0);

// // window.alert(num.map(runningSum))

// console.log(num.map(runningSum))

/* ************************************************************* */

