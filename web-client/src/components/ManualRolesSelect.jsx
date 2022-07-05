import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

function ManualRolesSelect() {
  const [role, setRole] = React.useState('');
  const [permissions, setPermissions] = React.useState([]);

  const handleChange = (event) => {
    setRole(event.target.value);
    const selectedRole = event.target.value;
    console.log(selectedRole);
    if (selectedRole === 'Guest') {
      setPermissions(['Dashboard ReadOnly', 'Library Module Read Only']);
    }
    if (selectedRole === 'Librarian') {
      setPermissions(['Dashboard Edit']);
    }
    if (selectedRole === 'Analyst') {
      setPermissions(['Dashboard Edit']);
    }
    if (selectedRole === 'Contributor') {
      setPermissions(['Dashboard Edit']);
    }
    if (selectedRole === 'SME') {
      setPermissions(['Dashboard Edit']);
    }
  };

  return (
    <Box sx={{ border: '5px solid red', margin: 3 }}>
      <Typography variant="h5" component="h1">
        FOR DEVELOPMENT USE ONLY
      </Typography>
      <Box sx={{ marginLeft: 3, fontSize: 'small' }}>
        <InputLabel sx={{ fontSize: 'small' }} id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Role"
          sx={{ fontSize: 'small' }}
          onChange={handleChange}
        >
          <MenuItem value="Guest">Guest</MenuItem>
          <MenuItem value="Librarian">Librarian</MenuItem>
          <MenuItem value="Analyst">Analyst</MenuItem>
          <MenuItem value="Contributor">Contributor</MenuItem>
          <MenuItem value="SME">Subject Matter Expert</MenuItem>
        </Select>
      </Box>
      <Box sx={{ minWidth: 120, marginLeft: 3, fontSize: 'small' }}>
        <Typography variant="body2" component="h1">
          Permissions:
          {permissions.map((p) => <li key={p}>{p}</li>)}
        </Typography>
      </Box>
    </Box>
  );
}

export default ManualRolesSelect;
