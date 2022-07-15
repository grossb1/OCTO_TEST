import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function LoginLogoutButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Button
        component={Link}
        to="/login"
        color="inherit"
        onClick={setIsLoggedIn(!isLoggedIn)}
      >
        Login

      </Button>
      <IconButton
        component={Link}
        to="/login"
        size="large"
        edge="end"
        color="inherit"
        onClick={setIsLoggedIn(!isLoggedIn)}
      >
        <AccountCircle />
      </IconButton>

    </>
  );
}

export default LoginLogoutButton;
