import {CONFIGURATION} from '../configuration/Configuration'
import axios from "axios";

export default class CompanyController {
    constructor() {
        this.endpoint = 'http://' + CONFIGURATION.HOST + ':' + CONFIGURATION.PORT + '/api/'
    }

    getAllCompanies() {
        var response = axios.get(this.endpoint + 'companies');
        return response;
    }

    createNewCompany(companyName,city,street,postalCode,country,phone,mail,nip,accountNumber){
        axios.post(this.endpoint + 'add-company',{
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