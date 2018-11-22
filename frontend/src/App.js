import React, {Component} from "react";
import {Route, Switch} from "react-router";
import "./App.css";

import Header from "./Header";
import MainPage from "./components/MainPage";
import ClientsPage from "./components/ClientsPage";
import InvoicesPage from "./components/InvoicesPage";
import AddUser from "./components/AddUser";
import DeleteCompanyClient from "./components/DeleteCompanyClient";
import AddCompanyPage from "./components/AddCompanyPage";
import AddClientPage from "./components/AddClientPage";
import AddInvoicePage from "./components/AddInvoicePage";

export default class App extends Component {
    render() {
        return (
            <div>
    			<Header/>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/clients' component={ClientsPage}/>
                    <Route exact path='/invoices' component={InvoicesPage}/>
                    <Route exact path='/admin-panel/add-user' component={AddUser}/>
                    <Route exact path='/admin-panel/delete-company-client' component={DeleteCompanyClient}/>
                    <Route exact path='/add-company' component={AddCompanyPage}/>
                    <Route exact path='/add-company-client' component={AddClientPage}/>
                    <Route exact path='/invoices/add-invoice' component={AddInvoicePage}/>
                </Switch>
            </div>
        );
    }
}