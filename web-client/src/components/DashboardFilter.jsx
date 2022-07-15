import React, {
  useContext, useState, useEffect,
} from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import GlobalContext from '../contexts/GlobalContext';

function DashboardFilter({
  valueSets, concepts, setFilteredRows,
}) {
  const [filteredRowsCount, setFilteredRowsCount] = useState(valueSets.length);
  const [typeFilterValue, setTypeFilterValue] = useState('Value Set');
  const [userPreferenceFilterValue, setUserPreferenceFilterValue] = useState('All');

  const filterRows = () => {
    let newRows = [];
    if (typeFilterValue === 'Concept') {
      newRows = [...concepts];
    } else {
      newRows = [...valueSets];
    }

    switch (userPreferenceFilterValue) {
      case 'All':
        setFilteredRows(newRows);
        setFilteredRowsCount(newRows.length);
        break;
      case 'My Items':
        setFilteredRows(newRows);
        setFilteredRowsCount(newRows.length);
        // ***Need to add this filter based on logged in userid***
        // setFilteredRows(newRows
        // .filter((row) => row.creator === 'CB' || row.reviewer === 'CB' || row.sme === 'CB'));
        break;
      case 'Favorites': {
        const rowsFiltered = newRows.filter((row) => row.favorite === true);

        setFilteredRows(rowsFiltered);
        setFilteredRowsCount(rowsFiltered.length);
        break;
      }
      default:
        setFilteredRows(newRows);
        setFilteredRowsCount(newRows.length);
        break;
    }
  };

  const { role } = useContext(GlobalContext);

  useEffect(() => {
    filterRows();
  }, [typeFilterValue, userPreferenceFilterValue]);

  useEffect(() => {
    setFilteredRowsCount(valueSets.length);
  }, [valueSets]);

  let canEdit = false;
  role.permissions.forEach((p) => {
    if (p.permissionName === 'Dashboard Edit') {
      canEdit = true;
    }
  });

  return (
    <Box>
      <FormLabel id="demo-row-radio-buttons-group-label">Filter By:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        defaultValue="Value Set"
      >
        <FormControlLabel value="Value Set" control={<Radio onChange={() => { setTypeFilterValue('Value Set'); }} />} label={`Sets (${valueSets.length})`} />
        <FormControlLabel value="Concept" control={<Radio onChange={() => { setTypeFilterValue('Concept'); }} />} label={`Concepts (${concepts.length})`} />
      </RadioGroup>

      { canEdit && (
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          defaultValue="All"
        >
          <Typography sx={{ marginTop: 1, marginRight: 1 }}>
            (
            {filteredRowsCount}
            )
          </Typography>
          <FormControlLabel value="All" control={<Radio onChange={() => { setUserPreferenceFilterValue('All'); }} />} label="All" />
          <FormControlLabel disabled value="My Items" control={<Radio onChange={() => { setUserPreferenceFilterValue('My Items'); }} />} label="My Items" />
          <FormControlLabel value="Favorites" control={<Radio onChange={() => { setUserPreferenceFilterValue('Favorites'); }} />} label="Favorites" />
        </RadioGroup>
      )}
    </Box>
  );
}

DashboardFilter.propTypes = {
  valueSets: PropTypes.array,
  concepts: PropTypes.array,
  setFilteredRows: PropTypes.func,
};

export default DashboardFilter;
