import React from 'react';
import {Alert,Button,Card,CardBody,CardHeader,Col,Form,FormGroup,Input,InputGroup,InputGroupAddon,Label,Modal,
        ModalBody,ModalFooter,ModalHeader,Row} from 'reactstrap';
import axios from "axios";
import UserController from "../controllers/UserController"

export default class AddUser extends React.Component {

    constructor(props) {
        super(props);

        this.userController = new UserController();

        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            mail: '',
            visible: false,
            modal: false,
        };
        this.baseState = this.state;

        this.createNewUser = this.createNewUser.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.onDismiss = this.onDismiss.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    createNewUser(){
        this.userController.createNewUser(this.state.firstName,this.state.lastName,this.state.phone,this.state.mail);
    }

    handleFirstNameChange(e) {
        this.setState({firstName: e.target.value})
    }

    handleLastNameChange(e) {
        this.setState({lastName: e.target.value})
    }

    handlePhoneChange(e) {
        this.setState({phone: e.target.value})
    }

    handleMailChange(e) {
        this.setState({mail: e.target.value})
    }

    onDismiss() {
        this.setState({
            visible: false
        })
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleClick(e) {
        if (this.state.firstName === '' || this.state.lastName === ''
            || this.state.phone === '' || this.state.mail === '') {
            this.setState({modal: true})
        }
        else {
            this.setState(this.baseState);
            this.setState({visible: true});

            this.createNewUser();
        }
    }

    render() {
        return (
            <div>
                    <Col sm="12" md={{size: 6, offset: 3}}>
                        <br/>
                        <Card>
                            <CardHeader align="center">Dodawanie użytkownika</CardHeader>
                            <CardBody>
                                <br/>
                                <Col sm={12}>
                                    <p> Aby dodać użytkownika do bazy uzupełnij poniższe pola. Po weryfikacji podanych
                                        danych użytkownik zostanie dodany do systemu.</p><br/>
                                    <Form>
                                        <FormGroup row >
                                            <Label for="firstName" sm={3}>Imię</Label>
                                            <Col sm={9}>
                                                <Input  type="text" name="firstName"
                                                       id="firstName"
                                                       value={this.state.firstName}
                                                       onChange={this.handleFirstNameChange}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="lastName" sm={3}>Nazwisko</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="lastName"
                                                       id="lastName"
                                                       value={this.state.lastName}
                                                       onChange={this.handleLastNameChange}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="phone" sm={3}>Telefon</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="phone"
                                                       id="phone"
                                                       value={this.state.phone}
                                                       onChange={this.handlePhoneChange}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="mail" sm={3}>Mail</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="mail"
                                                       id="mail"
                                                       value={this.state.mail}
                                                       onChange={this.handleMailChange}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup check row>
                                            <Col sm={{size: 3, offset: 8}}>
                                                <Button outline color="primary" onClick={this.handleClick}>Dodaj
                                                    użytkownika</Button>
                                            </Col>
                                        </FormGroup><br/>
                                        <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                                            Użytkownik został dodany do systemu.
                                        </Alert>
                                    </Form>
                                </Col>
                                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>Uzupełnij pola wymagane</ModalHeader>
                                    <ModalBody>
                                        Przed dodaniem użytkownika uzupełnij wszystkie pola. Uzupełnij wymagane pola
                                        i spróbuj ponownie.
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>OK</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                        </Card>
                    </Col>
            </div>
        );
    }
}
