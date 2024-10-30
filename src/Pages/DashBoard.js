import React, { useState } from 'react';
import {Grid} from '@mui/system'
import Card from '@mui/material/Card';
import {CardContent,Menu, MenuItem } from '@mui/material';
import { Typography} from '@mui/material';
import  {CardStyle, card1} from '../CustomCSS'
import Avatar from '@mui/material/Avatar';
import '../Styles/DashBoard.css'
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';


       
 
export default function DashBoard () {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  // Handlers to open and close menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   navigate("/");
  // };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setTimeout(() => navigate("/"), 0);
  };

  return (
    <Grid container sx={{width:'100%',height:'100vh'}}>
      <Grid xs={12} sm={4} md={6} sx={{padding:'20px 0px 0px 20px ' ,width:'20%'}}>
        <img src='/Assets/Images/logo.png' className='logo1' alt='logo'></img>
         <Card style={CardStyle}>
           <CardContent sx={{ display: 'flex', direction: 'row' }}  >
           <Avatar src='/Assets/Images/profileL.png' />
           {/* </CardContent> */}
           {/* <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} > */}
            <Typography>
                Benesys
            </Typography>
           </CardContent>
         </Card>
         <Grid item size={12} sx={{width:'90%',height:'79%'}}>
            {/* <SideBar /> */}
            {/* <Drawer variant="permanent" className='sidebar'> */}
            <List>
              <ListItem button className='list'>
                <ListItemIcon><Avatar src='/Assets/Images/Group 157 (1).svg'/></ListItemIcon>
                <ListItemText id='idd' primary="DashBoard" />
              </ListItem>
              <ListItem button className='list'>
                <ListItemIcon><Avatar src='/Assets/Images/bokkmark.svg'/></ListItemIcon>
                <ListItemText  id='idd' primary="Courses" />
              </ListItem>
              <ListItem button className='list'>
                <ListItemIcon><Avatar src='/Assets/Images/Group 96.svg'/></ListItemIcon>
                <ListItemText id='idd' primary="Employers" />
              </ListItem>
              <ListItem button className='list'>
                <ListItemIcon><Avatar src='/Assets/Images/graph.svg'/></ListItemIcon>
                <ListItemText id='idd' primary="Reimbursement" />
              </ListItem>
          </List>
  
      </Grid> 
       </Grid>
          <Grid xs={12} sm={8} md={6} sx={{width:'80%'}}>
              <Grid size={12} sx={{width:'100%',height:'60px', display:'flex', float:'right',flexDirection:'row-reverse',padding:'10px 50px '  }}>
                  <Avatar src='/Assets/Images/profile.png' className='profile' onClick={handleMenuOpen} 
                sx={{ cursor: 'pointer' }} />
                  <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleMenuClose}>Admin</MenuItem>
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
              </Grid>
              
              <Grid size={12} sx={{padding:'15px 0px 0px 20px',display:'flex',flexDirection:'row'}}>
                  <Grid  size={4} >
                    <Card style={card1}>
                      <CardContent >   
                        <img src='/Assets/Images/Group 287 (1).svg' className='group' alt='' />
                        <h1 id='total'>Total Courses</h1>
                        <Typography variant="h3" sx={{ fontWeight: 'bold', mr: 2 ,padding:'0'}}> 
                         36
                        </Typography>
                       <p id='par'>
                        426 Employees joined in 33 courses
                       </p>
                      </CardContent>
                    </Card>

                  </Grid>
                  <Grid  size={4}>
                   <Card style={card1} >
                      <CardContent>
                        <img src='/Assets/Images/Group 288 (1).svg' className='group' alt=''/>
                          <h1 id='total'>Total Employers</h1>
                          <Typography variant="h3" sx={{ fontWeight: 'bold', mr: 2 }}>
                          86
                        </Typography>
                      </CardContent>
                  </Card>
                  </Grid>

                  <Grid  size={4}>
                   <Card style={card1}>
                      <CardContent>                        
                          <img src='/Assets/Images/Group 288.svg' className='group' alt='' />
                            <h1 id='total'>Total Employees</h1>
                          <Typography variant="h3" sx={{ fontWeight: 'bold', mr: 2 }}>
                              638
                          </Typography>
                      </CardContent>
                    </Card>
                  </Grid> 
            </Grid>
            <p id="courses" style={{ display: 'flex', alignItems: 'center', gap: '8px' ,color:'#637381'}}>
      <BookIcon style={{ fontSize: '20px',margin:'0px 0px 0px 15px' }} />
      {/* <MouseIcon style={{ fontSize: '20px' }} /> */}
      Courses
    </p>
          
          </Grid>
    </Grid>
  )
}
