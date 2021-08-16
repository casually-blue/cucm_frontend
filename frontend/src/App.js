import './App.css';
import React from "react";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            phones: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch("http://localhost:9000/phones")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        phones: result
                    })
                }
            )
    }

    renderTemplate(val) {
        return <div className="App">
            <header className="App-Header">
                <h1>Phones</h1>
                {val}
            </header>
        </div>
    }

    render() {
        if(this.state.isLoaded === false) {
            return (
                this.renderTemplate(this.renderUnloaded())
            );
        } else {
            return (
                this.renderTemplate(this.renderLoaded())
            );
        }
    }

    renderUnloaded() {
        return <p>"Loading..."</p>;
    }

    renderLoaded() {
        return (
            <table style={{border: "1px solid black", padding: "5px", marginLeft: "auto", marginRight:"auto"}}>
                <thead>
                <td>Index</td>
                {Object.keys(this.state.phones[0]).slice(0,4).map(function(key) {
                    return <td>{key.toUpperCase()}</td>
                })}
                </thead>
                <tbody>
                {this.state.phones.map(function(phone, index) {
                    return <tr>
                        <td>{index}</td>
                        {

                            Object.keys(phone).slice(0,4).map(function (key) {
                                return <td>{(phone[key] || "none").toString()}</td>
                            })
                        }
                    </tr>
                })}
                </tbody>
            </table>
        );
    }
}
export default App;
