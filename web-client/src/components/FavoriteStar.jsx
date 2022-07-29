import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import IconButton from '@mui/material/IconButton';
import { DetailsContext } from '../contexts/DetailsContext';

function FavoriteStar() {
  const { details, updateRecord } = useContext(DetailsContext);
  const [favorite, setFavorite] = useState(details.favorite);

  const saveFavorite = () => {
    setFavorite(!favorite);
    updateRecord(
      { ...details, favorite: !favorite },
    );
  };

  return (
    <Box sx={{ marginLeft: 1 }}>
      {favorite
          && (
          <IconButton onClick={saveFavorite}>
            <StarIcon style={{ color: 'orange' }} />
          </IconButton>
          )}
      {!favorite
          && (
          <IconButton onClick={saveFavorite}>
            <StarBorderIcon style={{ color: 'orange' }} />
          </IconButton>
          )}
    </Box>
  );
}

export default FavoriteStar;
