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
      <div className="App sm:w-7/12 lg:w-5/12 sm:m-auto sm:m-0 screenZero:h-screen screenZero:py-12 sm:h-full px-10 sm:py-12 border-4 bg-gray-50">
        <p className="text-left my-2 text-3xl">Expense Tracker</p>
        <Balance />
        <History />
        <NewTransaction />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
