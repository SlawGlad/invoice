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
}