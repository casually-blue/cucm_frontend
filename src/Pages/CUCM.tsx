import {Component} from "react";

export class CUCM extends Component {
    gen_array(): JSX.Element[] {
        return [...Array(200)].map((e, i) => {
            return (<p><br/>Line {i}</p>)
        })
    }

    render(): JSX.Element {
        return (
            <div>
                <h2>CUCM Page</h2>
                <p>Sample Text</p>
            </div>
        );
    }
}