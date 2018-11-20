import {CONFIGURATION} from '../configuration/Configuration'
import axios from "axios";

export default class CompanyController {
    constructor() {
        this.endpoint = 'http://' + CONFIGURATION.HOST + ':' + CONFIGURATION.PORT + '/api/'
    }

    createNewUser(firstName,lastName,phone,mail){
        axios.post(this.endpoint + 'admin-panel/add-user',{
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                mail: mail,
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