import React from 'react';
import {Alert,Button,Card,CardBody,CardHeader,Col,Form,FormGroup,Input,InputGroup,InputGroupAddon,Label,Modal,
        ModalBody,ModalFooter,ModalHeader,Row} from 'reactstrap';
import axios from "axios";

export default class AddCompanyPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            companyName: '',
            city: '',
            street: '',
            postalCode: '',
            country: '',
            phone: '',
            mail: '',
            nip: '',
            accountNumber: '',
            visible: false,
            modal: false,
        };
        this.baseState = this.state;

        this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
        this.handleCityName = this.handleCityName.bind(this);
        this.handleStreet = this.handleStreet.bind(this);
        this.handlePostalCodeChange = this.handlePostalCodeChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handleNipChange = this.handleNipChange.bind(this);
        this.handleAccountNumberChange = this.handleAccountNumberChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.onDismiss = this.onDismiss.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleCompanyNameChange(e) {
        this.setState({companyName: e.target.value})
    }

    handleCityName(e) {
        this.setState({city: e.target.value})
    }

    handleStreet(e) {
        this.setState({street: e.target.value})
    }

    handlePostalCodeChange(e) {
        this.setState({postalCode: e.target.value})
    }

    handleCountryChange(e) {
        this.setState({country: e.target.value})
    }

    handlePhoneChange(e) {
        this.setState({phone: e.target.value})
    }

    handleMailChange(e) {
        this.setState({mail: e.target.value})
    }

    handleNipChange(e) {
        this.setState({nip: e.target.value})
    }

    handleAccountNumberChange(e) {
        this.setState({accountNumber: e.target.value})
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
        if (this.state.companyName === '' || this.state.city === '' || this.state.street === ''
                || this.state.postalCode === '' || this.state.country === '' || this.state.phone === ''
                || this.state.mail === '' || this.state.nip === '' || this.state.accountNumber === '') {
            this.setState({modal: true})
        }
        else {
            var companyName = this.state.companyName;
            var city = this.state.city;
            var street = this.state.street;
            var postalCode = this.state.postalCode;
            var country = this.state.country;
            var phone = this.state.phone;
            var mail = this.state.mail;
            var nip = this.state.nip;
            var accountNumber = this.state.accountNumber;

            this.setState(this.baseState);
            this.setState({visible: true});

            axios.post('http://localhost:8080/api/add-company', {

                companyName: companyName,
                city: city,
                street: street,
                postalCode: postalCode,
                country: country,
                phone: phone,
                mail: mail,
                nip: nip,
                accountNumber: accountNumber
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    render() {
        return (
            <div>

                    <Col sm="12" md={{size: 6, offset: 3}}>
                        <br/>
                        <Card>
                            <CardHeader align="center">Dodawanie firmy</CardHeader>
                            <CardBody>
                                <br/>
                                <Col sm={12}>
                                    <p> Aby dodać firmę do bazy uzupełnij poniższe pola. Po weryfikacji podanych
                                        danych firma
                                        zostanie umieszczeona w bazie.</p><br/>
                                    <Form>
                                        <FormGroup row >
                                            <Label for="companyName" sm={3}>Nazwa firmy</Label>
                                            <Col sm={9}>
                                                <Input  type="text" name="companyName"
                                                       id="companyName"
                                                       value={this.state.companyName}
                                                       onChange={this.handleCompanyNameChange}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="city" sm={3}>Miejscowość</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="city"
                                                       id="city"
                                                       value={this.state.city}
                                                       onChange={this.handleCityName}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="street" sm={3}>Ulica</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="street"
                                                       id="street"
                                                       value={this.state.street}
                                                       onChange={this.handleStreet}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="postalCode" sm={3}>Kod pocztowy</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="postalCode"
                                                       id="postalCode"
                                                       value={this.state.postalCode}
                                                       onChange={this.handlePostalCodeChange}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="country" sm={3}>Kraj</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="country"
                                                       id="country"
                                                       value={this.state.country}
                                                       onChange={this.handleCountryChange}/>
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
                                        <FormGroup row>
                                            <Label for="nip" sm={3}>NIP</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="nip"
                                                       id="nip"
                                                       value={this.state.nip}
                                                       onChange={this.handleNipChange}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="accountNumber" sm={3}>Nr konta</Label>
                                            <Col sm={9}>
                                                <Input type="text" name="accountNumber"
                                                       id="accountNumber"
                                                       value={this.state.accountNumber}
                                                       onChange={this.handleAccountNumberChange}/>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup check row>
                                            <Col sm={{size: 3, offset: 8}}>
                                                <Button outline color="primary" onClick={this.handleClick}>Dodaj
                                                    Firmę</Button>
                                            </Col>
                                        </FormGroup><br/>
                                        <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                                            Firma została dodana do bazy.
                                        </Alert>
                                    </Form>
                                </Col>
                                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                    <ModalHeader toggle={this.toggle}>Uzupełnij pola wymagane</ModalHeader>
                                    <ModalBody>
                                        Przed dodaniem firmy uzupełnij wszystkie pola. Uzupełnij wymagane pola
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
