import axios from 'axios';
import { bankT } from './bankTypes';

//const BASE_URL: string = 'https://dev.obtenmas.com/catom/api/challenge/banks';
const BASE_URL: string = 'https://dev.obtenmas.com';

const http = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    }
});

export default async function fetchBankList (): Promise<bankT[]> {
    try {
        const response = await http.get('/catom/api/challenge/banks');
        return response.data;
    }
    catch (error) {
        if(error instanceof Error) {
            console.error('ERROR while getting bank list', error.message);
        }

        return [];
    }
}
