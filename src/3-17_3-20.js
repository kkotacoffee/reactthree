import React, { Component } from 'react';
import './App.css';

class App extends Component {

msgstyle = {
    fontsize: "24pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
}

btnstyle = {
    fontsize: "20pt",
    padding: "0px 10px"
}

constructor(props) {
    super(props);
    this.state = {
        counter : 0,
        msg: "Hello COmponent"
    };

    this.doAction = this.doAction.bind(this);
};

doAction(e){
    this.setState((state) => ({
        counter: state.counter + 1,
        msg: "count : " + state.counter
    }));
}

render() {
    return (
        <div>
            <h1>React</h1>
                <p style = {this.msgstyle}>{this.state.msg}</p>
                <button style = {this.btnstyle} onClick = {this.doAction}>
                    Click
                </button>
        </div>
    );
}


}

export default App;
