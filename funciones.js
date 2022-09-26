// Funciones en java script

function suma(var1,var2){
    return var1 + var2;
}


function factorial(num1){
    if(num1 == 0){
        return 1;
    } else {
        return num1*factorial(num1-1);
    }
}

let numero = 10;
console.log("El factorial de "+ numero + " es: " + factorial(numero));

let nombre = prompt("Escribe tu nombre : \t");
console.log("Bienvenido "+nombre);

