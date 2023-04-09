import { useRecoilValue } from 'recoil';
import { historyState } from '../util/state';
import { Typography } from "@mui/material";
import { List, ListItem, ListItemText } from '@mui/material';


export default function HistoryView () {

    const historyView = useRecoilValue(historyState);

    return <>
        <Typography variant="h5" align="center">
            History view
        </Typography>
        <List>
        {
            
            historyView.map( (bankName, index) =>
            <ListItem key={index}>
                <ListItemText primary={`${++index}. ${bankName}`}/>
            </ListItem>
        )}
        </List>
    </>
}