import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
 
  return (
  
      <AppBar>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}> 
         
        <IconButton  size="large"
            edge="end"
            aria-label="menu"
            sx={{ mr: 2 }}>
              <MenuIcon />
        </IconButton>
        <ColorModeSwitch ></ColorModeSwitch>
      
        </Toolbar>
     
      </AppBar>
     
  )
}

export default NavBar
