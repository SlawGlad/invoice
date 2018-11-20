import React, {Component} from "react";
import {Button, Card, CardBody, CardHeader, Col, Form, ListGroup, Table} from "reactstrap";
import CompanyFilterDropdown from "./CompanyFilterDropdown";
import CompanyClientController from "../controllers/CompanyClientController";

export default class ClientsPage extends Component {
    constructor(props) {
        super(props);
        this.companyClientsController = new CompanyClientController();

        this.state = {
            client: '',
            company: '',
            companies: [],
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
                                <CompanyFilterDropdown labelName='Firma' companyLabelWidth={1}
                                                       companyInputWidth={4} value={this.state.company}
                                                       onChangeValue={this.handleCompanyChange}/>
                                <Button color="primary" onClick={() =>
                                    this.getAllCompanies(this.state.company)}>Załaduj kontrahentów</Button>
                                </Form>
                                <br/>

                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <br/>
                <Col sm="12" >
                    <Card>
                        <CardHeader>Lista kontrahentów</CardHeader>
                        <CardBody>
                          <Table bordered>
                            <thead>
                              <tr>
                                <th>Nazwa firmy</th>
                                <th>Miasto</th>
                                <th>Ulica</th>
                                <th>Kod pocztowy</th>
                                <th>Kraj</th>
                                <th>Numer telefonu</th>
                                <th>Mail</th>
                                <th>NIP</th>
                              </tr>
                            </thead>
                            <tbody>
                                 {
                                   this.state.companies.map(item => {
                                        return (
                                            <tr>
                                               <td key = {item}>{item.companyName}</td>
                                               <td key = {item}>{item.city}</td>
                                               <td key = {item}>{item.street}</td>
                                               <td key = {item}>{item.postalCode}</td>
                                               <td key = {item}>{item.country}</td>
                                               <td key = {item}>{item.phone}</td>
                                               <td key = {item}>{item.mail}</td>
                                               <td key = {item}>{item.nip}</td>
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