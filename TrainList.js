// src/TrainList.js
import React, { useState, useEffect } from 'react';
import { getAllTrains } from './api';
import TrainCard from './TrainCard';

const TrainList = () => {
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      setLoading(true);
      const response = await getAllTrains();
      // Assuming the response.data contains an array of train objects
      setTrains(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching trains:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>All Trains</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {trains.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TrainList;