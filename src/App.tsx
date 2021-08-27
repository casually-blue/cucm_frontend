import './App.css';

import {Component} from "react";
import {HashRouter, Route, NavLink} from "react-router-dom";

import {Office} from "./Pages/Office";
import {Home} from "./Pages/Home";
import {Fidelis} from "./Pages/Fidelis";

export default class App extends Component {
    render(): JSX.Element {
        return (
            <HashRouter>
                <div>
                <h1>CDA IT Management</h1>
                <ul className="header">
                    <li><NavLink exact to="/" >Home</NavLink></li>
                    <li><NavLink exact to="/office365">Office 365</NavLink></li>
                    <li><NavLink exact to="/fidelis">Fidelis</NavLink></li>
                </ul>
                </div>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/office365" component={Office}/>
                    <Route exact path="/fidelis" component={Fidelis}/>
                </div>
            </HashRouter>
        )
    }
}