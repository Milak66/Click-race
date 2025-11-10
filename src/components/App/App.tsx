import React from "react";
import './App.css';
import MainContent from "../MainContent/MainContent";

interface AppProps {};

const App: React.FC<AppProps> = () => {

    return (
        <div className="app">
            <MainContent/>
        </div>
    )
}

export default App;