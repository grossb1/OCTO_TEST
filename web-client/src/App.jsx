import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';
import DatasetModule from './pages/DatasetModule/DatasetModule';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import About from './pages/About';
import ValueSet from './pages/ValueSet';
import Concept from './pages/Concept';
import UserGuide from './pages/UserGuide/UserGuide';
import FAQ from './pages/FAQ/FAQ';
import LibraryModule from './pages/LibraryModule/LibraryModule';
import Set from './pages/Set/Set';
import Permissions from './pages/Permissions/Permissions';
import Compare from './pages/Compare/Compare';
import ManualRolesSelect from './components/ManualRolesSelect';
import GlobalContext from './contexts/GlobalContext';

function App() {
  const [role, setRole] = useState({
    roleID: 1, roleName: 'Guest', permissions: [{ permissionID: 1, permissionName: 'Dashboard Read' }, { permissionID: 2, permissionName: 'Set Read' }],
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
          <Route path="/aboutalex" exact element={<About />} />
          <Route path="/set" element={<Set />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/concept" element={<Concept />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/dataset" element={<DatasetModule />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/library" element={<LibraryModule />} />
          <Route path="/permissions" element={<Permissions />} />
          <Route path="/userguide" element={<UserGuide />} />
          <Route path="/valueset" element={<ValueSet />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <ManualRolesSelect />
    </GlobalContext.Provider>
  );
}

export default App;
