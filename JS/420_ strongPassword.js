/*Una contraseña se considera segura si se cumplen todas las condiciones siguientes:

Tiene al menos 6 caracteres y como máximo 20 caracteres.
Contiene al menos una letra minúscula, al menos una letra mayúscula y al menos un dígito.
No contiene tres caracteres repetidos seguidos (es decir, "... aaa ..." es débil, pero "... aa ... a ..." es fuerte, asumiendo que se cumplen otras condiciones).
Dada una contraseña de cadena, devuelva el número mínimo de pasos necesarios para hacer que la contraseña sea segura. si la contraseña ya es segura, devuelve 0.

En un solo paso, puede:

Inserte un carácter en la contraseña,
Eliminar un carácter de la contraseña o
Reemplazar un carácter de contraseña con otro carácter
=================================================================================================================================
*/

alert("Ingresa una contrase;a a revisar")
var containResult = prompt(containResult) // Le pedimo al usuario que ingresa la password que quiere revisar

var strongPasswordChecker = function (containResult, a = 6, b = 20, c = 3) { //inicio de funcion y se recibe el parametro como arreglo la variable s
    const clusters = buildClusters(containResult, c);
    for (let i = 0; i < containResult.length - b && clusters.minReplaceCount; i++) {
        deleteOne(clusters, c);
    }
    const mustAddCount = !/[a-z]/.test(containResult) + !/[A-Z]/.test(containResult) + !/\d/.test(containResult);
    return Math.max(0, containResult.length - b) + Math.max(a - containResult.length, mustAddCount, clusters.minReplaceCount);
};

function buildClusters(containResult, c) {
    const clusters = new Array(c).fill(0).map(cl => new Map());
    clusters.minReplaceCount = 0;
    let re = new RegExp(`(.)\\1{${c - 1},}`, 'g'),
        match;
    while (match = re.exec(containResult)) {
        let len = match[0].length;
        clusters[len % c].set(len, (clusters[len % c].get(len) || 0) + 1);
        clusters.minReplaceCount += Math.floor(len / c);
    }
    return clusters;
}

function deleteOne(clusters, c) {
    const cluster = clusters.find(cl => cl.size);
    for (const [len, count] of cluster) {
        cluster.set(len, count - 1);
        if (count === 1) cluster.delete(len);
        clusters.minReplaceCount -= len % c === 0;
        if (len === c) break;
        const clusterUpdate = clusters[(len - 1) % c];
        clusterUpdate.set(len - 1, (clusterUpdate.get(len - 1) || 0) + 1);
        break;
    }
    console.log(deleteOne());
}
if (strongPasswordChecker(containResult) === 1)
    alert("Se necesita una cojntrase;a mas segura");

console.log(strongPasswordChecker(containResult)) // se llamaa a la funcion strongPassword y a su parametro s para mostrar el resultado si es buena contrase;a o no.