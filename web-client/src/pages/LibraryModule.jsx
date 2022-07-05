import React from 'react';
import ReactFlowCanvas from '../components/ReactFlowCanvas';

function LibraryModule() {
  const nodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'Test' },
      position: { x: 100, y: 100 },
    },
  ];
  return (
    <>
      <h3>
        XLA2 Library Module
      </h3>
      <div style={{ height: 1028, width: 1000 }}>
        <ReactFlowCanvas nodes={nodes} />
      </div>
    </>
  );
}

export default LibraryModule;
