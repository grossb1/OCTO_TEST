import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToolBar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import GlobalContext from '../contexts/GlobalContext';

function Header() {
  const { role } = useContext(GlobalContext);

  const mainMenuItems = [];
  const aboutMenuItems = [
    { menuItemName: 'About ALEX', path: '/aboutalex' },
    { menuItemName: 'FAQ', path: '/faq' },
    { menuItemName: 'User Guide', path: '/userguide' },
  ];
  role.permissions.map((p) => {
    if (p.permissionID === 3) {
      mainMenuItems.push({ menuItemName: 'Permissions', path: '/permissions' });
      mainMenuItems.push({ menuItemName: 'Compare', path: '/compare' });
    }
    return p;
  });

  return (
    <AppBar position="static">
      <ToolBar>
        <IconButton
          component={Link}
          to="/dashboard"
          size="large"
          edge="end"
          color="inherit"
        >
          <HomeIcon />
        </IconButton>
        <Button
          component={Link}
          to="/dashboard"
          color="inherit"
        >
          ALEX

        </Button>
        <MenuButton menuButtonName="About" menuItems={aboutMenuItems} variant="" />
        <Box sx={{ flexGrow: 1 }}>
          {mainMenuItems.map((item) => (
            <Button
              component={Link}
              to={item.path}
              color="inherit"
              key={item.menuItemName}
              xs={{ color: 'white', display: 'block' }}
            >
              {item.menuItemName}
            </Button>
          ))}
        </Box>
        <Typography>
          Welcome
          {' '}
          {role.roleName}
          !
        </Typography>
      </ToolBar>
    </AppBar>
  );
}

export default Header;
