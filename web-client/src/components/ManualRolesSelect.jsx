import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import GlobalContext from '../contexts/GlobalContext';

function ManualRolesSelect() {
  const { role, setRole } = useContext(GlobalContext);
  const [roles, setRoles] = useState([]);

  const get = async () => {
    await axios.get('http://localhost:5117/roles').then((resp) => {
      setRoles(resp.data);
    });
  };

  useQuery('roles', get);

  const handleChange = (event) => {
    const selectedRoleID = event.target.value;
    setRole(roles.find((r) => r.roleID === selectedRoleID));
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
          value={role.roleID}
          label="Role"
          sx={{ fontSize: 'small' }}
          onChange={(event) => { handleChange(event); }}
        >
          {
          roles
          && roles.map((r) => <MenuItem key={r.roleID} value={r.roleID}>{r.roleName}</MenuItem>)
          }
        </Select>
      </Box>
      <Box sx={{ minWidth: 120, marginLeft: 3, fontSize: 'small' }}>
        <Typography variant="body2" component="h1">
          Permissions:
          { role.permissions.map((p) => <li key={p.permissionID}>{p.permissionName}</li>) }
        </Typography>
      </Box>
    </Box>
  );
}

export default ManualRolesSelect;
