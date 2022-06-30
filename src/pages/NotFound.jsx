import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p>
        <Link to="/">Back to Dashboard</Link>
      </p>
    </div>
  );
}

export default NotFound;
