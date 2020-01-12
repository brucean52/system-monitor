import React from 'react';
import SystemCard from './components/system-card';
import ProcessesDashboard from './components/processes-dashboard';
import 'react-vis/dist/style.css';
import './App.css';

const App = () => {
  return (
    <div>
      <SystemCard />
      <ProcessesDashboard />
    </div>
  );
}

export default App;
