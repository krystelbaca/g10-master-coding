import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Contador!',
      counter: 0
    }

    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)    
  }

  incrementCounter() {
    this.setState({
      ...this.state,
      counter: this.state.counter + 1
     })
  }

  decrementCounter() {
    this.setState({ counter: this.state.counter - 1  })
  }

  render() { 
      return (
        <React.Fragment>
          <h2>{
            this.state.counter === 3
            ? 'Tres!'
            : this.state.title
          }</h2>
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