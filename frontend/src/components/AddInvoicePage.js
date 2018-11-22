import React, {Component} from "react";
import {Button, Card, CardBody, CardHeader, Col, Form, ListGroup,Table, FormGroup, Row, Input} from "reactstrap";
import CompanyFilterDropdown from "./CompanyFilterDropdown"
import CompanyClientController from "../controllers/CompanyClientController";
import AppUserFilterDropdown from "./AppUserFilterDropdown";
import InvoiceControllers from "../controllers/InvoiceControllers"

export default class AddInvoicePage extends Component {
    constructor(props) {
        super(props);
        this.companyClientsController = new CompanyClientController();
        this.invoiceController = new InvoiceControllers();

        this.state = {
            company: '',
            invoiceNumber: '',
            dateService: '',
            datePayment: '',
            dateIssue: '',
            placeName: '',
            paymentMethod: '',
            accountNumber: '',
            companyClients: [],
            companyClient: '',
            productName: '',
            quantity: '',
            netPrice: '',
            netValue: '',
            vatValue: '',
            amountTax: '',
            grossValue: '',
            productNameB: '',
            quantityB: '',
            netPriceB: '',
            netValueB: '',
            vatValueB: '',
            amountTaxB: '',
            grossValueB: '',
            productNameC: '',
            quantityC: '',
            netPriceC: '',
            netValueC: '',
            vatValueC: '',
            amountTaxC: '',
            grossValueC: '',
            users: '',
            sumNetValue:'',
            sumAmountTax: '',
            sumGrossValue: '',
        };

        this.createNewInvoice = this.createNewInvoice.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleInvoiceNumberChange = this.handleInvoiceNumberChange.bind(this);
        this.handleDateIssueChange = this.handleDateIssueChange.bind(this);
        this.handleDatePaymentChange = this.handleDatePaymentChange.bind(this);
        this.handleDateServiceChange = this.handleDateServiceChange.bind(this);
        this.handlePlaceNameChange = this.handlePlaceNameChange.bind(this);
        this.handlePaymentMethodChange = this.handlePaymentMethodChange.bind(this);
        this.handleAccountNumberChange = this.handleAccountNumberChange.bind(this);
        this.handleCompanyClientChange = this.handleCompanyClientChange.bind(this);
        this.handleProductNameChange = this.handleProductNameChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleNetPriceChange = this.handleNetPriceChange.bind(this);
        this.handleVatValueChange = this.handleVatValueChange.bind(this);
        this.handleProductNameChangeB = this.handleProductNameChangeB.bind(this);
        this.handleQuantityChangeB = this.handleQuantityChangeB.bind(this);
        this.handleNetPriceChangeB = this.handleNetPriceChangeB.bind(this);
        this.handleVatValueChangeB = this.handleVatValueChangeB.bind(this);
        this.handleProductNameChangeC = this.handleProductNameChangeC.bind(this);
        this.handleQuantityChangeC = this.handleQuantityChangeC.bind(this);
        this.handleNetPriceChangeC = this.handleNetPriceChangeC.bind(this);
        this.handleVatValueChangeC = this.handleVatValueChangeC.bind(this);
        this.handleCalculate = this.handleCalculate.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
    }

    createNewInvoice(){
        this.invoiceController.createNewInvoice(this.state.company,this.state.companyClient,this.state.users,this.state.invoiceNumber,
                 this.state.dateService, this.state.datePayment, this.state.dateIssue,this.state.placeName,this.state.paymentMethod,
                 this.state.sumNetValue,this.state.sumAmountTax,this.state.sumGrossValue,this.state.productName,this.state.quantity,
                 this.state.netPrice,this.state.vatValue,this.state.productNameB,this.state.quantityB,this.state.netPriceB,
                 this.state.vatValueB,this.state.productNameC,this.state.quantityC,this.state.netPriceC,this.state.vatValueC);
    }

    handleCompanyChange(e) {
        this.setState({company: e.target.value,
                        companyClients:[]})
    }

    handleInvoiceNumberChange(e) {
        this.setState({invoiceNumber: e.target.value})
    }

    handleDatePaymentChange(e) {
        this.setState({datePayment: e.target.value})
    }

    handleDateServiceChange(e) {
        this.setState({dateService: e.target.value})
    }

    handleDateIssueChange(e) {
        this.setState({dateIssue: e.target.value})
    }

    handlePlaceNameChange(e) {
        this.setState({placeName: e.target.value})
    }

