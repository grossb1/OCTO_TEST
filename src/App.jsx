import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';
import DatasetModule from './pages/DatasetModule';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import LibraryModule from './pages/LibraryModule';
import ManualRolesSelect from './components/ManualRolesSelect';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ marginY: 5 }}>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/dataset" element={<DatasetModule />} />
          <Route path="/library" element={<LibraryModule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <ManualRolesSelect />
    </>
  );
}

export default App;
