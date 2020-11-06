import React from 'react';
import moment from 'moment';
import 'moment/locale/es';

const Notification = (notification) => {
    const date = moment(notification.notification.date).format('LL')
    return (
        <div className="notification mb30 mt10">
            <div className="notif-left flex-display flexa-jcsb">

                {/* <ion-icon className="icoGray" name="mail-open-outline"></ion-icon> */}
                <h4 className="textsize-3">{date}</h4>
            </div>
            <div className="notif-right">
                <h4 className="mt4 textsize-2 fs-regular cBlue">{notification.notification.fromUser.name}</h4>
                <p className="mt4 textsize-3 cGray">{notification.notification.content}</p>
            </div>
        </div>
    )
}

export default Notification;