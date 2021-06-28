import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import { TrashIcon } from '@heroicons/react/solid';

const History = () => {
  const { tracks, setTracks } = useContext(Context);
  const [items, setItems] = useState([]);

  const deleteTrack = (item) => {
    const newTracks = tracks.filter((track) => track !== item);
    setTracks(newTracks);
    window.localStorage.setItem('Tracks', JSON.stringify(newTracks));
  };

  useEffect(() => {
    setItems(JSON.parse(window.localStorage.getItem('Tracks')));
  }, []);

  useEffect(() => {
    if (items) {
      setTracks(items);
    }
  }, [items, setTracks]);

  return (
    <>
      <p className="flex border-b-2 pb-2 my-4">History</p>
      {tracks.length > 0 ? (
        tracks.map((track) => (
          <div
            key={tracks.indexOf(track)}
            className={
              Number(track.value) < 0
                ? 'flex items-center border-r-4 border-red-500 flex flex-row justify-between px-4 py-2 mb-2 text-sm text-gray-700 shadow-md bg-white'
                : Number(track.value) === 0
                ? 'flex items-center border-r-4 border-gray-500 flex flex-row justify-between px-4 py-2 mb-2 text-sm text-gray-700 shadow-md bg-white'
                : 'flex items-center border-r-4 border-green-500 flex flex-row justify-between px-4 py-2 mb-2 text-sm text-gray-700 shadow-md bg-white'
            }
          >
            <p className="w-full text-left">{track.title}</p>
            <p>{track.value}</p>
            <TrashIcon
              className="h-8 pl-10 hover:text-red-500"
              onClick={() => deleteTrack(track)}
            />
          </div>
        ))
      ) : (
        <div className="flex items-center px-4 py-2 mb-2 text-sm text-gray-400 shadow-md bg-white">
          No History Yet
        </div>
      )}
    </>
  );
};

export default History;
