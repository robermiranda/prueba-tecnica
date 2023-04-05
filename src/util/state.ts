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
        })
        .map(bank => {
            return {...bank, color: getColor(bank.id)}
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


function getColor (id: string): string {
    switch (id.toUpperCase()) {
        case 'PAGA_TODO': return '#235d4f';
        case 'BBVA_BANCOMER': return '#0C2453';
        case 'SCOTIABANK_MÉXICO': return '#ef3c2c';
        case 'CITIBANAMEX': return '#066cae';
        case 'BANREGIO': return '#fb6d2f';
        default: return '#1c2833';
    }
}