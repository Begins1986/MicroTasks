import React from 'react';
import './App.css';
import {Body} from './site/Body';
import {Header} from "./site/Header";
import {Footer} from "./site/Footer";
import {TopCars} from "./site/TopCars";
import Filter from "./site/Filter";
import Button from "./site/Button";
import {Input} from "./site/Input";

function App() {
    return (
        <div className="App">
            <Header title={'Header'}/>
            <Body title={'New body'}/>
            <Filter/>
            <Button/>
            <Footer title={'Footer'}/>
            <TopCars/>
            <Input/>
        </div>
    );
}

export default App;
