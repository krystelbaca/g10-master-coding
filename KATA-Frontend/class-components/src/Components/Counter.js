import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 5 // guardando el valor de mi estado
    }

    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)    
  }

  incrementCounter() {
    console.log(this)
    this.setState({ counter: this.state.counter + 1  })
  }

  decrementCounter() {
    console.log(this)
    this.setState({ counter: this.state.counter - 1  })
  }

  render() { 
      return (
        <React.Fragment>
          <h2>Contador</h2>
          <div>
            <button
              type="button"
              onClick={this.decrementCounter}
            >-</button>
            <span> {this.state.counter} </span>
            <button
              type="button"
              onClick={this.incrementCounter}
            >+</button>
          </div>
        </React.Fragment>  
      )
  }
}
 
export default Counter;