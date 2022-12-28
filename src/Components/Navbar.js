import AppBar from '@mui/material/AppBar';
import {Grid} from "@mui/material"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AirbnbLogo from "../Asset/airbnb1.png"
const Navbar = () => {
    return(
        <Box>
            <AppBar style={{backgroundColor:'white'}}>
                <Toolbar>
                    <Grid container>
                        <Grid md={10}>
                            <img src={AirbnbLogo}/>
                        </Grid>
                        <Grid textAlign='right'  md={2}>
                            <Typography>
                            madebyAkshay
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}  
export default Navbar;