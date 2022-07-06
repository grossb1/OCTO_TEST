import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';
import DatasetModule from './pages/DatasetModule';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import LibraryModule from './pages/LibraryModule';
import Vocabulary from './pages/Vocabulary';
import ManualRolesSelect from './components/ManualRolesSelect';
import GlobalContext from './contexts/GlobalContext';

function App() {
  const [role, setRole] = useState({
    roleName: 'Guest',
    permissions: ['Dashboard ReadOnly', 'Library Module Read Only'],
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GlobalContext.Provider value={{ role, setRole }}>
      <Header />
      <Container maxWidth="xl" sx={{ marginY: 5 }}>
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/dataset" element={<DatasetModule />} />
          <Route path="/library" element={<LibraryModule />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
<<<<<<< HEAD:web-client/src/App.jsx
<<<<<<< HEAD:web-client/src/App.jsx
<<<<<<< HEAD:web-client/src/App.jsx
      <ManualRolesSelect />
<<<<<<< HEAD:web-client/src/App.jsx
=======
>>>>>>> feat(DEV-789): added DynamicDataGrid component to Dashboard:src/App.jsx
=======
>>>>>>> feat(DEV-789): added DynamicDataGrid component to Dashboard:src/App.jsx
=======
      <ManualRolesSelect />
>>>>>>> feat(DEV-798): clean up ManualRolesSelect component:src/App.jsx
    </>
=======
    </GlobalContext.Provider>
>>>>>>> feat(DEV-985): added vocabulary page and context:src/App.jsx
  );
}

export default App;
