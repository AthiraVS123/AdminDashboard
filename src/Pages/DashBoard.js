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
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Groups2SharpIcon from '@mui/icons-material/Groups2Sharp';
import PersonIcon from '@mui/icons-material/Person';
import ApprovalIcon from '@mui/icons-material/ApprovalSharp';
import User from '../mockData/UserDetails'

       
 
export default function DashBoard () {
  // const userRole = useSelector((state) => state.user.userRole);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const roleLabel='Admin';

  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setTimeout(() => navigate("/"), 0);
  };
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Grid container sx={{width:'100%',height:'100vh'}}>
      <Grid xs={12} sm={4} md={6} sx={{padding:'20px 0px 0px 20px ' ,width:'20%'}}>
        <Typography sx={{color: '#004d00',fontSize: '28px',fontFamily:'sans-serif',padding:'5px',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}> Admin Dashboard</Typography>
       
         <Card style={CardStyle}>
          <Grid size={6} sx={{display:'flex',padding:'20px 0px 0px 10px'}}>
          <Avatar src='/Assets/Images/profileL.png' />
          </Grid>
           <CardContent sx={{ display: 'flex', alignItems: 'center' }}  >

           <Grid size={6} sx={{display:"flex",flexDirection:'column'}}>
            <Typography variant="subtitle1" className='sub'>
              {roleLabel}
            </Typography>

           </Grid>
           </CardContent>
         </Card>
         <Grid item size={12} sx={{width:'90%',height:'79%'}}>
            <List>
              <ListItem button className='list'>
                <ListItemIcon><Avatar src='/Assets/Images/Group 157 (1).svg'/></ListItemIcon>
                <ListItemText id='idd' primary="DashBoard" />
              </ListItem>
              <ListItem button className='list'>
                <ListItemIcon><PersonIcon /></ListItemIcon>
                <ListItemText  id='idd' primary="Users" />
              </ListItem>
              <ListItem button className='list'>
                <ListItemIcon><Groups2SharpIcon/></ListItemIcon>
                <ListItemText id='idd' primary="Roles" />
              </ListItem>
              <ListItem button className='list'>
                <ListItemIcon><ApprovalIcon/></ListItemIcon>
                <ListItemText id='idd' primary="  Permissions" />
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
                <MenuItem onClick={handleMenuClose}>  {roleLabel}</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
              </Grid>
              
              <Grid size={12} sx={{padding:'15px 0px 0px 20px',display:'flex',flexDirection:'row'}}>
                  <Grid  size={6}>
                   <Card style={card1} >
                      <CardContent>
                        <img src='/Assets/Images/Group 288 (1).svg' className='group' alt=''/>
                          <h1 id='total'>Total Users</h1>
                          <Typography variant="h3" sx={{ fontWeight: 'bold', mr: 2 }}>
                          86
                        </Typography>
                      </CardContent>
                  </Card>
                  </Grid>

                  <Grid  size={6}>
                   <Card style={card1}>
                      <CardContent>                        
                          <img src='/Assets/Images/Group 288.svg' className='group' alt='' />
                            <h1 id='total'>Active Members</h1>
                          <Typography variant="h3" sx={{ fontWeight: 'bold', mr: 2 }}>
                              50
                          </Typography>
                      </CardContent>
                    </Card>
                  </Grid> 
            </Grid>
            <p id="courses" style={{ display: 'flex', alignItems: 'center', gap: '8px' ,color:'#637381'}}>
     
              <Avatar src='/Assets/Images/emp.svg' style={{ fontSize: '10px',margin:'0px 0px 0px 15px' }} />
             Users
            </p>   
            <Grid size={12} sx={{backgroundColor:'cream',padding:"0px 0px 0px 20px"}}>
              <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'white',width:'100%'}}>
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block',color:"black" } }}
          >
            Users
          </Typography>
          <Avatar  src='/Assets/Images/serch.svg' ></Avatar>
          </Toolbar>
          </AppBar>
        </Box>
        <TableContainer component={Paper}>
          <User />
        </TableContainer>
            </Grid>  
                
          </Grid>
    </Grid>
  )
}
