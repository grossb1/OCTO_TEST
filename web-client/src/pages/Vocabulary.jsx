import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Vocabulary() {
  return (
    <Paper
      elevation={3}
      sx={{
        background: 'lightgrey',
        padding: 1,
        paddingLeft: 3,
        paddingRight: 3,
        width: 350,
        borderColor: 'blue',
        border: 1,
      }}
    >
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Name:" color="secondary" size="small" focused />
        <TextField
          label="Description:"
          color="secondary"
          size="small"
          multiline
          maxRows={4}
          focused
        />
        <TextField label="Active From:" color="secondary" size="small" focused />
        <TextField label="Active Till:" color="secondary" size="small" focused />
        <TextField label="Version:" color="secondary" size="small" focused />
        <TextField label="Version History:" color="secondary" size="small" focused />
      </Box>
      <Typography variant="h6" component="h6" sx={{ textAlign: 'center', color: 'blue', marginBottom: 1 }}>Announcements</Typography>
      <Typography variant="h6" component="h6" sx={{ textAlign: 'left', color: 'gray' }}>details</Typography>
    </Paper>
  );
}

export default Vocabulary;
