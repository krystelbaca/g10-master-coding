/**
 * 
 * JavaScript Asincrono moderno 
 * 
 * Async functions: la combinacion de promesas con funciones,
 * y abstraen el funcionamiento de las promesas a un nivel mas alto (Simple)
 * 
 * Lo que sucede es que hacen parecen que el codigo es SINCRONO, pero detras, se comporta
 * como codigo asincrono 
 */

// Sintaxis:

async - await

const unaPromesa = () => {
    return new Promise((resolve, reject) => {
        // Logica
    })
}

const otraPromesa = async () => {
    await functionQueLlamaAunEndpoint()
    await unaPromesa()
}


// Promises VS Async Await

const getData = () => {
    return fetch('/data/users') 
        .then(res => res.json())
        .then(user => user[0])
        .then(user => fetch(`/users/${user}`)) // obtengo la data
        .then(userName => userName.json())
        .catch(err => {
            new Error('Error', err)
        })
}

const getData = async () => {
    try {
        const response = await fetch('/data/users') // pegandole al endpoint
        const users = await response.json() // parseo a json
        const user = users[0] // selecciona el primer element
        const userResponse = await fetch(`/users/${user}`)
        const userData = await userResponse.json()
    } catch (err) {
        console.log('Error', err)
    }
    return userData
}