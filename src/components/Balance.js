import React, { useContext } from 'react';
import { Context } from '../context/Context';

const Balance = () => {
  const { tracks } = useContext(Context);

  const calculateExpenses = () => {
    let expenses = [];
    tracks.forEach((track) => {
      if (Number(track.value) < 0) {
        expenses.push(Number(track.value));
      }
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return expenses.reduce(reducer, 0);
  };

  const calculateIncomes = () => {
    let incomes = [];
    tracks.forEach((track) => {
      if (Number(track.value) > 0) {
        incomes.push(Number(track.value));
      }
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return incomes.reduce(reducer, 0);
  };

  const calculateBalance = () => calculateExpenses() + calculateIncomes();

  return (
    <>
      <div className="flex flex-col">
        <p className="text-left mt-2 uppercase">Your Balance</p>
        <p className="text-3xl text-left font-semibold mb-2">
          ${calculateBalance()}
        </p>
      </div>
      <div className="flex justify-around my-2 shadow-md p-2 divide-x-2 bg-white">
        <div className="flex-1 flex-col py-2 px-3">
          <p>Income</p>
          <p className="text-green-500 font-medium ">+ ${calculateIncomes()}</p>
        </div>
        <div className="flex-1 flex-col py-2 px-3">
          <p>Expense</p>
          <p className="text-red-500 font-medium">- ${-calculateExpenses()}</p>
        </div>
      </div>
    </>
  );
};

export default Balance;
