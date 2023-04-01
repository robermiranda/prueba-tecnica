import { bankT } from './bankTypes';
import fetchBankList from '../util/net';
import { selector } from 'recoil';

const bankListFetched = selector<bankT[]> ({
    key: 'bankListFetched',
    get: async () => {
        const response: bankT[] = await fetchBankList();
        return response;
    }    
});


export const bankListState = selector<bankT[]>({
    key: 'bankListSelector',
    get: ({get}) => {
        const bankList = get(bankListFetched);
        return bankList.map(bank => {
            return {id: bank.bankName.replaceAll(' ', '_'), ...bank}
        });
    }
});
