
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';
import React, { Component } from 'react';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

class App extends Component {

  state = { 

    counters: [

        {
            id: 1,
            value: 0
        },
        {
            id: 2,
            value: 0
        },
        {
            id: 3,
            value: 4
        },
        {
            id: 4,
            value: 0
        }
    ],

 } 

 constructor(props) {
  super(props);
  console.log('App - Constructor');
  // this.state = this.props.something;
 }


 componentDidMount() {

      console.log('App - Mounted');

 }

 handleIncrement = counter => {

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});

 };

 handleDecrement = counter => {

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});

 };

handleDelete = (counterID) => {

    const counters = this.state.counters.filter(c => c.id !== counterID);

    this.setState({ counters: counters });
    
};

handleReset = () => {

    const counters = this.state.counters.map( c => {
        c.value = 0;
        return c;
    });
    this.setState({counters});
} 

render() {

    console.log('App rendered.');
    return (

        <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
                <main className="container">
                <Counters counters={this.state.counters} 
                onReset={this.handleReset} 
                onIncrement={this.handleIncrement} 
                onDelete={this.handleDelete}
                onDecrement={this.handleDecrement}
                />
                </main>

        </React.Fragment>


  );

}
  
}

export default App;
