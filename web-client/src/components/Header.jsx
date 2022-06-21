import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
<<<<<<< HEAD:web-client/src/components/Header.jsx
import PersonIcon from '@mui/icons-material/Person';
=======
>>>>>>> feat(DEV-798): added mock web api:src/components/Header.jsx
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Dashboard', path: '/' },
  { name: 'Library Module', path: '/library' },
  { name: 'Dataset Module', path: '/dataset' },
];

function Header() {
  return (
    <AppBar position="static">
      <ToolBar>
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
          XLA
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
<<<<<<< HEAD:web-client/src/components/Header.jsx
<<<<<<< HEAD:web-client/src/components/Header.jsx
              component={Link}
              to={page.path}
=======
              href={page.path}
>>>>>>> feat(DEV-798): Added routing to top nav:src/components/header.jsx
=======
              component={Link}
              to={page.path}
>>>>>>> feat(DEV-798): added mock web api:src/components/Header.jsx
              color="inherit"
              key={page.name}
              xs={{ my: 2, color: 'white', display: 'block' }}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        <Button color="inherit">Login</Button>
        <PersonIcon />
      </ToolBar>
    </AppBar>
  );
}

export default Header;
