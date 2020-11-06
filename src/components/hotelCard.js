import React from 'react';

const HotelCard = (hotel) => {
    return (
        <div className="card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-1 wMin150 hMin150 m2px mt10 bcWhite">
            <h2 className="textsize-1 fs-sbold cWhite">{hotel.hotel.name}</h2>
            <a href="#" className="btn bcPurple">Reservar</a>
        </div>
    )
}

export default HotelCard;