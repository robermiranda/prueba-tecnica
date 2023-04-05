import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";


export default function BankListLink () {
    return <Link component={RouterLink}
        to={`/`}
        underline="always">
        
        Bank List
    </Link>
}