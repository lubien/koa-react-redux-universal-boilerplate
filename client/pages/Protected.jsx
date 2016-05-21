import React from 'react';
import requireAuth from '../lib/RequireAuth';

const ProtectedPage = () => (
  <div>Inside Protected</div>
);

export default requireAuth(ProtectedPage);
