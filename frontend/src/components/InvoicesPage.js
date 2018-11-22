import React, {Component} from "react";
import {Button, Card, CardBody, CardHeader, Col, Form, ListGroup,Table} from "reactstrap";

export default class InvoicesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            client: '',
        };

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
                                    <Button color="primary">Załaduj faktury</Button>
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
                          <Table striped>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Numer</th>
                                <th>Wystawił</th>
                                <th>Nabywca</th>
                                <th>Data wystawienia</th>
                                <th>Termin płatności</th>
                                <th>Netto</th>
                                <th>Brutto</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td></td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td></td>
                              </tr>
                            </tbody>
                          </Table>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        );
    }
}