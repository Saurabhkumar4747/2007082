// src/TrainCard.js
import React from 'react';

const TrainCard = ({ train }) => {
  const { id, name, departureTime, seatAvailability, prices } = train;

  return (
    <div>
      <h3>{name}</h3>
      <p>Departure Time: {departureTime}</p>
      <p>Seat Availability: {seatAvailability}</p>
      <p>Price (Sleeper): {prices.sleeper}</p>
      <p>Price (AC): {prices.ac}</p>
    </div>
  );
};

export default TrainCard;