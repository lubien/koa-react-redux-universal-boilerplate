import React from 'react';
import RequireAuth from '../lib/RequireAuth';

const ProtectedPage = () => (
  <div>Inside Protected</div>
);

export default RequireAuth(ProtectedPage);
