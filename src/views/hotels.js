import React, { useContext } from 'react';
import HotelCard from '../components/hotelCard';
import { Context } from '../store/appContext';

const Hotels = () => {
    const { store, actions } = useContext(Context)
    return (
        <div className="containerCenter animate__animated animate__fadeIn">
            <div className="row flex-dir-r w96Porc flex-wrap ">
                {
                    !!store.hotels &&
                    store.hotels.map((hotel, index) =>
                        <HotelCard hotel={hotel} key={index} />)
                }
            </div>
        </div>
    )
}

export default Hotels;