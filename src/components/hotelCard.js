import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const HotelCard = (hotel) => {
    const {actions} = useContext(Context);
    return (
        <div className={`card row flex-dir-c flexa-jcsb flexa-ai p10 img imghotel-${hotel.hotel.id} wMin150 hMin150 m2px mt10 bcWhite`}>
            <h2 className="textsize-1 fs-sbold cWhite">{hotel.hotel.name}</h2>
            <a className="btn bcPurple" onClick={() => actions.setModal(hotel.hotel.id)}>Reservar</a>
        </div>
    )
}

export default HotelCard;