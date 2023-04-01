import axios from 'axios';
import { bankT } from './bankTypes';

const URL: string = 'https://dev.obtenmas.com/catom/api/challenge/banks';

export default async function fetchBankList (): Promise<bankT[]> {
    try {
        const response = await axios.get(URL, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    }
    catch (error) {
        if(error instanceof Error) {
            console.error('ERROR while getting bank list', error.message);
        }

        return [];
    }
}
