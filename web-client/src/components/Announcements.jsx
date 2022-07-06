import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

function Announcements({ announcement }) {
  return (
    <Paper
      elevation={3}
      sx={{
        background: 'lightgrey',
        padding: 1,
        paddingLeft: 3,
        paddingRight: 3,
        width: 350,
      }}
    >
      <Typography variant="h6" component="h6" sx={{ textAlign: 'center', color: 'blue', marginBottom: 1 }}>Announcements</Typography>
      <Typography variant="h6" component="h6" sx={{ textAlign: 'left', color: 'gray' }}>{ announcement }</Typography>
    </Paper>
  );
}

Announcements.propTypes = {
  announcement: PropTypes.string,
};
Announcements.defaultProps = {
  announcement: '',
};
export default Announcements;
