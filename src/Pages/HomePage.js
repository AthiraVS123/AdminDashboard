import { Grid } from '@mui/system'
import React from 'react'
import {headerStyle,homepage} from '../CustomCSS'
// import Header from '../Components/Header'
import HomeBody from "../Components/HomeBody";
import { Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Grid container direction={'column'}>
        <Grid size={12} style={headerStyle} >
           <Typography sx={{color:'#004d00',fontSize: '24px', 
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Admin dashboard</Typography>
          
        </Grid>
        <Grid size={12} style={homepage}>
             <HomeBody />
        </Grid>
      
    </Grid>
  )
}
