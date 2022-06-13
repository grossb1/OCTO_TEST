import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Announcement from '../components/Announcements';
import DynamicDataGrid from '../components/DynamicDataGrid';
import QueryTemplate from '../utility/Query';

const get = async () => {
  const { data } = await axios.get('http://localhost:3001/allsets');
  return data;
};

function Dashboard() {
  const query = useQuery('allsets', get);

  if (query.isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (query.error) {
    return (
      <Alert variant="filled" severity="error">ERROR: Please contact system administrators.</Alert>
    );
  }

  // setting column header as the field name
  // const columns = [];
  // Object.getOwnPropertyNames(query.data[0])
  //   .map((fName) => columns.push({
  //     field: fName, width: 150, hideable: false,
  //   }));

  // column header is the field name
  // example of manually setting column header
  const columns = [
    {
      field: 'GUID', headerName: 'GUID', width: 150, hideable: false,
    },
    {
      field: 'setTerm', headerName: 'Set Term', width: 150, hideable: false,
    },
    {
      field: 'setType', headerName: 'Set Type', width: 150, hideable: false,
    },
    {
      field: 'creator', headerName: 'Creator', width: 150, hideable: false,
    },
    {
      field: 'reviewer', headerName: 'Reviewer', width: 150, hideable: false,
    },
    {
      field: 'SME', headerName: 'SME', width: 150, hideable: false,
    },
    {
      field: 'organization', headerName: 'Organization', width: 150, hideable: false,
    },
    {
      field: 'description', headerName: 'Description', width: 200, hideable: false,
    },
    {
      field: 'status', headerName: 'Status', width: 150, hideable: false,
    },
  ];

  const rows = query.data;

  const uniqueID = (row) => row.GUID;
  const announcement = 'Auto populated with a message about down time if any of the Lib tables used populate it is null or XLA cannot connect to SQL 20 otherwise blank.';
  return (
    <>
      <Container>
        <Box sx={{ display: 'flex', marginBottom: 3 }}>
          <Box>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                textAlign: 'center', color: 'blue', marginTop: 3,
              }}
            >
              WELCOME TO XLA
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                textAlign: 'center', color: 'lightgrey', marginTop: 2,
              }}
            >
              XLA is a library engine for creating data definitions and requestion data sets.
            </Typography>
          </Box>
          <Box sx={{ marginLeft: 5 }}>
            <Announcement announcement={announcement} />
          </Box>
        </Box>
      </Container>
      <QueryTemplate query={query}>
        <DynamicDataGrid rows={rows} columns={columns} uniqueID={uniqueID} />
      </QueryTemplate>
    </>

  );
}

export default Dashboard;
