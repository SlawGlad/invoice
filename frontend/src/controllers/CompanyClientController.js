import {CONFIGURATION} from '../configuration/Configuration'
import axios from "axios";

export default class CompanyClientController {
    constructor() {
        this.endpoint = 'http://' + CONFIGURATION.HOST + ':' + CONFIGURATION.PORT + '/api/'
    }

    getAllCompanyClients(company) {
        var response = axios.get(this.endpoint + 'company-clients' + '?company=' + company);
        return response;
    }

    createNewCompanyClient(company,companyName,city,street,postalCode,country,phone,mail,nip){
        axios.post(this.endpoint + 'add-company-client' + '?company=' + company,{
                companyName: companyName,
                city: city,
                street: street,
                postalCode: postalCode,
                country: country,
                phone: phone,
                mail: mail,
                nip: nip,
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