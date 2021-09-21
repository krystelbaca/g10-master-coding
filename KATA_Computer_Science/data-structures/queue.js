class Queue {
    constructor() {
        this.queue = []
    }

    get size () {
        return this.queue.length
    }

    enqueue (item) {
        this.queue.push(item)
    }

    dequeue () {
        return this.queue.shift()
    }

    front () {
        return this.queue[0]
    }

    // ultimo elemento
    back () {
        return this.queue[this.size - 1]
    }
    // retorna la queue
    print () {
        return this.queue
    }
    // valida si esta vacia o no
    isEmpty () {
        return this.length === 0;
    }

}


const myQueue = new Queue()
// Llenando la Queue:
myQueue.enqueue('Krystel')
myQueue.enqueue('Nicol')
myQueue.enqueue('Shir')

// getting the size from the queue
console.log(myQueue.size)

// printing the queue
console.log(myQueue.print())

// boolean
console.log(myQueue.isEmpty())
// get the fist element from the queue
console.log(myQueue.front())
// get the last element from the queue
console.log(myQueue.back())

