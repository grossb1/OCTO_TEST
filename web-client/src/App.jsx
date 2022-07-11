import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';
import DatasetModule from './pages/DatasetModule';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import LibraryModule from './pages/LibraryModule';
import CodeSet from './pages/CodeSet';
import ManualRolesSelect from './components/ManualRolesSelect';
import GlobalContext from './contexts/GlobalContext';

function App() {
  const [role, setRole] = useState({
    roleName: 'Guest',
    permissions: ['Dashboard ReadOnly', 'Library Module Read Only'],
  });

  const value = useMemo(() => ({
    role, setRole,
  }), [role]);

  return (
    <GlobalContext.Provider value={value}>
      <Header />
      <Container maxWidth="xl" sx={{ marginY: 5 }}>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/dataset" element={<DatasetModule />} />
          <Route path="/library" element={<LibraryModule />} />
          <Route path="/codeset" element={<CodeSet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <ManualRolesSelect />
    </GlobalContext.Provider>
  );
}

export default App;
