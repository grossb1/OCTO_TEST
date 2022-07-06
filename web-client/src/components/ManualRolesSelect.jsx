import React, { useContext } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import GlobalContext from '../contexts/GlobalContext';

const get = async () => {
  const { data } = await axios.get('http://localhost:3001/roles');
  return data;
};

function ManualRolesSelect() {
  const query = useQuery('roles', get);
  const { role, setRole } = useContext(GlobalContext);

  const roles = query.data;

  const handleChange = (event) => {
    const selectedRoleName = event.target.value;
    setRole(roles.find((r) => r.roleName === selectedRoleName));
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
          value={role.roleName}
          label="Role"
          sx={{ fontSize: 'small' }}
          onChange={(event) => { handleChange(event); }}
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
          {role.permissions.map((p) => <li key={p}>{p}</li>)}
        </Typography>
      </Box>
    </Box>
  );
}

export default ManualRolesSelect;
