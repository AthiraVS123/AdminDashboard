import { Grid } from '@mui/system'
import React from 'react'
import {headerStyle,homepage} from '../CustomCSS'
// import Header from '../Components/Header'
import HomeBody from "../Components/HomeBody";

export default function HomePage() {
  return (
    <Grid container direction={'column'}>
        <Grid size={12} style={headerStyle} >
           <img className="logo" src="/Assets/Images/logo.png" alt="Logo" />
        </Grid>
        <Grid size={12} style={homepage}>
             <HomeBody />
        </Grid>
      
    </Grid>
  )
}
