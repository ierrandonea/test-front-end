import React, { useContext } from 'react';
import Notification from '../components/notification';
import { Context } from '../store/appContext';

const Notifications = () => {
    const { store, actions } = useContext(Context)
    return (
        <div className="flex-display flex-dir-c card p10 wMax1000 mt10 bcWhite animate__animated animate__fadeIn">
            <h2 className="textsize-1 fs-sbold cBlack">Notificaciones</h2>
            <div className="flex-display flex-dir-r">
                {
                    !!store.notifications &&
                    store.notifications.map((note, index) =>
                        <Notification notification={note} key={index} />)
                }
            </div>
        </div>
    )
}

export default Notifications;