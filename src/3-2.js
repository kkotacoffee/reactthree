import React from 'react';
import './App.css';

function Welcome(props) {
return <p style = {props.style}>Hello! {props.name}!!</p>;
}

function App() {

const msg1 = {
    fontsize: "20pt",
    padding: "10px",
    border: "double 5px magenta"
}

const msg2 = {
    fontsize: "16pt",
    fontWeight: "bold",
    padding: "10px",
    backgroundColor: "cyan"
}

return (
    <div>
        <Welcome name = "taro" style = {msg1} />
        
        <Welcome name = "kotaro" style = {msg2} />
    </div>
);
}

export default App;
