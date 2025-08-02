import React, { Component } from 'react';

class CounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  // Method to increment
  handleIncrement() {
    this.setState(prev => ({ count: prev.count + 1 }));
    this.sayHello(); // also call this method
  }

  // Separate method to show static message
  sayHello() {
    alert("Hello! You've increased the count.");
  }

  // Decrement
  handleDecrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }));
  }

  render() {
    return (
      <div>
        <h2>🧮 Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterComponent;
