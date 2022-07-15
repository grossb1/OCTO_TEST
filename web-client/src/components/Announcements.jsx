import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

function Announcements({ announcements }) {
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
      {announcements.map((announcement) => (
        <Typography variant="h6" component="h6" key={announcement.announcementID} sx={{ textAlign: 'left', color: 'gray' }}>{ announcement.message }</Typography>
      ))}
    </Paper>
  );
}

Announcements.propTypes = {
  announcements: PropTypes.array,
};
Announcements.defaultProps = {
  announcements: [],
};
export default Announcements;
