/**
 * 
 * Organizar un fiesta de cumpleaños
 */


const promesa = new Promise((resolve, reject) => {
    const dinero = Math.floor(Math.random() * 1000)

    setTimeout(() => {
        dinero >= 500
        ? resolve (dinero) // si se cumple la condicion
        : reject (new Error('No hay fiesta')) // no se cumple
    }, 2000)
})

promesa
    .then(dinero => console.log(dinero))
    .catch(error => console.log(error))

const MyFunction = (dinero) => {
return new Promise((resolve, reject) => {
    console.log('Esperando al cumple de Armando...');

    setTimeout(() =>
    dinero >= 500
        ? resolve('Feliz Cumpleaños 📲') // true
        : reject('No junté el dinero 🙃') // false
    , 3000)
});
}

