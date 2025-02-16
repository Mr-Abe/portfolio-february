
import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

const AdminPanel = () => {
  const [token, setToken] = useState<string>('');

  if (!token) {
    return <Login onLogin={setToken} />;
  }

  return <Dashboard token={token} />;
};

export default AdminPanel;
