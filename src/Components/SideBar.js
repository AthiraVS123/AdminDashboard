import React from 'react'
import {Drawer, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import { Home, AccountCircle, Settings } from '@mui/icons-material';
import '../Styles/Sidebar.css'

export default function SideBar() {
  return (
    <Drawer
    variant="permanent" className='sidebar'>
    <List>
      <ListItem button>
        <ListItemIcon><Home /></ListItemIcon>
        <ListItemText primary="DashBoard" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><AccountCircle /></ListItemIcon>
        <ListItemText primary="Courses" />
      </ListItem>
      <ListItem button>
        <ListItemIcon><Settings /></ListItemIcon>
        <ListItemText primary="Employers" />
      </ListItem>
    </List>
    </Drawer>
  )
}



