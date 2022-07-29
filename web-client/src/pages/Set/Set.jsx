import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import QueryTemplate from '../../utility/Query';
import SetTitle from '../../components/SetTitle';
import { DetailsProvider } from '../../contexts/DetailsContext';

function Set() {
  const [details, setDetails] = useState();

  useMemo(() => ({
    details, setDetails,
  }), [details]);

  const getSetDetails = async () => {
    await axios.get('http://localhost:5117/setDetails', { params: { guid: 1004 } }).then((resp) => {
      console.log(resp.data);
      setDetails(resp.data);
    });
  };

  const detailsQuery = useQuery('SetDetails', getSetDetails);

  const updateRecord = (updatedDetails) => {
    console.log(`update record to ${JSON.stringify(updatedDetails)}`);
    // update set in database
    setDetails(updatedDetails);
  };

  return (
    <DetailsProvider details={details} updateRecord={updateRecord}>
      <QueryTemplate query={detailsQuery}>
        <SetTitle />
      </QueryTemplate>
    </DetailsProvider>
  );
}

export default Set;
