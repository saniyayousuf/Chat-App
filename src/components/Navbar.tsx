import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FbLogout } from '../config/Firebase/firebasemethods';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate()

    const Logout = ()=>{
        FbLogout().then((res)=>{
     navigate("/login")
     console.log("work")
        }).catch((err)=>{
console.log(err)
        })
    }
  return (
    <Box sx={{ flexGrow: 1,display:"flex",justifyContent:"space-evenly" }} className="bg-dark">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Instant Chat
          </Typography>
          <Button onClick={Logout} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}