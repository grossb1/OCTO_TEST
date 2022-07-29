import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FavoriteStar from './FavoriteStar';
import { DetailsContext } from '../contexts/DetailsContext';

function SetTitle() {
  const { details } = useContext(DetailsContext);
  return (
    <Box sx={{ display: 'flex', marginBottom: 1 }}>
      <Box>
        <Typography variant="body1" component="h6" sx={{ textAlign: 'center', color: 'gray' }}>{details.domain}</Typography>
        <Typography variant="h6" component="h6" sx={{ textAlign: 'center', color: 'gray' }}>{details.name}</Typography>
      </Box>
      <FavoriteStar />
    </Box>
  );
}

export default SetTitle;
