import React, {Component} from "react";
import {Button, Card, CardBody, CardHeader, Col, Form, ListGroup,Table} from "reactstrap";

export default class ClientsPage extends Component {
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

                                </Form>
                                <br/>
                                <Button color="success">Załaduj kontrahentów</Button>{'   '}
                                <Button color="success">Dodaj kontrahenta</Button>{'   '}
                                <Button color="info" href="/add-company">Dodaj firmę</Button>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <br/>
                <Col sm="12" >
                    <Card>
                        <CardHeader>Lista kontrahentów</CardHeader>
                        <CardBody>
                          <Table striped>
                            <thead>
                              <tr>
                                <th>#</th>
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