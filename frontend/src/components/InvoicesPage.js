import React, {Component} from "react";
import {Button, Card, CardBody, CardHeader, Col, Form, ListGroup, Table, FormGroup, Row} from "reactstrap";
import CompanyFilterDropdown from "./CompanyFilterDropdown";
import CompanyClientController from "../controllers/CompanyClientController";
import InvoiceControllers from "../controllers/InvoiceControllers"

export default class InvoicesPage extends Component {
    constructor(props) {
        super(props);
        this.companyClientsController = new CompanyClientController();
        this.invoiceControllers = new InvoiceControllers();

        this.state = {
            client: '',
            company: '',
            companies: [],
            invoices: [],
        };

        this.handleCompanyChange = this.handleCompanyChange.bind(this);
    }

    handleCompanyChange(e) {
        this.setState({company: e.target.value})
    }

    getAllCompanies(company) {
        let self = this;
        this.companyClientsController.getAllCompanyClients(company)
            .then(response => {
                self.setState(
                    {
                        companies: response.data
                    }
                )
            })
            .catch(error => {
                console.log(error);
            })
    }

    getAllInvoices(company) {
        let self = this;
        this.invoiceControllers.getAllInvoices(company)
            .then(response => {
                self.setState(
                    {
                        invoices: response.data
                    }
                )
            })
            .catch(error => {
                console.log(error);
            })
    }



    render() {
        return (
            <div>
                <br/>
                <Col sm="12">
                    <Card>
                        <CardHeader>Opcje</CardHeader>
                        <CardBody>
                            <div className="filter-component">
                                <Form>
                                <FormGroup row>
                                    <Col sm={4}>
                                        <CompanyFilterDropdown labelName='Wybierz firmę' value={this.state.company}
                                                       onChangeValue={this.handleCompanyChange}/>
                                    </Col>
                                <Button color="primary" onClick={() =>
                                    this.getAllInvoices(this.state.company)}>Załaduj faktury</Button>
                                </FormGroup>
                                </Form>
                                <br/>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <br/>
                <Col sm="12" >
                    <Card>
                        <CardHeader>Lista faktur</CardHeader>
                        <CardBody>
                          <Table bordered>
                            <thead>
                              <tr>
                                <th>Numer</th>
                                <th>Nabywca</th>
                                <th>Data wystawienia</th>
                                <th>Termin płatności</th>
                                <th>Netto</th>
                                <th>Brutto</th>
                                <th>Nr konta</th>
                                <th>Wystawił</th>
                              </tr>
                            </thead>
                            <tbody>
                                 {
                                   this.state.invoices.map(item => {
                                        return (
                                            <tr>
                                               <td key = {item}>{item.invoiceNumber}</td>
                                               <td key = {item}>{item.companyClient.companyName}</td>
                                               <td key = {item}>{item.dateIssue}</td>
                                               <td key = {item}>{item.datePayment}</td>
                                               <td key = {item}>{item.netValue}</td>
                                               <td key = {item}>{item.grossValue}</td>
                                               <td key = {item}>{item.accountNumber}</td>
                                               <td key = {item}>{item.appUser.lastName + ' ' + item.appUser.firstName}</td>
                                            </tr>
                                        );
                                   })
                                 }
                            </tbody>
                          </Table>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        );
    }
}