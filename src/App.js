import './App.css';
import React, { useState } from 'react';
import { Context } from './context/Context';
import Balance from './components/Balance';
import History from './components/History';
import NewTransaction from './components/NewTransaction';

function App() {
  const [tracks, setTracks] = useState([]);

  return (
    <Context.Provider value={{ tracks, setTracks }}>
      <div className="App sm:w-5/12 sm:w-1 sm:m-auto sm:mt-5 sm:m-0 px-10 py-6 border-4 bg-gray-50">
        <p className="text-left my-2 text-lg">Expense Tracker</p>
        <Balance />
        <History />
        <NewTransaction />
      </div>
    </Context.Provider>
  );
}

export default App;
