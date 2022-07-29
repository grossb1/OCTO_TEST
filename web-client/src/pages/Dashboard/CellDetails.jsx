import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

function CellDetails({ cell }) {
  const navigate = useNavigate();

  function handleRedirect(_cell) {
    // console.log(_cell.row.original.guid);
    if (_cell.row.original.setType === 'Concept') {
      navigate('/concept');
    } else if (_cell.row.original.setType === 'ValueSet' || _cell.row.original.setType === 'SuperSet') {
      navigate('/set');
    } else { navigate('/dashboard'); }
  }

  return (
    <Box
      sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      onClick={() => { handleRedirect(cell); }}
    >
      { cell.getValue() }
    </Box>
  );
}

CellDetails.propTypes = {
  cell: PropTypes.any,
};

export default CellDetails;
