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
}