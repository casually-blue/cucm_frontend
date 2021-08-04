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
        //fetch("http://localhost:9000/phones")
        //    .then(res => res.json())
        //    .then(
        //        (result) => {
        //            this.setState({
        //                isLoaded: true,
        //                phones: result
        //            })
        //        }
        //    )
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>CUCM Admin Page</h1>
                    <div className='phones-container'>
                    </div>
                </header>
            </div>
        );
    }
}
export default App;
