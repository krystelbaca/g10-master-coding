/**
 * 
 * Fetch API: mecanismo basado en promesas, cuando se llama al
 * metodo fetch() es como si se definiera una promesa usando new Promise()
 * 
 *
 */

const validateStatus = (response) => {
    if(response.status >= 200) { // status 200: todo OK
        return Promise.resolve(response)
    }

    return Promise.reject(new Error('Hubo un error'))
}

const jsonFile = (response) => response.json()


/**
 * 
 * Fetch: retorna una respuesta que contiene muchas propiedad
 * 
 * status: HTTP value -> http status code
 */

fetch('/url.com/test')
    .then(validateStatus) // llama a la function validateStatus: y debe devolver Una promise!!!
    .then(jsonFile)
    .then(data => {
        console.log('Ya obtuve la informacion:', data)
    })
    .catch(error => {
        console.log('Falló algo en el request', error)
    })


/**
 * Promise.all() - Se utiliza cuando necesito sincronizar diferentes promesas y 
 * ejecutar algo cuanto TODAS se hayan resuelto.
 */

const peticion1 = fetch('/api/uno')
const peticion2 = fetch('/api/dos')

Promise.all([peticion1, peticion2])
    .then(res => {
        console.log('Respuesta de ambas peticiones', res)
    })
    .catch(err => {
        console.log(err)
    })
