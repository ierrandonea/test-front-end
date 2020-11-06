import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [state, setState] = useState(false);
    return (
        <div className="cardTop bcWhite flex-display flex-dir-r flexa-jcsb">
            <div>
                <h2>Dashboard</h2>
            </div>
            <div className="flex-display flex-dir-r">
                {
                    state == true &&
                    <input type="text" name="search" id="find" className="search-bar mr2em animate__animated animate__fadeIn" />
                }
                <span className="mr2em" href="#" onClick={() => { state == false ? setState(true) : setState(false) }}><ion-icon className="icoGray" name="search-outline"></ion-icon></span>
                <Link className="mr2em" to="/notifications"><ion-icon className="icoGray" name="mail-unread-outline"></ion-icon></Link>
                <Link className="mr2em" href="#"><ion-icon className="icoGray" name="settings-outline"></ion-icon></Link>
            </div>
        </div>
    )
}

export default Dashboard;