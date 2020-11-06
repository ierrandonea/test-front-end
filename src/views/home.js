import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Notification from '../components/notification';
import Payment from '../components/payment';
import HotelCard from '../components/hotelCard';

const Home = () => {
    const { store, actions } = useContext(Context)
    return (
        <div className="containerCenter animate__animated animate__fadeIn">
            <div className="row flex-dir-c">
                <div className="card p40 w96Porc gradient">
                    <h4 className="textsize-2 fs-regular cWhite">Bienvenido</h4>
                    <h2 className="textsize-1 fs-sbold cWhite mt10">David Anderson</h2>
                    <hr />
                    <p className="textsize-3 cWhite mt10">is simply dum text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dum text ever since the 1500s, when </p>
                </div>
                <div className="flex-display flex-dir-r card p10 w96Porc mt10 bcWhite flexa-jcsb">
                    <div className="bloque bl mb30 flex-display flex-dir-r">
                        <div className="notif-left ">
                            <ion-icon className="cPurple icoSize3m" style={{ fontSize: '3em' }} name="mail-open-outline"></ion-icon>
                        </div>
                        <div className="notif-right">
                            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Notificaciones</h4>
                            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                        </div>
                    </div>
                    <div className="bloque bl mb30 flex-display flex-dir-r flexa-jcsb">
                        <div className="notif-left ">
                            <ion-icon className="cPurple  icoSize3m" style={{ fontSize: '3em' }} name="bed-outline"></ion-icon>
                        </div>
                        <div className="notif-right">
                            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Hoteles</h4>
                            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                        </div>
                    </div>
                    <div className="bloque bl mb30 flex-display flex-dir-r flexa-jcsb">
                        <div className="notif-left ">
                            <ion-icon className="cPurple icoSize3m" style={{ fontSize: '3em' }} name="card-outline"></ion-icon>
                        </div>
                        <div className="notif-right">
                            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">Pagos recibidos</h4>
                            <h4 className="mt4 textsize-3 fs-regular cBlue pl12em">is simply dum </h4>
                        </div>
                    </div>


                </div>

                <h2 className="ml10px mt10 textsize-1 fs-sbold cBlack">Hoteles Disponibles</h2>

                <div className="row flex-dir-r w96Porc flex-wrap ">
                    {
                        !!store.hotels &&
                        store.hotels.map((hotel, index) =>
                            <HotelCard hotel={hotel} key={index} />)
                    }
                </div>

            </div>

            <div className="sectionRight mb10">
                <h2 className="ml10px textsize-1 fs-sbold cBlack">Notificaciones</h2>
                {
                    !!store.notifications &&
                    store.notifications.map((note, index) =>
                        <Notification notification={note} key={index} />)
                }
            </div>

        </div>
    )
}

export default Home;