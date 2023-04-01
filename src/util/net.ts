import { bankT } from './bankTypes';

const BASE_URL: string = 'https://dev.obtenmas.com/catom/api/challenge/banks';

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
