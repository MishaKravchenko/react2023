import React from "react";
import './App.css';
import {Simpsons} from "./components/Simpsons/Simpsons";
import {RickMortyList} from "./components/RickMortyList/RickMortyList";

function App() {
    return (
        <div className="App">
            <div className="simpsons_wrapper">
                <h1>Simpsons</h1>
                <Simpsons/>
            </div>

            <div className="rickMorty_wrapper">
                <h1>Rick & Morty</h1>
                <RickMortyList/>
            </div>
        </div>
    );
}

export default App;
