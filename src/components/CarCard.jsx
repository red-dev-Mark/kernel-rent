import React from 'react';

const CarCard = ({ cardInfo }) => {
  const BUTTON_TEXTS = {
    DESCRIPTION: 'Rental Car',
    RENT: 'Rent Now',
    DETAIL: 'Show more Car',
  };

  const {
    name,
    type,
    isLiked,
    image,
    fuelCapacity,
    seats,
    gearType,
    originalPrice,
    salePrice,
  } = cardInfo;

  return (
    <div>
      <h1>{name}</h1>
      <p>{type}</p>
      <div>{isLiked}</div>
      <img src={image} alt="렌터카 이미지" />
      <p>{fuelCapacity}</p>
      <p>{gearType}</p>
      <p>{seats}</p>
      <p>{originalPrice}</p>
      <p>{salePrice}</p>
    </div>
  );
};

export default CarCard;