    handlePaymentMethodChange(e) {
        this.setState({paymentMethod: e.target.value})
    }

    handleAccountNumberChange(e) {
        this.setState({accountNumber: e.target.value})
    }

    handleCompanyClientChange(e) {
        this.setState({companyClient: e.target.value})
    }

    handleProductNameChange(e) {
        this.setState({productName: e.target.value})
    }

    handleQuantityChange(e) {
        this.setState({quantity: e.target.value})
    }

    handleNetPriceChange(e) {
        this.setState({netPrice: e.target.value})
    }

    handleVatValueChange(e) {
        this.setState({vatValue: e.target.value})
    }

    handleProductNameChangeB(e) {
        this.setState({productNameB: e.target.value})
    }

    handleQuantityChangeB(e) {
        this.setState({quantityB: e.target.value})
    }

    handleNetPriceChangeB(e) {
        this.setState({netPriceB: e.target.value})
    }

    handleVatValueChangeB(e) {
        this.setState({vatValueB: e.target.value})
    }

    handleProductNameChangeC(e) {
        this.setState({productNameC: e.target.value})
    }

    handleQuantityChangeC(e) {
        this.setState({quantityC: e.target.value})
    }

    handleNetPriceChangeC(e) {
        this.setState({netPriceC: e.target.value})
    }

    handleVatValueChangeC(e) {
        this.setState({vatValueC: e.target.value})
    }

    handleUserChange(e) {
        this.setState({users: e.target.value})
    }

    handleCalculate(){
        var netValue = Math.round(this.state.netPrice * this.state.quantity * 100)/100;
        var amountTax;
        if(this.state.vatValue !==0 && this.state.vatValue !==''){
            amountTax = Math.round(netValue * this.state.vatValue)/100;
        } else{
            amountTax = 0;
        }
        var grossValue = Math.round((netValue + amountTax)*100)/100;
        var netValueB = Math.round(this.state.netPriceB * this.state.quantityB * 100)/100;
        var amountTaxB;
        if(this.state.vatValueB !==0 && this.state.vatValueB !==''){
            amountTaxB = Math.round(netValueB * this.state.vatValueB)/100;
        } else{
            amountTaxB = 0;
        }
        var grossValueB = Math.round((netValueB + amountTaxB)*100)/100;
        var netValueC = Math.round(this.state.netPriceC * this.state.quantityC * 100)/100;
        var amountTaxC;
        if(this.state.vatValueC !==0 && this.state.vatValueC !==''){
            amountTaxC = Math.round(netValueC * this.state.vatValueC)/100;
        } else{
            amountTaxC = 0;
        }
        var grossValueC = Math.round((netValueC + amountTaxC)*100)/100;
        var sumNetValue = Math.round((netValue + netValueB + netValueC)*100)/100;
        var sumAmountTax = Math.round((amountTax + amountTaxB + amountTaxC)*100)/100;
        var sumGrossValue = Math.round((grossValue + grossValueB + grossValueC)*100)/100;
        this.setState({netValue: netValue,
                       netValueB: netValueB,
                       netValueC: netValueC,
                       amountTax: amountTax,
                       amountTaxB: amountTaxB,
                       amountTaxC: amountTaxC,
                       grossValue: grossValue,
                       grossValueB: grossValueB,
                       grossValueC: grossValueC,
                       sumNetValue: sumNetValue,
                       sumAmountTax: sumAmountTax,
                       sumGrossValue: sumGrossValue})
    }

