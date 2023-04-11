import { useSetRecoilState } from 'recoil';
import { infoState } from '../util/state';
import { Chip } from '@mui/material';


export default function HistoryButton () {

    const setInfoState = useSetRecoilState<string>(infoState);

    function handleClick () {
        setInfoState('info-history');
    }

    return <Chip label="History View" variant="outlined" onClick={handleClick} />
}