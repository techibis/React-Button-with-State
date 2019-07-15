import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props);

        // save data in state
        this.state = {
            number: props.number
        };
    }
    half = () => {
        let number = this.state.number;
        number = number/2;

        // udate data in state
        // will automatically call render method after update 
        this.setState({number});
    }
    render() {
        // get data from state, not from props
        const number = this.state.number;
        return (
            <div> 
                <button onClick={this.half}>Click to Divide in Half</button>
                <h1> 
                    Number is:  {number}        
                </h1>
            </div>
        );
    }
}

export default App;
