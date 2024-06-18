import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../scss/App.css'
import Marquee from './Marquee';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" id="nav">
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }} id='title'>
            Matt Morgan Guitar Lessons
          </Typography>
        <Toolbar>
      
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            News
          </Typography>
        </Toolbar>
      </AppBar>
     <Marquee >
     
      </Marquee>
    </Box>
  );
}