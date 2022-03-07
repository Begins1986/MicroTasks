import React from 'react';
import './App.css';
import { Body } from './site/Body';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";

function App() {
    return (
        <div className="App">
            <Header title={'Header'}/>
            <Body title={'New body'}/>
            <Footer title={'Footer'}/>
        </div>
    );
}

export default App;
