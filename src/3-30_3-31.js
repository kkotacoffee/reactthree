import React, { Component } from 'react';
import './App.css';

let data = {
    title: "Title",
    message: "this is sample"
};

const SampleContext = React.createContext(data);

class App extends Component {

    newdata = {
        title:"新しいタイトル",
        message:"new message"
    }


    render() {
        return (
            <div>
                <h1>Context</h1>
                <Title></Title>
                <Message></Message>
                <SampleContext.Provider value = {this.newdata}>
                    <Title></Title>
                    <Message></Message>
                </SampleContext.Provider>
                <Title></Title>
                <Message></Message>
            </div>
        );
    }

}

class Title extends Component {
    static contextType = SampleContext;

    render () {
        return (
            <div>
                <h2>{this.context.title}</h2>
            </div>
        );
    }
}

class Message extends Component {
    static contextType = SampleContext;

    render() {
        return (
            <div>
                <p>{this.context.message}</p>
            </div>
        );
    }
}

export default App;
