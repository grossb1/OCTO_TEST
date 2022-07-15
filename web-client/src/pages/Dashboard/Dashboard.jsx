import React, {
  useContext, useMemo, useState,
} from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MaterialReactTable from 'material-react-table';
import GlobalContext from '../../contexts/GlobalContext';
import Announcement from '../../components/Announcements';
import QueryTemplate from '../../utility/Query';
import columns from './config';
import MenuButton from '../../components/MenuButton';
import DashboardFilter from '../../components/DashboardFilter';

function Dashboard() {
  const [valueSets, setValueSets] = useState([]);
  const [concepts, setConcepts] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useMemo(() => ({
    valueSets, setValueSets, concepts, setConcepts,
  }), [valueSets, concepts]);

  // value sets is default when opening page
  const getValueSets = async () => {
    await axios.get('http://localhost:5117/valuesets').then((resp) => {
      const data = resp.data.sort((a, b) => ((a.setTerm > b.setTerm) ? 1 : -1));
      const newRows = [];
      data.forEach((row) => {
        newRows.push({
          datasetType: 'Value Set', ...row,
        });
      });
      setValueSets(newRows);
      setFilteredRows(newRows);
    });
  };

  const getConcepts = async () => {
    await axios.get('http://localhost:5117/concepts').then((resp) => {
      const data = resp.data.sort((a, b) => ((a.setTerm > b.setTerm) ? 1 : -1));
      const newRows = [];
      data.forEach((row) => {
        newRows.push({
          datasetType: 'Concept', ...row,
        });
      });
      setConcepts(newRows);
    });
  };

  const getAnnouncements = async () => {
    await axios.get('http://localhost:5117/announcements').then((resp) => {
      setAnnouncements(resp.data);
    });
  };

  const valueSetsQuery = useQuery('valuesets', getValueSets);
  const conceptsQuery = useQuery('concepts', getConcepts);
  const announcementsQuery = useQuery('announcements', getAnnouncements);

  const { role } = useContext(GlobalContext);

  let canEdit = false;
  role.permissions.forEach((p) => {
    if (p.permissionName === 'Dashboard Edit') {
      canEdit = true;
    }
  });

  const newMenuItems = [
    { menuItemName: 'New Value Set', path: '/valueset' },
    { menuItemName: 'New Concept', path: '/concept' },
  ];

  return (
    <Container>
      <Box sx={{ display: announcements.length > 0 ? 'flex' : '' }}>
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
        <QueryTemplate query={announcementsQuery}>
          { announcements.length > 0 && (
          <Box sx={{ marginLeft: 5 }}>
            <Announcement announcements={announcements} />
          </Box>
          )}
        </QueryTemplate>
      </Box>
      <Box sx={{ display: 'flex', marginBottom: 1 }}>
        <DashboardFilter
          valueSets={valueSets}
          concepts={concepts}
          setFilteredRows={setFilteredRows}
        />
        { canEdit

            && (
            <Box sx={{ marginLeft: 85, marginTop: 3 }}>
              <MenuButton menuButtonName="New" menuItems={newMenuItems} variant="contained" />
            </Box>
            )}
      </Box>

      <QueryTemplate query={[valueSetsQuery, conceptsQuery]}>
        <MaterialReactTable
          columns={columns}
          data={filteredRows}
          initialState={{
            showColumnFilters: false, showGlobalFilter: false, density: 'compact',
          }}
          state={{ columnVisibility: { guid: false, datasetType: false } }}
          enableColumnActions
          enableColumnFilters
          enablePagination={false}
          enableSorting
          enableStickyHeader
          enableToolbarBottom={false}
          enableToolbarTop
          muiTableBodyRowProps={{ hover: true }}
          enableColumnDragging
          enableColumnOrdering
          enableColumnResizing
        />
      </QueryTemplate>
    </Container>

  );
}

export default Dashboard;
