import './App.css';
import React from "react";
import JsonTable from "./JsonTable";

export default class App extends React.Component {
    render() {
        return <div className="App">
            <header className="App-Header">
                <h1>Phones</h1>
                <JsonTable url={"http://localhost:9000/phones"}/>
            </header>
        </div>
    }
}
