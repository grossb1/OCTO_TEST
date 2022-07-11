import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function CodeSetDetails() {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={20}>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item>
            <Paper
              elevation={3}
              sx={{
                background: 'lightgrey',
                padding: 1,
                paddingLeft: 1,
                paddingRight: 3,
                width: 550,
                border: 1,
                borderColor: 'blue',
              }}
            >
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField label="Name:" fullWidth sx={{ borderColor: 'blue' }} size="small" variant="standard" focused InputProps={{ sx: { height: 20, fontSize: 12 } }} />
                <TextField
                  label="Description:"
                  fullWidth
                  sx={{ borderColor: 'blue' }}
                  InputProps={{ sx: { fontSize: 12 } }}
                  multiline
                  maxRows={4}
                  variant="standard"
                  focused
                />
                <TextField label="Active From:" fullWidth sx={{ borderColor: 'blue' }} InputProps={{ sx: { height: 20, fontSize: 12 } }} variant="standard" focused />
                <TextField label="Active Till:" fullWidth sx={{ borderColor: 'blue' }} InputProps={{ sx: { height: 20, fontSize: 12 } }} variant="standard" focused />
                <Typography variant="Body2" component="Body2" sx={{ textAlign: 'left', color: 'blue' }}>Version:</Typography>
                <Typography variant="Body2" component="Body2" sx={{ textAlign: 'left', color: 'grey', paddingRight: 1 }}>0.0</Typography>
                <Typography variant="Body2" component="Body2" sx={{ textAlign: 'left', color: 'blue' }}>Version History:</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              elevation={3}
              sx={{
                background: 'lightgrey',
                padding: 1,
                paddingLeft: 1,
                paddingRight: 3,
                width: 550,
                border: 1,
                borderColor: 'blue',
              }}
            >
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField label="Organization:" fullWidth sx={{ borderColor: 'blue' }} focused />
                <TextField label="Creator:" fullWidth sx={{ borderColor: 'blue' }} size="small" focused />
                <TextField label="Reviewer:" fullWidth sx={{ borderColor: 'blue' }} size="small" focused />
                <TextField label="SME:" fullWidth sx={{ borderColor: 'blue' }} size="small" focused />
                <TextField label="Contact:" fullWidth sx={{ borderColor: 'blue' }} size="small" focused />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CodeSetDetails;
