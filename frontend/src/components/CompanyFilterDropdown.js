import React, {Component} from "react";
import {FormGroup, Input, Label,Col} from 'reactstrap';
import CompanyController from "../controllers/CompanyController";

export default class CompanyFilterDropdown extends Component {
    constructor(props) {
        super(props);
        this.companyController = new CompanyController();

        this.state = {
            companies: ['']
        }
    }

    componentDidMount() {
        this.getAllCompaniesNames();
    }

    render() {
        return (
            <FormGroup row>
                <Label for="exampleSelect1" sm={this.props.companyLabelWidth}>{this.props.labelName}</Label>
                <Col sm={this.props.companyInputWidth}>
                <Input type="select" name="company"
                       id="exampleSelect1"
                       value={[this.props.value]}
                       onChange={this.props.onChangeValue}>
                    <option></option>
                    {
                        this.state.companies.map(item => {
                            return (
                                <option key = {item}>{item}</option>
                            );
                        })
                    }
                </Input>
                </Col>
            </FormGroup>
        );
    }

    getAllCompaniesNames() {
        let self = this;
        this.companyController.getAllCompanies()
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

}