/* Practicando funcion para ordenar un arreglo. sin usar la libreria sort() */

nums = [-2,3,-5];  // le damos los valores al arreglo para luego usarlos

var sortArray = function(nums){  // creamos la funcion llamada arraySort y le pasamos los paramentros que en este caso es nums.
    var i,j,temp;

    for(i=0; i<nums.length; i++){
        for(j=0; j<nums.length; j++){
            if(nums[j+1]<nums[j]){
                temp=nums[j];
                nums[j]=nums[j+1];
                nums[j+1]=temp;
            }
        }
    };

    return nums;
};

console.log(sortArray(nums))


/*
nums = [-2,-4,-3]
var sortArray = function(nums){
    return nums.sort();
}

console.log(sortArray(nums))
 // el problema de esta manera es con los numeros negativos, no evalua si es negativo o positivo lo unico que hace es ordenar los numeros in importar si es positivo o negativo
*/