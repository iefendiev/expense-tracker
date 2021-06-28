import './App.css';
import React, { useState } from 'react';
import { Context } from './context/Context';
import Balance from './components/Balance';
import History from './components/History';
import NewTransaction from './components/NewTransaction';
import Footer from './components/Footer';

function App() {
  const [tracks, setTracks] = useState([]);

  return (
    <Context.Provider value={{ tracks, setTracks }}>
      <div className="App sm:w-7/12 lg:w-5/12 sm:m-auto sm:m-0 screenZero:h-full screenZero:py-12 sm:h-full md:my-10 px-10  border-4 bg-gray-50">
        <p className="text-left mb-8 text-3xl">Expense Tracker</p>
        <Balance />
        <History />
        <NewTransaction />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
