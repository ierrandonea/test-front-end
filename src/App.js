import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Navbar from './components/navbar';

// context provider vvv
import injectContext from './store/appContext';

// components
import Home from './views/home';
import Hotels from './views/hotels';


const App = () => {

    return (
        <>
            <div className="container">
                <BrowserRouter>
                    <Navbar />
                    <section className="wMax1000 panel flex-one pl12em pr12em">
                        <Dashboard />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/hotels" component={Hotels} />
                        </Switch>
                    </section>
                </BrowserRouter>
            </div >
        </>
    );
}

export default injectContext(App);
