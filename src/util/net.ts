import { bankT } from './bankTypes';

const BASE_URL: string = 'https://prueba-tecnica-api.onrender.com/bank';

export default async function fetchBankList (): Promise<bankT[]> {
    return fetch(BASE_URL)
    .then(response => response.json())
    .then(response => response)
    .catch(error => {
        if(error instanceof Error) {
            console.error('ERROR while getting bank list', error.message);
        }

        return [];
    });
}
