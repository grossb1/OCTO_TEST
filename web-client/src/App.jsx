import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';
import DatasetModule from './pages/DatasetModule';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import About from './pages/About';
import LibraryModule from './pages/LibraryModule';
import CodeSet from './pages/CodeSet';
import Permissions from './pages/Permissions';
import Compare from './pages/Compare';
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
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/codeset" element={<CodeSet />} />
          <Route path="/dataset" element={<DatasetModule />} />
          <Route path="/library" element={<LibraryModule />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <ManualRolesSelect />
    </GlobalContext.Provider>
  );
}

export default App;
