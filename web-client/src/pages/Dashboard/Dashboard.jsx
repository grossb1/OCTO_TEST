import React, { useContext } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GlobalContext from '../../contexts/GlobalContext';
import Announcement from '../../components/Announcements';
import DynamicDataGrid from '../../components/DynamicDataGrid';
import NewSetMenuButton from '../../components/NewSetMenuButton';
import QueryTemplate from '../../utility/Query';
import columns from './config';

const get = async () => {
  const { data } = await axios.get('http://localhost:5117/allsets');
  return data;
};

function Dashboard() {
  const query = useQuery('allsets', get);
  const { role } = useContext(GlobalContext);

  // setting column header as the field name
  // const columns = [];
  // Object.getOwnPropertyNames(query.data[0])
  //   .map((fName) => columns.push({
  //     field: fName, width: 200,
  //   }));

  // column header is the field name
  // example of manually setting column header

  role.permissions.map((p) => {
    if (p === 'Dashboard Edit') {
      columns.push({
        field: 'creator', headerName: 'Creator', width: 200,
      });
      columns.push({
        field: 'reviewer', headerName: 'Reviewer', width: 200,
      });
    }
    return p;
  });

  const { data } = query;

  const uniqueID = (row) => row.guid;
  const announcement = 'Auto populated with a message about down time if any of the Lib tables used populate it is null or XLA cannot connect to SQL 20 otherwise blank.';

  return (
    <>
      <Container>
        <Box sx={{ display: 'flex' }}>
          <Box>
            <Typography
              variant="h3"
              component="h3"
              sx={{
                textAlign: 'center', color: 'blue', marginTop: 3,
              }}
            >
              WELCOME TO ALEX
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                textAlign: 'center', color: 'lightgrey', marginTop: 2,
              }}
            >
              ALEX is a library engine for creating data definitions and requestion data sets.
            </Typography>
          </Box>
          <Box sx={{ marginLeft: 5 }}>
            <Announcement announcement={announcement} />
          </Box>
        </Box>
      </Container>
      <Box sx={{ marginBottom: 3 }}>
        <NewSetMenuButton />
      </Box>
      <QueryTemplate query={query}>
        <DynamicDataGrid rows={data} columns={columns} uniqueID={uniqueID} />
      </QueryTemplate>
    </>

  );
}

export default Dashboard;
