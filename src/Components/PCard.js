import HeroImg from "../Asset/Group77.png"
import {Grid,Box, Container, Card, CardContent} from "@mui/material"
import Typography from '@mui/material/Typography';

const PCard = ({Pimg="default",starOut="default",starIn="default",caption="default",price="default", width="100%"}) => {
    return(
        <Box style={{textAlign:'center'}}>
            <br/><br/><br/>
            <Container>
                    <div>
                        <img style={{position:'relative',textAlign:'center',color:'black'}} src={Pimg} width={width} />
                        <div style={{position:'absolute', left:0,top:0}}>
                            <p>online</p>
                        </div>
                    </div>
                    <br/>
                <Typography>{starOut} &nbsp;<span style={{color:'grey'}}>({starIn}) - USA</span></Typography>
                <br/>
                <Typography>{caption}</Typography>
                <br/>
                <Typography><b>From ${price} /</b> person</Typography>
            </Container>
        </Box>
    )
}
export default PCard;