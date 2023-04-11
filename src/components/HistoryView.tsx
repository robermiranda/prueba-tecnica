import { useRecoilValue } from 'recoil';
import { historyState } from '../util/state';
import { List, ListItem, ListItemText } from '@mui/material';


export default function HistoryView () {

    const history = useRecoilValue<string[]>(historyState);

    return <List>
        {
            history.map((item, index) => 
                <ListItem key={index}>
                    <ListItemText primary={`${history.length - index}. ${item}`}/>
                </ListItem>
            )
        }
    </List>
}