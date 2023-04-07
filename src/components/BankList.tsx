import { useRecoilValue } from 'recoil';
import { bankListState } from '../util/state';
import BankTile from './BankTile';
import { bankT } from '../util/bankTypes';
import { Box } from '@mui/material';

export default function BankList () {
    
    const bankList = useRecoilValue(bankListState);
    
    return  <>
        {
            bankList.map((bank: bankT) => 
                <Box key={bank.id} mb={2}>
                    <BankTile key={bank.id}
                        bank={bank}/>
                </Box>
            )
        }
    </>
}