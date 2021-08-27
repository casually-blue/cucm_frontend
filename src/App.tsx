import {Component} from "react";
import {HashRouter, Route, NavLink} from "react-router-dom";

import {Office} from "./Pages/Office";
import {Home} from "./Pages/Home";
import {Fidelis} from "./Pages/Fidelis";
import {CUCM} from "./Pages/CUCM";

export default class App extends Component {
    render(): JSX.Element {
        return (
            <HashRouter>
                <div className="box">
                    <div className="row head">
                        <h1>CDA Technology Manager</h1>
                        <ul className="header">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink exact to="/office365">Office 365</NavLink></li>
                            <li><NavLink exact to="/fidelis">Fidelis</NavLink></li>
                            <li><NavLink exact to="/cucm">CUCM</NavLink></li>
                        </ul>
                    </div>
                    <div className="row content">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/office365" component={Office}/>
                        <Route exact path="/fidelis" component={Fidelis}/>
                        <Route exact path="/cucm" component={CUCM}/>
                    </div>
                    <div className="row foot">

                    </div>
                </div>
            </HashRouter>
        )
    }
}