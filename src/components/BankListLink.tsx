import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


export default function BankListLink (props: {color?: string}) {
    return <Link component={RouterLink}
        to={`/`}
        underline="always"
        sx={{
            color: props.color? props.color: 'blue',
        }}>
        
        Back to Bank List
    </Link>
}