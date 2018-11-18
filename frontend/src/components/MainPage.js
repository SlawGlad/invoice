import React, {Component} from "react";

export default class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <br/><br/><br/><br/>
                <h1 align="center" color ="red"><b>Witaj w programie FakturaPL</b></h1><br/><br/>
                <i>
                <p align="center"> Dzięki naszemu programowi możesz sprawnie zarządzać swoimi klientami oraz archiwem faktur.</p>
                <p align="center"> Wystawianie faktur jeszcze nigdy nie było tak proste!</p>
                </i>
            </div>
        );
    }
}