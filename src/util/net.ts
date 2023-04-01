import { bankT } from './bankTypes';

const URL: string = '/bank';

export default async function fetchBankList (): Promise<bankT[]> {
    return fetch(URL)
    .then(response => response.json())
    .then(response => response)
    .catch(error => {
        if(error instanceof Error) {
            console.error('ERROR while getting bank list', error.message);
        }

        return [];
    });
}
