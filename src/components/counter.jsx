import React, { Component } from 'react';



class Counter extends Component {
    state = {
        value: this.props.value,
        tags: ['tag1', 'tag2', 'tag3']
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>
        {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
     </ul>
    }


    // constructor() {

    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        console.log('Hello');
        this.setState({ value: this.state.value + 1})
    };



    render() { 

        return (
            <div>    
           
             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
             <button onClick={() => {
        this.handleIncrement();
    }} className='btn btn-secondary btn-sm'>Increment</button>
            
            </div>
        );
    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {

        const {value} = this.state;
        return value===0 ? <h1>Zero</h1> : value;
    }
}
 
export default Counter;
