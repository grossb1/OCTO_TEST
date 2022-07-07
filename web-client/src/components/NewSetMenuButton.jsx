import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

function NewSetMenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleRedirect(page) {
    setAnchorEl(null);
    alert(`Go to page to add new ${page}`);
  }

  return (
    <>
      <Button
        variant="contained"
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        New
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
        <MenuItem onClick={() => {
          handleRedirect('Vocabulary');
        }}
        >
          Vocabulary

        </MenuItem>
        <MenuItem onClick={() => {
          handleRedirect('Value Set');
        }}
        >
          Value Set

        </MenuItem>
        <MenuItem onClick={() => {
          handleRedirect('Super Set');
        }}
        >
          Super Set

        </MenuItem>
        <MenuItem onClick={() => {
          handleRedirect('Concept');
        }}
        >
          Concept

        </MenuItem>
        <MenuItem onClick={() => {
          handleRedirect('Cohort');
        }}
        >
          Cohort

        </MenuItem>
        <MenuItem onClick={() => {
          handleRedirect('Variable');
        }}
        >
          Variable

        </MenuItem>
      </Menu>

    </>
  );
}

export default NewSetMenuButton;
