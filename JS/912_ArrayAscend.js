/**
 * @param {number[]} nums
 * @return {number[]}
 */
nums = [4,2,1,5,3];

var sortArray = function(nums){
    var i,j;
    
    for(i=0; i<nums.length; i++){      
        for(j=0; j<nums.length; j++){   //
            if(nums[j+1]<nums[j]){
                var temp = nums[j];
                nums[j]=nums[j+1],
                nums[j+1]=temp;
            };
        };
    };
    
    return nums;
};

console.log(sortArray(nums))

/*

*El primer recorre los elementos del arreglo mientras el segundo for tenga respuesta de que el segundo valor comparado sea menor que el segundo

*El segundo for recorre el arreglo comparando y posicionando el valor menor a la izquierda, cuando llega al final, el for exteror hace que repita el recorrido hasta que el for interior recorra la longitud del arreglo y que este de falso, en ese momento el for superior se detiene.

*En el for interior se usa una variable temporal para almacenar el valor del indice [j], este valor es guardado para no perderlo en el intercambio ya que este valor es el que se movera a la derecha, y permitira ordenar el arreglo.

*Una vez guardado el valor que se tiene como valor mayor en la comparacion de los 2 valores, se procede a darle el valor que va en [j+1] al indice [j], esto lo hacemos, igualando el valor del indice que tiene [j+1] con el valor del indice [j] haciendo esto el valor antiguo en [j] se ha perdido, por que, le sobreescribimos el valor, y ahora tiene el valor menor
encontrado por el if de comparacion, luego usamos la variable temporal que tenemos donde habiamos guardado el valor de [j] antiguo, ese valor antiguo lo ingresamos en el indice [j+1], asi se logra intercambiar los valores una y otra vez hasta que se cumplan las condiciones del for y el if.
*/

/*
//otra forma de hacer esta funcion es con la libreria sort, sin embargo no es eficiente. ya que ordena los valores de menor a menor pero no toma en cuenta si es negativo o no .

var sortArray = function(nums) {
    return nums.sort()              
}; 
*/


// /**
//  * @param {number[]} nums
//  * @return {number[]}
// */
// var sortArray = function(nums) {
//     return(nums.sort());        
// };



// ordenano arreglo por metodo burbuja.

