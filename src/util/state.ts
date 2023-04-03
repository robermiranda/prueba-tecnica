import { bankT, bank0 } from './bankTypes';
import fetchBankList from '../util/net';
import { atom, selector } from 'recoil';


export const bankState = atom ({
    key: 'bankState',
    default: bank0
});


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
            return {...bank, id: bank.bankName.replaceAll(' ', '_')}
        });
    }
});


export const bankNameState = selector<string[]>({
    key: 'bankNameSelector',
    get: ({get}) => {
        const bankList = get(bankListState);
        return bankList.map(bank => bank.bankName);
    }
});