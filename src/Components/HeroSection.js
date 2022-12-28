import HeroImg from "../Asset/Group77.png"
import {Grid,Box, Container} from "@mui/material"
import Typography from '@mui/material/Typography';

const HeroSection = () => {
    return(
        <Box>
            <br/><br/><br/><br/>
        <Grid>
            <Grid textAlign='center'>
                <img width="64%" src={HeroImg} />
            </Grid>
        </Grid>
        <br/>
        <Container>
        <Typography variant="h3">
            Online Experinces
        </Typography>
        <br/>
        <Typography variant="body1">
        Join unique interactive activities led by <br/> one-of-a-kind hosts—all without leaving <br/> home.
        </Typography>
        </Container>
        </Box>
    )
}
export default HeroSection;