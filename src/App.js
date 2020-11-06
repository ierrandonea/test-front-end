import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import HotelModal from './components/hotelModal';
import Navbar from './components/navbar';

// context provider vvv
import injectContext from './store/appContext';

// components
import Home from './views/home';
import Hotels from './views/hotels';
import Notifications from './views/notifications';
import Payments from './views/payments';


const App = () => {

    return (
        <>
            <div className="container">
                <BrowserRouter>
                    <Navbar />
                    <HotelModal />
                    <section className="wMax1000 panel flex-one pl12em pr12em">
                        <Dashboard />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/hotels" component={Hotels} />
                            <Route exact path="/notifications" component={Notifications} />
                            <Route exact path="/payments" component={Payments} />
                        </Switch>
                    </section>
                </BrowserRouter>
            </div >
        </>
    );
}

export default injectContext(App);
