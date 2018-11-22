import React, {Component} from "react";
import {FormGroup, Input, Label,Col} from 'reactstrap';
import UserController from "../controllers/UserController";

export default class AppUserFilterDropdown extends Component {
    constructor(props) {
        super(props);
        this.userController = new UserController();

        this.state = {
            users: ['']
        }
    }

    componentDidMount() {
        this.getAllUserNames();
    }

    render() {
        return (
                <Input type="select" name="users"
                       id="users"
                       value={[this.props.value]}
                       onChange={this.props.onChangeValue}>
                    <option value="" disabled selected>{this.props.labelName}</option>
                    <option></option>
                    {
                        this.state.users.map(item => {
                            return (
                                <option key = {item}>{item}</option>
                            );
                        })
                    }
                </Input>
        );
    }

    getAllUserNames() {
        let self = this;
        this.userController.getAllUsers()
            .then(response => {
                self.setState(
                    {
                        users: response.data
                    }
                )
            })
            .catch(error => {
                console.log(error);
            })
    }

}