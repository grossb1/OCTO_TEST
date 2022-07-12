import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

// const pages = [
//   { name: 'Dashboard', path: '/' },
//   { name: 'Library Module', path: '/library' },
//   { name: 'Dataset Module', path: '/dataset' },
// ];

const pages = [
  { name: 'Permissions', path: '/permissions' },
  { name: 'Compare', path: '/compare' },
  { name: 'About', path: '/about' },
];

function Header() {

  return (
    <AppBar position="static">
      <ToolBar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ALEX
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              component={Link}
              to={page.path}
              color="inherit"
              key={page.name}
              xs={{ color: 'white', display: 'block' }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
        <Button
          component={Link}
          to="/dashboard"
          color="inherit"
        >
          ALEX

        </Button>
        <Button
          component={Link}
          to="/login"
          color="inherit"
        >
          Login

        </Button>
        <PersonIcon />
      </ToolBar>
    </AppBar>
  );
}

export default Header;
