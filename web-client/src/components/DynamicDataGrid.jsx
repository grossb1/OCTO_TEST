import * as React from 'react';
import PropTypes from 'prop-types';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';

function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight
      || element.scrollWidth > element.clientWidth
  );
}

const GridCellExpand = React.memo((props) => {
  const { width, value } = props;
  const wrapper = React.useRef(null);
  const cellDiv = React.useRef(null);
  const cellValue = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showFullCell, setShowFullCell] = React.useState(false);
  const [showPopper, setShowPopper] = React.useState(false);

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  const handleMouseLeave = () => {
    setShowFullCell(false);
  };

  React.useEffect(() => {
    if (!showFullCell) {
      return undefined;
    }

    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        setShowFullCell(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);
  return (
    <Box
      ref={wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        alignItems: 'center',
        lineHeight: '24px',
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
      }}
    >
      <Box
        ref={cellDiv}
        sx={{
          height: '100%',
          width,
          display: 'block',
          position: 'absolute',
          top: 0,
        }}
      />
      <Box
        ref={cellValue}
        sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {value}
      </Box>
      {showPopper && (
      <Popper
        open={showFullCell && anchorEl !== null}
        anchorEl={anchorEl}
        style={{ width, marginLeft: -17 }}
      >
        <Paper
          elevation={1}
          style={{ minHeight: wrapper.current.offsetHeight - 3 }}
        >
          <Typography variant="body2" style={{ padding: 8 }}>
            {value}
          </Typography>
        </Paper>
      </Popper>
      )}
    </Box>
  );
});

GridCellExpand.propTypes = {
  value: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

const renderCellExpand = ({ value, colDef: { computedWidth } }) => <GridCellExpand value={value.toString() || ''} width={computedWidth} />;

renderCellExpand.propTypes = {
  /**
     * The column of the row that the current cell belongs to.
     */
  colDef: PropTypes.object.isRequired,
  /**
     * The cell value, but if the column has valueGetter, use getValue.
     */
  value: PropTypes.string,
};

function DynamicDataGrid({ rows, columns, uniqueID }) {
  const columnsStyled = [];
  columns.map((col) => columnsStyled.push({
    headerClassName: 'super-app-theme--header', renderCell: renderCellExpand, ...col,
  }));

  return (
    <Box
      sx={{
        '& .super-app-theme--header': {
          backgroundColor: 'rgba(211,211,211, 0.55)',
        },
      }}
    >
      <div style={{ height: 400 }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <DataGrid
            getRowId={uniqueID}
            rows={rows}
            columns={columnsStyled}
            disableSelectionOnClick
            getRowHeight={() => 'auto'}
            sx={{
              [`& .${gridClasses.cell}`]: {
                py: 1,
              },
            }}
            onCellClick={(params) => {
              alert(`Go to page for for row ${JSON.stringify(params.row)}`);
            }}
          />
        </div>
      </div>
    </Box>
  );
}

DynamicDataGrid.propTypes = {
  rows: PropTypes.any,
  columns: PropTypes.any,
  uniqueID: PropTypes.any,
};
DynamicDataGrid.defaultProps = {
  rows: [],
  columns: [],
  uniqueID: 0,
};
export default DynamicDataGrid;
