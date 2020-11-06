import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

const Payment = (payment) => {
    const date = moment(payment.payment.date).format('LL')
    return (
        <div className="notification mb30 mt10">
            <div className="notif-left flex-display flexa-jcsb">
                <h4 className="textsize-3">{date}</h4>
            </div>
            <div className="notif-right">
                <h4 className="mt4 textsize-2 fs-regular cBlue">{payment.payment.price}</h4>
                <h4 className="mt4 textsize-2 fs-regular cBlue">{payment.payment.idReservation}</h4>
                <p className="mt4 textsize-3 cGray">{payment.payment.Payments}</p>
            </div>
        </div>
    )
}

export default Payment;