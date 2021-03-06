import React, { Component } from 'react';
import './App.css';
import Rect from './3-15_3-16';

class App extends Component {
    render() {
        return (
            <div>
            <h1>React</h1>
                <Rect x = "50" y = "50" w="150" h = "150" c = "#6ff9" r = "50"></Rect>
                <Rect x = "150" y = "100" w="150" h = "150" c = "#f6f9" r = "75"></Rect>
                <Rect x = "100" y = "150" w="150" h = "150" c = "#6669" r = "25"></Rect>
            </div>
        );
    }
}

export default App;
