import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };

    /*styles = {
        fontSize: 50,
        fontWeight: 'bold'
    };*/

    /*constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }*/

    handleIncrement = product =>{
        console.log(product);
        this.setState({value: this.state.value + 1});
    };

    render() {     
        return (
            <div>       
                {this.props.children}             
                <span className="badge badge-primary m-2">
                    {this.formatCount()}
                </span>
                <button onClick={() => this.handleIncrement({id: 1})} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>);
    }
    formatCount(){
        const {value: count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;