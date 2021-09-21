class Node {
  constructor(data) {
    // data: valor que le vamos a pasar cuando instanciemos la interface (value)
    this.data = data

    // propiedad que nos indica el enlace al siguiente nodo de la lista (valor default null)
    this.next = null
  }
}


class LinkedList {
  constructor() {
    this.head = null // trackea el primer elemento de la lista
    this.tail = null // trackea el ultimo elemento
    this.length = 0 // necesito conocer cuantos nodos hay
  }

  isEmpty () {
    return this.length === 0
  }

  push (value) {
    const newNode = new Node(value) //Asignando el valor a la interface Node, entonces tendrá acceso a sus metodos y props

    if(this.isEmpty()) { // validar si la lista esta vacia
      this.head = newNode // asignamos el nuevo nodo al head (primer elemento)
      this.tail = newNode // asignamos el nuevo nodo al tail (ultimo elemento) 
    } else {
      this.tail.next = newNode // enlazar la tail con el nuevo element
      this.tail = newNode // asignar la tail hacia el nuevo valor
    }

    this.length++
  }

  pop () {
    /**
     * ----Para remover nodos de mi lista:-----
     * Verificar si la lista esta vacia
     * Verificar el element next de mi nodo del tail
     * Actualizar el tail pointer a que apunte al current node (Head)
     * Asignar  la nueva tail node que apunte a null
     * Decrementar la longitud
     * El metodo pop() debe retornar el elemento removido
     */

    if (this.isEmpty()) {
      return null
    } else if (this.length === 1) {
      const nodeToRemove = this.head
      this.head = null
      this.tail = null
      this.length--

      return nodeToRemove
    } else {
      /** Cuando hay muchos nodos en la lista */

      // asignar nuestro apuntador a la cabeza
      let currentNode = this.head

      // remover el ultimo element en la lista

      const nodeToRemove = this.tail

      // creo variable para guardar lo que sera mi nueva tail
      let newTail 

      while (currentNode) { // mientras  mi currentNode exista
        if (currentNode.next === nodeToRemove) { // si el next del current es igual al element a remover
          newTail = currentNode // entonces la nueva tail sera el element current
          break // termina condicion
        }

        currentNode = currentNode.next // currentNode lo asigno al su next
      }

      newTail.next = null //el next de mi nuevo tail tiene que ser null (por ser el ultimo y siempre apuntan a null)
      this.tail = newTail // asignamos la tail al nuevo valor de tail
      this.length-- // decrementamos nuestra longitud
      return nodeToRemove // retornamos valor que removimos
    }
  }

  get (index) {
    // primero tenemos que confirmar que el index este dentro de los bordes de la pila (es decir su longitud)
    if (index < 0 || index > this.length || this.isEmpty()) return null

    // si queremos regresar el primer nodo
    if (index === 0) return this.head

    // si queremos regresar el ultimo nodo
    if (index === this.length - 1) return this.tail

    // regresar un nodo que este en otra posicion de la lista

    /**
     * Necesitamos iterar a traves de la lista hasta encontrar el index del nodo solicitado
     */
    let currentNode = this.head // nos posicionamos sobre el inicio

    let iterator = 0
    while (iterator < index) {
      iterator++ // incrementamos el iterador para recorrer la lista
      currentNode = currentNode.next 
      console.log('CURRENT', currentNode) // aqui pueden ver como el current cambia de valor
    }
    
    return currentNode
  }
}


const myList = new LinkedList()

myList.push('Diego')
myList.push('Marilyn')
myList.push('David')
myList.push('Sebastian')
myList.push('Ceci')
//console.log(myList)

// console.log(myList.pop())

// console.log(myList)

console.log(myList.get(3))