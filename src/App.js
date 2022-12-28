import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Grid} from "@mui/material"

import HeroSection from './Components/HeroSection';
import PCard from './Components/PCard';
import Product1 from "../src/Asset/product1.png"
import Product2 from "../src/Asset/product2.png"
import Product3 from "../src/Asset/product3.png"




function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Grid container>
        <Grid md={4}>
        <PCard Pimg={Product1} starOut="5.0" starIn="6" caption="Life lessons with Katie Zaferes" price="136" width="50%"  />
        </Grid>
        <Grid md={4}>
        <PCard Pimg={Product2} starOut="5.0" starIn="30" caption="Learn wedding photography" price="125" width="50%"  />
        </Grid>
        <Grid alignItems="right"  md={3}>
        <PCard Pimg={Product3} starOut="4.8" starIn="2" caption="Group Mountain Biking" price="50" width="50%"/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
