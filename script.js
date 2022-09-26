
console.log("Hola Mundo!!");

function saludo(name){
    return console.log(`Bienvenido ${name}`);
};


saludo("Roberto");




// document.write("Hola Mundo!!");


// let arreglo = [1,2,3,4,5];

// document.write("<br>"+arreglo.filter(x=> x>0));
// document.write("<br>"+typeof(arreglo))

// // recursividad

// function factorial (numero){
//     if (numero<2){
//         return 1;
//     } else {
//         return numero*factorial(numero-1);
//     }
// }

// document.write("<br>"+factorial(4));

// document.write("<br>"+factorial(1));


// // funciones map


// function map(f,a){
//     let result = [];
//     let i;

//     for(i=0; i != a.length;i++)
//     {
//         result[i] = f(a[i]);
//     }
//     return result;
// }

// const f = function(x){
//     return  x*x*x;
// }

// let numbers = [0, 1,2,3,5,100];

// let cubo = map(f,numbers);

// document.write(cubo);


// document.write("<br>"+Math.sin(90*Math.PI/180));

// let fecha = new Date();

// document.write("<br>"+fecha.getFullYear());

// const paginaH1 = document.querySelector('h1');

// paginaH1.innerText = "Nuevo titulo para la pagina!! desde Javascript";

// const cal1 = document.querySelector('#val1');
// const cal2 = document.querySelector('#val2');
// const btn = document.querySelector('#btnCalcular');
// const pREs = document.querySelector('#pREsult');


// function btnOnclick(){
//     btn.prevent
//     const sumaInputs = parseFloat( cal1.value) + parseFloat(cal2.value);
//     pREs.innerText= "Resultado de: " + sumaInputs;
// }


// function getEventType(event){
//     const actividad = document.querySelector('#act1');

//     actividad.innerText = `${event.type}\n${actividad.innerText}`;
// }


// document.addEventListener('keydown',getEventType);
// document.addEventListener('keypress',getEventType);
// document.addEventListener('keyup',getEventType);

// document.addEventListener('mousedown',getEventType);
// document.addEventListener('mouseup',getEventType);
// document.addEventListener('click',getEventType);




