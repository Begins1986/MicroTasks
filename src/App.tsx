import React from 'react';
import './App.css';
import {Body} from './site/Body';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {TopCars} from "./site/TopCars";

function App() {
    return (
        <div className="App">
            <Header title={'Header'}/>
            <Body title={'New body'}/>
            <Footer title={'Footer'}/>
            <TopCars/>
        </div>
    );
}

export default App;
