import React from "react";
import './JsonTable.css';

export default class JsonTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            json: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch(this.props["url"])
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        json: result
                    })
                }
            )
    }
    
    render() {
        return this.state.isLoaded ?
            <table>
                <thead className="TableHead">
                <tr>
                    <th key={"index"} className="TableHead">Index</th>
                    {
                        Object.keys(this.state.json[0]).map(function (key) {
                            return <th key={key} className="TableHead">{key.charAt(0).toUpperCase() + key.slice(1)}</th>
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    this.state.json.map(function (obj, index) {
                        return <tr key={index}>
                            <td key={"index"} className="TableCell">{index}</td>
                            {
                                Object.keys(obj).map(function (key) {
                                    return <td key={key} className="TableCell">
                                        {
                                            ((obj[key] || "none").toString() === "[object Object]") ?
                                                "object" :
                                                (obj[key] || "none").toString()
                                        }
                                    </td>
                                })
                            }
                        </tr>
                    })
                }
                </tbody>
            </table> :
            <p>Loading...</p>
    }
}