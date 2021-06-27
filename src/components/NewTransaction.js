import React, { useContext, useState } from 'react';
import { Context } from '../context/Context';

const NewTransaction = () => {
  const { tracks, setTracks } = useContext(Context);
  const [value, setValue] = useState([]);
  const [title, setTitle] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    setTracks([...tracks, { title, value }]);
    setValue('');
    setTitle('');
  };

  return (
    <>
      <p className="flex border-b-2 pb-2 my-4">Add New Transaction</p>
      <p className="flex text-sm">Title</p>
      <form>
        <div>
          <input
            className="flex justify-between w-full py-2 px-4 my-4 text-sm shadow-md text-gray-900 bg-white"
            placeholder="Market"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
        </div>
        <div className="flex flex-col">
          <p className="flex text-sm">Amount</p>
          <p className="flex text-sm text-left">
            (negative: expense; positive: income)
          </p>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex justify-between py-2 px-4 my-4 text-sm shadow-md text-gray-900 bg-white"
            placeholder="300"
            type="number"
            required
          ></input>
        </div>
        <button
          type="submit"
          onClick={(e) => handleClick(e)}
          className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 my-4 px-4 w-full text-xs"
        >
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default NewTransaction;