    getAllCompanies(company) {
        let self = this;
        this.companyClientsController.getAllCompanyClients(company)
            .then(response => {
                self.setState(
                    {
                        companyClients: response.data
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
                <Col sm="12" >
                    <Card>
                        <CardHeader>Dodawanie nowej faktury</CardHeader>
                        <CardBody>
                            <Form>
                                <Row>
                                    <Col sm={3}>
                                       <p align="center">Sprzedający</p>
                                    </Col>
                                    <Col sm={3}>
                                       <p align="center">Numer faktury</p>
                                    </Col>
                                    <Col sm={2}>
                                       <p align="center">Data wystawienia</p>
                                    </Col>
                                    <Col sm={2}>
                                       <p align="center">Data sprzedaży</p>
                                    </Col>
                                    <Col sm={2}>
                                       <p align="center">Termin zapłaty</p>
                                    </Col>
                                </Row>
                                <FormGroup row>
                                    <Col sm={3}>
                                    <CompanyFilterDropdown labelName='Sprzedający' value={this.state.company}
                                                           onChangeValue={this.handleCompanyChange}/>
                                    </Col>
                                    <Col sm={3}>
                                        <Input  type="text" name="invoiceNumber"
                                                id="invoiceNumber" placeholder ="Numer faktury"
                                                value={this.state.invoiceNumber}
                                                onChange={this.handleInvoiceNumberChange}/>
                                    </Col>
                                    <Col sm={2}>
                                        <Input  type="date" name="dateIssue"
                                                id="dateIssue" placeholder ="Data wystawienia"
                                                value={this.state.dateIssue}
                                                onChange={this.handleDateIssueChange}/>
                                    </Col>
                                    <Col sm={2}>
                                        <Input  type="date" name="dateService"
                                                id="dateService" placeholder ="Data sprzedaży"
                                                value={this.state.dateService}
                                                onChange={this.handleDateServiceChange}/>
                                    </Col>
                                    <Col sm={2}>
                                        <Input  type="date" name="datePayment"
                                                id="datePayment" placeholder ="Termin zapłaty"
                                                value={this.state.datePayment}
                                                onChange={this.handleDatePaymentChange}/>
                                    </Col>
                                </FormGroup><br/>
                                <Row>
                                    <Col sm={3}>
                                       <p align="center">Kupujący</p>
                                    </Col>
                                    <Col sm={3}>
                                       <p align="center">Miejsce wystawienia</p>
                                    </Col>
                                    <Col sm={3}>
                                       <p align="center">Forma płatności</p>
                                    </Col>
                                    <Col sm={3}>
                                       <p align="center">Numer konta</p>
                                    </Col>
                                </Row>
                                <FormGroup row>
                                    <Col sm={3}>
                                        <Input type="select" name="companyClient"
                                               id="companyClient"
                                               value={this.state.companyClient}
                                               onChange={this.handleCompanyClientChange}
                                               onClick={() => this.getAllCompanies(this.state.company)}>
                                                <option value="" disabled selected>Kupujący</option>
                                                <option></option>
                                                {
                                                    this.state.companyClients.map(item => {
                                                        return (
                                                            <option key = {item}>{item.companyName}</option>
                                                        );
                                                    })
                                                }
                                        </Input>
                                    </Col>
                                    <Col sm={3}>
                                        <Input  type="text" name="placeName"
                                                id="placetName" placeholder ="Miejsce wystawienia"
                                                value={this.state.placeName}
                                                onChange={this.handlePlaceNameChange}/>
                                    </Col>
                                    <Col sm={3}>
                                        <Input  type="text" name="paymentMethod"
                                                id="paymentMethod" placeholder ="Forma płatności"
                                                value={this.state.paymentMethod}
                                                onChange={this.handlePaymentMethodChange}/>
                                    </Col>
                                    <Col sm={3}>
                                        <Input  type="text" name="accountNumber"
                                                id="accountNumber" placeholder ="Numer konta"
                                                value={this.state.accountNumber}
                                                onChange={this.handleAccountNumberChange}/>
                                    </Col>
                                </FormGroup><br/>
                                <Row>
                                    <Col sm={3}>
                                       <p align="center">Wystawiający fakturę</p>
                                    </Col>
                                </Row>
                                <FormGroup row>
                                    <Col sm={3}>
                                       <AppUserFilterDropdown labelName='Wystawiający fakturę' value={this.state.users}
                                              onChangeValue={this.handleUserChange}/>
                                    </Col>
                                </FormGroup><br/>
                            </Form>
                            <Card>
                              <CardHeader>Tabela towarów</CardHeader>
                              <CardBody>
                               <Table bordered>
                                 <thead>
                                   <tr>
                                     <th>Lp.</th>
                                     <th>Nazwa towaru</th>
                                     <th>Ilość</th>
                                     <th>Cena netto</th>
                                     <th>Wartość netto</th>
                                     <th>VAT[%]</th>
                                     <th>Kwota VAT</th>
                                     <th>Wartość brutto</th>
                                   </tr>
                                 </thead>
                                 <tbody>
                                     <tr>
                                       <td>1</td>
                                       <td><Input  type="text" name="productName" id="productName"
                                            value={this.state.productName} onChange={this.handleProductNameChange}/></td>
                                       <td><Input  type="number" name="quantity" id="quantity"
                                            value={this.state.quantity} onChange={this.handleQuantityChange}/></td>
                                       <td><Input  type="number" name="netPrice" id="netPrice"
                                            value={this.state.netPrice} onChange={this.handleNetPriceChange}/></td>
                                       <td><Input  type="text" name="netValue" id="netValue"
                                            value={this.state.netValue} disabled/></td>
                                       <td><Input type="select" name="vatValue" id="vatValue"
                                             value={this.state.vatValue} onChange={this.handleVatValueChange}>
                                                  <option></option>
                                                  <option>23</option>
                                                  <option>8</option>
                                                  <option>5</option>
                                                  <option>0</option>
                                           </Input></td>
                                       <td><Input  type="text" name="amountTax" id="amountTax"
                                              value={this.state.amountTax} disabled/></td>
                                       <td><Input  type="text" name="grossValue" id="grossValue"
                                              value={this.state.grossValue} disabled/></td>
                                     </tr>
                                     <tr>
                                       <td>2</td>
                                       <td><Input  type="text" name="productNameB" id="productNameB"
                                            value={this.state.productNameB} onChange={this.handleProductNameChangeB}/></td>
                                       <td><Input  type="number" name="quantityB" id="quantityB"
                                            value={this.state.quantityB} onChange={this.handleQuantityChangeB}/></td>
                                       <td><Input  type="number" name="netPriceB" id="netPriceB"
                                            value={this.state.netPriceB} onChange={this.handleNetPriceChangeB}/></td>
                                       <td><Input  type="text" name="netValueB" id="netValueB"
                                            value={this.state.netValueB} disabled/></td>
                                       <td><Input type="select" name="vatValueB" id="vatValueB"
                                             value={this.state.vatValueB} onChange={this.handleVatValueChangeB}>
                                                  <option></option>
                                                  <option>23</option>
                                                  <option>8</option>
                                                  <option>5</option>
                                                  <option>0</option>
                                           </Input></td>
                                       <td><Input  type="text" name="amountTaxB" id="amountTaxB"
                                              value={this.state.amountTaxB} disabled/></td>
                                       <td><Input  type="text" name="grossValueB" id="grossValueB"
                                              value={this.state.grossValueB} disabled/></td>
                                     </tr>
                                     <tr>
                                       <td>3</td>
                                       <td><Input  type="text" name="productNameC" id="productNameC"
                                            value={this.state.productNameC} onChange={this.handleProductNameChangeC}/></td>
                                       <td><Input  type="number" name="quantityC" id="quantityC"
                                            value={this.state.quantityC} onChange={this.handleQuantityChangeC}/></td>
                                       <td><Input  type="number" name="netPriceC" id="netPriceC"
                                            value={this.state.netPriceC} onChange={this.handleNetPriceChangeC}/></td>
                                       <td><Input  type="text" name="netValueC" id="netValueC"
                                            value={this.state.netValueC} disabled/></td>
                                       <td><Input type="select" name="vatValueC" id="vatValueC"
                                             value={this.state.vatValueC} onChange={this.handleVatValueChangeC}>
                                                  <option></option>
                                                  <option>23</option>
                                                  <option>8</option>
                                                  <option>5</option>
                                                  <option>0</option>
                                           </Input></td>
                                       <td><Input  type="text" name="amountTaxC" id="amountTaxC"
                                              value={this.state.amountTaxC} disabled/></td>
                                       <td><Input  type="text" name="grossValueC" id="grossValueC"
                                              value={this.state.grossValueC} disabled/></td>
                                     </tr>
                                 </tbody>
                                     <tr>
                                       <td></td>
                                       <td></td>
                                       <td></td>
                                       <td><p align="right">RAZEM</p></td>
                                       <td><Input  type="text" name="sumNetValue" id="sumNetValue"
                                            value={this.state.sumNetValue} disabled/></td>
                                       <td></td>
                                       <td><Input type="text" name="sumAmountTax" id="sumAmountTax"
                                              value={this.state.sumAmountTax} disabled/></td>
                                       <td><Input  type="text" name="sumGrossValue" id="sumGrossValue"
                                              value={this.state.sumGrossValue} disabled/></td>
                                     </tr>
                               </Table>
                                <Row><Col sm={10}></Col>
                                    <Col sm={2}><Button color="primary" onClick={() =>
                                        this.handleCalculate()}>Oblicz wartość</Button>
                                    </Col>
                                </Row>
                              </CardBody>
                            </Card><br/>
                              <Button color="success" onClick={() =>
                                    this.createNewInvoice()}>Dodaj fakturę</Button>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        );
    }
}