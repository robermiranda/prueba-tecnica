import { Box, Link, Typography } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import BankListLink from "./BankListLink";


export default function Home () {

    return <Box sx={{
            p:2,
            margin: "auto",
            maxWidth: 800,
            flexGrow: 1,
        }}>

        <Typography variant="h5" align="center" gutterBottom>
            REACT ENGINEER PRACTICAL TEST
        </Typography>
        <BankListLink/>
        <Typography variant="body1" gutterBottom>
            The following app is the result of the technical test
            required for the selection process for a React Engineer developer.
        </Typography>
        <Typography variant="body1" gutterBottom>
            The app consists of the following features:
        </Typography>
        <List>
            <ListItem>
                <ListItemText primary="Main Library" secondary="react"/>
            </ListItem>
            <ListItem>
                <ListItemText primary="CSS FrameWork" secondary="mui"/>
            </ListItem>
            <ListItem>
                <ListItemText primary="State Handling" secondary="recoil"/>
            </ListItem>
            <ListItem>
                <ListItemText primary="HTTP Request" secondary="axios"/>
            </ListItem>
            <ListItem>
                <ListItemText primary="Router Library" secondary="react router dom"/>
            </ListItem>
            <ListItem>
                <ListItemText primary="Typescript"/>
            </ListItem>
        </List>
        <Typography variant="body1" gutterBottom>
            Regarding the architecture's app,
            it should be noted that it is determined by the framework used (react in this case).
            Then we can affirm that the app has a component-based architecture.
        </Typography>
        <Typography variant="body1" gutterBottom>
            Follow this link to get the bank list
        </Typography>
        <BankListLink/>
        <Typography variant="body2" gutterBottom>
            Developer:
        </Typography>
        <Link href="https://portfolio-delta-lyart.vercel.app/"
            target="_blank">
            Roberto Miranda Morales
        </Link>
    </Box>
}