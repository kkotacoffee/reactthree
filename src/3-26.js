import React, { Component } from 'react';
import './App.css';

class App extends Component {

msgstyle = {
    fontSize: "24pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
}

inputstyle = {
    fontSize: "12pt",
    padding: "5px"
}

btnstyle = {
    fontsize: "20pt",
    padding: "0px 10px"
}

constructor(props) {
    super(props);
    this.state = {
        message: "type your name:"
    };

    this.doChange = this.doChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
};

doChange(event) {
    this.input = event.target.value;
}

doSubmit(event){
    this.setState({
        message: `Hello${this.input}!`
    });
    event.preventDefault();
}

render() {
    return (
        <div>
            <h1>React</h1>
            <h2>{this.state.message}</h2>
            <form onSubmit = {this.doSubmit}>
                <label>
                    <span style = {this.inputstyle}></span>Message:
                    <input type = "text" style = {this.inputstyle} onChange={this.doChange}
                    minLength = "5">
                    </input>
                </label>

                <input type = "submit" style={this.inputstyle} value="Click"></input>
            </form>
        </div>
    );
}


}

export default App;
