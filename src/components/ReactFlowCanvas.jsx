import React from 'react';
import ReactFlow, { MiniMap, Background, Controls } from 'react-flow-renderer';
import PropTypes from 'prop-types';

function ReactFlowCanvas({
  nodes, edges, onNodesChange, onEdgesChange, onConnect,
}) {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Background style={{ backgroundColor: 'white' }} color="orange" />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}

export default ReactFlowCanvas;

ReactFlowCanvas.propTypes = {
  nodes: PropTypes.array,
  edges: PropTypes.array,
  onNodesChange: PropTypes.func,
  onEdgesChange: PropTypes.func,
  onConnect: PropTypes.func,
};
