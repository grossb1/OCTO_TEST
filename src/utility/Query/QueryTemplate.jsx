import React from 'react';
import styled from 'styled-components';
import { Alert, CircularProgress } from '@mui/material';

const SpinContainer = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 30px 50px;
    margin: 20px 0;
`;

function renderError(message) {
  return (
    <Alert severity="error">{message}</Alert>
  );
}

const QueryTemplate = ({ query, children }) => {
  const { isLoading, isError, error } = query;

  const renderLoading = () => (
    <SpinContainer>
      <CircularProgress />
    </SpinContainer>
  );

  if (isLoading) {
    return renderLoading();
  }

  if (isError) {
    return renderError(error.message);
  }

  return children;
};

export default QueryTemplate;
