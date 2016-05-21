import React from 'react';
import requireAuth from '../lib/require-auth';

const ProtectedPage = () => (
  <div>Inside Protected</div>
);

export default requireAuth(ProtectedPage);
