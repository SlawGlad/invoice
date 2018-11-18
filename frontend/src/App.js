import React, {Component} from "react";
import {Route, Switch} from "react-router";
import "./App.css";

import Header from "./Header";
import MainPage from "./components/MainPage";
import ClientsPage from "./components/ClientsPage";
import InvoicesPage from "./components/InvoicesPage";
import AdminPanelPage from "./components/AdminPanelPage";

export default class App extends Component {
    render() {
        return (
            <div>
    			<Header/>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/clients' component={ClientsPage}/>
                    <Route exact path='/invoices' component={InvoicesPage}/>
                    <Route exact path='/admin-panel' component={AdminPanelPage}/>
                </Switch>
            </div>
        );
    }
}