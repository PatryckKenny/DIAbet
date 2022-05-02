import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import RegistroMedicao from "./pages/RegistroMedicao";

ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/RegistroMedicao" component={RegistroMedicao}/>
                    <Route path="/sobre" component={Sobre}/>
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById('root')
);