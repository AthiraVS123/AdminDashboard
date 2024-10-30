import React from "react";
import "../Styles/Homebody.css";
// import Side from "../Assets/Images/Mask Group 71.png";
import LoginForm from "./LoginForm";
import { Grid } from "@mui/system";
import { Stack } from "@mui/system";

export default function HomeBody() {
  return (
    <Stack flexDirection={'row'}>
    <Grid container >
    <Grid item xs={12} sm={6} md={5} className='homebodycontainer'>
      <img  src='/Assets/Images/Mask Group 71.png' alt='side-img' ></img>
    </Grid>
    <Grid item xs={12} sm={7} md={7} className='loginformcontainer'>
       <LoginForm />
    </Grid>
   </Grid>
    </Stack>
  
  );
}
