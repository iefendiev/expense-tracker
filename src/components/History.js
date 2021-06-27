import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { TrashIcon } from '@heroicons/react/solid';

const History = () => {
  const { tracks, setTracks } = useContext(Context);

  const deleteTrack = (item) => {
    const newTracks = tracks.filter((track) => track !== item);
    setTracks(newTracks);
  };

  return (
    <>
      <p className="flex border-b-2 pb-2 my-4">History</p>
      {tracks.map((track) => (
        <div
          key={tracks.indexOf(track)}
          className={
            track.value < 0
              ? 'flex items-center border-r-4 border-red-500 flex flex-row justify-between px-4 py-2 mb-2 text-sm text-gray-700 shadow-md bg-white'
              : 'flex items-center border-r-4 border-green-500 flex flex-row justify-between px-4 py-2 mb-2 text-sm text-gray-700 shadow-md bg-white'
          }
        >
          <TrashIcon
            className="h-8 pr-4 hover:text-red-500"
            onClick={() => deleteTrack(track)}
          />
          <p className="w-full text-left">{track.title}</p>
          <p>{track.value}</p>
        </div>
      ))}
    </>
  );
};

export default History;
