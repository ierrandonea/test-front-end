import React, { useContext } from 'react';
import Payment from '../components/payment';
import { Context } from '../store/appContext';

const Payments = () => {
    const { store, actions } = useContext(Context)
    return (
        <div className="flex-display flex-dir-c card p10 wMax1000 mt10 bcWhite animate__animated animate__fadeIn">
            <h2 className="textsize-1 fs-sbold cBlack">Pagos</h2>
            <div className="flex-display flex-dir-r">
                {
                    !!store.payments &&
                    store.payments.map((payed, index) =>
                        <Payment payment={payed} key={index} />)
                }
            </div>
        </div>
    )
}

export default Payments;