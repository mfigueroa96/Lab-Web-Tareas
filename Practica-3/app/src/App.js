import React, { Component } from 'react';
import './App.css';
import WeatherSearch from './components/WeatherSearch';
import NavBar from './components/NavBar';

class App extends Component {    

    render() {
        return (
            <div className="App">
                <WeatherSearch></WeatherSearch>
            </div>
        );
    }
}

export default App;