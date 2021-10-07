// function myFunction() {
//     console.log('Soy una function')
// }

// function myOtherFunction(callback) {
//     callback()
// }

// myOtherFunction(myFunction)





// console.log("---El 2 y 3 van a la Cola de Ejecución---");
// console.log(1);
// // SetTimeout Espera N segundos para ejecutar un CALLBACK.
// // Recibe 2 parametros: setTimeout(callback, milisegundos)
// setTimeout(()=>{ //Simular Ir a Base de Datos con un callback;
//     return console.log(2)
// },3000);
// setTimeout(()=>{
//     return console.log(3)
// },2000);
// console.log(4);

function anonima() { console.log(4) }
console.log("---Simulación de Cuello de Botella---");
console.log(1);
anonima()
setTimeout(()=>{
    return console.log(2);
},2000);
console.log(3);
setTimeout(()=>{
    return console.log('pendiente')
},100)


