import React from 'react';
import './App.css';

class Rect extends React.Component {
    x = 0;
    y = 0;
    width = 0;
    height = 0;
    color = "white";
    style = {};

    constructor(props){
        super(props);
        this.x = props.x;
        this.y = props.y;
        this.width = props.w;
        this.height = props.h;
        this.color = props.c;
        this.style = {
            backgroundColor: this.color,
            position: "absolute",
            left: this.x + "px",
            top: this.y + "px",
            width: this.width + "px",
            height: this.height + "px"
        }
    }

    render() {
        return <div style = {this.style}></div>;
    }
}

function App() {

return (
    <div>
        <Rect x = "100" y = "100" w = "100" h = "100" c = "cyan"></Rect>
        <Rect x = "150" y = "150" w = "100" h = "100" c = "magenta"></Rect>
    </div>
);
}

export default App;
