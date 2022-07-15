import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function MenuButton({ menuButtonName, menuItems, variant }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleRedirect(page) {
    setAnchorEl(null);
    navigate(page);
  }

  return (
    <>
      <Button
        variant={variant}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        { menuButtonName }
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.menuItemName}
            onClick={() => {
              handleRedirect(item.path);
            }}
          >
            { item.menuItemName }

          </MenuItem>
        ))}
      </Menu>

    </>
  );
}

MenuButton.propTypes = {
  menuButtonName: PropTypes.string,
  menuItems: PropTypes.array,
  variant: PropTypes.string,
};
MenuButton.defaultProps = {
  menuButtonName: '',
  menuItems: [{ menuItemName: '', path: '' }],
  variant: '',
};

export default MenuButton;
